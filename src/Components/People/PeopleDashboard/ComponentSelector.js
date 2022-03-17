import React from "react";
import styled from "styled-components";

const ComponentSelectorWrapper = styled.div`
  max-width: 667px;
  height: 48px;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-left: 17px;
`;

const SelectorText = styled.div`
  margin-right: 24px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  color: #3a3a3a;
  font-weight: ${(props) => (props.selected ? "600" : "400")};
  box-shadow: ${(props) =>
    props.selected ? "inset 0 -11px 1px -8px #4dc6ff" : "none"};
`;

const ComponentSelector = ({ view, setView }) => (
  <ComponentSelectorWrapper>
    <SelectorText
      selected={view === "activity"}
      onClick={() => setView("activity")}
    >
      Activity
    </SelectorText>
    <SelectorText
      selected={view === "tracking"}
      onClick={() => setView("tracking")}
    >
      Tracking
    </SelectorText>
    <SelectorText
      selected={view === "reminders"}
      onClick={() => setView("reminders")}
    >
      Reminders
    </SelectorText>
  </ComponentSelectorWrapper>
);

export default ComponentSelector;
