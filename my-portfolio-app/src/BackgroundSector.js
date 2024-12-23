import styled from 'styled-components';
import getBackgroundColor from './color';

const BackgroundSectorDiv = styled.div`
    width: 100%;
    height: 710px;
    display: flex;
    background: ${(props) => props.backgroundColor};  `

export default function BackgroundSector({ colour, children }) {
const backgroundColor = getBackgroundColor(colour)
    return (
        <BackgroundSectorDiv backgroundColor={backgroundColor}>
            {children}
        </BackgroundSectorDiv>
    );
}