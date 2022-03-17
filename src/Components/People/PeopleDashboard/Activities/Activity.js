import React from "react";
import DisplayActivities from "./DisplayActivities";
import styled from "styled-components";
import { getColor } from "../../../../_starter/theme/theme";
import { default as ChevronSmDownIcon } from "../../../../_starter/shared/Icons/ChevronSmDown";
import { default as PlusIcon } from "../../../../_starter/shared/Icons/Plus";
import { default as PhoneIcon } from "../../../../_starter/shared/Icons/Phone";

const PersonFilterButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 86px;
  height: 30px;
  background-color: ${getColor("blue")};
  border: 1px solid ${getColor("blue")};
  border-radius: 4px;
  color: ${getColor("white")};
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  justify-content: center;
`;

const ButtonSeparator = styled.span`
  width: 1px;
  height: 28px;
  background-color: ${getColor("greyLightest")};
  margin: 0px 10px;
`;

const ActivityFilterButton = styled(PersonFilterButton)`
  background-color: ${getColor("white")};
  color: ${getColor("greyDarkest")};
  border: 1px solid ${getColor("greyLightest")};
`;

const ActivityButtonsWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 16px 0px 0px 21px;
  align-items: center;
`;

const ActivityUtilsWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const ActivityFilters = styled.span`
  display: flex;
  align-items: center;
`;

const ButtonIcon = styled.span`
  font-size: 14px;
  margin: 5px 0px 0px 5px;
`;

const UtilIcon = styled.span`
  font-size: 14px;
  margin: 6px 7px 0px 0px;
`;

const ActivityUtils = styled.span`
  font-size: 14px;
  line-height: 16px;
  margin-right: 26px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${getColor("blue")};
`;

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
    Add A Note
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
  <div>
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
