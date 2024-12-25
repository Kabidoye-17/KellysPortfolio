import styled from "styled-components";
import Container from "./Container";
const CustomContainer = styled.div`
height: 400px;
width: 70%;
 @media (min-width: 1200px) {
     width: 630px;
    height: 350px;
  }
border: 12px solid grey;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
`;
const ImageContainer = styled.img`
height: 370px;
width: 95%;
 @media (min-width: 1200px) {
     width: 630px;
    height: 320px;
  }
border: 12px;
border-radius: 20px;
`;
const InnerContainer = styled(CustomContainer)`
background-color: grey;
position: absolute;
height: 0px;
border-radius: 0px;
display: flex; 
align-items: center;
justify-content: center;
border: none;
transition: height 0.2s linear;
`;

const ProjectTitle = styled.div`
font-family: 'Poppins';
font-size: 30px;
font-weight: 600;
color: white;
padding-bottom: 10px;
color: transparent;
`;

const DescriptionText = styled.div`
font-family: 'Poppins';
font-size: 20px;
font-weight: 300;
color: white;
padding-bottom: 10px;
color: transparent;
`;

const ProjectLink = styled.div`
 height: 50px;
width: 150px; border-radius: 20px;
background-color: grey;
border: 1px solid white;
 display: flex;
  align-items: center;
  justify-content: center;
  display: none;
`;

const OuterContainer = styled(CustomContainer)`
background-color: grey;
 &:hover ${InnerContainer} {
 border-radius: 20px;

 border: 12px solid grey;
  height: 400px;
 @media (min-width: 1200px) {
    height: 350px;
  }
}

&:hover ${ProjectTitle} {
color: white;
  }

   &:hover ${DescriptionText} {
color: white;
  }

   &:hover ${ProjectLink} {
display: flex;
  }
`;
const RoundDivText = styled.div`
 font-family: Poppins;
font-size: 20px;
color: white;
`;


type Props = {
  title: string;
  descriptionText: string;
  website: boolean;
  image: string;
  date: string;
  link: string;
}
export default function ProjectContainer({title, descriptionText, website, image, date, link}: Props){
    return (
      <Container customStyle="justify-content: center;" display="flex" paddingBottom="40px">
        <OuterContainer 
      >
        <ImageContainer src={image} alt="project image"/>
       <InnerContainer>
        <ProjectTitle>
           {title}
        </ProjectTitle>
        <DescriptionText>
            {descriptionText}
        </DescriptionText>
        <ProjectLink>
<a   target="_blank" style={{textDecoration: "none"}}href={link}><RoundDivText>{website? "Website" : "Source Code"}</RoundDivText></a>
</ProjectLink>
       </InnerContainer>
        <Container 
          height="50px" 
          width="150px" 
          backgroundColor="grey" 
          customStyle="border-radius: 20px; margin-bottom: -25px; z-index: 1; display: flex; align-items: center;justify-content: center;" 
        >
            <RoundDivText>{date}</RoundDivText>
        </Container>
      </OuterContainer>
      </Container>
      
    )
}