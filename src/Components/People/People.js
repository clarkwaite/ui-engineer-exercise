import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, 300px)
    minmax(min-content, 667px)
    minmax(min-content, 372px);
  grid-gap: 10px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-gap: 10px;
`;

const GridItem = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height};
`;

const People = () => {
  return (
    <GridContainer>
      <GridWrapper>
        <GridItem height="166px">Grid 1</GridItem>
        <GridItem height="238px">Grid 2</GridItem>
        <GridItem height="144px">Grid 3</GridItem>
        <GridItem height="536px">Grid 4</GridItem>
      </GridWrapper>
      <GridWrapper>
        <GridItem height="1095px">Grid 5</GridItem>
      </GridWrapper>
      <GridWrapper>
        <GridItem height="226px">Grid 6</GridItem>
        <GridItem height="428px">Grid 7</GridItem>
        <GridItem height="194px">Grid 8</GridItem>
        <GridItem height="213px">Grid 9</GridItem>
      </GridWrapper>
    </GridContainer>
  );
};

export default People;
