import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: "🏨",
      title: "Property Listing",
      description: "Complete property listing management for maximum exposure and bookings.",
      features: ["List your property on Airbnb & booking platforms", "Arrangeprofessional photography", "Optimized descriptions", "Competitive pricing strategy"]
    },
    {
      icon: "🛎️",
      title: "Booking Process",
      description: "Personalized assistance to make your stay memorable and hassle-free.",
      features: ["Ensure you maximize your occupancy rate", "Manage the booking process from start to finish whilst screening guests",]
    },
    {
      icon: "🧹",
      title: "Guest Experience",
      description: "Professional cleaning and maintenance services for a pristine environment.",
      features: ["Daily housekeeping", "Linen service", "Deep cleaning", "Maintenance support"]
    },
    {
      icon: "📞",
      title: "Maintain Property",
      description: "Round-the-clock assistance for any questions or concerns during your stay.",
      features: ["Emergency support", "Technical assistance", "Guest services", "Local guidance"]
    }
  ];

  const packages = [
    {
      name: "SILVER",
      price: "Starting from $6,299",
      period: "",
      features: [
        "Installed within 7-14 days",
        "budget friendly solution",
        "fully functional"
      ],
      popular: false
    },
    {
      name: "GOLD",
      price: "Starting from $6,299",
      period: "",
      features: [
        "Everything in SILVER",
        "Daily housekeeping",
        "Concierge services",
        "Airport transfer",
        "Local recommendations",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "DIAMOND",
      price: "Starting from $6,299",
      period: "",
      features: [
        "Everything in GOLD",
        "Private chef service",
        "Personal butler",
        "Spa treatments",
        "Exclusive experiences",
        "VIP services"
      ],
      popular: false
    }
  ];

  return (
    <div className="services page-background services-background">
      <div className="bg-placeholder">
        Replace with your services page background image
      </div>
      <div className="page-content">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive hospitality services designed to exceed your expectations</p>
          </div>
        </section>

      {/* Services Grid */}
      <section className="services-grid">
        <div className="section-header">
          <h2>What We Offer</h2>
          <p>Discover our full range of premium services</p>
        </div>
        
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
      </section>

      {/* Service Packages */}
      <section className="service-packages">
        <div className="section-header">
          <h2>OUR Packages</h2>
          <p>Eleda Stays furnishing service expresses a high standard of home-like comfort, creating the quality experience that consumers increasingly expect from short-stay properties.Providing a custom design with an air of luxury will help you achieve more consistent returns and a higher demand from your investment</p>
        </div>
        
        <div className="grid grid-3">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
              {pkg.popular && <div className="popular-badge">Most Popular</div>}
              <div className="package-header">
                <h3>{pkg.name}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="period">{pkg.period}</span>
                </div>
              </div>
              <ul className="package-features">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className={`btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'} btn-full`}>
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="booking-process">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple steps to your perfect stay</p>
        </div>
        
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Browse & Select</h3>
              <p>Explore our curated collection of premium properties and choose your perfect accommodation.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Book & Customize</h3>
              <p>Complete your booking and customize your stay with our additional services and amenities.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Arrive & Enjoy</h3>
              <p>Arrive to find everything perfectly prepared for your comfort and enjoyment.</p>
            </div>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Relax & Experience</h3>
              <p>Enjoy your stay with our full support and personalized service throughout your visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="special-services">
        <div className="section-header">
          <h2>Special Services</h2>
        </div>
        
        <div className="grid grid-2">
          <div className="special-service">
            <h3>🎉 Event Hosting</h3>
            <p>Planning a special celebration? Our event hosting services ensure your occasion is memorable with venue setup, catering coordination, and entertainment arrangements.</p>
          </div>
          
          <div className="special-service">
            <h3>💼 Business Services</h3>
            <p>Traveling for business? We offer meeting room access, business center facilities, high-speed internet, and professional support services.</p>
          </div>
          
          <div className="special-service">
            <h3>👨‍👩‍👧‍👦 Family Packages</h3>
            <p>Family-friendly accommodations with child-safe amenities, babysitting services, entertainment options, and special family activity arrangements.</p>
          </div>
          
          <div className="special-service">
            <h3>🏃‍♂️ Wellness Programs</h3>
            <p>Focus on your wellbeing with access to fitness facilities, spa treatments, healthy dining options, and wellness activity coordination.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="cta-content">
          <h2>Ready to Experience Our Services?</h2>
          <p>Let us create the perfect stay experience tailored just for you</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Book Now</button>
            <button className="btn btn-secondary btn-large">Contact Us</button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Services;