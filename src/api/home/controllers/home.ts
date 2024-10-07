/**
 * home controller
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::home.home', ({ strapi }) => ({
  async find(ctx: Context) {
    const entity = await strapi.entityService.findMany('api::home.home', {
      populate: {
        heroBanner: {
          populate: {
            bannerActions: {
              populate: {
                logoUrl: true,
                imageUrl: true,
              },
            },
          },
        },
        whoWeAre: {
          populate: {
            imageUrl: true,
            bgImage: true,
            tabs: {
              populate: {
                items: {
                  populate: {
                    imageUrl: true,
                  },
                },
              },
            },
          },
        },
        ourServices: {
          populate: {
            bgImage: true,
            action: true,
            items: true,
          },
        },
        entities: {
          populate: {
            bgImage: true,
            actions: {
              populate: {
                bgImage: true,
              },
            },
          },
        },
        ourLocations: {
          populate: {
            bgImage: true,
            imageUrl: true,
          },
        },
      },
    });

    // Function to extract only the URL from media objects
    const extractImageUrl = (imageObj: any) => {
      if (imageObj?.url) {
        return imageObj.url;
      }
      return null;
    };

    // Handle both single object and array
    const sanitizeData = (data: any) => {
      // Simplify heroBanner images
      if (data.heroBanner?.bannerActions) {
        data.heroBanner.bannerActions = data.heroBanner.bannerActions.map((action: any) => {
          action.imageUrl = extractImageUrl(action.imageUrl);
          action.logoUrl = extractImageUrl(action.logoUrl);
          return action;
        });
      }

      // Simplify whoWeAre images
      if (data.whoWeAre?.imageUrl) {
        data.whoWeAre.imageUrl = extractImageUrl(data.whoWeAre.imageUrl);
      }
      // Simplify whoWeAre images
      if (data.whoWeAre?.bgImage) {
        data.whoWeAre.bgImage = extractImageUrl(data.whoWeAre.bgImage);
      }
      if (data.whoWeAre?.tabs) {
        data.whoWeAre.tabs = data.whoWeAre.tabs.map((tab: any) => {
          if (tab?.items) {
            tab.items = tab.items.map((item: any) => {
              item.imageUrl = extractImageUrl(item.imageUrl);
              return item;
            });
          }
          return tab;
        });
      }

      // Simplify ourServices images
      if (data.ourServices?.bgImage) {
        data.ourServices.bgImage = extractImageUrl(data.ourServices.bgImage);
      }
      if (data.ourServices?.items) {
        data.ourServices.items = data.ourServices.items.map((item: any) => {
          return item;  // No images to simplify, but keeping it consistent.
        });
      }

      // Simplify entities images
      if (data.entities?.bgImage) {
        data.entities.bgImage = extractImageUrl(data.entities.bgImage);
      }
      if (data.entities?.actions) {
        data.entities.actions = data.entities.actions.map((action: any) => {
          action.bgImage = extractImageUrl(action.bgImage);
          return action;
        });
      }

      // Simplify ourLocations images
      if (data.ourLocations?.bgImage) {
        data.ourLocations.bgImage = extractImageUrl(data.ourLocations.bgImage);
      }
      if (data.ourLocations?.imageUrl) {
        data.ourLocations.imageUrl = extractImageUrl(data.ourLocations.imageUrl);
      }

      return data;
    };

    let sanitizedEntity;

    if (Array.isArray(entity)) {
      sanitizedEntity = entity.map(sanitizeData);
    } else {
      sanitizedEntity = sanitizeData(entity);
    }

    return sanitizedEntity;
  },
}));
