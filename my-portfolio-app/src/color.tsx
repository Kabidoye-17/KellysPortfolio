export default function useBackgroundColor(colour: string, colourScheme: string) {

  const getLightModeBackgroundColor = (colour: string) => {
    const upperSky = 'linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%);';
    const lowerSky = '#67d1fb';

    switch (colour) {
      case 'upperSky':
        return upperSky;
      case 'lowerSky':
        return lowerSky;
      default: 
        return 'white';
    }
  };

  const getDarkModeBackgroundColor = (colour: string) => {
    const upperSky = ' linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%);';
    const lowerSky = ' #8a76ab';

    switch (colour) {
      case 'upperSky':
        return upperSky;
      case 'lowerSky':
        return lowerSky;
      default:
        return 'white';
    }
  };

  return colourScheme === 'light'
    ? getLightModeBackgroundColor(colour)
    : getDarkModeBackgroundColor(colour);
}
