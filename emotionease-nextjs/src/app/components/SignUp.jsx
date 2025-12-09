'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import { motion } from 'framer-motion';

function SignupForm({ show, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Reset form state when modal is opened
    if (show) {
      setFormData({ name: '', email: '' });
      setErrors({});
      setSubmitSuccess(false);
      setShowAlert(true);
    }
  }, [show]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
       
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('https://backend-xhbf.onrender.com/api/signup', formData);
      
      if (response.data.success) {
        setSubmitSuccess(true);
        // Close form after 2 seconds
        setTimeout(() => {
          onClose();
          localStorage.setItem('signupFormClosed', 'true');
        }, 2000);
      }
    } catch (err) {
      setErrors({
        submit: err.response?.data?.message || 'Registration failed. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal 
      show={show} 
      onHide={onClose} 
      centered
      backdrop="static"
      size="md"
    >
      <Modal.Header closeButton className="bg-success text-white">
        <Modal.Title className="w-100 text-center fs-4 fw-bold">
          EmotionEase Signup
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="p-4">
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="alert alert-info alert-dismissible fade show mb-4"
          >
            <div className="d-flex align-items-center">
              <i className="bi bi-info-circle-fill me-2"></i>
              <div className="text-center">
                <strong>Welcome!</strong> Sign up to learn more about our emotional wellness programs.<br/>
                <small>If you&apos;ve already signed in, please ignore this.</small>
              </div>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setShowAlert(false)}
                aria-label="Close"
              ></button>
            </div>
          </motion.div>
        )}
        
        {errors.submit && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="alert alert-danger mb-4"
          >
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {errors.submit}
          </motion.div>
        )}
        
        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-4"
          >
            <div className="mb-3">
              <i className="bi bi-check-circle-fill text-success fs-1"></i>
            </div>
            <h4 className="text-success mb-3">Thank You!</h4>
            <p>Your information has been successfully submitted.</p>
            <p>We&apos;ll be in touch soon!</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="form-label fw-medium">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <div className="invalid-feedback d-block">
                  <i className="bi bi-exclamation-circle me-1"></i>
                  {errors.name}
                </div>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-medium">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <div className="invalid-feedback d-block">
                  <i className="bi bi-exclamation-circle me-1"></i>
                  {errors.email}
                </div>
              )}
            </div>
            
            <div className="d-flex justify-content-end gap-2 mt-4">
              <motion.button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
              
              <motion.button
                type="submit"
                className="btn btn-success"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default SignupForm;
