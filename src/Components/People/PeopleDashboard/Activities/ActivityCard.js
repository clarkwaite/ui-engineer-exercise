import React from "react";
import { default as PaperPlaneIcon } from "../../../../_starter/shared/Icons/PaperPlane";
import dayjs from "dayjs";
import styled from "styled-components";

const ActivityCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 49px auto;
  margin-bottom: 8px;
  align-items: center;
`;

const IconContainer = styled.div`
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #17bbb6;
  mix-blend-mode: normal;
  opacity: 0.1;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
  grid-template-rows: 1fr 1fr;
  height: 66px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 16px;
  align-items: center;
  grid-gap: 7px;
}
`;

const DateTime = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #7a7f88;
  font-style: normal;
  text-align: right;
`;

const CardTitle = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #4f5359;
  text-align: left;
`;

const CardSubtext = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #7a7f88;
  text-align: left;
`;

const ActivityCard = ({ activityData }) => {
  console.log(activityData);
  const dateOccurred = dayjs(activityData.occurred_at).format("MMM D, YYYY");
  const timeOccurred = dayjs(activityData.occurred_at).format("HH:mm A");

  const determineCardTitle = () => {
    switch (activityData.type) {
      case "added_to_cadence":
        return <CardTitle>{activityData.type}</CardTitle>;
      case "call":
        return <CardTitle>{activityData.type}</CardTitle>;
      case "email_reply":
        return <CardTitle>{activityData.type}</CardTitle>;
      case "sent_email":
        return <CardTitle>{activityData.type}</CardTitle>;
      case "success":
        return <CardTitle>{activityData.type}</CardTitle>;
      case "voicemail":
        return <CardTitle>{activityData.type}</CardTitle>;
      default:
        return <CardTitle>{activityData.type}</CardTitle>;
    }
  };

  const determineCardSubtext = () => {
    switch (activityData.type) {
      case "added_to_cadence":
        return <CardSubtext>{activityData.dynamic_data.user_name}</CardSubtext>;
      case "call":
        return <CardSubtext>{activityData.dynamic_data.user_name}</CardSubtext>;
      case "email_reply":
        return <CardSubtext>{activityData.dynamic_data.user_name}</CardSubtext>;
      case "sent_email":
        return <CardSubtext>{activityData.dynamic_data.user_name}</CardSubtext>;
      case "success":
        return <CardSubtext>{activityData.dynamic_data.user_name}</CardSubtext>;
      case "voicemail":
        return <CardSubtext>{activityData.dynamic_data.user_name}</CardSubtext>;
      default:
        return <CardSubtext>{activityData.dynamic_data.user_name}</CardSubtext>;
    }
  };

  return (
    <ActivityCardWrapper>
      <IconContainer>
        <PaperPlaneIcon />
      </IconContainer>
      <Card>
        <CardTitle>{determineCardTitle()}</CardTitle>
        <DateTime>{dateOccurred}</DateTime>
        <CardSubtext>{determineCardSubtext()}</CardSubtext>
        <DateTime>{timeOccurred}</DateTime>
      </Card>
    </ActivityCardWrapper>
  );
};

export default ActivityCard;
