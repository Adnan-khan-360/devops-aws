/**
 * footer controller
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::footer.footer', ({ strapi }) => ({
  async find(ctx: Context) {
    const entity = await strapi.entityService.findMany('api::footer.footer', {
      populate: {
        logo: {
          populate: {
            imageUrl: true,
          },
        },
        socials: {
          populate: {
            logoUrl: true,
          },
        },
      },
    });

    // Function to extract only the URL from media objects
    const extractImageUrl = (imageObj: any) => {
      if (imageObj.url) {
        return imageObj.url;
      }
      return null;
    };

    // Sanitize the footer data
    const sanitizeData = (data: any) => {
      // Simplify logo image URL
      if (data.logo && data.logo.imageUrl) {
        data.logo.imageUrl = extractImageUrl(data.logo.imageUrl);
      }

      // Simplify socials logoUrl image
      if (data.socials) {
        data.socials = data.socials.map((social: any) => {
          if (social.logoUrl) {
            social.logoUrl = extractImageUrl(social.logoUrl);
          }
          return social;
        });
      }

      return data;
    };

    // Handle both single object and array
    let sanitizedEntity;

    if (Array.isArray(entity)) {
      sanitizedEntity = entity.map(sanitizeData);
    } else {
      sanitizedEntity = sanitizeData(entity);
    }

    return sanitizedEntity;
  },
}));
