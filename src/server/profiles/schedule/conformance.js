const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./schedule.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'schedule',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Schedule = require(resolveFromVersion(base, 'base/Schedule'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Schedule.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/schedule.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};
