'use strict';

/**
 * mem router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::ord.ord')

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
      path: "/orders/details",
      config: {
        auth: false
      },
      handler: 'api::ord.custom.details',
    },
  ];

// @ts-ignore
module.exports = customRouter(defaultRouter, myExtraRoutes);
