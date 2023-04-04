import styled from "styled-components";

export type ButtonType = 'sm' | 'md' | 'blue';

const sizes = {
  sm: '52px',
  md: '72px',
  blue: '232px',
}

export const ButtonStyled = styled.div<{
  type: ButtonType;
}>`
  width: ${p => sizes[p.type]};
  height: ${p => p.type === 'blue' ? '64px' : '48px'};
  background: ${p => p.type === 'blue' ? '#5D5FEF' : '#FFFF'};
  border: ${p => p.type === 'blue' ? 'none' : '1px solid #E2E3E5'};
  border-radius: 6px;
  padding: 24px 30px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: ${p => p.type === 'blue' ? 'none' : '2px solid #5D5FEF'};
  }
`;
