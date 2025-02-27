import styled from 'styled-components';
import Sky from './Sky';
import NavBar from './NavBar';
import Container from './Container';
import { useLocalStorage } from '@uidotdev/usehooks';
import Land from './Land';
import Dirt from './Dirt';
import { useRef } from 'react';
import Underground from './Underground';

const BackgroundContainer = styled.div`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: block;
`;

export default function Background() {
  const [colourScheme, setColourScheme] = useLocalStorage('colourScheme', 'dark');
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const myWorkRef = useRef<HTMLDivElement | null>(null);
  const contactMeRef = useRef<HTMLDivElement | null>(null);

  return (
    <BackgroundContainer>
      <Container backgroundcolor={colourScheme === 'light' ? '#9be2fe' : '#40405c'}>
        <NavBar
          setColourScheme={setColourScheme}
          colourScheme={colourScheme}
          aboutMeRef={aboutMeRef}
          myWorkRef={myWorkRef}
          contactMeRef={contactMeRef}
        />
        <Sky colourScheme={colourScheme} />
        <Land colourScheme={colourScheme} aboutMeRef={aboutMeRef} />
        <Dirt colourScheme={colourScheme} myWorkRef={myWorkRef} />
        <Underground colourScheme={colourScheme} contactMeRef={contactMeRef} />
      </Container>
    </BackgroundContainer>
  );
}
