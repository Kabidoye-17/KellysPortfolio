import styled from "styled-components";
import BackgroundSector from "./BackgroundSector";
import ContactForm from "./ContactForm";
import Container from "./Container";
import { Heading } from "./Sky";
import { Copyright, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { WeatherSubheading } from "./Weather";


type Props = {
    colourScheme: string;
    contactMeRef: React.RefObject<HTMLDivElement | null>;
  };

  const BackgroundImage = styled.div`
width: 100%;
background-image: url(${"./images/Rock.png"});
background-size: cover;
display: inline-block;
justify-content: center;
align-items: end;
padding-top: 30px;
text-align: center;
`;

const Icon = styled.div`
background-color: white;
border-radius: 50%;
height: 70px;
width: 70px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;

&:hover,
&:focus {
  box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
  transform: translateY(-0.25em);
}
`


export default function Underground({ colourScheme, contactMeRef }: Props) {
  return (
    <div ref={contactMeRef}>
    <BackgroundSector colour={"underground"} colourScheme={colourScheme}>
        <BackgroundImage>
            <Heading style={{fontSize: '60px', paddingBottom: '30px' }}>
               Say Hi
            </Heading>
    <Container display='flex' customstyle="text-align: start; justify-content: center; " paddingbottom="40px">
    <ContactForm/>
    </Container>
    <Container display="flex" width="100%" customstyle="flex-direction: row; gap: 10px; justify-content: center;" paddingbottom="40px">
    <a  target="_blank" rel="noreferrer" style={{textDecoration: "none"}}href='https://github.com/Kabidoye-17'><Icon><GithubLogo size={50} color="grey"/></Icon></a>
    <a  target="_blank" rel="noreferrer"  style={{textDecoration: "none"}}href='https://www.linkedin.com/in/kelly-abidoye/'><Icon><LinkedinLogo size={50} color="grey"/></Icon></a>
    <a  target="_blank" rel="noreferrer"  style={{textDecoration: "none"}}href="mailto:Kabidoye17@outlook.com"><Icon><EnvelopeSimple size={50} color="grey"/></Icon></a>
    <a  style={{textDecoration: "none"}}href="./files/KellyAbidoyeCV.pdf" download='KellyAbidoyeCV.pdf'><Icon><WeatherSubheading style={{fontSize: 32, color: "grey" }}>CV</WeatherSubheading></Icon></a>
    </Container>
    <Container width="inherit"  display='flex' backgroundcolor="black" height="50px;" customstyle="color: white; justify-content: center; align-items: center;"> <Copyright size={20} style={{paddingRight: '3px'}} />Kelly Abidoye. All rights reserved</Container>
    </BackgroundImage>
    </BackgroundSector> 
    </div>
    )
    }