import React from "react";
import styled from "styled-components";
import { Task } from "../types";

const TaskItemWrapper = styled.li<{ completed: boolean }>`
  padding: 10px;
  margin: 8px 0;
  background-color: ${(props) => (props.completed ? '#e0ffe0' : '#f0f0f0')};
  border-left: 6px solid ${(props) => (props.completed ? '#4caf50' : '#ccc')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SmallButton = styled.button`
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskItem: React.FC<Props> = ({ task, onToggle, onDelete }) => (
  <TaskItemWrapper completed={task.completed}>
    <span onClick={() => onToggle(task.id)}>{task.text}</span>
    <SmallButton onClick={() => onDelete(task.id)}>Delete</SmallButton>
  </TaskItemWrapper>
);
