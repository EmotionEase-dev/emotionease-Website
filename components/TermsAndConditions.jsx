import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center text-success">Terms and Conditions</h1>
      <p className="text-muted text-end">Last Updated: [Insert Date]</p>

      <section className="mb-4">
        <p>
          Welcome to <strong>EmotionEase</strong>. These Terms and Conditions (“Terms”) govern your access to and use of our website, mobile application, and services (collectively, the “Platform”). Please read them carefully.
        </p>
        <p>
          By accessing or using EmotionEase, you agree to be bound by these Terms. If you do not agree, please refrain from using our services.
        </p>
      </section>

      <section className="mb-4">
        <h4>1. Overview of Our Services</h4>
        <p>
          EmotionEase provides emotional wellbeing programs that include self-guided content, tools, and techniques such as NLP (Neuro-Linguistic Programming), mindfulness, and emotional regulation strategies. These resources are educational and supportive in nature.
        </p>
        <p className="text-danger fw-semibold">
          Disclaimer: EmotionEase does not provide clinical diagnosis or medical treatment. Our services are not a substitute for professional mental health or medical advice.
        </p>
      </section>

      <section className="mb-4">
        <h4>2. Eligibility</h4>
        <p>
          You must be at least <strong>18 years of age</strong> to use our Platform. By using the Platform, you affirm that you are legally eligible to enter into this agreement.
        </p>
      </section>

      <section className="mb-4">
        <h4>3. Your Responsibilities</h4>
        <ul>
          <li>Use the Platform only for lawful, personal, and non-commercial purposes.</li>
          <li>Provide accurate and up-to-date information.</li>
          <li>Respect the rights, privacy, and wellbeing of other users and our team.</li>
          <li>Refrain from using the Platform to spread harmful or offensive content.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h4>4. Emergency & Medical Situations</h4>
        <p className="text-danger">
          EmotionEase is <strong>not a crisis service</strong>. If you are in danger or experiencing a medical or psychiatric emergency, please call emergency services or a licensed mental health professional immediately.
        </p>
      </section>

      <section className="mb-4">
        <h4>5. Intellectual Property</h4>
        <p>
          All content on EmotionEase—including text, graphics, videos, programs, and branding—is the exclusive property of EmotionEase or its content providers. You may not copy, modify, distribute, or reproduce any part of the Platform without written permission.
        </p>
      </section>

      <section className="mb-4">
        <h4>6. Account Security</h4>
        <p>
          If you create an account with us, you are responsible for maintaining the confidentiality of your login credentials. Notify us immediately of any unauthorized use.
        </p>
      </section>

      <section className="mb-4">
        <h4>7. Limitation of Liability</h4>
        <p>
          EmotionEase will not be held liable for emotional distress or any outcomes related to the use of our services. Your use of the Platform is at your own risk.
        </p>
      </section>

      <section className="mb-4">
        <h4>8. Modifications to Terms</h4>
        <p>
          We may update these Terms at any time. Changes are effective upon posting. Continued use indicates your acceptance of the updated Terms.
        </p>
      </section>

      <section className="mb-4">
        <h4>9. Termination</h4>
        <p>
          We may suspend or terminate your access to the Platform without notice if you violate these Terms.
        </p>
      </section>

      <section className="mb-4">
        <h4>10. Governing Law</h4>
        <p>
          These Terms are governed by the laws of <strong>[Insert State/Country]</strong>. Any disputes shall be resolved in the courts of <strong>[Insert Jurisdiction]</strong>.
        </p>
      </section>

      <section className="mb-4">
        <h4>11. Contact Us</h4>
        <p>
          For questions or concerns about these Terms, please contact us at: <br />
          📧 <a href="mailto:support@emotionease.com">support@emotionease.com</a> <br />
          🌐 <a href="http://www.emotionease.com" target="_blank" rel="noopener noreferrer">www.emotionease.com</a>
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
