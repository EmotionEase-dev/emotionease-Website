import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isHovering, setIsHovering] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        message: ''
      });

      // Reset submission status after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="contact-us-container container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3 text-gradient">Contact Us</h1>
            <div className="divider mx-auto"></div>
            <p className="lead text-muted">Have questions? Get in touch with our team. We're here to help!</p>
          </div>

          <div className="row g-4 mb-5">
            {/* Email */}
            <div className="col-md-4">
              <div 
                className="contact-method p-4 h-100"
                onMouseEnter={() => setIsHovering('email')}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className={`icon-wrapper ${isHovering === 'email' ? 'pulse' : ''}`}>
                    <i className="bi bi-envelope-fill fs-3"></i>
                  </div>
                  <h3 className="h5 mb-0 ms-3">Email</h3>
                </div>
                <div className="ps-5">
                  <a href="mailto:emotionease@gmail.com" className="d-block text-decoration-none mb-2 transition-all">
                    <i className="bi bi-envelope me-2"></i> emotionease@gmail.com
                  </a>
                  <a href="mailto:info@emotionease.in" className="d-block text-decoration-none transition-all">
                    <i className="bi bi-envelope me-2"></i> info@emotionease.in
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-md-4">
              <div 
                className="contact-method p-4 h-100"
                onMouseEnter={() => setIsHovering('phone')}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className={`icon-wrapper ${isHovering === 'phone' ? 'pulse' : ''}`}>
                    <i className="bi bi-telephone-fill fs-3"></i>
                  </div>
                  <h3 className="h5 mb-0 ms-3">Phone</h3>
                </div>
                <div className="ps-5">
                  <a href="tel:+919876543210" className="d-block text-decoration-none mb-2 transition-all">
                    <i className="bi bi-phone me-2"></i> +91 98765 43210
                  </a>
                  <a href="tel:+911234567890" className="d-block text-decoration-none transition-all">
                    <i className="bi bi-phone me-2"></i> +91 12345 67890
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="col-md-4">
              <div 
                className="contact-method p-4 h-100"
                onMouseEnter={() => setIsHovering('address')}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className={`icon-wrapper ${isHovering === 'address' ? 'pulse' : ''}`}>
                    <i className="bi bi-geo-alt-fill fs-3"></i>
                  </div>
                  <h3 className="h5 mb-0 ms-3">Address</h3>
                </div>
                <div className="ps-5">
                  <p className="mb-0">
                    <i className="bi bi-geo me-2"></i> Chennai, Tamil Nadu, India
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm mt-3 map-btn"
                  >
                    View on Map <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="alert alert-success text-center animate__animated animate__bounceIn">
              <div className="d-flex align-items-center justify-content-center">
                <i className="bi bi-check-circle-fill me-2 fs-4"></i>
                <span>Thank you for contacting us! We'll get back to you soon.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form bg-white p-4 p-md-5 rounded-4 shadow">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label htmlFor="name" className="form-label fw-medium">Full Name*</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <label htmlFor="email" className="form-label fw-medium">Email*</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      placeholder="Enter your email"
                      onChange={handleChange}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-medium">Phone Number</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-phone"></i>
                  </span>
                  <PhoneInput
                    international
                    defaultCountry="IN"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter phone number"
                    className={`phone-input flex-grow-1 ${errors.phone ? 'is-invalid' : ''}`}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="form-label fw-medium">Category*</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-tag"></i>
                  </span>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                  >
                    <option value="">Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="consultation">Consultation</option>
                    <option value="partnership">Partnership</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="workshop">Workshop</option>
                    <option value="support">Support</option>
                    {/* Removed "Feedback" option */}
                  </select>
                  {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label fw-medium">Message*</label>
                <div className="input-group">
                  <span className="input-group-text align-items-start pt-2">
                    <i className="bi bi-chat-left-text"></i>
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Enter your message"
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>
              </div>

              <div className="text-center mt-4">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg px-5 py-3 submit-btn"
                >
                  <span className="btn-content">
                    Send Message <i className="bi bi-send ms-2"></i>
                  </span>
                  <span className="btn-loader d-none">
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </span>
                </button>
              </div>
            </form>
          )}

          <div className="text-center mt-5">
            <h3 className="h4 mb-3">Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-link mx-2">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="social-link mx-2">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;