const { generateSearchParamsForConformance } = require('../../utils/conformance.utils');
const { resolveFromVersion } = require('../../utils/resolve.utils');
const { routes } = require('./supplydelivery.config');

/**
 * @name exports
 * @summary Conformance statement
 */
module.exports = {
	profile: 'supplydelivery',
	resource: (base, count) => {
		let searchParams = generateSearchParamsForConformance(routes, base);
		let SupplyDelivery = require(resolveFromVersion(base, 'base/SupplyDelivery'));
		// Return our conformance statement
		return {
			extension: [{
				url: 'https://www.hl7.org/fhir/search.html#count',
				// This will be resolved dynamically by the service methods
				valueDecimal: count
			}],
			type: SupplyDelivery.__resourceType,
			profile: {
				reference: 'http://hl7.org/fhir/supplydelivery.html'
			},
			conditionalDelete: 'not-supported',
			searchParam: searchParams
		};
	}
};
