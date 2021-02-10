const { resolveSchema } = require('./server/utils/schema.utils');
const ServerError = require('./server/utils/server.error');
const loggers = require('./server/winston.js');
const Server = require('./server/server');
const { SEVERITY, CODE, INTERACTIONS, VERSIONS, EVENTS, RESOURCES } = require('./constants');

module.exports = {
  /**
   * @description Severity
   */
  SEVERITY,

  /**
   * @description Value Set Issue Types https://www.hl7.org/fhir/valueset-issue-type.html
   */
  CODE,

  /**
   * @description Resource interaction types
   */
  INTERACTIONS,

  /**
   * @description FHIR Versions
   */
  VERSIONS,

  /**
   * @description Events like Auditing and Provenance
   */
  EVENTS,

  /**
   * @description Severity
   */
  RESOURCES,

  /**
   * @description Export Server Error class for people to throw from services
   * This will in turn generate an operation outcome
   */
  ServerError,

  /**
   * @description Export the server class so someone can build it themselves. This gives them
   * much greater flexibility on ordering things and adding their own components/middleware to
   * the server. When using this method, the user should consult the documentation and use all the same
   * setup methods the default implementation uses.
   */
  Server,

  /**
   * @description Export function to support easier loading of classes
   */
  resolveSchema,

  /**
   * @description Export logger to allow for customization and easy access to
   * various loggers
   */
  loggers,

  /**
   * @description Initialize is useful for building a server with all the defaults
   * @param {Object} config - FHIR Server configuration object
   * @param {Object} app - Express instance to use on server
   * @return {Server}
   */
  initialize: (config, app) =>
    new Server(config, app)
      .configureMiddleware()
      .configureSession()
      .configureHelmet()
      .configurePassport()
      .setPublicDirectory()
      .setProfileRoutes()
      .setErrorRoutes(),
};
