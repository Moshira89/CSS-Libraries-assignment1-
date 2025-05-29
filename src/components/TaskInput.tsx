import React from "react";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  width: 70%;
  margin-right: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const TaskInput: React.FC<Props> = ({ value, onChange, placeholder }) => (
  <Input type="text" value={value} onChange={onChange} placeholder={placeholder} />
);
