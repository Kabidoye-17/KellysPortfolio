import styled from 'styled-components';
import Sky from './Sky'
import NavBar from './NavBar';
import Container from './Container';
import { useLocalStorage } from '@uidotdev/usehooks';
import Land from './Land';

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

    return (
       <BackgroundContainer>
        <Container backgroundColor={colourScheme === 'light'? 'rgba(194,233,249,1)' : 'rgba(138,221,255,1)'}>
        <NavBar setColourScheme={setColourScheme} colourScheme={colourScheme}/>
            <Sky colourScheme={colourScheme}/>
            <Land colourScheme={colourScheme}/>
    </Container>
        </BackgroundContainer>
    );
}

