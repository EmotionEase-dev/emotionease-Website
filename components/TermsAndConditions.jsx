import React from 'react';

const TermsAndConditions = ({ onClose }) => {
  return (
    <div className="modal-content p-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <div className="modal-header border-bottom-0 pb-0">
        <h3 className="modal-title text-success mb-1">Terms and Conditions</h3>
        <button 
          type="button" 
          className="btn-close" 
          onClick={onClose} 
          aria-label="Close"
        ></button>
      </div>
      <p className="text-muted text-end mb-3 small pt-1">Last Updated: 14/05/2025</p>

      <div className="modal-body p-0">
        <section className="mb-3 p-1">
          <p className="mb-2 ">
            Welcome to our emotional well-being website. By using our services, you agree to the following terms and conditions. Please read them carefully.
          </p>
        </section>

        <section className="mb-3 p-1">
          <h5 className="fw-bold">1. Purpose of the Website</h5>
          <p className="mb-2 small">
            This website provides information, resources, and access to emotional well-being support or counseling. It is not a substitute for professional medical advice, diagnosis, or emergency services.
          </p>
        </section>

        <section className="mb-3 p-1">
          <h5 className="fw-bold">2. Not an Emergency Service</h5>
          <p className="text-danger small mb-2">
            If you are in crisis or need immediate help, please contact emergency services or a local mental health crisis line. This website does not offer emergency mental health support.
          </p>
        </section>

        <section className="mb-3 p-1">
          <h5 className="fw-bold">3. User Responsibility</h5>
          <p className="small mb-2">
            You agree to use this website respectfully and for its intended purpose. You are responsible for any information you share and for keeping your login details (if any) secure.
          </p>
        </section>

        <section className="mb-3 p-1">
          <h5 className="fw-bold">4. Confidentiality</h5>
          <p className="small mb-2">
            We respect your privacy. Personal information you provide through contact forms or sessions will be kept confidential, except when required by law (e.g., risk of harm to yourself or others).
          </p>
        </section>

        <section className="mb-3 p-1">
          <h5 className="fw-bold">5. Booking, Cancellations, and Refunds</h5>
          <ul className="small mb-2">
            <li className="mb-1">You can schedule sessions through our booking page.</li>
            <li className="mb-1">Please cancel or reschedule at least 24 hours in advance.</li>
            <li className="mb-1">If you are not satisfied with a paid session and choose to end it before halfway through, you are eligible for a 50% money-back refund.</li>
            <li className="mb-1">Refunds will not be provided after more than half of the session is completed.</li>
            <li className="mb-1" style={{fontWeight:'bold'}}>Free sessions do not require any bank account or payment details.</li>
            <li className="mb-1">Refunds will be processed within 1-5 business days.</li>

          </ul>
        </section>

        <section className="mb-3 p-1">
          <h5 className="fw-bold">6. Limitation of Liability</h5>
          <p className="small mb-2">
            While we aim to provide helpful and supportive services, we are not liable for any decisions or actions taken based on information from this website.
          </p>
        </section>

        <section className="mb-3 p-1">
          <h5 className="fw-bold">7. Changes to These Terms</h5>
          <p className="small mb-2">
            We may update these terms from time to time. Please check back regularly. By continuing to use our website, you agree to the latest version.
          </p>
        </section>

        <section className="mb-3 p-1">
          <h5 className="fw-bold">8. Contact Us</h5>
          <p className="small mb-2">
            If you have any questions about these terms, please contact us at: <br />
            📧 <a href="mailto:info@emotionease.in" className="text-decoration-none">info@emotionease.in</a>
          </p>
        </section>
      </div>

      <div className="modal-footer border-top-0 pt-0">
        <button 
          type="button" 
          className="btn btn-outline-secondary btn-sm" 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;