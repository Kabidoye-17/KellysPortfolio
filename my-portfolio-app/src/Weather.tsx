import styled from "styled-components";
import { useEffect, useState } from "react";
import Container from "./Container";
import { fetchWeatherApi } from "openmeteo";

const SpeechBubble = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 0.4em;
  font-size: 16px;
  width: 300px;
  height: 250px;
  word-wrap: break-word;
`;

export const WeatherHeading = styled.div`
  font-weight: 900;
  font-family: Montserrat;
  font-size: 28px;
  color: #3e5172;
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
`;

type Props = {
  colourScheme: string;
};

export default function Weather({ colourScheme }: Props) {
  const [weatherData, setWeatherData] = useState<{ temperature2m: number; rain: number; snowfall: number }>();
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number }>({ latitude: 53, longitude: -7.29 });
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

  getUserLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      let newDate = new Date();
      setTime(newDate);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const params = {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        current: ["temperature_2m", "rain", "snowfall"],
        forecast_days: 1,
      };

      const url = "https://api.open-meteo.com/v1/forecast";

      try {
        const responses = await fetchWeatherApi(url, params);
        const response = responses[0];
        const current = response.current()!;

        setWeatherData({
          temperature2m: current.variables(0)!.value(),
          rain: current.variables(2)!.value(),
          snowfall: current.variables(3)!.value(),
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [userLocation.latitude, userLocation.longitude]);

  return (
    <Container>
      {colourScheme === 'light' ? (
        <BirdContainer alt="bird" src="./images/DayBird.png" />
      ) : (
        <BirdContainer alt="bird" src="./images/NightBird.png" />
      )}

      <SpeechBubble>
        <WeatherHeading>Weather Forecast</WeatherHeading>
        <WeatherSubheading>
          Time: <WeatherBody>{`${time}`}</WeatherBody>
        </WeatherSubheading>
        <Container display="block">
          <WeatherSubheading>
            Temperature:
            <WeatherBody>{`${weatherData?.temperature2m.toPrecision(2)}°C`}</WeatherBody>
          </WeatherSubheading>
        </Container>
        <Container display="block">
          <WeatherSubheading>
            Rain: <WeatherBody>{weatherData?.rain === 0 ? "No rain today" : "It's raining"}</WeatherBody>
          </WeatherSubheading>
        </Container>
        <Container display="block">
          <WeatherSubheading>
            Snowfall: <WeatherBody>{weatherData?.snowfall === 0 ? "No snow today" : "It's snowing"}</WeatherBody>
          </WeatherSubheading>
        </Container>
      </SpeechBubble>
    </Container>
  );
}
