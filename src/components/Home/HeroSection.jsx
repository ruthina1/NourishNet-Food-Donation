import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';
import './Home.css';

const { Title, Paragraph } = Typography;

const HeroSection = () => {

  const navigate = useNavigate();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <Title level={1}>Join the Fight Against Hunger with NourishNet</Title>
        <Paragraph>
          NourishNet connects donors, volunteers, and NGOs to reduce food waste and hunger.
        </Paragraph>
        <Button className="cta-button" size="large" type="primary" onClick={() => navigate('/signup')}>
          Get Involved
        </Button>
      </div>
      <div
        className="hero-background"
        style={{
            transform: `translate(-${mousePosition.x / 10}px, -${mousePosition.y / 10}px)`,
          }}
      ></div>
    </section>
  );
};

export default HeroSection;
