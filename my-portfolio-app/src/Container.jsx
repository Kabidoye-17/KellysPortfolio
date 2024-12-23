import styled from "styled-components";

const StyledContainer = styled.div`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  margin: 0 auto;
  padding-left: ${(props) => props.paddingLeft || '0'};
  padding-right: ${(props) => props.paddingRight || '0'};
  padding-top: ${(props) => props.paddingTop || '0'};
  padding-bottom: ${(props) => props.paddingBottom || '0'};
  padding: ${(props) => props.padding}; 
  display: ${(props) => props.display || 'block'}; 
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  position: ${(props) => props.position || 'static'};
  align-self: ${(props) => props.alignSelf || 'auto'};
    justify-self: ${(props) => props.justifySelf || 'auto'};
    border: ${(props) => props.border};
 border-left: ${(props) => props.borderLeft || 'none'};
  border-right: ${(props) => props.borderRight || 'none'};
  border-top: ${(props) => props.borderTop || 'none'};
  border-bottom: ${(props) => props.borderBottom || 'none'};
${(props) => props.customStyle};
  
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
  customStyle,
  children
}) {
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
    >
      {children}
    </StyledContainer>
  );
}
