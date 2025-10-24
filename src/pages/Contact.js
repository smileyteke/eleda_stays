import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact page-background contact-background">
      <div className="bg-placeholder">
        Replace with your contact page background image
      </div>
      <div className="page-content">
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero-content">
            <h1>Contact Us</h1>
            <p>Get in touch with our team for any questions or booking assistance</p>
          </div>
        </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>We're here to help you plan your perfect stay</p>
        </div>
        
        <div className="grid grid-3">
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567</p>
            <p>Available 24/7</p>
            <button className="btn btn-secondary">Call Now</button>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>info@eledastays.com</p>
            <p>Response within 2 hours</p>
            <button className="btn btn-secondary">Send Email</button>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">💬</div>
            <h3>Live Chat</h3>
            <p>Instant support</p>
            <p>Available 24/7</p>
            <button className="btn btn-secondary">Start Chat</button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="grid grid-2">
          <div className="form-content">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  rows="6"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary btn-large">Send Message</button>
            </form>
          </div>
          
          <div className="contact-additional">
            <div className="info-box">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Sunday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
              </div>
              <p><strong>Emergency Support:</strong> Available 24/7</p>
            </div>
            
            <div className="info-box">
              <h3>Office Locations</h3>
              <div className="location">
                <h4>Headquarters</h4>
                <p>123 Hospitality Avenue<br />Suite 500<br />New York, NY 10001</p>
              </div>
              <div className="location">
                <h4>West Coast Office</h4>
                <p>456 Ocean Drive<br />Floor 12<br />Los Angeles, CA 90210</p>
              </div>
            </div>
            
            <div className="info-box">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#facebook" className="social-link">📘 Facebook</a>
                <a href="#twitter" className="social-link">🐦 Twitter</a>
                <a href="#instagram" className="social-link">📷 Instagram</a>
                <a href="#linkedin" className="social-link">💼 LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-list">
          <div className="faq-item">
            <h3>How do I make a booking?</h3>
            <p>You can make a booking through our website, by calling our reservation team, or through our mobile app. All bookings are confirmed instantly.</p>
          </div>
          
          <div className="faq-item">
            <h3>What is your cancellation policy?</h3>
            <p>We offer flexible cancellation policies depending on the property and package selected. Most bookings can be cancelled up to 24-48 hours before check-in.</p>
          </div>
          
          <div className="faq-item">
            <h3>Do you provide airport transfers?</h3>
            <p>Yes, we offer airport transfer services for most of our properties. This can be arranged during booking or by contacting our concierge team.</p>
          </div>
          
          <div className="faq-item">
            <h3>Are pets allowed?</h3>
            <p>Pet policies vary by property. Many of our accommodations are pet-friendly. Please specify your pet requirements when making a booking.</p>
          </div>
          
          <div className="faq-item">
            <h3>What amenities are included?</h3>
            <p>All properties include basic amenities like Wi-Fi, toiletries, and housekeeping. Additional amenities vary by property and package level.</p>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact">
        <div className="emergency-box">
          <h3>🚨 Emergency Contact</h3>
          <p>For urgent matters during your stay, please contact our 24/7 emergency line:</p>
          <div className="emergency-number">+1 (555) 999-0000</div>
          <p>Or use the emergency contact button in your booking confirmation email.</p>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Contact;