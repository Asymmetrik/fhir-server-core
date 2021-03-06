/**
 * @name exports
 * @summary TestScriptFixture Class
 */
module.exports = class TestScriptFixture {
  constructor(opts) {
    // Create an object to store all props
    Object.defineProperty(this, '__data', { value: {} });

    // Define getters and setters as enumerable

    Object.defineProperty(this, '_id', {
      enumerable: true,
      get: () => this.__data._id,
      set: (value) => {
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
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.id = value;
      },
    });

    Object.defineProperty(this, 'extension', {
      enumerable: true,
      get: () => this.__data.extension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.extension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'modifierExtension', {
      enumerable: true,
      get: () => this.__data.modifierExtension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.modifierExtension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, '_autocreate', {
      enumerable: true,
      get: () => this.__data._autocreate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._autocreate = new Element(value);
      },
    });

    Object.defineProperty(this, 'autocreate', {
      enumerable: true,
      get: () => this.__data.autocreate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.autocreate = value;
      },
    });

    Object.defineProperty(this, '_autodelete', {
      enumerable: true,
      get: () => this.__data._autodelete,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._autodelete = new Element(value);
      },
    });

    Object.defineProperty(this, 'autodelete', {
      enumerable: true,
      get: () => this.__data.autodelete,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.autodelete = value;
      },
    });

    Object.defineProperty(this, 'resource', {
      enumerable: true,
      get: () => this.__data.resource,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.resource = new Reference(value);
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'TestScriptFixture',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'TestScriptFixture';
  }

  toJSON() {
    return {
      id: this.id,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      _autocreate: this._autocreate && this._autocreate.toJSON(),
      autocreate: this.autocreate,
      _autodelete: this._autodelete && this._autodelete.toJSON(),
      autodelete: this.autodelete,
      resource: this.resource && this.resource.toJSON(),
    };
  }
};
