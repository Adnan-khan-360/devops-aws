/**
 * life-at-sirius-digitech-page controller
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::life-at-sirius-digitech-page.life-at-sirius-digitech-page', ({ strapi }) => ({
    async find(ctx: Context) {
        const entity = await strapi.entityService.findMany('api::life-at-sirius-digitech-page.life-at-sirius-digitech-page', {
            populate: {
                teamSlider: {
                    populate: {
                        imageUrl: true,
                    },
                },
                mainSlider:  {
                    populate: {
                        imageUrl: true,
                    },
                },
                jobProfiles: {
                    populate: {
                        jobs: true,
                    },
                },
                applicationSteps: {
                    populate: {
                        links: true,
                        steps: {
                            populate: {
                                icon: true,
                            },
                        },
                    },
                },
                values: {
                    populate: {
                        imageUrl:true,
                        items:  {
                            populate: {
                                icon: true,
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

        // Function to sanitize media fields in the data
        const sanitizeData = (data: any) => {
            // Sanitize media in teamSlider
            if (data.teamSlider) {
                data.teamSlider = data.teamSlider.map((slide: any) => {
                    slide.imageUrl = extractImageUrl(slide.imageUrl);
                    return slide;
                });
            }

            // Sanitize media in mainSlider
            if (data.mainSlider) {
                data.mainSlider = data.mainSlider.map((slide: any) => {
                    slide.imageUrl = extractImageUrl(slide.imageUrl);
                    return slide;
                });
            }

            // Sanitize media in applicationSteps -> steps
            if (data.applicationSteps?.steps) {
                data.applicationSteps.steps = data.applicationSteps.steps.map((step: any) => {
                    step.icon = extractImageUrl(step.icon);
                    return step;
                });
            }

            // Sanitize media in values -> items
            if (data.values?.items) {
                data.values.items = data.values.items.map((item: any) => {
                    item.icon = extractImageUrl(item.icon);
                    return item;
                });
            }

            // Sanitize media in values -> imageUrl
            if (data.values?.imageUrl) {
                data.values.imageUrl = extractImageUrl(data.values.imageUrl);
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
    }
}));