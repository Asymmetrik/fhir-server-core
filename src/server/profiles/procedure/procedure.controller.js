/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.getProcedure = function getProcedure ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific procedure & bundle
		let Procedure = require(resolveFromVersion(version, 'uscore/Procedure'));

		return service.getProcedure(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, version, Procedure, results, {
					resourceUrl: config.auth.resourceServer
				})
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};


};


module.exports.getProcedureById = function getProcedureById ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;
		// Get a version specific procedure
		let Procedure = require(resolveFromVersion(version, 'uscore/Procedure'));

		return service.getProcedureById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, version, Procedure, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for creating a procedure
*/
module.exports.createProcedure = function createProcedure ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific procedure
		let Procedure = require(resolveFromVersion(version, 'uscore/Procedure'));
		// Validate the resource type before creating it
		if (Procedure.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Procedure.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new procedure resource and pass it to the service
		let procedure = new Procedure(resource_body);
		let args = { id: resource_id, resource: procedure };
		// Pass any new information to the underlying service
		return service.createProcedure(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, version, Procedure.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for updating/creating a procedure. If the procedure does not exist, it should be updated
*/
module.exports.updateProcedure = function updateProcedure ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific procedure
		let Procedure = require(resolveFromVersion(version, 'uscore/Procedure'));
		// Validate the resource type before creating it
		if (Procedure.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Procedure.__resourceType}', received '${resource_body.resourceType}'`,
				version
			));
		}
		// Create a new procedure resource and pass it to the service
		let procedure = new Procedure(resource_body);
		let args = { id, resource: procedure };
		// Pass any new information to the underlying service
		return service.updateProcedure(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, version, Procedure.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, version));
			});
	};
};

/**
* @description Controller for deleting a procedure resource.
*/
module.exports.deleteProcedure = function deleteProcedure ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { version } = req.sanitized_args;

		return service.deleteProcedure(req.sanitized_args, logger)
			.then(() => responseUtils.handleDeleteResponse(res))
			.catch((err = {}) => {
				// Log the error
				logger.error(err);
				// Pass the error back
				responseUtils.handleDeleteRejection(res, next, version, err);
			});
	};
};
