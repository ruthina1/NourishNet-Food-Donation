// src/components/Section/Section.jsx
import React from 'react';
import SectionTitle from './SectionTitle';
import ItemList from './ItemList';
import './Donate.css';

const Section = ({ title, items }) => {
  return (
    <div className="section">
      <SectionTitle title={title} />
      <ItemList items={items} />
    </div>
  );
};

export default Section;
