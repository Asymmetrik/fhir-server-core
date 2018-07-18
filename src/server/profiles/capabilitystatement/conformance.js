const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./capabilitystatement.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'capabilitystatement',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let CapabilityStatement = require(resolveFromVersion(base, 'base/CapabilityStatement'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: CapabilityStatement.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/capabilitystatement.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};
