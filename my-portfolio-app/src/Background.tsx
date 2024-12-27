import styled from 'styled-components';
import Sky from './Sky'
import NavBar from './NavBar';
import Container from './Container';
import { useLocalStorage } from '@uidotdev/usehooks';
import Land from './Land';
import Dirt from './Dirt';
import { useRef } from 'react';

const BackgroundContainer = styled.div`
 background-size: cover;
    background-position: center; 
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: block; 
`
export default function Background() {
    const [colourScheme, setColourScheme] = useLocalStorage('colourScheme', 'dark')
    const aboutMeRef = useRef<HTMLDivElement | null>(null);
    const myWorkRef = useRef<HTMLDivElement | null>(null);

    return (
       <BackgroundContainer>
        <Container backgroundColor={colourScheme === 'light'? 'rgba(194,233,249,1)' : 'rgba(138,221,255,1)'}>
        <NavBar setColourScheme={setColourScheme} colourScheme={colourScheme} aboutMeRef={aboutMeRef} myWorkRef={myWorkRef}/>
            <Sky colourScheme={colourScheme}/>
            <Land colourScheme={colourScheme} aboutMeRef={aboutMeRef}/>
            <Dirt colourScheme={colourScheme}  myWorkRef={myWorkRef}/>
    </Container>
        </BackgroundContainer>
    );
}

