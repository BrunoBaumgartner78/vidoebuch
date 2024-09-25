import React from 'react';
import './tabs.css';

const Tabs = ({ activeCategory, categories, setActiveCategory }) => {
  return (
    <div className="tabs">
      {categories.map(category => (
        <button
          key={category.id}
          className={`tab ${category.id === activeCategory ? 'active' : ''}`}
          onClick={() => setActiveCategory(category.id)}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

