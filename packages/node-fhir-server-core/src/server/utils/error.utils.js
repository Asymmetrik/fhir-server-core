const { SEVERITY, CODE, VERSIONS } = require('../../constants');
const { resolveSchema } = require('./schema.utils');

// Helper to determine which operation outcome to retrieve
let getErrorConstructor = baseVersion => {
  if (!baseVersion || !Object.prototype.hasOwnProperty.call(VERSIONS, baseVersion)) {
    return resolveSchema(VERSIONS['3_0_1'], 'OperationOutcome');
  } else {
    return resolveSchema(baseVersion, 'OperationOutcome');
  }
};

/* eslint-disable no-useless-escape */
let div_content = (severity, diagnostics) =>
  '<div xmlns="http://www.w3.org/1999/xhtml"><h1>Operation Outcome</h1><table border="0">' +
  `<table border=\"0\"><tr><td style=\"font-weight: bold;\">${severity}</td>` +
  `<td><pre>${diagnostics}</pre></td></tr></table></div>`;
/* eslint-enable no-useless-escape */

// Invalid or Missing parameter from request
let invalidParameter = (message, base_version) => {
  let ErrorConstructor = getErrorConstructor(base_version);
  return new ErrorConstructor({
    statusCode: 400,
    text: {
      status: 'generated',
      div: div_content(SEVERITY.ERROR, message)
    },
    issue: {
      code: CODE.INVALID,
      severity: SEVERITY.ERROR,
      diagnostics: message
    }
  });
};

// Unauthorized request of some resource
let unauthorized = (message, base_version) => {
  let ErrorConstructor = getErrorConstructor(base_version);
  return new ErrorConstructor({
    statusCode: 401,
    text: {
      status: 'generated',
      div: div_content(SEVERITY.ERROR, message || 'Unauthorized request')
    },
    issue: {
      code: CODE.FORBIDDEN,
      severity: SEVERITY.ERROR,
      diagnostics: message || '401: Unauthorized request'
    }
  });
};

let insufficientScope = (message, base_version) => {
  let ErrorConstructor = getErrorConstructor(base_version);
  return new ErrorConstructor({
    statusCode: 403,
    text: {
      status: 'generated',
      div: div_content(SEVERITY.ERROR, message || 'Insufficient scope')
    },
    issue: {
      code: CODE.FORBIDDEN,
      severity: SEVERITY.ERROR,
      diagnostics: message || '403: Insufficient scope'
    }
  });
};

let notFound = (message, base_version) => {
  let ErrorConstructor = getErrorConstructor(base_version);
  return new ErrorConstructor({
    statusCode: 404,
    text: {
      status: 'generated',
      div: div_content(SEVERITY.ERROR, message || 'Not found')
    },
    issue: {
      code: CODE.NOT_FOUND,
      severity: SEVERITY.ERROR,
      diagnostics: message || '404: Not found'
    }
  });
};

let methodNotAllowed = (message, base_version) => {
  let ErrorConstructor = getErrorConstructor(base_version);
  return new ErrorConstructor({
    statusCode: 405,
    text: {
      status: 'generated',
      div: div_content(SEVERITY.ERROR, message || 'Method not allowed')
    },
    issue: {
      code: CODE.NOT_SUPPORTED,
      severity: SEVERITY.ERROR,
      diagnostics: message || '405: Method not allowed'
    }
  });
};

let deleteConflict = (message, base_version) => {
  let ErrorConstructor = getErrorConstructor(base_version);
  return new ErrorConstructor({
    statusCode: 409,
    text: {
      status: 'generated',
      div: div_content(SEVERITY.ERROR, message || 'Conflict')
    },
    issue: {
      code: CODE.CONFLICT,
      severity: SEVERITY.ERROR,
      diagnostics: message || '409: Conflict'
    }
  });
};

let deleted = (message, base_version) => {
  let ErrorConstructor = getErrorConstructor(base_version);
  return new ErrorConstructor({
    statusCode: 410,
    text: {
      status: 'generated',
      div: div_content(SEVERITY.ERROR, message || 'Resource deleted')
    },
    issue: {
      code: CODE.NOT_FOUND,
      severity: SEVERITY.ERROR,
      diagnostics: message || '410: Resource deleted'
    }
  });
};

/**
 * @function customError
 * @description Take a custom error from user implementation and return an operation outcome
 * @param {Error<statusCode, code, severity, message>} err - error or custom error object
 * @param {String} base_version - dstu2 or stu3
 * @return {OperationOutcome}
 */
let customError = (err, base_version) => {
  let ErrorConstructor = getErrorConstructor(base_version);
  return new ErrorConstructor({
    statusCode: err.statusCode,
    text: {
      status: 'generated',
      div: div_content(err.severity, err.message)
    },
    issue: {
      code: err.code,
      severity: err.severity,
      diagnostics: err.message
    },
    isCustom: true
  });
};

let internal = (err, base_version) => {
  if (err.isCustom) {
    return customError(err, base_version);
  }

  let ErrorConstructor = getErrorConstructor(base_version);

  return new ErrorConstructor({
    statusCode: 500,
    text: {
      status: 'generated',
      div: div_content(SEVERITY.ERROR, err.message || 'Internal server error')
    },
    issue: {
      code: CODE.EXCEPTION,
      severity: SEVERITY.ERROR,
      diagnostics: err.message || '500: Internal server error'
    }
  });
};

let isServerError = (err, base_version) => err instanceof getErrorConstructor(base_version);

/**
 * @name exports
 * @static
 * @summary Error Configurations
 */
module.exports = {
  invalidParameter,
  unauthorized,
  insufficientScope,
  methodNotAllowed,
  deleteConflict,
  notFound,
  deleted,
  internal,
  customError,
  isServerError
};
