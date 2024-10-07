export default ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  return {
    connection: {
      client: isProduction ? 'postgres' : 'sqlite',
      connection: isProduction
        ? {
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'strapi'),
            user: env('DATABASE_USERNAME', 'strapi'),
            password: env('DATABASE_PASSWORD', 'strapi'),
            ssl: env.bool('DATABASE_SSL', false),
          }
        : {
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
      useNullAsDefault: !isProduction,
    },
  };
};
