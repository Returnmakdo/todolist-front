import styled from "styled-components";
import { Flexbox } from "../styles/flex";

/** 만능버튼 */
function Button(props) {
  const {
    _width,
    children,
    _onClick,
    _padding,
    _bgColor,
    _color,
    _fontSize,
    _fontWeight,
    borderRadius,
    _hoverColor,
    _hoverBgColor,
  } = props;

  const styles = {
    _width,
    _padding,
    _bgColor,
    _color,
    _fontSize,
    _fontWeight,
    borderRadius,
    _hoverColor,
    _hoverBgColor,
  };
  return (
    <Btn {...styles} onClick={_onClick}>
      {children}
    </Btn>
  );
}

Button.defaultProps = {
  _onClick: () => {},
  _width: "120px",
  _padding: "12px",
  _bgColor: "#242424",
  _color: "#ffffff",
  _fontSize: "14px",
  borderRadius: "8px",
  _fontWeight: "500",
  _hoverColor: "#ffffff",
  _hoverBgColor: "#292929d7",
};

export default Button;

const Btn = styled.button`
  ${Flexbox};
  width: ${(props) => props._width || "100%"};
  padding: ${(props) => props._padding};
  background-color: ${(props) => props._bgColor};
  font-size: ${(props) => props._fontSize};
  font-weight: ${(props) => props._fontWeight};
  color: ${(props) => props._color};
  border-radius: ${(props) => props.borderRadius};
  &:hover {
    color: ${(props) => props._hoverColor};
    background-color: ${(props) => props._hoverBgColor};
  }
`;
