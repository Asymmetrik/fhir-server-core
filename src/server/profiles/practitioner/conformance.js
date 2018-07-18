const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./practitioner.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'practitioner',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let Practitioner = require(resolveFromVersion(base, 'uscore/Practitioner'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: Practitioner.__resourceType,
			profile: {
				reference: 'http://www.hl7.org/fhir/us/core/StructureDefinition-us-core-practitioner.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};
