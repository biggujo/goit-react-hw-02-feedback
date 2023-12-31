import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  min-width: 60px;
  padding: 5px;

  font-size: 14px;
  text-transform: capitalize;

  background-color: #ffffff;
  border: 1px solid #d3d3d3;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }
  
  &:active {
    border-color: #000000;

    outline: 1px solid #000000;
  }
`;
