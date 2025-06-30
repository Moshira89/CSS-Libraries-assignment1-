'use client';
import React, { useState } from 'react';
import Todo from '../app/Todo/app';
import Weather from '../app/Weather/app';

const AppSwitcher = () => {
  const [current, setCurrent] = useState<'todo' | 'weather'>('todo');

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={() => setCurrent('todo')}>Todo</button>
      <button onClick={() => setCurrent('weather')}>Weather</button>
      {current === 'todo' ? <Todo /> : <Weather />}
    </div>
  );
};

export default AppSwitcher;
