const controller = require('./base.controller.js');

let route = {
        type: 'post',
        path: '/:base_version/',
        corsOptions: {
                methods: ['POST'],
        },
        args: [],
        controller: controller.batch
};

/**
 * @name exports
 * @summary Base config
 */
module.exports = {
        route,
};
