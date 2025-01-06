import styled from "styled-components";

type Props = {
  height?: string;
  width?: string;
  paddingLeft?: string;
  paddingright?: string;
  paddingtop?: string;
  paddingbottom?: string;
  padding?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  borderTop?: string;
  border?: string;
  backgroundcolor?: string;
  position?: string;
  alignself?: string;
  justifyself?: string;
  display?:string;
  customstyle?: string;
  children?: React.ReactNode;
};

const StyledContainer = styled.div<{
  height?: string;
  width?: string;
  paddingLeft?: string;
  paddingright?: string;
  paddingtop?: string;
  paddingbottom?: string;
  padding?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  borderTop?: string;
  border?: string;
  backgroundcolor?: string;
  position?: string;
  alignself?: string;
  justifyself?: string;
  display?: string;
  customstyle?: string;
}>`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
  padding-right: ${({ paddingright }) => paddingright || '0'};
  padding-top: ${({ paddingtop }) => paddingtop || '0'};
  padding-bottom: ${({ paddingbottom }) => paddingbottom || '0'};
  padding: ${({ padding }) => padding};
  border-left: ${({ borderLeft }) => borderLeft || 'none'};
  border-right: ${({ borderRight }) => borderRight || 'none'};
  border-bottom: ${({ borderBottom }) => borderBottom || 'none'};
  border-top: ${({ borderTop }) => borderTop || 'none'};
  border: ${({ border }) => border };
  background-color: ${({ backgroundcolor }) => backgroundcolor || 'transparent'};
  position: ${({ position }) => position || 'static'};
  align-self: ${({ alignself }) => alignself || 'auto'};
  justify-self: ${({ justifyself }) => justifyself || 'auto'};
  display: ${({ display }) => display};
  ${({ customstyle }) => customstyle};
`;

export default function Container({
  height,
  width,
  paddingLeft,
  paddingright,
  paddingtop,
  paddingbottom,
  padding,
  borderLeft,
  borderRight,
  borderBottom,
  borderTop,
  border,
  backgroundcolor,
  position,
  alignself,
  justifyself,
  display,
  customstyle,
  children
}: Props){
  return (
    <StyledContainer
      height={height}
      width={width}
      paddingLeft={paddingLeft}
      paddingright={paddingright}
      paddingtop={paddingtop}
      paddingbottom={paddingbottom}
      padding={padding}
      backgroundcolor={backgroundcolor}
      position={position}
      alignself={alignself}
      justifyself={justifyself}
      customstyle={customstyle}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderTop={borderTop}
      border={border}
      display={display}
    >
      {children}
    </StyledContainer>
  );
}
