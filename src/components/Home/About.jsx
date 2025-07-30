import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import './Home.css';

const { Title, Paragraph } = Typography;

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about-section');
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-section" id="about-section">
      <div className={`about-card ${isVisible ? 'animate' : ''}`}>
        <Title level={2}>About NourishNet</Title>
        <Paragraph>
          NourishNet is a community-driven platform tackling global hunger and food waste. We bridge donors and NGOs,
          ensuring perfectly good food reaches those who need it.
        </Paragraph>
      </div>
    </section>
  );
}
