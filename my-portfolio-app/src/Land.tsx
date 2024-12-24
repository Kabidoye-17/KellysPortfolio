import styled from "styled-components";
import BackgroundSector from "./BackgroundSector";
import Container from "./Container";
import Flower from "./Flower";

const GrassContainer = styled.div`
  width: 100%;
  height: 60px;
  align-self: end;
  background-color: #569a40;
`;

const DirtContainer = styled.div`
  width: 100%;
  height: 50px;
  align-self: end;
  background-color: #895530;
`;

const Content = styled.div`
  display: inline;
  padding-top: 100px;
  width: 100%;
`;

const Text = styled.span`
  font-family: 'Poppins';
font-size: 20px;
 @media (max-width: 500px) {
     font-size: 15px;
  }
color: white;

`;


type Props = {
  colourScheme: string;
};

export default function Land({ colourScheme }: Props) {
  return (
    <BackgroundSector colour={"lowerSky"} colourScheme={colourScheme}>
      <Content >
        <Container  display="flex"  width="100%" customStyle="text-align: center; justify-content: space-between;" >
<Flower/>
<Text>Hi I am a student software engineer</Text>
<Flower/>
        </Container>
        <GrassContainer />
        <DirtContainer />
      </Content>
    </BackgroundSector>
  );
}
