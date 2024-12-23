import Container from "./Container";
import { Sun, MoonStars } from "@phosphor-icons/react";
import styled from "styled-components";
const NavHeading = styled.button`
font-family: 'Poppins';
font-size: 20px;
color: white;
padding-left: 10px;
padding-right: 10px;
border: none;
background-color: transparent;

`;
const Switch = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
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
    background-color: #183153;
  }

  &:checked + ${Slider}::before {
    transform: translateX(30px); // Moves the circle when checked
  }
`;

const SunIcon = styled.div`
  position: absolute;
  top: 6px;
  left: 36px;
  z-index: 1;
  width: 32px;
  height: 32px;
`;

const MoonIcon = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  width: 32px;
  height: 32px;
`;

export default function NavBar({ setColourScheme, colourScheme }) {
  const onChange = (e) => {
    setColourScheme(e.target.checked ? 'dark' : 'light');
  };

  return (
    <Container
      backgroundColor={'transparent'}
      width={'100%'}
      height={'60px'}
      position={'sticky'}
      display={'flex'}
      customStyle={'top: 0; z-index: 1; backdrop-filter: blur(10px); align-items: center; box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 15%), 0px 1px 3px 0px rgba(0, 0, 0, 30%);'}
    >
      <Container
        alignSelf={'center'}
        customStyle={'flex-grow: 1; justify-content: flex-end; display: flex;'}
        paddingRight={'5px'}
        paddingTop={'13px'}
      >
        <NavHeading>
        About me
        </NavHeading>
        <NavHeading>
        My work
        </NavHeading>
        <NavHeading>
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
              <SunIcon><Sun fill='#FFDF22' size={24}/></SunIcon>
            ) : (
              <MoonIcon><MoonStars fill='#EDE7C5' size={24}/></MoonIcon>
            )}
          </Slider>
        </Switch>
      </Container>
    </Container>
  );
}
