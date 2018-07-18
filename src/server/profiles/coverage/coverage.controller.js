/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "app" }] */
const { resolveFromVersion } = require('../../utils/resolve.utils');
const responseUtils = require('../../utils/response.utils');
const errors = require('../../utils/error.utils');

module.exports.search = function search ({ profile, logger, config, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific resource
		let Coverage = require(resolveFromVersion(base, 'base/Coverage'));

		return service.search(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, base, Coverage, results, {
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
		// Get a version specific resource
		let Coverage = require(resolveFromVersion(base, 'base/Coverage'));

		return service.searchById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleSingleReadResponse(res, next, base, Coverage, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
 * @description Controller for creating Coverage
 */
module.exports.create = function create ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, resource_id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let Coverage = require(resolveFromVersion(base, 'base/Coverage'));
		// Validate the resource type before creating it
		if (Coverage.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Coverage.__resourceType}', received '${resource_body.resourceType}'`,
				base
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new Coverage(resource_body);
		let args = { id: resource_id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.create(args, logger)
			.then((results) =>
				responseUtils.handleCreateResponse(res, base, Coverage.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
 * @description Controller for updating/creating Coverage. If the Coverage does not exist, it should be updated
 */
module.exports.update = function update ({ profile, logger, app }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base, id, resource_body = {}} = req.sanitized_args;
		// Get a version specific resource
		let Coverage = require(resolveFromVersion(base, 'base/Coverage'));
		// Validate the resource type before creating it
		if (Coverage.__resourceType !== resource_body.resourceType) {
			return next(errors.invalidParameter(
				`'resourceType' expected to have value of '${Coverage.__resourceType}', received '${resource_body.resourceType}'`,
				base
			));
		}
		// Create a new resource and pass it to the service
		let new_resource = new Coverage(resource_body);
		let args = { id, resource: new_resource };
		// Pass any new information to the underlying service
		return service.update(args, logger)
			.then((results) =>
				responseUtils.handleUpdateResponse(res, base, Coverage.__resourceType, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
 * @description Controller for deleting an Coverage.
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
* @description Controller for getting the history of a Coverage resource.
*/
module.exports.history = function history ({ profile, logger }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific Coverage
		let Coverage = require(resolveFromVersion(base, 'base/Coverage'));

		return service.history(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, base, Coverage, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

/**
* @description Controller for getting the history of a Coverage resource by ID.
*/
module.exports.historyById = function historyById ({ profile, logger }) {
	let { serviceModule: service } = profile;

	return (req, res, next) => {
		let { base } = req.sanitized_args;
		// Get a version specific Coverage
		let Coverage = require(resolveFromVersion(base, 'base/Coverage'));

		return service.historyById(req.sanitized_args, logger)
			.then((results) =>
				responseUtils.handleBundleReadResponse( res, base, Coverage, results)
			)
			.catch((err) => {
				logger.error(err);
				next(errors.internal(err.message, base));
			});
	};
};

