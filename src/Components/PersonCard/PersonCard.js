import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FetchFromAPI from "./../../Utils/FetchFromAPI";

const PersonCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PersonCard = () => {
  const [person, setPerson] = useState({});

  useEffect(() => {
    let personEndpoint =
      "https://ui-offline-exercise.s3.amazonaws.com/data/people.json";
    FetchFromAPI(personEndpoint).then((data) => {
      setPerson(data);
    });
  }, [setPerson]);

  console.log("PERSON INFO", person);

  return <PersonCardContainer>Person Card</PersonCardContainer>;
};

export default PersonCard;
