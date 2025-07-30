// src/pages/AboutUs.jsx
import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import './AboutUs.css';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <div className="about-container">
      <Row justify="center" align="middle" className="about-hero">
        <Col xs={24} sm={20} md={16}>
          <Title className="fade-in">Who We Are</Title>
          <Paragraph className="fade-in delay">
            We are a passionate community-driven organization dedicated to reducing food waste and fighting hunger. Our platform connects generous donors with those in need, making a real difference one meal at a time.
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[24, 24]} justify="center" className="about-section">
        <Col xs={24} sm={12} md={8}>
          <Card title="Our Mission" bordered={false} className="about-card slide-up">
            To build a bridge between food surplus and people who need it, with efficiency, empathy, and community spirit.
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Our Vision" bordered={false} className="about-card slide-up delay">
            A world where no food goes to waste and no one goes to bed hungry.
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card title="Our Impact" bordered={false} className="about-card slide-up delay-2">
            Hundreds of families reached, thousands of meals shared, and countless smiles delivered — all thanks to our amazing community.
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
