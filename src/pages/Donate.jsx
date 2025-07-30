// src/pages/Donate.jsx
import React from 'react';
import Hero from '../components/Donate/Hero';
import Section from '../components/Donate/Section';

import '../components/Donate/Donate.css';

import foodImg     from '../images/food1.avif';
import foodImg2    from '../images/food2.avif';
import foodImg3    from '../images/food3.avif';

import beverageImg1 from '../images/b3.avif';
import beverageImg2 from '../images/be.jpg';
import beverageImg3 from '../images/be2.avif';



import groceryImg1  from '../images/grocery.webp';
import groceryImg2  from '../images/g1.jpg';
import groceryImg3  from '../images/g2.avif';

export default function Donate() {
  const foodItems = [
    { image: foodImg,     description: 'Canned Beans, ready for donation.' },
    { image: foodImg2,     description: 'Rice Bags, non-perishable and ready.' },
    { image: foodImg3,     description: 'Peanut Butter Jars, ready for donation.' },
  ];

  const beverageItems = [
    { image: beverageImg1, description: 'Box of fresh juice.' },
    { image: beverageImg2, description: 'Pack of bottled juice.' },
    { image: beverageImg3, description: 'Pack of bottled juice.' },
  ];

  const groceryItems = [
    { image: groceryImg1,  description: 'A bag of rice.' },
    { image: groceryImg2,  description: 'Pasta Packages.' },
    { image: groceryImg3,  description: 'Canned Vegetables.' },
  ];

  return (
    <>
      <Hero />
      <Section title="Food Donations"    items={foodItems}    />
      <Section title="Beverage Donations" items={beverageItems} />
      <Section title="Grocery Donations"  items={groceryItems}  />
    </>
  );
}
