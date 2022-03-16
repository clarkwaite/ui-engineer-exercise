import React, { useState } from "react";
import ComponentSelector from "./ComponentSelector";
import Activity from "./Activity";
import Tracking from "./Tracking";
import Reminders from "./Reminders";

const componentViews = {
  activity: <Activity />,
  tracking: <Tracking />,
  reminders: <Reminders />,
};

const PeopleDashboard = () => {
  const [view, setView] = useState("activity");

  return (
    <>
      <ComponentSelector view={view} setView={setView} />
      <div>{componentViews[view]}</div>
    </>
  );
};

export default PeopleDashboard;
