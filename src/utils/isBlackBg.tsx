/**
 * Returns true or false based on location if navbar background color should be black
 * @param location
 * @returns {boolean}
 */
export const isBlackBg = (location: string): boolean => {
  switch (location) {
    case '/admin':
      return true;
    case '/login':
      return true;
    case '/gallery':
      return true;
    default:
      return false;
  }
};
