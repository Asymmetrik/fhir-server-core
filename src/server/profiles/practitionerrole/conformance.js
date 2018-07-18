const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./practitionerrole.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'practitionerrole',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let PractitionerRole = require(resolveFromVersion(base, 'base/PractitionerRole'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: PractitionerRole.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/practitionerrole.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};
