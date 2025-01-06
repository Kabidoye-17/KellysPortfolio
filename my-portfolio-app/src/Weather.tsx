import styled from "styled-components";
import { fetchWeatherApi } from 'openmeteo';
import { useEffect, useState } from "react";
import Container from "./Container";

const SpeechBubble = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 0.4em;
  font-size: 16px;
  width: 300px;
  height: 250px;
  word-wrap: break-word;;

`;

export const WeatherHeading = styled.div`
font-weight: 900;
font-family: Montserrat;
font-size: 28px;
color: 	#3e5172;
`;

export const WeatherSubheading = styled.div`
padding-bottom: 10px;
font-weight: 600;
font-family: Montserrat;
font-size: 20px;
color: #5e6f8e;
  display: inline-block;
`;

const WeatherBody = styled.div`
padding-top: 5px;
padding-left: 3px;
font-weight: 400;
font-family: Montserrat;
font-size: 20px;
color: #5e6f8e;
  display: inline-block;
`;

const BirdContainer = styled.img`
height: 40px;
width: 40px;
`
type Props = {
colourScheme: string;
};


export default function Weather({colourScheme}: Props){

  const [weatherData, setWeatherData] = useState<{time: Date, temperature2m: number, rain: number, snowfall: number}>();
  const [userLocation, setUserLocation] = useState<{latitude: number, longitude: number}>({latitude: 53, longitude: -7.29});
  const [time, setTime] = useState<Date>();

   const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  };

 // Update time every second
 useEffect(() => {
  const intervalId = setInterval(() => {
    setTime(new Date());
  }, 1000); // Update time every second
  return () => clearInterval(intervalId); // Clean up the interval on component unmount
}, []);

// Fetch weather data every 30 minutes
useEffect(() => {
  getUserLocation(); // Run this once on mount

  const fetchWeather = async () => {
    const params = {
      latitude: userLocation.latitude,  
      longitude: userLocation.longitude, 
      current: ["temperature_2m", "rain", "snowfall"],
      forecast_days: 1
    };
    const url = "https://api.open-meteo.com/v1/forecast";

    try {
      const response = await fetch(`${url}?latitude=${params.latitude}&longitude=${params.longitude}&current=${params.current.join(",")}&forecast_days=${params.forecast_days}`);
      const data = await response.json();


      // Assuming the response structure is as follows:
      const current = data.current;
      setWeatherData({
        time: new Date(current.time * 1000), // Adjust based on your API response
        temperature2m: current.temperature_2m,
        rain: current.rain,
        snowfall: current.snowfall,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Initial fetch when the component mounts
  fetchWeather();

  // Set interval to fetch weather data every 30 minutes (1800000ms)
  const intervalId = setInterval(fetchWeather, 1800000); // Fetch every 30 minutes

  // Clean up the interval when the component unmounts
  return () => clearInterval(intervalId); 
}, []); // Empty dependency array ensures this useEffect runs once when the component mounts



    return(
      <Container>
        {colourScheme === 'light' ? (
<BirdContainer alt="bird" src="./images/DayBird.png"></BirdContainer>
        ) : (
<BirdContainer alt="bird" src="./images/NightBird.png"></BirdContainer>)}

    <SpeechBubble>
<WeatherHeading>
  Weather Forecast 
</WeatherHeading>
<WeatherSubheading>
  Time:   <WeatherBody> {`${time}`}</WeatherBody>
</WeatherSubheading>
<Container display="block">
<WeatherSubheading>
  Temperature:
  <WeatherBody> {`${weatherData?.temperature2m.toPrecision(2)}°C`}</WeatherBody>
</WeatherSubheading>
</Container>
<Container display="block">
<WeatherSubheading>
  Rain: <WeatherBody> {weatherData?.rain === 0 ? "No rain today" : "It's raining"}</WeatherBody>
</WeatherSubheading>
</Container>
<Container display="block">
<WeatherSubheading>
  Snowfall: <WeatherBody> {weatherData?.snowfall === 0 ? "No snow today" : "It's snowing" }</WeatherBody>
</WeatherSubheading>
</Container>

    </SpeechBubble>
    </Container>
    )

}