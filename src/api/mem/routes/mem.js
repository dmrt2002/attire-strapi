'use strict';

/**
 * mem router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::mem.mem')

const customRouter = (innerRouter, extraRoutes = []) => {
    let routes;
    return {
      get prefix() {
        return innerRouter.prefix;
      },
      get routes() {
        if (!routes) routes = innerRouter.routes.concat(extraRoutes);
        return routes;
      },
    };
};

const myExtraRoutes = [
    {
      method: "POST",
      path: "/auth",
      config: {
        auth: false
      },
      handler: 'api::mem.auth.login',
    },
  ];

// @ts-ignore
module.exports = customRouter(defaultRouter, myExtraRoutes);
