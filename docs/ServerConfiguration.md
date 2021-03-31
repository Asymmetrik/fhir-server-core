## Overview

The config drives the entire server. We try to make it easy to adopt this solution by passing in which part of the server you want to use. There are 3 main sections of the config.

#### Auth

> NOTE: This section may change slightly as we work on some optional integrations and see what works best for the most use cases.

This section of the config drives the authentication and authorization layer of the server. If you are using SMART on FHIR we provide a [Passportjs](http://www.passportjs.org/) strategy and authorization middleware you can use out of the box with just some minor configurations. We also allow you to provide your own custom passport strategy. Both authentication and authorization are disabled by default for development sake. To run them, you just need to provide a few options outlined below.

Please see the [Access Control](./AccessControl.md) document for a step-by-step guide to enable it in your application or how to add your own custom setup.

#### Server

This section of the config sets up the [Express](https://expressjs.com/) framework and certain middleware. You can specify which interface + port your app runs on, the cors options and ssl support. For more information, scroll down to the description of each property below.

#### Profiles

This section of the config sets up which version of the FHIR specification you want to support and which resource from that version you want to support. You can support multiple versions. The core library will automatically set up all of the routes and required parameters for each version and resource.

## Configurations

Here is an example config with all the currently supported options. See descriptions below.

```javascript
{
	auth: {
		type: 'auth-type',
		customScopeKey: 'custom',
    strategy: {
	    name: 'bearer',
	    useSession: false,
	    service: 'path/to/authentication.service.js'
    }
	},
	server: {
		favicon: path.resolve('path to favicon'),
		host: '127.0.0.1',
		port: 3000,
		corsOptions: {
			maxAge: 86400
		},
		sessionStore: null,
		ssl: {
			key: 'path/to/key.pem',
			cert: 'path/to.cert.pem'
		},
		publicDirectory: '/path/to/public'
	},
	logging: {
		level: 'debug'
	},
  events: {
		auditEvent: service.writeAuditEventRecords,
		provenance: service.writeProvenanceRecords,
  },
	profiles: {
		patient: {
			service: './patient/patient.controller',
			versions: [ VERSIONS['3_0_1'] ],
			corsOptions: {
				// Have a different max age for all the routes in the patient profile
				maxAge: 3600
			}
		},
		observation: {
			service: require('./observation/observation.controller'),
			versions: [ VERSIONS['4_0_0'] ]
			corsOptions: {
				// Disable cors on this profile, maybe this is for internal use only
				origin: false
			}
		}
	}
}
```

#### `auth.type`

- **Type:** `string`
- **Description:** The type of authentication used. Currently this is only needed to enable SMART authentication. If you want to use SMART authentication, set this value to `smart`.
- **Required:** false
- **Default:** undefined

#### `auth.customScopeKey`

- **Type:** `string`
- **Description:** Specify the customScopeKey option to use a custom claim instead of the scope.
- **Required:** false
- **Default:** `'scope'`

#### `auth.strategy`

- **Type:** `object`
- **Description:** A Configuration object for the passport strategy.
- **Required:** false
- **Default:** undefined

#### `auth.strategy.name`

- **Type:** `string`
- **Description:** The name of your strategy.
- **Required:** false
- **Default:** undefined

#### `auth.strategy.useSession`

- **Type:** `string`
- **Description:** Whether or not you want `session` enabled on `passport.authenticate()`.
- **Required:** false
- **Default:** undefined

#### `auth.strategy.service`

- **Type:** `string`
- **Description:** A relative path to a authentication service module. It currently must export a strategy property which is set to a valid [passport strategy](http://www.passportjs.org/packages/).
- **Required:** false
- **Default:** undefined

#### `server.host`

- **Type:** `string`
- **Description:** Host interface the Express app will listen on.
- **Required:** No
- **Default:** `all interfaces`

#### `server.port`

- **Type:** `number`
- **Description:** Port the Express app will listen on.
- **Required:** Yes
- **Default:** `none`

#### `server.favicon`

- **Type:** `string`
- **Description:** Path to the favicon you would like to use
- **Required:** No
- **Default:** `path.resolve('./src/assets/phoenix.ico')`

#### `server.corsOptions`

- **Type:** `object`
- **Description:** Any default cors options you would like applied to all routes. Please see [https://github.com/expressjs/cors#configuration-options](https://github.com/expressjs/cors#configuration-options) for details. The `methods` configuration will not be honored if specified here. That is the only option controlled by `@asymmetrik/node-fhir-server-core` and cannot be overridden.
- **Required:** No
- **Default:** `none`

#### `server.sessionStore`

- **Type:** `object`
- **Description:** Instance of an `express-session`. Depending on your back end, you can create and configure your own session store and pass it in. For example:

```javascript
const session = require('express-session');
const expressSessionStore = session({
  resave: true,
  saveUninitialized: true,
  secret: appConfig.auth.sessionSecret,
  cookie: appConfig.auth.sessionCookie,
  store: new MongoStore({
    mongooseConnection: connection,
    collection: appConfig.auth.collection,
  }),
});

const fhirConfig = {
  server: {
    sessionStore: expressSessionStore,
  },
};
```

- **Required:** No
- **Default:** `none`

#### `server.ssl.key`

- **Type:** `string`
- **Description:** Path to your private key. See [Contributor's guide](https://github.com/Asymmetrik/node-fhir-server-core/blob/master/CONTRIBUTING.md#optional) for how to generate a self-signed cert for local development.
- **Required:** No. If you want to setup express to use ssl, you need both a key and cert.
- **Default:** `none`

#### `server.ssl.cert`

- **Type:** `string`
- **Description:** Path to your certificate. See [Contributor's guide](https://github.com/Asymmetrik/node-fhir-server-core/blob/master/CONTRIBUTING.md#optional) for how to generate a self-signed cert for local development.
- **Required:** No. If you want to setup express to use ssl, you need both a key and cert.
- **Default:** `none`

#### `server.publicDirectory`

- **Type:** `string`
- **Description:** Path to your public directory. Some certificate authorities need to validate your server, for example, Let's Encrypt. You can use this to enable a public directory to serve the challenge file from `/.well-known/acme-challenge`.
- **Required:** No.
- **Default:** `none`

#### `logging.level`

> Currently this is the only logging configuration supported. We use Winston for logging and will eventually add support for more options.

- **Type:** `string`
- **Description:** Logging level to use for Winston. Logging level can be anything supported by Winston. See https://github.com/winstonjs/winston#using-logging-levels.
- **Required:** No
- **Default:** `error`

#### `events.auditEvent`

> Subscribe to incidents that create audit events.

- **Type:** `function`
- **Description:** Occasionally certain security/privacy related events occur on the server and those events need to be recorded. You can subscribe to audit events with any function that will receive an AuditEvent resource anytime these events occur. The scope of these events may increase over time so it is up to you to decide what to do with them based on their internal values.
- **Required:** No. However we strongly advise you use this.
- **Default:** `none`
- **Example:**

```javascript
// In config object
{
	events: {
		// This function is inlined just for the example, probably better to have in a service somewhere
		auditEvent: function (auditEventResource) {
			// insert the resource into your DB here
		}
	}
}
```

#### `events.provenance`

> Subscribe to incidents that create provenance resources.

- **Type:** `function`
- **Description:** Provenance resources are created when a resource changes "how it came to be". This means on updates, creates, and deletes. These are useful for tracking these kinds of changes. When the server adds write support, this will be very useful. Until then, we are not emitting these events.
- **Required:** No. However we strongly advise you use this.
- **Default:** `none`
- **Example:**

```javascript
// In config object
{
	events: {
		provenance: function (provenanceResource) {
			// insert the resource into your DB here
		}
	}
}
```

#### `profiles[key]`

Please see [ConfiguringProfiles](./ConfiguringProfiles.md) for instructions on how to setup and configure profiles. There is also an example of creating one in the [Getting Started](./GettingStarted.md) guide.
