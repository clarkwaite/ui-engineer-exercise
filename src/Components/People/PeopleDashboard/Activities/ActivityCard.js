import React from "react";
import { default as PaperPlaneIcon } from "../../../../_starter/shared/Icons/PaperPlane";
import { default as VoicemailIcon } from "../../../../_starter/shared/Icons/Voicemail";
import { default as BadgeIcon } from "../../../../_starter/shared/Icons/Badge";
import { default as PhoneIcon } from "../../../../_starter/shared/Icons/Phone";
import { default as ReplyIcon } from "../../../../_starter/shared/Icons/Reply";
import { default as RocketIcon } from "../../../../_starter/shared/Icons/Rocket";
import { default as ClickIcon } from "../../../../_starter/shared/Icons/Click";
import { default as EyeIcon } from "../../../../_starter/shared/Icons/Eye";

import dayjs from "dayjs";
import styled from "styled-components";
import { secondsToMinutes } from "../../../../Utils/HelperFunctions";

const ActivityCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 49px auto;
  margin-bottom: 8px;
  align-items: center;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
  height: 66px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 16px;
  align-items: center;
  grid-gap: 7px;
  text-align: left;
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
  color: ${(props) => props.color || "#4f5359"};
  font-weight: ${(props) => props.weight || "600"};
  font-style: normal;
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
`;

const CardSubtext = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #7a7f88;
  text-align: left;
  display: flex;
  align-items: center;
`;

const EmailContent = styled.span`
  font-weight: 400;
`;

const IconWrapper = styled.span`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  mix-blend-mode: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 14px;
`;

const EmailIcon = styled.span`
  color: #7b7f87;
  font-size: 12px;
  line-height: 12px;
  margin: 0px 2px 0px 8px;
  display: flex;
  align-items: center;
`;

const ActivityCard = ({ activityData }) => {
  console.log(activityData);
  const dateOccurred = dayjs(activityData.occurred_at).format("MMM D, YYYY");
  const timeOccurred = dayjs(activityData.occurred_at).format("HH:mm A");

  const emailNameAndIcons = () => {
    return (
      <CardSubtext>
        <span>{activityData.dynamic_data.user_name} | </span>
        <>
          <EmailIcon>
            <EyeIcon />
            {activityData.dynamic_data.counts.views}
          </EmailIcon>
          <EmailIcon>
            <ClickIcon />
            {activityData.dynamic_data.counts.clicks}
          </EmailIcon>
          <EmailIcon>
            <ReplyIcon />
            {activityData.dynamic_data.counts.replies}
          </EmailIcon>
        </>
      </CardSubtext>
    );
  };

  const determineCard = () => {
    switch (activityData.type) {
      case "added_to_cadence":
        return (
          <ActivityCardWrapper>
            <IconWrapper background="#F0F9FE" color="#417CAA">
              <RocketIcon />
            </IconWrapper>
            <Card>
              <CardTitle>
                <span>Added to Cadence </span>
                <CardTitle color="#417CAA">
                  {activityData.dynamic_data.cadence_name}
                </CardTitle>
              </CardTitle>
              <DateTime>{dateOccurred}</DateTime>
              <CardSubtext>
                <span>
                  Added by {activityData.dynamic_data.user_name} | Assigned to{" "}
                  {activityData.static_data.instigator.action_caller_name}
                </span>
              </CardSubtext>
              <DateTime>{timeOccurred}</DateTime>
            </Card>
          </ActivityCardWrapper>
        );
      case "call":
        return (
          <ActivityCardWrapper>
            <IconWrapper background="#E7F8F8" color="#17BBB6">
              <PhoneIcon />
            </IconWrapper>
            <Card>
              <CardTitle>{activityData.static_data.sentiment}</CardTitle>
              <DateTime>{dateOccurred}</DateTime>
              <CardSubtext>
                <span>
                  {activityData.dynamic_data.user_name} with{" "}
                  {activityData.dynamic_data.phone_number}
                </span>
              </CardSubtext>
              <DateTime>{timeOccurred}</DateTime>
            </Card>
          </ActivityCardWrapper>
        );
      case "email_reply":
        return (
          <ActivityCardWrapper>
            <IconWrapper background="#EDEEFA" color="#2A409C">
              <ReplyIcon />
            </IconWrapper>
            <Card>
              <CardTitle>
                <CardTitle color="#417CAA" weight="600">
                  RE: {activityData.static_data.in_reply_to_subject}
                </CardTitle>{" "}
                <EmailContent>{activityData.static_data.body}</EmailContent>
              </CardTitle>
              <DateTime>{dateOccurred}</DateTime>
              {emailNameAndIcons()}
              <DateTime>{timeOccurred}</DateTime>
            </Card>
          </ActivityCardWrapper>
        );
      case "sent_email":
        return (
          <ActivityCardWrapper>
            <IconWrapper background="#EDEEFA" color="#2A409C">
              <PaperPlaneIcon />
            </IconWrapper>
            <Card>
              <CardTitle color="#417CAA">
                <span>{activityData.static_data.subject}</span>
              </CardTitle>
              <DateTime>{dateOccurred}</DateTime>
              {emailNameAndIcons()}
              <DateTime>{timeOccurred}</DateTime>
            </Card>
          </ActivityCardWrapper>
        );
      case "success":
        return (
          <ActivityCardWrapper>
            <IconWrapper background="#EDEEFA" color="#2A409C">
              <BadgeIcon />
            </IconWrapper>
            <Card>
              <CardTitle>Marked as Success</CardTitle>
              <DateTime>{dateOccurred}</DateTime>
              <CardSubtext>{activityData.dynamic_data.user_name}</CardSubtext>
              <DateTime>{timeOccurred}</DateTime>
            </Card>
          </ActivityCardWrapper>
        );
      case "voicemail":
        return (
          <ActivityCardWrapper>
            <IconWrapper background="#E7F8F8" color="#17BBB6">
              <VoicemailIcon />
            </IconWrapper>
            <Card>
              <CardTitle>
                <span>Voicemail Received </span>
                <CardTitle weight="400">
                  {secondsToMinutes(
                    activityData.dynamic_data.voicemail_duration
                  )}
                </CardTitle>
              </CardTitle>
              <DateTime>{dateOccurred}</DateTime>
              <CardSubtext>
                <span>
                  {activityData.dynamic_data.user_name} to{" "}
                  {activityData.dynamic_data.user_name}
                </span>
              </CardSubtext>
              <DateTime>{timeOccurred}</DateTime>
            </Card>
          </ActivityCardWrapper>
        );
      default:
        return "";
    }
  };

  return determineCard();
};

export default ActivityCard;
