import styled from "styled-components";
import { getColor } from "../../../../../_starter/theme/theme";

export const ActivityCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 49px auto;
  margin-bottom: 8px;
  align-items: center;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr 1fr;
  height: 66px;
  background-color: ${getColor("white")};;
  border: 1px solid #${getColor("greyLightest")};
  box-sizing: border-box;
  border-radius: 2px;
  padding: 16px;
  align-items: center;
  grid-gap: 7px;
  text-align: left;
}
`;

export const DateTime = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  color: #7a7f88;
  font-style: normal;
  text-align: right;
`;

export const CardTitle = styled.span`
  color: ${(props) => props.color || getColor("greyDark")};
  font-weight: ${(props) => props.weight || "600"};
  font-style: normal;
  font-size: 14px;
  line-height: 14px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
`;

export const CardSubtext = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #7a7f88;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const EmailContent = styled.span`
  font-weight: 400;
`;

export const IconWrapper = styled.span`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  mix-blend-mode: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 14px;
`;

export const EmailIcon = styled.span`
  color: #7b7f87;
  font-size: 12px;
  line-height: 12px;
  margin: 0px 2px 0px 8px;
  display: flex;
  align-items: center;
`;
