// src/components/Layout/Footer.jsx
import React from 'react';
import { Row, Col } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import './Layout.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <h3 className="footer-brand">NourishNet</h3>
            <p className="footer-description">
              NourishNet is a food-sharing platform that connects donors, NGOs, and volunteers to fight hunger and reduce food waste.
            </p>
          </Col>
          <Col xs={24} sm={8}>
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <PhoneOutlined className="footer-icon" />
                +251-900-317-735
              </li>
              <li>
                <MailOutlined className="footer-icon" />
                ruthgizat@gmail.org
              </li>
              <li>
                <EnvironmentOutlined className="footer-icon" />
                1234 Food Lane, City, Country
              </li>
             
            </ul>
          </Col>
          <Col xs={24} sm={8}>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="/signup">SignUp</a></li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>© 2025 NourishNet | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
