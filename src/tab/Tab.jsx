// src/components/Tab.js
import React from 'react';

const Tab = ({ title, onClick, active }) => {
  return (
    <button className={active ? 'active' : ''} onClick={onClick}>
      {title}
    </button>
  );
};

export default Tab;