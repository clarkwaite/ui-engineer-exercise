import React, { useState } from "react";
import ComponentSelector from "./ComponentSelector";
import Activity from "./Activities/Activity";
import Tracking from "./Tracking";
import Reminders from "./Reminders";
import styled from "styled-components";

const PeopleDashboardContainer = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  height: 1095px;
  margin-bottom: 43px;
`;

const componentViews = {
  activity: <Activity />,
  tracking: <Tracking />,
  reminders: <Reminders />,
};

const PeopleDashboard = () => {
  const [view, setView] = useState("activity");

  return (
    <PeopleDashboardContainer>
      <ComponentSelector view={view} setView={setView} />
      <div>{componentViews[view]}</div>
    </PeopleDashboardContainer>
  );
};

export default PeopleDashboard;
