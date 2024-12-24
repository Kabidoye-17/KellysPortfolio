import styled from "styled-components";

type Props = {
  height?: string;
  width?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  padding?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  borderTop?: string;
  border?: string;
  backgroundColor?: string;
  position?: string;
  alignSelf?: string;
  justifySelf?: string;
  display?:string;
  customStyle?: string;
  children?: React.ReactNode;
};

const StyledContainer = styled.div<{
  height?: string;
  width?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  padding?: string;
  borderLeft?: string;
  borderRight?: string;
  borderBottom?: string;
  borderTop?: string;
  border?: string;
  backgroundColor?: string;
  position?: string;
  alignSelf?: string;
  justifySelf?: string;
  display?: string;
  customStyle?: string;
}>`
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  padding-left: ${({ paddingLeft }) => paddingLeft || '0'};
  padding-right: ${({ paddingRight }) => paddingRight || '0'};
  padding-top: ${({ paddingTop }) => paddingTop || '0'};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || '0'};
  padding: ${({ padding }) => padding};
  border-left: ${({ borderLeft }) => borderLeft || 'none'};
  border-right: ${({ borderRight }) => borderRight || 'none'};
  border-bottom: ${({ borderBottom }) => borderBottom || 'none'};
  border-top: ${({ borderTop }) => borderTop || 'none'};
  border: ${({ border }) => border };
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  position: ${({ position }) => position || 'static'};
  align-self: ${({ alignSelf }) => alignSelf || 'auto'};
  justify-self: ${({ justifySelf }) => justifySelf || 'auto'};
  display: ${({ display }) => display};
  ${({ customStyle }) => customStyle};
`;

export default function Container({
  height,
  width,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  padding,
  borderLeft,
  borderRight,
  borderBottom,
  borderTop,
  border,
  backgroundColor,
  position,
  alignSelf,
  justifySelf,
  display,
  customStyle,
  children
}: Props){
  return (
    <StyledContainer
      height={height}
      width={width}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      padding={padding}
      backgroundColor={backgroundColor}
      position={position}
      alignSelf={alignSelf}
      justifySelf={justifySelf}
      customStyle={customStyle}
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
