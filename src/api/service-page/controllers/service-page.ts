/**
 * service-page controller
 */

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::service-page.service-page', ({ strapi }) => ({
    async find(ctx: Context) {
        const entity = await strapi.entityService.findMany('api::service-page.service-page', {
            populate: {
                mainBanner: {
                    populate: {
                        bgMedia: true,
                    },
                },
                industries: {
                    populate: {
                        tabs: {
                            populate: {
                                imageUrl: true,
                                items: true,
                            }
                        },
                    },
                },
                ourServices: {
                    populate: {
                        items: {
                            populate: {
                                imageUrl: true,
                                subItems: {
                                    populate: {
                                        icon: true,
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
            // Simplify mainBanner image
            if (data.mainBanner?.bgMedia) {
                data.mainBanner.bgMedia = extractImageUrl(data.mainBanner.bgMedia);
            }

            // Simplify industries images
            if (data.industries?.tabs) {
                data.industries.tabs = data.industries.tabs.map((tab: any) => {
                    if (tab?.imageUrl) {
                        tab.imageUrl = extractImageUrl(tab.imageUrl);
                    }
                    return tab;
                });
            }

            // Simplify ourServices images
            if (data.ourServices?.items) {
                data.ourServices.items = data.ourServices.items.map((item: any) => {
                    item.imageUrl = extractImageUrl(item.imageUrl);
                    if (item?.subItems) {
                        item.subItems = item.subItems.map((subItem: any) => {
                            subItem.icon = extractImageUrl(subItem.icon);
                            return subItem;
                        });
                    }
                    return item;
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
