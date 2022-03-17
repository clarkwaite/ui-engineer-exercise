import React from "react";
import { default as PaperPlaneIcon } from "../../../../../_starter/shared/Icons/PaperPlane";
import { default as VoicemailIcon } from "../../../../../_starter/shared/Icons/Voicemail";
import { default as BadgeIcon } from "../../../../../_starter/shared/Icons/Badge";
import { default as PhoneIcon } from "../../../../../_starter/shared/Icons/Phone";
import { default as ReplyIcon } from "../../../../../_starter/shared/Icons/Reply";
import { default as RocketIcon } from "../../../../../_starter/shared/Icons/Rocket";
import { default as ClickIcon } from "../../../../../_starter/shared/Icons/Click";
import { default as EyeIcon } from "../../../../../_starter/shared/Icons/Eye";
import dayjs from "dayjs";
import { secondsToMinutes } from "../../../../../Utils/HelperFunctions";
import {
  ActivityCardWrapper,
  Card,
  DateTime,
  CardTitle,
  CardSubtext,
  EmailContent,
  EmailIcon,
  IconWrapper,
} from "./ActivityCard.styles";

const ActivityCard = ({ activityData }) => {
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
