import styled from 'styled-components';
import useBackgroundColor  from './color';

const BackgroundSectorDiv = styled.div<{  backgroundColor?: string;}>`
    width: 100%;
    height: auto;
    display: flex;
    background: ${({ backgroundColor }) => backgroundColor};   `

type Props = {
    colour: string;
    children?: React.ReactNode;
    colourScheme: string;

}

export default function BackgroundSector({ colour, children, colourScheme } : Props) {
const backgroundColor = useBackgroundColor(colour, colourScheme);
    return (
        <BackgroundSectorDiv backgroundColor={backgroundColor}>
            {children}
        </BackgroundSectorDiv>
    );
}