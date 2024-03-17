'use strict';

/**
 * ord service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ord.ord');
