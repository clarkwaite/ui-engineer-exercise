import styled from "styled-components";
import { getColor } from "../../../../_starter/theme/theme";
import { getBreakpoint } from "../../../../_starter/theme/theme";

export const PersonFilterButton = styled.div`
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
  cursor: pointer;
`;

export const ButtonSeparator = styled.span`
  width: 1px;
  height: 28px;
  background-color: ${getColor("greyLightest")};
  margin: 0px 10px;
`;

export const ActivityFilterButton = styled(PersonFilterButton)`
  background-color: ${getColor("white")};
  color: ${getColor("greyDarkest")};
  border: 1px solid ${getColor("greyLightest")};
`;

export const ActivityButtonsWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  margin: 16px 0px 0px 21px;
  align-items: center;
`;

export const ActivityUtilsWrapper = styled.span`
  display: flex;
  align-items: center;
  @media (max-width: ${getBreakpoint("md")}) {
    display: inline;
  }
  @media (max-width: ${getBreakpoint("ms")}) {
    display: flex;
  }
  @media (max-width: ${getBreakpoint("sm")}) {
    display: inline;
  }
`;

export const ActivityFilters = styled.span`
  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled.span`
  font-size: 14px;
  margin: 5px 0px 0px 5px;
`;

export const UtilIcon = styled.span`
  font-size: 14px;
  margin: 6px 5px 0px 0px;
`;

export const ActivityUtils = styled.span`
  font-size: 14px;
  line-height: 16px;
  margin-right: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${getColor("blue")};
  cursor: pointer;
`;
