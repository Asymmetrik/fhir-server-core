/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getLocation = function getLocation ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific location
		let Location = require(resolveFromVersion(version, 'uscore/Location'));

		return service.getLocation(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Location, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getLocationById = function getLocationById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific location
		let Location = require(resolveFromVersion(version, 'uscore/Location'));

		return service.getLocationById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, Location, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a location
*/
module.exports.createLocation = function createLocation ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific location
		let Location = require(resolveFromVersion(version, 'uscore/Location'));
		// Validate the resource type before creating it
		if (Location.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Location.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new location resource and pass it to the service
		let location = new Location(resource_body);
		let args = { id: resource_id, resource: location };
		// Pass any new information to the underlying service
		return service.createLocation(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Location.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a location. If the location does not exist, it should be updated
*/
module.exports.updateLocation = function updateLocation ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific location
		let Location = require(resolveFromVersion(version, 'uscore/Location'));
		// Validate the resource type before creating it
		if (Location.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Location.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new location resource and pass it to the service
		let location = new Location(resource_body);
		let args = { id, resource: location };
		// Pass any new information to the underlying service
		return service.updateLocation(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Location.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting a location resource.
*/
module.exports.deleteLocation = function deleteLocation ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteLocation(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
