const handler = require('@asymmetrik/fhir-response-util');

/**
 * @function search
 * @param {Function} service
 * @return Promise
 */
module.exports.search = function search(service) {
	return (req, res, next) => {
		return service
			.search(req.sanitized_args, { req })
			.then((bundle) => handler.read(req, res, bundle))
			.catch(next);
	};
};

/**
 * @function searchById
 * @param {Function} service
 * @return Promise
 */
module.exports.searchById = function searchById(service) {
	return (req, res, next) => {
		return service
			.searchById(req.sanitized_args, { req })
			.then((resource) => handler.readOne(req, res, resource))
			.catch(next);
	};
};

/**
 * @function searchByVersionId
 * @param {Function} service
 * @return Promise
 */
module.exports.searchByVersionId = function searchByVersionId(service) {
	return (req, res, next) => {
		return service
			.searchByVersionId(req.sanitized_args, { req })
			.then((resource) => handler.readOne(req, res, resource))
			.catch(next);
	};
};

/**
 * @function create
 * @param {Function} service
 * @return Promise
 */
module.exports.create = function create(service) {
	let options = { type: 'CatalogEntry' };
	return (req, res, next) => {
		return service
			.create(req.sanitized_args, { req })
			.then((json) => handler.create(req, res, json, options))
			.catch(next);
	};
};

/**
 * @function update
 * @param {Function} service
 * @return Promise
 */
module.exports.update = function update(service) {
	let options = { type: 'CatalogEntry' };
	return (req, res, next) => {
		return service
			.update(req.sanitized_args, { req })
			.then((json) => handler.update(req, res, json, options))
			.catch(next);
	};
};

/**
 * @function remove
 * @param {Function} service
 * @return Promise
 */
module.exports.remove = function remove(service) {
	return (req, res, next) => {
		return service
			.remove(req.sanitized_args, { req })
			.then((json) => handler.remove(req, res, json))
			.catch(next);
	};
};

/**
 * @function patch
 * @param {Function} service
 * @return Promise
 */
module.exports.patch = function patch(service) {
	let options = { type: 'CatalogEntry' };
	return (req, res, next) => {
		return service
			.patch(req.sanitized_args, { req })
			.then((json) => handler.update(req, res, json, options))
			.catch(next);
	};
};

/**
 * @function history
 * @param {Function} service
 * @return Promise
 */
module.exports.history = function history(service) {
	return (req, res, next) => {
		return service
			.history(req.sanitized_args, { req })
			.then((bundle) => handler.history(req, res, bundle))
			.catch(next);
	};
};

/**
 * @function historyById
 * @param {Function} service
 * @return Promise
 */
module.exports.historyById = function historyById(service) {
	return (req, res, next) => {
		return service
			.historyById(req.sanitized_args, { req })
			.then((bundle) => handler.history(req, res, bundle))
			.catch(next);
	};
};
