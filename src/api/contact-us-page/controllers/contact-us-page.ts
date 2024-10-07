/**
 * contact-us-page controller
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::contact-us-page.contact-us-page', ({ strapi }) => ({
    async find(ctx: Context) {
        const entity = await strapi.entityService.findMany('api::contact-us-page.contact-us-page', {
            populate: {
                banner: {
                    populate: {
                        bgImage: true,
                    },
                },
                formContent: {
                    populate: {
                        formFields: {
                            populate: {
                                options: true,
                            },
                        },
                    },
                },
                faqSection: {
                    populate: {
                        bgImage: true,
                        items: true,
                    },
                },
                getInTouchSection: {
                    populate: {
                        bgImage: true,
                    },
                },
                contactSection: {
                    populate: {
                        icon: true,
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
            // Simplify banner images
            if (data.banner?.bgImage) {
                data.banner.bgImage = extractImageUrl(data.banner.bgImage);
            }

            // Simplify faqSection images
            if (data.faqSection?.bgImage) {
                data.faqSection.bgImage = extractImageUrl(data.faqSection.bgImage);
            }
            //   if (data.faqSection?.items) {
            //     data.faqSection.items = data.faqSection.items.map((item: any) => {
            //       return item;  // No images to simplify, but returning the sanitized item.
            //     });
            //   }

            // Simplify getInTouchSection images
            if (data.getInTouchSection?.bgImage) {
                data.getInTouchSection.bgImage = extractImageUrl(data.getInTouchSection.bgImage);
            }

            // Simplify contactSection images
            if (data.contactSection) {
                data.contactSection = data.contactSection.map((contact: any) => {
                    contact.icon = extractImageUrl(contact.icon);
                    return contact
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
