import styled, { css } from "styled-components";

export const SwitchButtonStyled = styled.div`
  padding: 1px;
  background: #FFFF;
  border-radius: 6px;
  width: 243px;
    height: 38px;
    display: flex;
    justify-content: space-between;
`;

export const SwitchButtonItem = styled.div<{
  isActive: boolean;
}>`
  display: flex;
  padding: 12px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${(props) => {
      return props.isActive && css`
          background: #FFFFFF;
          border: 1px solid #E2E3E5;
          border-radius: 5px;

          svg path {
              stroke: #5D5FEF;
          }
      `;
  }}
`;

export const SwitchButtonItemText = styled.span`
  margin-left: 12px;
  letter-spacing: 1px;
`;
