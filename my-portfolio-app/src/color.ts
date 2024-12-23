export default function getBackgroundColor(color: string) {
    const upperSky =  
    'linear-gradient(180deg, rgba(194,233,249,1) 57%, rgba(117,201,235,1) 77%)'
    ;

    const lowerSky = 
    'linear-gradient(to bottom, #75c9eb, #ffffff)';
    

    switch (color){
        case ("upperSky"):
            return upperSky;
        case ("lowerSky"):
            return lowerSky;
        default:
            return "red";
    }
}