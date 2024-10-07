export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::security',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net`,,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            `https://${process.env.STORAGE_ACCOUNT}.blob.core.windows.net`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

process.env.STRAPI_TELEMETRY_DISABLED = 'true';