'use strict';

/**
 * mem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mem.mem');
