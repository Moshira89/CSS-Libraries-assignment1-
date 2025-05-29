import styled from "styled-components";

interface Props {
  primary?: boolean;
}

export const Button = styled.button<Props>`
  background: ${({ primary }) => (primary ? "#4caf50" : "#2196f3")};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;
