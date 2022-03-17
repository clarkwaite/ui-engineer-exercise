import React, { useState, useEffect } from "react";
import FetchFromAPI from "../../../../Utils/FetchFromAPI";
import { Loading } from "../../../CommonComponents/Loading";
import { DefaultError } from "../../../CommonComponents/Errors";
import ActivityCard from "./ActivityCard/ActivityCard";
import { getColor } from "../../../../_starter/theme/theme";
import styled from "styled-components";

const ActivityTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: ${getColor("greyDark")};
  margin: 16px 0px 0px 21px;
`;

const NoActivities = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${getColor("greyDark")};
`;

const DisplayActivitiesContainer = styled.div`
  text-align: center;
  margin: 16px 20px;
`;

const DisplayActivities = ({ endpoint, activityType }) => {
  const [activities, setActivities] = useState("");

  useEffect(() => {
    let url = `https://ui-offline-exercise.s3.amazonaws.com/data/${endpoint}/1.json`;
    FetchFromAPI(url).then((data) => {
      setActivities(data);
    });
  }, [setActivities, endpoint]);

  if (!activities) {
    return <Loading />;
  }

  if (activities === "error") {
    return <DefaultError />;
  }

  const mapActivities = () => {
    return activities.data.length ? (
      activities.data.map((a) => <ActivityCard activityData={a} />)
    ) : (
      <NoActivities>
        Once actions are scheduled, they’ll appear here
      </NoActivities>
    );
  };

  return (
    <div>
      <ActivityTitle>{activityType}</ActivityTitle>
      <DisplayActivitiesContainer>{mapActivities()}</DisplayActivitiesContainer>
    </div>
  );
};

export default DisplayActivities;
