import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};

const id1 = nanoid();
const id2 = nanoid();
const id3 = nanoid();
const id4 = nanoid();

console.log(id1, id2, id3, id4);
