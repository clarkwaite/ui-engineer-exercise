import React from "react";
import DisplayActivities from "./DisplayActivities";
import { default as ChevronSmDownIcon } from "../../../../_starter/shared/Icons/ChevronSmDown";
import { default as PlusIcon } from "../../../../_starter/shared/Icons/Plus";
import { default as PhoneIcon } from "../../../../_starter/shared/Icons/Phone";
import {
  PersonFilterButton,
  ButtonSeparator,
  ActivityFilterButton,
  ActivityButtonsWrapper,
  ActivityUtilsWrapper,
  ActivityFilters,
  ButtonIcon,
  UtilIcon,
  ActivityUtils,
} from "./Activity.styles";

const PersonButton = () => (
  <PersonFilterButton>
    Person
    <ButtonIcon>
      <ChevronSmDownIcon />
    </ButtonIcon>
  </PersonFilterButton>
);

const ActivityButton = () => (
  <ActivityFilterButton>
    Activity
    <ButtonIcon>
      <ChevronSmDownIcon />
    </ButtonIcon>
  </ActivityFilterButton>
);

const AddNote = () => (
  <ActivityUtils>
    <UtilIcon>
      <PlusIcon />
    </UtilIcon>
    Add a Note
  </ActivityUtils>
);

const LogCall = () => (
  <ActivityUtils>
    <UtilIcon>
      <PhoneIcon />
    </UtilIcon>
    Log a Call
  </ActivityUtils>
);

const Activity = () => (
  <div data-testid="activity-head">
    <ActivityButtonsWrapper>
      <ActivityFilters>
        <PersonButton />
        <ButtonSeparator />
        <ActivityButton />
      </ActivityFilters>
      <ActivityUtilsWrapper>
        <LogCall />
        <AddNote />
      </ActivityUtilsWrapper>
    </ActivityButtonsWrapper>

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
