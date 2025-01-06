import styled from 'styled-components';
import useBackgroundColor  from './color';

const BackgroundSectorDiv = styled.div<{  backgroundcolor?: string;}>`
    width: 100%;
    height: auto;
    display: flex;
    background: ${({ backgroundcolor }) => backgroundcolor};   `

type Props = {
    colour: string;
    children?: React.ReactNode;
    colourScheme: string;

}

export default function BackgroundSector({ colour, children, colourScheme } : Props) {
const backgroundcolor = useBackgroundColor(colour, colourScheme);
    return (
        <BackgroundSectorDiv backgroundcolor={backgroundcolor}>
            {children}
        </BackgroundSectorDiv>
    );
}