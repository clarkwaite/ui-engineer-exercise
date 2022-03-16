import React from "react";
import DisplayActivities from "./DisplayActivities";

const Activity = () => (
  <div>
    <div>Person Activity Filters</div>

    <DisplayActivities
      endpoint={"upcoming_activities"}
      activityType={"Upcoming Activities"}
    />

    <DisplayActivities
      endpoint={"past_activities"}
      activityType={"Past Activities"}
    />
  </div>
);

export default Activity;
