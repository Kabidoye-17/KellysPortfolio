import styled from 'styled-components';
import Sky from './Sky'
import NavBar from './NavBar';
import Container from './Container';
import { useLocalStorage } from '@uidotdev/usehooks';

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
        <Container backgroundColor={colourScheme === 'light'? 'rgba(194,233,249,1)' : 'rgb(0, 169, 239, 1)'}>
        <NavBar setColourScheme={setColourScheme} colourScheme={colourScheme}/>
            <Sky colourScheme={colourScheme}/>
    </Container>
        </BackgroundContainer>
    );
}

