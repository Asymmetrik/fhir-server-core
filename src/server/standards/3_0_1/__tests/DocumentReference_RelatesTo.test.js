const DocumentReference_RelatesTo = require('../DocumentReference_RelatesTo');

describe('DocumentReference_RelatesTo Resource Test', () => {

	test('should not throw when instantiating', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DocumentReference_RelatesTo();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

	test('should have static __resourceType matching class name', () => {
		expect(DocumentReference_RelatesTo.__resourceType).toBe('DocumentReference_RelatesTo');
	});


	test('should not throw when calling toJSON on an instance', () => {
		/* eslint-disable no-unused-vars */
		function create () {
			let instance = new DocumentReference_RelatesTo();
			let json = instance.toJSON();
		}

		expect(create).not.toThrow();
		/* eslint-enable no-unused-vars */
	});

});