import React, { useState } from "react";
import styled from "styled-components";

const ComponentSelector = styled.div`
  max-width: 667px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
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
  border-bottom: ${(props) => (props.selected ? "1px solid blue" : "none")};
`;

const PeopleDashboard = () => {
  const [view, setView] = useState("activity");

  const componentView = {
    activity: (
      <div>
        <div>Activity Tracking Reminders</div>
        <div>Person Activity Filters</div>
        <div>Past Activities</div>
        <div>Future Activities</div>
      </div>
    ),
    tracking: <div>Tracking</div>,
    reminders: <div>Reminders</div>,
  };

  return (
    <>
      <ComponentSelector>
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
      </ComponentSelector>

      <div>{componentView[view]}</div>
    </>
  );
};

export default PeopleDashboard;
