/**
 * @name exports
 * @summary Communication Class
 */
module.exports = class Communication {
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

		Object.defineProperty(this, 'identifier', {
			enumerable: true,
			get: () => this.__data.identifier,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Identifier = require('./identifier.js');
				this.__data.identifier = Array.isArray(value) ? value.map(v => new Identifier(v)) : [new Identifier(value)];
			},
		});

		Object.defineProperty(this, '_instantiatesCanonical', {
			enumerable: true,
			get: () => this.__data._instantiatesCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instantiatesCanonical = new Element(value);
			},
		});

		Object.defineProperty(this, 'instantiatesCanonical', {
			enumerable: true,
			get: () => this.__data.instantiatesCanonical,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instantiatesCanonical = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, '_instantiatesUri', {
			enumerable: true,
			get: () => this.__data._instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._instantiatesUri = new Element(value);
			},
		});

		Object.defineProperty(this, 'instantiatesUri', {
			enumerable: true,
			get: () => this.__data.instantiatesUri,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.instantiatesUri = Array.isArray(value) ? value.map(v => v) : [value];
			},
		});

		Object.defineProperty(this, 'basedOn', {
			enumerable: true,
			get: () => this.__data.basedOn,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.basedOn = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'partOf', {
			enumerable: true,
			get: () => this.__data.partOf,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.partOf = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'inResponseTo', {
			enumerable: true,
			get: () => this.__data.inResponseTo,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.inResponseTo = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, '_status', {
			enumerable: true,
			get: () => this.__data._status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._status = new Element(value);
			},
		});

		Object.defineProperty(this, 'status', {
			enumerable: true,
			get: () => this.__data.status,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.status = value;
			},
		});

		Object.defineProperty(this, 'statusReason', {
			enumerable: true,
			get: () => this.__data.statusReason,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.statusReason = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'category', {
			enumerable: true,
			get: () => this.__data.category,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.category = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, '_priority', {
			enumerable: true,
			get: () => this.__data._priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._priority = new Element(value);
			},
		});

		Object.defineProperty(this, 'priority', {
			enumerable: true,
			get: () => this.__data.priority,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.priority = value;
			},
		});

		Object.defineProperty(this, 'medium', {
			enumerable: true,
			get: () => this.__data.medium,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.medium = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'subject', {
			enumerable: true,
			get: () => this.__data.subject,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.subject = new Reference(value);
			},
		});

		Object.defineProperty(this, 'topic', {
			enumerable: true,
			get: () => this.__data.topic,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.topic = new CodeableConcept(value);
			},
		});

		Object.defineProperty(this, 'about', {
			enumerable: true,
			get: () => this.__data.about,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.about = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'encounter', {
			enumerable: true,
			get: () => this.__data.encounter,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.encounter = new Reference(value);
			},
		});

		Object.defineProperty(this, '_sent', {
			enumerable: true,
			get: () => this.__data._sent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._sent = new Element(value);
			},
		});

		Object.defineProperty(this, 'sent', {
			enumerable: true,
			get: () => this.__data.sent,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.sent = value;
			},
		});

		Object.defineProperty(this, '_received', {
			enumerable: true,
			get: () => this.__data._received,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Element = require('./element.js');
				this.__data._received = new Element(value);
			},
		});

		Object.defineProperty(this, 'received', {
			enumerable: true,
			get: () => this.__data.received,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				this.__data.received = value;
			},
		});

		Object.defineProperty(this, 'recipient', {
			enumerable: true,
			get: () => this.__data.recipient,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.recipient = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'sender', {
			enumerable: true,
			get: () => this.__data.sender,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.sender = new Reference(value);
			},
		});

		Object.defineProperty(this, 'reasonCode', {
			enumerable: true,
			get: () => this.__data.reasonCode,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CodeableConcept = require('./codeableconcept.js');
				this.__data.reasonCode = Array.isArray(value)
					? value.map(v => new CodeableConcept(v))
					: [new CodeableConcept(value)];
			},
		});

		Object.defineProperty(this, 'reasonReference', {
			enumerable: true,
			get: () => this.__data.reasonReference,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Reference = require('./reference.js');
				this.__data.reasonReference = Array.isArray(value) ? value.map(v => new Reference(v)) : [new Reference(value)];
			},
		});

		Object.defineProperty(this, 'payload', {
			enumerable: true,
			get: () => this.__data.payload,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let CommunicationPayload = require('./communicationpayload.js');
				this.__data.payload = Array.isArray(value)
					? value.map(v => new CommunicationPayload(v))
					: [new CommunicationPayload(value)];
			},
		});

		Object.defineProperty(this, 'note', {
			enumerable: true,
			get: () => this.__data.note,
			set: value => {
				if (value === undefined || value === null) {
					return;
				}

				let Annotation = require('./annotation.js');
				this.__data.note = Array.isArray(value) ? value.map(v => new Annotation(v)) : [new Annotation(value)];
			},
		});

		// Merge in any defaults
		Object.assign(this, opts);

		// Define a default non-writable resourceType property
		Object.defineProperty(this, 'resourceType', {
			value: 'Communication',
			enumerable: true,
			writable: false,
		});
	}

	static get resourceType() {
		return 'Communication';
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
			identifier: this.identifier && this.identifier.map(v => v.toJSON()),
			_instantiatesCanonical: this._instantiatesCanonical && this._instantiatesCanonical.toJSON(),
			instantiatesCanonical: this.instantiatesCanonical,
			_instantiatesUri: this._instantiatesUri && this._instantiatesUri.toJSON(),
			instantiatesUri: this.instantiatesUri,
			basedOn: this.basedOn && this.basedOn.map(v => v.toJSON()),
			partOf: this.partOf && this.partOf.map(v => v.toJSON()),
			inResponseTo: this.inResponseTo && this.inResponseTo.map(v => v.toJSON()),
			_status: this._status && this._status.toJSON(),
			status: this.status,
			statusReason: this.statusReason && this.statusReason.toJSON(),
			category: this.category && this.category.map(v => v.toJSON()),
			_priority: this._priority && this._priority.toJSON(),
			priority: this.priority,
			medium: this.medium && this.medium.map(v => v.toJSON()),
			subject: this.subject && this.subject.toJSON(),
			topic: this.topic && this.topic.toJSON(),
			about: this.about && this.about.map(v => v.toJSON()),
			encounter: this.encounter && this.encounter.toJSON(),
			_sent: this._sent && this._sent.toJSON(),
			sent: this.sent,
			_received: this._received && this._received.toJSON(),
			received: this.received,
			recipient: this.recipient && this.recipient.map(v => v.toJSON()),
			sender: this.sender && this.sender.toJSON(),
			reasonCode: this.reasonCode && this.reasonCode.map(v => v.toJSON()),
			reasonReference: this.reasonReference && this.reasonReference.map(v => v.toJSON()),
			payload: this.payload && this.payload.map(v => v.toJSON()),
			note: this.note && this.note.map(v => v.toJSON()),
		};
	}
};
