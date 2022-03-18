import React from "react";
import styled from "styled-components";

const ErrorWrapper = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #337ab7;
  margin: 48px;
`;

export const DefaultError = () => (
  <ErrorWrapper>
    There was a problem retrieving the requested data. Please reload the page
    and try again.
  </ErrorWrapper>
);
