import React from "react";
import People from "./Components/People/People";
import styled from "styled-components";
import { getColor } from "./_starter/theme/theme";

const AppContainer = styled.div`
  font-family: "proxima-nova";
  src: url("./assets/fonts/proxima-nova-100.woff2") format("woff2"),
    url("./assets/fonts/proxima-nova-100.woff") format("woff");
  padding-bottom: 24px;
  background-color: ${getColor("bgGrey")};
`;

export const App = () => {
  return (
    <AppContainer>
      <People />
    </AppContainer>
  );
};
