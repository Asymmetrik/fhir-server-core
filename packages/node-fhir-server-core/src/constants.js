const SEVERITY = {
  FATAL: 'fatal',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'information'
};

// Codes defined here: https://www.hl7.org/fhir/valueset-issue-type.html
const CODE = {
  // Invalid can be seen as a parent essentially to these, see Level on above url
  // This means structure, required, value, and invariant, are all also invalid
  // you can send invalid back or something more specific
  INVALID: 'invalid',
  STRUCTURE: 'structure',
  REQUIRED: 'required',
  VALUE: 'value',
  INVARIANT: 'invariant',
  // Security is parent of login, unknown, expired, forbidden, and surpressed
  SECURITY: 'security',
  LOGIN: 'login',
  UNKNOWN: 'unknown',
  EXPIRED: 'expired',
  FORBIDDEN: 'forbidden',
  SUPPRESSED: 'surpressed',
  // Procesing has no parent/children
  PROCESSING: 'processing',
  // Not Supported is parent of duplicate, not found, and too long
  NOT_SUPPORTED: 'not-supported',
  DUPLICATE: 'duplicate',
  NOT_FOUND: 'not-found',
  TOO_LONG: 'too-long',
  // Code invalid is parent of extension, too costly, business rule, conflict, and incomplete
  CODE_INVALID: 'code-invalid',
  EXTENSION: 'extension',
  TOO_COSTLY: 'too-costly',
  BUSINESS_RULE: 'business-rule',
  CONFLICT: 'conflict',
  INCOMPLETE: 'incomplete',
  // Transient is parent of lock error, no store, exception, timeout, and throttled
  TRANSIENT: 'transient',
  LOCK_ERROR: 'lock-error',
  NO_STORE: 'no-store',
  EXCEPTION: 'exception',
  TIMEOUT: 'timeout',
  THROTTLED: 'throttled',
  // Informational has no parent/children
  INFORMATIONAL: 'informational'
};

/**
 * Interactions Types.  Also the name of the controller methods
 */
const INTERACTIONS = {
  SEARCH: 'search',
  SEARCH_BY_ID: 'searchById',
  SEARCH_BY_VID: 'searchByVersionId',
  HISTORY: 'history',
  HISTORY_BY_ID: 'historyById',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'remove',
  PATCH: 'patch',
  OPERATIONS_POST: 'operationsPost',
  OPERATIONS_GET: 'operationsGet'
};

/**
 * These are currently the only versions we support
 */
const VERSIONS = {
  '1_0_2': '1_0_2',
  '2_0_0': '2_0_0',
  '3_0_1': '3_0_1',
  '4_0_0': '4_0_0'
};

/**
 * Custom events we support
 */
const EVENTS = {
  AUDIT: 'audit-event',
  PROVENANCE: 'provenance'
};

const RESOURCES = {
  PRACTITIONER: 'practitioner'
};

module.exports = {
  SEVERITY,
  CODE,
  INTERACTIONS,
  VERSIONS,
  EVENTS,
  RESOURCES
};
