import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Task } from "./types";
import { TaskItem } from "./components/TaskItem";
import { TaskInput } from "./components/TaskInput";
import { Button } from "./components/Button";
import { TaskList } from "./components/TaskList";
import Image from "next/image";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const App: React.FC = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>ToDo Tracker</Title>

        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Image src="/OIP.png" alt="App logo" width={60} height={60} priority />
        </div>

        <div>
          <TaskInput
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task..."
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <TaskList>
          {tasks.map((t) => (
            <TaskItem
              key={t.id}
              task={t}
              onToggle={toggleComplete}
              onDelete={deleteTask}
            />
          ))}
        </TaskList>
      </Container>
    </>
  );
};

export default App;
