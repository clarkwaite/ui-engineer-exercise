import React, { useState, useEffect } from "react";
import FetchFromAPI from "../../../Utils/FetchFromAPI";
import { Loading } from "../../CommonComponents/Loading";
import { DefaultError } from "../../CommonComponents/Errors";

const DisplayActivities = ({ endpoint, activityType }) => {
  const [activities, setActivities] = useState("");

  useEffect(() => {
    let url = `https://ui-offline-exercise.s3.amazonaws.com/data/${endpoint}/1.json`;
    FetchFromAPI(url).then((data) => {
      setActivities(data);
    });
  }, [setActivities]);

  if (!activities) {
    return <Loading />;
  }

  if (activities === "error") {
    return <DefaultError />;
  }

  console.log("PAST ACTIVITIES", activities);

  const displayActivities = () => {
    return activities.data.map((a) => (
      <div key={a.id}>{a.dynamic_data.user_name}</div>
    ));
  };

  return (
    <div>
      <div>{activityType}</div>
      {displayActivities()}
    </div>
  );
};

export default DisplayActivities;
