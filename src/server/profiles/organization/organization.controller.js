/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.search = function search ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific organization & bundle
		let Organization = require(resolveFromVersion(base, 'uscore/Organization'));

		return service.search(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, base, Organization, results, {
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
		// Get a version specific organization
		let Organization = require(resolveFromVersion(base, 'uscore/Organization'));

		return service.searchById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, base, Organization, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for creating a organization
*/
module.exports.create = function create ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific organization
		let Organization = require(resolveFromVersion(base, 'uscore/Organization'));
		// Validate the resource type before creating it
		if (Organization.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Organization.__resourceType}', received '${resource_body.resourceType}'`,
				base
			));
		}
		// Create a new organization resource and pass it to the service
		let organization = new Organization(resource_body);
		let args = { id: resource_id, resource: organization };
		// Pass any new information to the underlying service
		return service.create(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, base, Organization.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for updating/creating a organization. If the organization does not exist, it should be updated
*/
module.exports.update = function update ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific organization
		let Organization = require(resolveFromVersion(base, 'uscore/Organization'));
		// Validate the resource type before creating it
		if (Organization.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Organization.__resourceType}', received '${resource_body.resourceType}'`,
				base
			));
		}
		// Create a new organization resource and pass it to the service
		let organization = new Organization(resource_body);
		let args = { id, resource: organization };
		// Pass any new information to the underlying service
		return service.update(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, base, Organization.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for deleting an organization resource.
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
