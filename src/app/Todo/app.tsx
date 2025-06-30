'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 10px;
  flex: 1 1 250px;
  min-width: 200px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #005bb5;
  }
`;

const TodoItem = styled.li<{ $completed: boolean }>`
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
  color: ${({ $completed }) => ($completed ? '#999' : '#000')};
  margin-top: 10px;
  cursor: pointer;
  list-style: none;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;

interface Todo {
  text: string;
  completed: boolean;
}

const Todo: React.FC = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('todos');
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { text: input.trim(), completed: false }]);
    setInput('');
  };

  const toggleTodo = (index: number) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  };

  return (
    <Wrapper>
      <h2>Todo App</h2>
      <InputRow>
        <Input
          id="todo-input"
          name="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTodo();
          }}
          autoComplete="off"
        />
        <Button onClick={addTodo}>Add</Button>
      </InputRow>
      <ul>
        {todos.map((todo, idx) => (
          <TodoItem
            key={idx}
            $completed={todo.completed}
            onClick={() => toggleTodo(idx)}
          >
            {todo.text}
          </TodoItem>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Todo;
