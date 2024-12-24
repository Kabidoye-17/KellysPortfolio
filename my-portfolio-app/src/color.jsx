

export default function useBackgroundColor(color, colourScheme) {


  const getLightModeBackgroundColor = (color) => {
    const upperSky = 'linear-gradient(180deg, rgba(194,233,249,1) 57%, rgba(117,201,235,1) 77%)';
    const lowerSky = 'linear-gradient(to bottom, #75c9eb, #ffffff)';

    switch (color) {
      case 'upperSky':
        return upperSky;
      case 'lowerSky':
        return lowerSky;
      default:
        return 'red';
    }
  };

  const getDarkModeBackgroundColor = (color) => {
    const upperSky = 'linear-gradient(180deg, rgba(138,221,255,1) 12%, rgba(39,110,140,1) 81%);';
    const lowerSky = 'linear-gradient(to bottom, #75c9eb, #ffffff)';

    switch (color) {
      case 'upperSky':
        return upperSky;
      case 'lowerSky':
        return lowerSky;
      default:
        return 'red';
    }
  };

  return colourScheme === 'light'
    ? getLightModeBackgroundColor(color)
    : getDarkModeBackgroundColor(color);
}
