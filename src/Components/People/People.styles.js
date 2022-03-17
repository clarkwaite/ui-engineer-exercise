import styled from "styled-components";
import { getColor } from "../../_starter/theme/theme";

export const PeopleBanner = styled.div`
  max-width: 1380px;
  height: 50px;
  background: ${getColor("white")};
  box-shadow: inset 0px -1px 0px #${getColor("greyLightest")};
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 18px;
  margin-bottom: 10px;
  border-right: 1px solid #${getColor("greyLightest")};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns:
    minmax(min-content, 300px)
    minmax(min-content, 667px)
    minmax(min-content, 372px);
  grid-gap: 10px;
  margin-left: 10px;
  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    .dashboard {
      order: -1;
    }
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-gap: 10px;
`;

export const GridItem = styled.div`
  height: ${(props) => props.height};
  border: 1px solid ${getColor("greyLightest")};
  box-sizing: border-box;
`;

export const PeopleContainer = styled.div`
  background-color: #f7f9fa;
`;
