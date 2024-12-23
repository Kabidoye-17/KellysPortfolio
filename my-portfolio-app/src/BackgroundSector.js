import styled from 'styled-components';
import useBackgroundColor  from './color';

const BackgroundSectorDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    background: ${(props) => props.backgroundColor};  `

export default function BackgroundSector({ colour, children, colourScheme }) {
const backgroundColor = useBackgroundColor(colour, colourScheme)
    return (
        <BackgroundSectorDiv backgroundColor={backgroundColor}>
            {children}
        </BackgroundSectorDiv>
    );
}