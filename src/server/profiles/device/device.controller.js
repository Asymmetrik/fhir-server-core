/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.search = function search ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific device
		let Device = require(resolveFromVersion(base, 'uscore/Device'));

		return service.search(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, base, Device, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};


};


module.exports.searchById = function searchById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific device
		let Device = require(resolveFromVersion(base, 'uscore/Device'));

		return service.searchById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, base, Device, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for creating a device
*/
module.exports.create = function create ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific device
		let Device = require(resolveFromVersion(base, 'uscore/Device'));
		// Validate the resource type before creating it
		if (Device.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Device.__resourceType}', received '${resource_body.resourceType}'`,
				base
			));
		}
		// Create a new device resource and pass it to the service
		let device = new Device(resource_body);
		let args = { id: resource_id, resource: device };
		// Pass any new information to the underlying service
		return service.create(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, base, Device.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for updating/creating a device. If the device does not exist, it should be updated
*/
module.exports.update = function update ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific device
		let Device = require(resolveFromVersion(base, 'uscore/Device'));
		// Validate the resource type before creating it
		if (Device.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Device.__resourceType}', received '${resource_body.resourceType}'`,
				base
			));
		}
		// Create a new device resource and pass it to the service
		let device = new Device(resource_body);
		let args = { id, resource: device };
		// Pass any new information to the underlying service
		return service.update(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, base, Device.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for deleting a device resource.
*/
module.exports.remove = function remove ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;

		return service.remove(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, base, err);
			});
	};
};

/**
* @description Controller for getting the history of a Device resource.
*/
module.exports.history = function history ({ profile, logger }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific Device
		let Device = require(resolveFromVersion(base, 'uscore/Device'));

		return service.history(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, base, Device, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for getting the history of a Device resource by ID.
*/
module.exports.historyById = function historyById ({ profile, logger }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific Device
		let Device = require(resolveFromVersion(base, 'uscore/Device'));

		return service.historyById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, base, Device, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

