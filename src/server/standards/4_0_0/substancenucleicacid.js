/**
 * @name exports
 * @summary SubstanceNucleicAcid Class
 */
module.exports = class SubstanceNucleicAcid {
	constructor(opts) {
		// Create an object to store all props
		Object.defineProperty(this, '__data', { value: {} });

		// Define getters and setters as enumerable

		Object.defineProperty(this, '_id', {
			enumerable: true,
			get: () => this.__data._id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._id = new Element(value);
			},
		});

		Object.defineProperty(this, 'id', {
			enumerable: true,
			get: () => this.__data.id,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.id = value;
			},
		});

		Object.defineProperty(this, 'meta', {
			enumerable: true,
			get: () => this.__data.meta,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Meta = require('./meta.js');
				this.__data.meta = new Meta(value);
			},
		});

		Object.defineProperty(this, '_implicitRules', {
			enumerable: true,
			get: () => this.__data._implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._implicitRules = new Element(value);
			},
		});

		Object.defineProperty(this, 'implicitRules', {
			enumerable: true,
			get: () => this.__data.implicitRules,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.implicitRules = value;
			},
		});

		Object.defineProperty(this, '_language', {
			enumerable: true,
			get: () => this.__data._language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._language = new Element(value);
			},
		});

		Object.defineProperty(this, 'language', {
			enumerable: true,
			get: () => this.__data.language,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.language = value;
			},
		});

		Object.defineProperty(this, 'text', {
			enumerable: true,
			get: () => this.__data.text,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Narrative = require('./narrative.js');
				this.__data.text = new Narrative(value);
			},
		});

		Object.defineProperty(this, 'contained', {
			enumerable: true,
			get: () => this.__data.contained,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.contained = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'extension', {
			enumerable: true,
			get: () => this.__data.extension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.extension = Array.isArray(value) ? value.map(v => new Extension(v)) : [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'modifierExtension', {
			enumerable: true,
			get: () => this.__data.modifierExtension,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Extension = require('./extension.js');
				this.__data.modifierExtension = Array.isArray(value)
					? value.map(v => new Extension(v))
					: [new Extension(value)];
			},
		});

		Object.defineProperty(this, 'sequenceType', {
			enumerable: true,
			get: () => this.__data.sequenceType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.sequenceType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, '_numberOfSubunits', {
			enumerable: true,
			get: () => this.__data._numberOfSubunits,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._numberOfSubunits = new Element(value);
			},
		});

		Object.defineProperty(this, 'numberOfSubunits', {
			enumerable: true,
			get: () => this.__data.numberOfSubunits,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.numberOfSubunits = value;
			},
		});

		Object.defineProperty(this, '_areaOfHybridisation', {
			enumerable: true,
			get: () => this.__data._areaOfHybridisation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._areaOfHybridisation = new Element(value);
			},
		});

		Object.defineProperty(this, 'areaOfHybridisation', {
			enumerable: true,
			get: () => this.__data.areaOfHybridisation,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.areaOfHybridisation = value;
			},
		});

		Object.defineProperty(this, 'oligoNucleotideType', {
			enumerable: true,
			get: () => this.__data.oligoNucleotideType,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.oligoNucleotideType = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'subunit', {
			enumerable: true,
			get: () => this.__data.subunit,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let SubstanceNucleicAcidSubunit = require('./substancenucleicacidsubunit.js');
				this.__data.subunit = Array.isArray(value)
					? value.map(v => new SubstanceNucleicAcidSubunit(v))
					: [new SubstanceNucleicAcidSubunit(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'SubstanceNucleicAcid',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'SubstanceNucleicAcid';
	}

	toJSON() {
		return {
			resourceType: this.resourceType,
			_id: this._id && this._id.toJSON(),
			id: this.id,
			meta: this.meta && this.meta.toJSON(),
			_implicitRules: this._implicitRules && this._implicitRules.toJSON(),
			implicitRules: this.implicitRules,
			_language: this._language && this._language.toJSON(),
			language: this.language,
			text: this.text && this.text.toJSON(),
			contained: this.contained,
			extension: this.extension && this.extension.map(v => v.toJSON()),
			modifierExtension: this.modifierExtension && this.modifierExtension.map(v => v.toJSON()),
			sequenceType: this.sequenceType && this.sequenceType.toJSON(),
			_numberOfSubunits: this._numberOfSubunits && this._numberOfSubunits.toJSON(),
			numberOfSubunits: this.numberOfSubunits,
			_areaOfHybridisation: this._areaOfHybridisation && this._areaOfHybridisation.toJSON(),
			areaOfHybridisation: this.areaOfHybridisation,
			oligoNucleotideType: this.oligoNucleotideType && this.oligoNucleotideType.toJSON(),
			subunit: this.subunit && this.subunit.map(v => v.toJSON()),
		};
	}
};
