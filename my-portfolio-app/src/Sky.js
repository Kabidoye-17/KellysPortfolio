import styled from 'styled-components';
import BackgroundSector from './BackgroundSector';

const Heading = styled.div`
font-family: Montserrat;
color: white;
font-weight: 900;
font-size: 120px;
 @media (max-width: 650px) {
    font-size: 68px;
  }
text-shadow: 
    0px 1px 4px rgba(12, 12, 13, 0.1),
    0px 1px 4px rgba(12, 12, 13, 0.05); 
    align-self: center;
    padding-left: 30px;
padding-bottom: 5px

`
const TextContainer = styled.div`
align-self: center;
padding-top: 20px;
padding-bottom: 20px;
`

export default function Sky({colourScheme}) {

    return (

    <BackgroundSector colour={"upperSky"} colourScheme={colourScheme}>
<TextContainer>
        <Heading>Kelly</Heading>
        <Heading>Abidoye</Heading>
        </TextContainer>
    </BackgroundSector>
    )
}