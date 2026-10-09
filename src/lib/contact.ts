/**
 * Centralized institutional contact data for Arena Web Security.
 *
 * Single source of truth — import from here instead of hardcoding values
 * across layout components.
 *
 * TODO: [CONTENT — Confirm official .edu.bd contact email]
 *   Replace CONTACT_EMAIL with an @arena.edu.bd address once provisioned.
 *   The .net address below is the verified legacy contact used on the live site.
 */

export const CONTACT_EMAIL = "info@arenawebsecurity.net";

// TODO: [CONTENT — Confirm whether an @arena.edu.bd address exists]
// export const CONTACT_EMAIL_EDU = "info@arena.edu.bd";

export const CONTACT_PHONE_PRIMARY = "+880 1310 333 444";
export const CONTACT_PHONE_SECONDARY = "+880 1885 841 489";

export const CONTACT_ADDRESS = {
  street: "House No: 1, Block: B, Banasree Main Road, Rampura",
  city: "Dhaka",
  postcode: "1219",
  country: "Bangladesh",
  /** Human-readable single-line format */
  full: "House No: 1, Block: B, Banasree Main Road, Rampura, Dhaka - 1219, Bangladesh",
  /** Abbreviated for compact UI contexts (mobile drawer, etc.) */
  short: "Banasree Main Rd, Rampura, Dhaka - 1219",
} as const;

export const INSTITUTION_NAME = "Arena Web Security";
export const INSTITUTION_DOMAIN = "arena.edu.bd";
export const INSTITUTION_FOUNDED = 2012;

/** External admission & certificate-verification portal (separate subdomain) */
export const VERIFICATION_PORTAL_URL = "https://admission.arenawebsecurity.net/";
