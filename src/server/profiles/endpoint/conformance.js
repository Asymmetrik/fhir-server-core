const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./endpoint.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'endpoint',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Endpoint = require(resolveFromVersion(base, 'base/Endpoint'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Endpoint.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/endpoint.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};
