import React from "react";
import UpcomingActivities from "./UpcomingActivities";
import PastActivities from "./PastActivities";

const Activity = () => (
  <div>
    <div>Person Activity Filters</div>

    <UpcomingActivities />

    <PastActivities />
  </div>
);

export default Activity;
