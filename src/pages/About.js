import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      {/* Hero Section - Separate from background */}
      <section className="hero">
        <div className="hero-content">
          <h1>WHY CHOOSE US?</h1>
        </div>
      </section>
      
      {/* Background Section */}
      <div className="page-background about-background">
        <div className="page-content">
          {/* Our Story */}
          <section className="our-story">
            <div className="grid grid-2">
              <div className="story-content">
                <h2>Our Story</h2>
                <p>
                 Seven years + of experience managing properties in Brisbane & Hunter Valley,
                  I possess a comprehensive understanding of the short-term rental market.
                   of every aspect of property management and I am dedicated to providing personalized support and guidance to each client.
                </p>
              </div>
              <div className="story-image">
                <div className="placeholder-image large">
                  <img src="/images/rating.png" alt="Our Rating and Reviews" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;