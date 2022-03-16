import React, { useEffect, useState } from "react";
import FetchFromAPI from "./../../Utils/FetchFromAPI";
import { default as LinkedInIcon } from "../../_starter/shared/Icons/LinkedIn";
import { default as LinkIcon } from "../../_starter/shared/Icons/Link";
import { default as CloudIcon } from "../../_starter/shared/Icons/Cloud";
import { default as TwitterIcon } from "../../_starter/shared/Icons/Twitter";
import { default as EllipsisHorizontalIcon } from "../../_starter/shared/Icons/EllipsisHorizontal";
import { default as StarOutlinedIcon } from "../../_starter/shared/Icons/StarOutlined";
import {
  IconWrapper,
  IconContainer,
  PersonCardHeader,
  PersonCardBody,
  PersonName,
  PersonTitle,
  PersonCompany,
  ErrorWrapper,
} from "./PersonCard.styles";

const PCBodyIcons = [
  { Icon: <CloudIcon />, color: "#049BE5" },
  { Icon: <LinkedInIcon />, color: "#0077B5" },
  { Icon: <TwitterIcon />, color: "#08A0E9" },
  { Icon: <LinkIcon />, color: "#3A3A3A" },
];

const PCHeaderIcons = [
  { Icon: <StarOutlinedIcon />, color: "#FFA726" },
  { Icon: <EllipsisHorizontalIcon />, color: "#3A3A3A" },
];

const createIcons = (icons) => {
  return icons.map((icon, i) => (
    <IconWrapper color={icon.color} key={i}>
      {icon.Icon}
    </IconWrapper>
  ));
};

//this could easily be reusable by passing in the name in the api call
const PersonCard = (props) => {
  const [person, setPerson] = useState("");

  useEffect(() => {
    let personEndpoint = `https://ui-offline-exercise.s3.amazonaws.com/data/${props.name}.json`;
    FetchFromAPI(personEndpoint).then((data) => {
      setPerson(data);
    });
  }, [setPerson]);

  //covers if the api call is slow
  if (!person) {
    return <ErrorWrapper>Loading...</ErrorWrapper>;
  }

  //covers if the api call fails
  if (!Object.keys(person).length) {
    return (
      <ErrorWrapper>
        There was a problem retrieving the requested data. Please reload the
        page and try again.
      </ErrorWrapper>
    );
  }

  return (
    <>
      <PersonCardHeader>{createIcons(PCHeaderIcons)}</PersonCardHeader>
      <PersonCardBody>
        <PersonName>{person.display_name}</PersonName>
        <PersonTitle>{person.title}</PersonTitle>
        <PersonCompany>{person.person_company_name}</PersonCompany>
        <IconContainer>{createIcons(PCBodyIcons)}</IconContainer>
      </PersonCardBody>
    </>
  );
};

export default PersonCard;
