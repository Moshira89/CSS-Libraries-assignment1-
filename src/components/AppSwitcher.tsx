'use client';
import React, { useState } from 'react';
import Todo from '../app/Todo/app';
import Weather from '../app/Weather/app';

const AppSwitcher = () => {
  const [current, setCurrent] = useState<'todo' | 'weather'>('todo');

  const buttonStyle = (active: boolean) => ({
    margin: '0 10px',
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: active ? '#0070f3' : '#eee',
    color: active ? 'white' : 'black',
    border: 'none',
    borderRadius: '5px',
  });

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button
        style={buttonStyle(current === 'todo')}
        onClick={() => setCurrent('todo')}
        aria-pressed={current === 'todo'}
      >
        Todo
      </button>
      <button
        style={buttonStyle(current === 'weather')}
        onClick={() => setCurrent('weather')}
        aria-pressed={current === 'weather'}
      >
        Weather
      </button>

      <div style={{ marginTop: '20px' }}>
        {current === 'todo' ? <Todo /> : <Weather />}
      </div>
    </div>
  );
};

export default AppSwitcher;
