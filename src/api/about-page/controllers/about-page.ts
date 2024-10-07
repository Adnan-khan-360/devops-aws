/**
 * about-page controller
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::about-page.about-page', ({ strapi }) => ({
  async find(ctx: Context) {
    const entity = await strapi.entityService.findMany('api::about-page.about-page', {
      populate: {
        mainBanner: {
          populate: {
            bgImage: true,
          },
        },
        visionMission: {
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
        ourStory: {
          populate: {
            bgImage: true,
          },
        },
        storyImages: {
          populate: {
            bgImage: true,
            imageUrlOne: true,
            imageUrlTwo: true,
            imageUrlThree: true,
            items: {
              populate: {
                icon: true,
              },
            },
          },
        },
        ourTeammates: {
          populate: {
            bgImage: true,
            items: {
              populate: {
                socials: {
                  populate: {
                    logoUrl: true,
                  },
                },
              },
            },
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
      // Simplify mainBanner images
      if (data.mainBanner?.bgImage) {
        data.mainBanner.bgImage = extractImageUrl(data.mainBanner.bgImage);
      }

      // Simplify visionMission images
      if (data.visionMission?.imageUrl) {
        data.visionMission.imageUrl = extractImageUrl(data.visionMission.imageUrl);
      }
      if (data.visionMission?.bgImage) {
        data.visionMission.bgImage = extractImageUrl(data.visionMission.bgImage);
      }
      if (data.visionMission?.tabs) {
        data.visionMission.tabs = data.visionMission.tabs.map((tab: any) => {
          if (tab?.items) {
            tab.items = tab.items.map((item: any) => {
              item.imageUrl = extractImageUrl(item.imageUrl);
              return item;
            });
          }
          return tab;
        });
      }

      // Simplify ourStory images
      if (data.ourStory?.bgImage) {
        data.ourStory.bgImage = extractImageUrl(data.ourStory.bgImage);
      }

      // Simplify storyImages images
      if (data.storyImages?.bgImage) {
        data.storyImages.bgImage = extractImageUrl(data.storyImages.bgImage);
      }
      if (data.storyImages?.imageUrlOne) {
        data.storyImages.imageUrlOne = extractImageUrl(data.storyImages.imageUrlOne);
      }
      if (data.storyImages?.imageUrlTwo) {
        data.storyImages.imageUrlTwo = extractImageUrl(data.storyImages.imageUrlTwo);
      }
      if (data.storyImages?.imageUrlThree) {
        data.storyImages.imageUrlThree = extractImageUrl(data.storyImages.imageUrlThree);
      }
      if (data.storyImages?.items) {
        data.storyImages.items = data.storyImages.items.map((item: any) => {
          item.icon = extractImageUrl(item.icon);
          return item;
        });
      }

      // Simplify ourTeammates images
      if (data.ourTeammates?.bgImage) {
        data.ourTeammates.bgImage = extractImageUrl(data.ourTeammates.bgImage);
      }
      if (data.ourTeammates?.items) {
        data.ourTeammates.items = data.ourTeammates.items.map((teammate: any) => {
          if (teammate?.socials) {
            teammate.socials = teammate.socials.map((social: any) => {
              social.logoUrl = extractImageUrl(social.logoUrl);
              return social;
            });
          }
          return teammate;
        });
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
