import styled from "styled-components";
import BackgroundSector from "./BackgroundSector";
import Container from "./Container";
import Tree from "./Tree";

const GrassContainer = styled.div`
  width: 100%;
  height: 60px;
  align-self: end;
  background-color: #569a40;
`;

 const Divider = styled.div`
height: 50px;
width: 100%;
background: rgb(86,154,64);
background: linear-gradient(180deg, rgba(86,154,64,1) 16%, rgba(133,85,47,1) 70%);
`


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

export const Text = styled.div`
  font-family: 'Poppins';
font-size: 25px;
 @media (max-width: 500px) {
     font-size: 15px;
  }
     font-weight: 400px;
color: white;

`;


type Props = {
  colourScheme: string;
  aboutMeRef: React.RefObject<HTMLDivElement | null>;
};

export default function Land({ colourScheme, aboutMeRef }: Props) {
  return (
    <div ref={aboutMeRef}>
    <BackgroundSector colour={"lowerSky"} colourScheme={colourScheme}>
      <Content >
        <Container  display="flex"
  width="100%"
  customStyle="text-align: center; justify-content: space-between; align-items: end; gap: 20px; flex-wrap: wrap;" >
<Text style={{ flexGrow: 1, margin: '0 20px', textAlign: 'center', maxWidth: '1000px', paddingBottom: "50px" }}>
    Hi! I’m a software engineering student at the University of Limerick, developing my skills with the goal of becoming a full-stack developer. My current focus is in Java, React.js, and JavaScript, and I’m also comfortable with Python, C++, and Ruby on Rails. So far, I’ve completed 5 projects, including this website! I’m always eager for a challenge—right now, I’m focused on web development, but I’m excited to explore app development soon.
  </Text>
  <Tree/>
        </Container>
        <GrassContainer />
        <Divider/>
        <DirtContainer />
      </Content>
    </BackgroundSector>
    </div>
  );
}
