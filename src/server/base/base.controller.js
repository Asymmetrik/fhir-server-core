const service = require('./base.service.js');

/**
 * @name exports
 * @summary Base controller
 */
module.exports.batch = () => {
	return (req, res, next) => {
		return service
			.batch(req, res)
			.then(result => res.status(200).json(result))
			.catch(err => next(err));
	};
};
