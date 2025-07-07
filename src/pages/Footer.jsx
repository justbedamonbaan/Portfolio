// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} My Awesome Portfolio. All rights reserved.</p>
        
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <a href="mailto:you@example.com">Contact Me</a>
        </div>
        
        <div className="social-icons">
          <a href="https://github.com/justbedamonbaan" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="www.linkedin.com/in/damon-baan-472821275" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}