import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    category: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  // Create Axios instance with base URL
  const api = axios.create({
    baseURL: 'https://backend-xhbf.onrender.com/api',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (apiError) setApiError('');
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
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 25 || formData.age > 50) {
      newErrors.age = 'Age must be between 25-50';
    }
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setApiError('');

    try {
      const response = await api.post('/contact/submit', formData);
      
      console.log('Form submitted successfully:', response.data);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        category: '',
        message: ''
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      
      // Handle different error scenarios
      if (error.response) {
        // Server responded with error status (4xx, 5xx)
        setApiError(error.response.data.message || 'Failed to submit form. Please try again.');
      } else if (error.request) {
        // Request was made but no response received
        setApiError('Network error. Please check your connection and try again.');
      } else {
        // Other errors
        setApiError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-us-container container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3 text-gradient">Contact Us</h1>
            <div className="divider mx-auto"></div>
            <p className="lead" style={{fontWeight:'normal'}}>Have questions? Get in touch with our team. We're here to help!</p>
          </div>

          <div className="row g-4 mb-5">
            {/* Email */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="contact-method p-3 p-md-4 h-100"
                onMouseEnter={() => setIsHovering('email')}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="d-flex align-items-center mb-2 mb-md-3">
                  <div className={`icon-wrapper ${isHovering === 'email' ? 'pulse' : ''}`}>
                    <i className="bi bi-envelope-fill fs-4 fs-md-3"></i>
                  </div>
                  <h3 className="h5 mb-0 ms-2 ms-md-3">Email</h3>
                </div>
                <div className="ps-4 ps-md-5">
                  <a href="mailto:emotionease@gmail.com" className="d-block text-decoration-none mb-1 mb-md-2 transition-all small-text">
                    <i className="bi bi-envelope me-2"></i> emotionease@gmail.com
                  </a>
                  {/* <a href="mailto:admin@emotionease.in" className="d-block text-decoration-none transition-all small-text">
                    <i className="bi bi-envelope me-2"></i> admin@emotionease.in  
                  </a> */}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-4 col-md-6">
              <div 
                className="contact-method p-3 p-md-4 h-100"
                onMouseEnter={() => setIsHovering('phone')}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="d-flex align-items-center mb-2 mb-md-3">
                  <div className={`icon-wrapper ${isHovering === 'phone' ? 'pulse' : ''}`}>
                    <i className="bi bi-telephone-fill fs-4 fs-md-3"></i>
                  </div>
                  <h3 className="h5 mb-0 ms-2 ms-md-3">Phone / Whatsapp</h3>
                </div>
                <div className="ps-4 ps-md-5">
                  <a href="tel:+919876543210" className="d-block text-decoration-none mb-1 mb-md-2 transition-all small-text">
                    <i className="bi bi-phone me-2"></i> +91 93453 30187
                  </a>
                  <a href="tel:+911234567890" className="d-block text-decoration-none transition-all small-text">
                    <i className="bi bi-phone me-2"></i> +91 96771 98550
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="col-lg-4 col-md-12">
              <div 
                className="contact-method p-3 p-md-4 h-100"
                onMouseEnter={() => setIsHovering('address')}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="d-flex align-items-center mb-2 mb-md-3">
                  <div className={`icon-wrapper ${isHovering === 'address' ? 'pulse' : ''}`}>
                    <i className="bi bi-geo-alt-fill fs-4 fs-md-3"></i>
                  </div>
                  <h3 className="h5 mb-0 ms-2 ms-md-3">Address</h3>
                </div>
                <div className="ps-4 ps-md-5">
                  <p className="mb-1 mb-md-2 small-text">
                    <i className="bi bi-geo me-2"></i> Chennai, Tamil Nadu, India
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm mt-2 mt-md-3 map-btn"
                  >
                    View on Map <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {apiError && (
            <div className="alert alert-danger text-center animate__animated animate__fadeIn">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {apiError}
            </div>
          )}

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

              <div className="row">
                <div className="col-md-6 mb-4">
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

                <div className="col-md-6 mb-4">
                  <label htmlFor="age" className="form-label fw-medium">Age*</label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi bi-calendar"></i>
                    </span>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="25"
                      max="50"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Enter your age (25-50)"
                      className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                    />
                  </div>
                  {errors.age && <div className="invalid-feedback">{errors.age}</div>}
                  <small className="text-muted">Note: Age should be between 25-50 years</small>
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
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="consultation">Consultation</option>
                    <option value="partnership">Partnership</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="workshop">Workshop</option>
                    <option value="support">Support</option>
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
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <i className="bi bi-send ms-2"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="text-center mt-5">
            <h3 className="h4 mb-3">Follow Us</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/emotionease/" className="social-link mx-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/emotionease" className="social-link mx-2" target="_blank" rel="noopener noreferrer">
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