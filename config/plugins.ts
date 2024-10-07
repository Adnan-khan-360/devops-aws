module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '10d',
      },
    },
  },
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', 'smtp.gmail.com'),
      port: env('SMTP_PORT', 587),
      secure: true,
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
    },
    settings: {
      defaultFrom: env('SMTP_USERNAME'),
    },
  },
  upload: {
    config: {
      provider: env('STORAGE_PROVIDER'),
      providerOptions: {
        authType: env("STORAGE_AUTH_TYPE", "default"),
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_SECRET_KEY"),//either account key or sas token is enough to make authentication
        //sasToken: env("STORAGE_ACCOUNT_SAS_TOKEN"),
        serviceBaseURL: env("STORAGE_URL"), // optional
        containerName: env("STORAGE_CONTAINER_NAME"),
        defaultPath: "assets",
        //cdnBaseURL: env("STORAGE_CDN_URL"), // optional
        //defaultCacheControl: env("STORAGE_CACHE_CONTROL"), // optional
        //removeCN: env("REMOVE_CONTAINER_NAME"), // optional, if you want to remove container name from the URL
      },
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
});
