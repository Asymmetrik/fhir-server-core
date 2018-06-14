const { route_args, common_args, write_args } = require('../common.arguments');
const { read_scopes, write_scopes } = require('../common.scopes');
const { CONFIG_KEYS, VERSIONS } = require('../../../constants');
const resource_specific_args = require('./basic.arguments');
const controller = require('./basic.controller');

let write_only_scopes = write_scopes('Basic');
let read_only_scopes = read_scopes('Basic');

let common_args_array = Object.getOwnPropertyNames(common_args)
	.map((arg_name) => common_args[arg_name]);

let resource_args_array = Object.getOwnPropertyNames(resource_specific_args)
	.map((arg_name) => Object.assign({ versions: VERSIONS.STU3 }, resource_specific_args[arg_name]));

const resource_all_arguments = [
	route_args.VERSION,	...common_args_array, ...resource_args_array,
];

let routes = [
	{
		type: 'get',
		path: '/:version/basic',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getBasic
	},
	{
		type: 'post',
		path: '/:version/basic/_search',
		args: resource_all_arguments,
		scopes: read_only_scopes,
		controller: controller.getBasic
	},
	{
		type: 'get',
		path: '/:version/basic/:id',
		args: [
			route_args.VERSION,
			route_args.ID
		],
		scopes: read_only_scopes,
		controller: controller.getBasicById
	},
	{
		type: 'post',
		path: '/:version/basic',
		args: [
			route_args.VERSION,
			write_args.RESOURCE_ID,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.createBasic
	},
	{
		type: 'put',
		path: '/:version/basic/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.updateBasic
	},
	{
		type: 'delete',
		path: '/:version/basic/:id',
		args: [
			route_args.ID,
			route_args.VERSION,
			write_args.RESOURCE_BODY
		],
		scopes: write_only_scopes,
		controller: controller.deleteBasic
	}
];

/**
 * @name exports
 * @summary Basic config
 */
module.exports = {
	routeOptions: {
		profileKey: CONFIG_KEYS.BASIC
	},
	routes
};