import React, { useEffect, useRef } from 'react';
import { Button, Typography } from 'antd';
import ScrollReveal from 'scrollreveal';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Home.css';

const { Title } = Typography;

export default function CallToAction() {
  const ctaRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(ctaRef.current, {
      origin: 'bottom',
      distance: '30px',
      duration: 800,
      delay: 200,
      easing: 'ease-in-out',
      reset: false
    });
  }, []);

  return (
    <section className="cta-section" ref={ctaRef}>
      <Title level={2} className="cta-title">
        Take Action Today
      </Title> <br />
      <Button className="cta-button" size="large" type="primary" icon={<ArrowRightOutlined />}>
        Join Us Now
      </Button>
    </section>
  );
}
