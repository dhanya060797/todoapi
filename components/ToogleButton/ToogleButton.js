import React, { useState } from "react";
import styled from "styled-components";

const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const ToggleText = styled.span`
  margin-top: 0.5rem;
  font-size: 10px;
`;

const ToggleButton = (props) => {
  const { isToggle,onToggleChange } = props;

  const [toggleState, setToggleState] = useState(isToggle);
  const ToggleChange = () => {
    onToggleChange();
    setToggleState(!toggleState);
  };
  return (
    <>
      <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          checked={toggleState}
          onChange={ToggleChange}
        />
        <CheckBoxLabel htmlFor="checkbox" />
        <ToggleText>{isToggle ? "Mark as done" : "Mark as undone"}</ToggleText>
      </CheckBoxWrapper>
    </>
  );
};

export default ToggleButton;