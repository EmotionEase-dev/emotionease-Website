import React from 'react';

const TermsAndConditions = ({ onClose }) => {
  return (
    <div className="modal-content p-3" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <div className="modal-header border-bottom-0 pb-0 d-flex justify-content-between align-items-center">
        <div>
          <h3 className="modal-title text-success mb-0">Terms and Conditions</h3>
          <p className="text-muted small mb-0">Last Updated: 14/05/2025</p>
        </div>
        <button 
          type="button" 
          className="btn-close" 
          onClick={onClose} 
          aria-label="Close"
        ></button>
      </div>

      <div className="modal-body p-0 pt-2">
        {/* Introduction */}
        <section className="mb-3" style={{paddingTop: '1rem'}}>
          <p className="mb-1 small">
            Welcome to EmotionEase. By accessing or using our services, you agree to be bound by these Terms and Conditions. 
            Please read them carefully before using our website or services.
          </p>
        </section>

        {/* 1. Service Description */}
        <section className="mb-3"style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">1. Service Description</h5>
          <p className="mb-1 small">
            EmotionEase provides emotional well-being resources, self-help tools, and access to professional support services. 
            Our services include:
          </p>
          <ul className="small mb-1 ps-3">
            <li>Educational content about emotional health</li>
            <li>Self-assessment tools</li>
            <li>Booking system for counseling sessions</li>
            <li>Community support resources</li>
          </ul>
        </section>

        {/* 2. Important Disclaimers */}
        <section className="mb-3"style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">2. Important Disclaimers</h5>
          <div className="alert alert-danger small py-2 mb-1">
            <strong>Not for Emergencies:</strong> If you are in crisis or experiencing a mental health emergency, 
            please contact your local emergency services or crisis hotline immediately. This service is not 
            designed for emergency situations.
          </div>
          <p className="small mb-1">
            Our services are not a substitute for professional medical advice, diagnosis, or treatment. 
            Always seek the advice of your physician or qualified mental health provider with any questions 
            you may have regarding a medical condition or mental disorder.
          </p>
        </section>

        {/* 3. User Responsibilities */}
        <section className="mb-3" style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">3. User Responsibilities</h5>
          <p className="small mb-1">
            By using our services, you agree to:
          </p>
          <ul className="small mb-1 ps-3">
            <li>Provide accurate and complete information when creating an account or booking sessions</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Use the services only for lawful purposes</li>
            <li>Not engage in any abusive or harmful behavior toward our staff or other users</li>
          </ul>
        </section>

        {/* 4. Session Policies */}
        <section className="mb-3" style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">4. Session Policies</h5>
          <h6 className="fw-bold small mt-2 mb-1">Eligibility:</h6>
          <ul className="small mb-1 ps-3">
            <li>Participants must be between 25-50 years old</li>
            <li>Valid government ID may be required for verification</li>
          </ul>

          <h6 className="fw-bold small mt-2 mb-1">Booking and Cancellation:</h6>
          <ul className="small mb-1 ps-3">
            <li>Sessions must be cancelled or rescheduled at least 24 hours in advance</li>
            <li>Late cancellations may result in forfeiture of session fees</li>
            <li>No-shows will be charged the full session fee</li>
          </ul>

          <h6 className="fw-bold small mt-2 mb-1">Refund Policy:</h6>
          <ul className="small mb-1 ps-3">
            <li>If you end a paid session before the halfway point, you may request a 50% refund</li>
            <li>No refunds will be issued after more than half of the session has been completed</li>
            <li>Refunds are processed within 5-7 business days</li>
            <li>Free sessions require no payment information</li>
            <li>Missed free sessions may disqualify you from future free session offers</li>
          </ul>
        </section>

        {/* 5. Privacy and Confidentiality */}
        <section className="mb-3" style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">5. Privacy and Confidentiality</h5>
          <p className="small mb-1">
            We are committed to protecting your privacy. All personal information and session content will be kept 
            confidential except in these circumstances:
          </p>
          <ul className="small mb-1 ps-3">
            <li>If we believe there is imminent risk of harm to yourself or others</li>
            <li>When required by law or court order</li>
            <li>For quality assurance purposes (with identifying information removed)</li>
          </ul>
        </section>

        {/* 6. Intellectual Property */}
        <section className="mb-3" style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">6. Intellectual Property</h5>
          <p className="small mb-1">
            All content on this website, including text, graphics, logos, and software, is the property of EmotionEase 
            or its content suppliers and protected by intellectual property laws. You may not:
          </p>
          <ul className="small mb-1 ps-3">
            <li>Reproduce, distribute, or modify any content without our express written permission</li>
            <li>Use any automated systems to access or scrape our website</li>
            <li>Create derivative works based on our content</li>
          </ul>
        </section>

        {/* 7. Limitation of Liability */}
        <section className="mb-3"style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">7. Limitation of Liability</h5>
          <p className="small mb-1">
            EmotionEase shall not be liable for any indirect, incidental, special, consequential or punitive damages, 
            including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="small mb-1 ps-3">
            <li>Your access to or use of or inability to access or use the services</li>
            <li>Any conduct or content of any third party on the services</li>
            <li>Any unauthorized access, use or alteration of your transmissions or content</li>
          </ul>
        </section>

        {/* 8. Changes to Terms */}
        <section className="mb-3"style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">8. Changes to Terms</h5>
          <p className="small mb-1">
            We reserve the right to modify these terms at any time. We will notify you of any changes by updating the 
            "Last Updated" date at the top of this document. Your continued use of our services after such modifications 
            constitutes your acceptance of the revised terms.
          </p>
        </section>

        {/* 9. Governing Law */}
        <section className="mb-3"style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">9. Governing Law</h5>
          <p className="small mb-1">
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising 
            from these Terms or your use of our services will be subject to the exclusive jurisdiction of the courts 
            of Chennai, Tamil Nadu.
          </p>
        </section>

        {/* 10. Contact Information */}
        <section className="mb-2"style={{paddingTop: '1rem'}}>
          <h5 className="fw-bold text-success mb-1">10. Contact Us</h5>
          <p className="small mb-1">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <ul className="small mb-1 ps-3">
  <li>
    📧 Email: 
    {/* <a href="mailto:admin@emotionease.in" className="text-decoration-none ms-1">
      admin@emotionease.in
    </a>,  */}
    <a href="mailto:admin@emotionease.in" className="text-decoration-none ms-1">
      admin@emotionease.in
    </a>
  </li>
  <li>📞 Phone: <a href="tel:+919845330187" className="text-decoration-none">+91 98453 30187</a></li>
  <li>📍 Address: EmotionEase, Chennai, Tamil Nadu, India</li>
</ul>

        </section>
      </div>

      <div className="modal-footer border-top-0 pt-2 d-flex justify-content-end">
        <button 
          type="button" 
          className="btn btn-success btn-sm" 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};


export default TermsAndConditions;
