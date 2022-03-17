import React, { useState } from "react";
import ComponentSelector from "./ComponentSelector";
import Activity from "./Activity/Activity";
import Tracking from "./Tracking";
import Reminders from "./Reminders";
import styled from "styled-components";
import { getColor } from "../../../_starter/theme/theme";

const PeopleDashboardContainer = styled.div`
  background: ${getColor("white")};
  border-bottom: 1px solid #${getColor("greyLightest")};
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
