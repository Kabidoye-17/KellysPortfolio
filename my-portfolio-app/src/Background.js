import styled from 'styled-components';
import Sky from './Sky'

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

    return (
       <BackgroundContainer>
            <Sky/>
        </BackgroundContainer>
    );
}

