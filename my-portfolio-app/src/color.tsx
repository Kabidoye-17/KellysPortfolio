export default function useBackgroundColor(colour: string, colourScheme: string) {

  const getLightModeBackgroundColor = (colour: string) => {
    const upperSky = 'linear-gradient(180deg, rgba(194,233,249,1) 57%, rgba(117,201,235,1) 77%)';
    const lowerSky = 'linear-gradient(to bottom, #75c9eb, #ffffff)';

    switch (colour) {
      case 'upperSky':
        return upperSky;
      case 'lowerSky':
        return lowerSky;
      default:
        return 'red';
    }
  };

  const getDarkModeBackgroundColor = (colour: string) => {
    const upperSky = 'linear-gradient(180deg, rgba(138,221,255,1) 12%, rgba(39,110,140,1) 81%);';
    const lowerSky = 'linear-gradient(to bottom, #75c9eb, #ffffff)';

    switch (colour) {
      case 'upperSky':
        return upperSky;
      case 'lowerSky':
        return lowerSky;
      default:
        return 'red';
    }
  };

  return colourScheme === 'light'
    ? getLightModeBackgroundColor(colour)
    : getDarkModeBackgroundColor(colour);
}
