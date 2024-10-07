/**
 * header controller
 */

/**
 * header controller
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::header.header', ({ strapi }) => ({
  async find(ctx: Context) {
    const entity = await strapi.entityService.findMany('api::header.header', {
      populate: {
        logo: {
          populate: {
            imageUrl: true,
          },
        },
        actions: true,
        actionButton: true,
      },
    });

    // Function to extract only the URL from media objects
    const extractImageUrl = (imageObj: any) => {
      if (imageObj?.url) {
        return imageObj.url;
      }
      return null;
    };

    // Sanitize the header data
    const sanitizeData = (data: any) => {
      // Simplify logo image URL
      if (data.logo) {
        data.logo.imageUrl = extractImageUrl(data.logo.imageUrl);
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
