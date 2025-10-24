import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section - Separate from background */}
      <section className="hero">
        <div className="hero-content">
          <h1>SHORT TERM PROPERTY MANAGEMENT</h1>
        </div>
      </section>
      
      {/* Background Section */}
      <div className="page-background home-background">
        <div className="page-content">
          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
}

export default Home;