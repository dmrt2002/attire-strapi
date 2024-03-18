const strapi = require('@strapi/strapi');
strapi({
  distDir: './build', // <--- this is important
  autoReload: false,
  serveAdminPanel: true,
}).start();
