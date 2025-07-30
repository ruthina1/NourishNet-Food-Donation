import React, { useEffect, useRef } from 'react';
import { Typography, Row, Col } from 'antd';
import ScrollReveal from 'scrollreveal';
import './Home.css';

const { Title, Paragraph } = Typography;

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    // Parallax background layers
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      sectionRef.current.style.backgroundPositionY = `${scrolled * 0.5}px`;
    };
    window.addEventListener('scroll', handleScroll);

    // ScrollReveal for steps
    ScrollReveal().reveal(stepsRef.current, {
      distance: '40px',
      origin: 'bottom',
      opacity: 0,
      duration: 600,
      interval: 200,
      reset: false
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { title: 'Step 1: Donate', desc: 'Share your surplus food with the community.' },
    { title: 'Step 2: Volunteer', desc: 'Help distribute food to those in need.' },
    { title: 'Step 3: Receive', desc: 'Get food delivered to your location.' }
  ];

  return (
    <section className="how-it-works parallax-bg" ref={sectionRef}>
      <Title level={2} className="section-title">How It Works</Title>
      <Row gutter={[32, 32]} justify="center">
        {steps.map((step, i) => (
          <Col xs={24} sm={12} md={8} key={i}>
            <div
              className="step-card"
              ref={el => stepsRef.current[i] = el}
            >
              <Title level={4} className="step-title">{step.title}</Title>
              <Paragraph className="step-desc">{step.desc}</Paragraph>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
