import React from "react";
import PersonCard from "./PersonCard/PersonCard";
import PeopleDashboard from "./PeopleDashboard/PeopleDashboard";
import {
  PeopleBanner,
  GridContainer,
  GridWrapper,
  GridItem,
  PeopleContainer,
} from "./People.styles";

const People = () => {
  return (
    <PeopleContainer>
      <PeopleBanner>People</PeopleBanner>
      <GridContainer>
        <GridWrapper>
          <GridItem height="166px">
            <PersonCard name={"people"} />
          </GridItem>
          <GridItem height="238px"></GridItem>
          <GridItem height="144px"></GridItem>
          <GridItem height="536px"></GridItem>
        </GridWrapper>
        <GridWrapper>
          <GridItem height="1095px">
            <PeopleDashboard />
          </GridItem>
        </GridWrapper>
        <GridWrapper>
          <GridItem height="226px"></GridItem>
          <GridItem height="428px"></GridItem>
          <GridItem height="194px"></GridItem>
          <GridItem height="213px"></GridItem>
        </GridWrapper>
      </GridContainer>
    </PeopleContainer>
  );
};

export default People;
