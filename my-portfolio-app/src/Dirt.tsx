import styled from "styled-components";
import BackgroundSector from "./BackgroundSector";
import { Heading } from "./Sky";
import ProjectContainer from "./ProjectContainer";


const BackgroundImage = styled.div`
width: 100%;
background-image: url(${"/images/Soil.png"});
display: inline;
text-align: center;

`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Allow items to wrap to the next line when needed
  gap: 20px;
  justify-content: space-evenly;
`;

type Props = {
    colourScheme: string;
    myWorkRef: React.RefObject<HTMLDivElement | null>;
  };


export default function Dirt({ colourScheme, myWorkRef }: Props) {
  return (
    <div ref={myWorkRef}>
    <BackgroundSector colour={""} colourScheme={colourScheme}>
     <BackgroundImage >
        <Heading style={{fontSize: '60px', paddingBottom: '30px'}}>My Work</Heading>
<FlexContainer>

        <ProjectContainer
        date="December 2024"
        title="Portfolio Website"
        descriptionText="Website detailing my projects in React and Javascript "
        image="/images/website.png" 
        website={true}
        websiteLink="http://localhost:3000/"
        sourceCode="https://github.com/Kabidoye-17/myNewPortfolio"
        />
        <ProjectContainer
        date="April 2024"
        title="Spork"
        descriptionText="Murder mystery game in C++"
        image="/images/Spork.png"
        website={false}
        sourceCode="https://github.com/Kabidoye-17/SporkProject"
        />
        <ProjectContainer
        date="February 2024"
        title="Clubhub"
        descriptionText="Club management system website in Python"
        image="/images/Clubhub.png"
        website={false}
        sourceCode="https://github.com/ElliceNels/ClubHub"
        />
       <ProjectContainer
        date="December 2023"
        title="GoGoTaxi"
        descriptionText="Taxi ordering simulation app in Java"
        image="/images/GoGoTaxi.png"
        website={false}
        sourceCode="https://github.com/Elle0-0/GoGoTaxi"
        />
        <ProjectContainer
        date="November 2023"
        title="Risky Quizness"
        descriptionText="Quiz app in Java"
        image="/images/RiskyQuizness.png"
        website={false}
        sourceCode="https://github.com/Kabidoye-17/KellyMiniEpic"
        />
        </FlexContainer>
        
     </BackgroundImage>
    </BackgroundSector>
    </div>
  );
}
