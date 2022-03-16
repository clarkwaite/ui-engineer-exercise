import styled from "styled-components";

export const IconWrapper = styled.div`
  cursor: pointer;
  margin: 0px 4px;
  color: ${(props) => props.color};
`;

export const IconContainer = styled.span`
  display: flex;
`;

export const PersonCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e1e7ea;
  box-sizing: border-box;
  height: 32px;
  padding: 4px 8px 0px 16px;
`;

export const PersonCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const PersonName = styled.span`
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: #4f5359;
  margin-bottom: 6px;
`;

export const PersonTitle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #4f5359;
`;

export const PersonCompany = styled.span`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #337ab7;
  margin-bottom: 16px;
`;

export const ErrorWrapper = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #337ab7;
  margin: 48px;
`;