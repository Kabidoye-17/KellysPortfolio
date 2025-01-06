import styled from "styled-components";
import Container from "./Container";
const CustomContainer = styled.div`
height: 400px;
width: 450px;
 @media (min-width: 1200px) {
     width: 630px;
    height: 350px;
  }
     @media (max-width: 500px) {
      height: 250px;
    width: 275px;
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
width: 425px;
 @media (min-width: 1200px) {
     width: 630px;
    height: 320px;
  }
 @media (max-width: 500px) {
 width: 200px;
     height: 250px;
    width: 250px;
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
flex-direction: column;
gap: 10px;
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
@media (max-width: 500px) {
 font-size: 15px;
  }
`;

const ProjectLink = styled.div`
 height: 50px;
width: 150px;
 border-radius: 20px;
@media (max-width: 500px) {
 height: 30px;
  }
background-color: grey;
border: 1px solid white;
 display: flex;
  align-items: center;
  justify-content: center;
  display: none;
`;

const OuterContainer = styled(CustomContainer)`
background-color: grey;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 &:hover ${InnerContainer} {
 border-radius: 20px;

 border: 12px solid grey;
  height: 400px;
 @media (min-width: 1200px) {
    height: 350px;
  }
   @media (max-width: 500px) {
    height: 250px;
    width: 275px;
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
@media (max-width: 500px) {
 font-size: 15px;
  }
`;


type Props = {
  title: string;
  descriptionText: string;
  website: boolean;
  image: string;
  date: string;
  sourceCode: string;
  websiteLink?: string;
}
export default function ProjectContainer({title, descriptionText, website, image, date, sourceCode, websiteLink}: Props){
    return (
      <Container customstyle="justify-content: center; " display="flex" paddingbottom="40px">
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
        { website && websiteLink && (
          <ProjectLink>
            <a   target="_blank" rel="noreferrer"  style={{textDecoration: "none"}}href={websiteLink}><RoundDivText>{"Website"}</RoundDivText></a>
          </ProjectLink>
        )}
        <ProjectLink>
<a   target="_blank" rel="noreferrer"  style={{textDecoration: "none"}}href={sourceCode}><RoundDivText>{"Source Code"}</RoundDivText></a>
</ProjectLink>
       </InnerContainer>
        <Container 
          height="50px" 
          width="150px" 
          backgroundcolor="grey" 
          customstyle="border-radius: 20px; margin-bottom: -25px; z-index: 1; display: flex; align-items: center;justify-content: center;" 
        >
            <RoundDivText>{date}</RoundDivText>
        </Container>
      </OuterContainer>
      </Container>
      
    )
}