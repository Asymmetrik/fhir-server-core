const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./chargeitem.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'chargeitem',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let ChargeItem = require(resolveFromVersion(base, 'base/ChargeItem'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: ChargeItem.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/chargeitem.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};
