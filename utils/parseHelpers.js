/**
 * Safely parses a string to a boolean or returns null if invalid.
 * @param {string} value - The raw string from the DOM (e.g., "true", "false", "unsure").
 * @returns {boolean|null} - The parsed boolean or null if invalid.
 */
export const parseBoolean = (value) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return null;
};

export const parseInteger = (value) => {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? null : parsed;
};
