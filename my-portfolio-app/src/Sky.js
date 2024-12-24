import styled from 'styled-components';
import BackgroundSector from './BackgroundSector';
import Weather from './Weather';
import Container from "./Container";

export const Heading = styled.div`
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
const Content= styled.div`
display: flex;
width: 100%;
 @media (min-width: 960px) {
     justify-content: space-between;
  }
 @media (max-width: 959px) {
 display: inline;
   justify-content: center;
  }

`

export default function Sky({colourScheme}) {

    return (

    <BackgroundSector colour={"upperSky"} colourScheme={colourScheme}>
        <Content>
<Container alignSelf='center'justifySelf='start' paddingTop='20px' paddingBottom='20px'>
        <Heading>Kelly</Heading>
        <Heading>Abidoye</Heading>
        </Container>
        <Container alignSelf='center' justifySelf='center' padding='20px' >
      <Weather colourScheme={colourScheme}/>
      </Container>
      </Content>
    </BackgroundSector>
    )
}