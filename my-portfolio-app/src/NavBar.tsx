import Container from "./Container";
import { Sun, MoonStars } from "@phosphor-icons/react";
import styled from "styled-components";
import { Heading } from "./Sky";
const NavHeading = styled.button`
font-family: 'Poppins';
font-size: 20px;
 @media (max-width: 500px) {
     font-size: 15px;
  }
color: white;
padding-left: 10px;
padding-right: 10px;
border: none;
background-color: transparent;
cursor: pointer ;

`;
const Switch = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
   @media (max-width: 500px) {
     width: 54px;
  height: 24px;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #73C0FC;
  transition: .4s;
  border-radius: 30px;

  &::before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
      @media (max-width: 500px) {
     width: 20px;
  height: 20px;
  }
    border-radius: 20px;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    background-color: #e8e8e8;
    transition: .4s;
  }
`;

const SwitchInputChecked = styled(SwitchInput)`
  &:checked + ${Slider} {
    background-color:#181829;
  }

  &:checked + ${Slider}::before {
    transform: translateX(30px); // Moves the circle when checked
  }
`;

const SunContainer = styled.div`
  position: absolute;
  top: 6px;
  left: 36px;
  z-index: 1;
  width: 32px;
  height: 32px;
   @media (max-width: 500px) {
  top: 1px;
    left: 32px;
  }
`;

const MoonContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  width: 32px;
  height: 32px;
   @media (max-width: 500px) {
  top: 1px;
  }
`;

const MoonStarsIcon = styled(MoonStars)`
height: 24px;
width: 24px;

 @media (max-width: 500px) {
     width: 14px;
  height: 14px;
  }
`;

const SunIcon = styled(Sun)`
height: 24px;
width: 24px;

 @media (max-width: 500px) {
  top: 3px;
     width: 14px;
  height: 14px;
  }
`;

type Props = {
  colourScheme: string;
  setColourScheme: React.Dispatch<React.SetStateAction<string>>;
  aboutMeRef: React.RefObject<HTMLDivElement | null>;
  myWorkRef: React.RefObject<HTMLDivElement | null>;
  contactMeRef: React.RefObject<HTMLDivElement | null>;
}

export default function NavBar({ setColourScheme, colourScheme, aboutMeRef, myWorkRef, contactMeRef }: Props) {
  const onChange = (e: { target: { checked: any; }; }) => {
    setColourScheme(e.target?.checked ? 'dark' : 'light');
  };

  const scrollToAboutMe = () =>{
    aboutMeRef?.current?.scrollIntoView({behavior: "smooth"})    
  };

  const scrollToMyWork = () =>{
    myWorkRef?.current?.scrollIntoView({behavior: "smooth"})    
  };

  const scrollToContactMe = () =>{
    contactMeRef?.current?.scrollIntoView({behavior: "smooth"})    
  };

  return (
    <Container
      backgroundcolor={'transparent'}
      width={'100%'}
      height={'60px'}
      position={'sticky'}
      display={'flex'}
      customstyle={'top: 0; z-index: 3; backdrop-filter: blur(10px); align-items: center; box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 15%), 0px 1px 3px 0px rgba(0, 0, 0, 30%);'}
    >
        <Container alignself={'center'}
        customstyle={'flex-grow: 1; justify-content: start;'}
        paddingtop={'5px'}>
            <Heading style={{fontSize: '30px'}}> KA</Heading>
        </Container>
      <Container
        alignself={'center'}
        customstyle={'flex-grow: 1; justify-content: flex-end; display: flex;'}
        paddingright={'5px'}
        paddingtop={'13px'}
      >
        <NavHeading onClick={() => {scrollToAboutMe();}}>
        About me
        </NavHeading>
        <NavHeading onClick={() => {scrollToMyWork();}}>
        My work
        </NavHeading>
        <NavHeading onClick={() => {scrollToContactMe();}}>
        Contact me
        </NavHeading>
        <Switch>
          <SwitchInputChecked
            type="checkbox"
            checked={colourScheme === 'dark'}
            onChange={onChange}
            className="input"
          />
          <Slider>
            {colourScheme === 'light' ? (
              <SunContainer><SunIcon fill='#FFDF22' size={24}/></SunContainer>
            ) : (
              <MoonContainer><MoonStarsIcon fill='#EDE7C5' size={24}/></MoonContainer>
            )}
          </Slider>
        </Switch>
      </Container>
    </Container>
  );
}
