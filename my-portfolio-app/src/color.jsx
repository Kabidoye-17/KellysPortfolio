

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
    const upperSky = 'linear-gradient(180deg, rgba(0,169,239,1) 7%, rgba(0,81,115,1) 81%);';
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
