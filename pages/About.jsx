import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import mission from '../public/mission-image.png';
import ElangoPhoto from '../public/ElangoPhoto.jpg';
import SuchetaImage from '../public/SuchetaImage.jpg';
import ThilagaMC from '../public/ThilagaMC.jpg';

// ScrollToTopLink component to handle scroll behavior
const ScrollToTopLink = ({ to, children, ...props }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

const About = () => {
  return (
    <div className="about-page">
      {/* Mission Section */}
      <section className="mission-section py-5" style={{backgroundColor: 'rgba(63, 230, 102, 0.1)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold mb-4">Our Mission</h1>
              <p className="lead mb-4">
                At EmotionEase, we're dedicated to transforming emotional wellbeing through 
                accessible, personalized programs that empower individuals to navigate life's 
                challenges with confidence and resilience.
              </p>
              <div className="mission-values">
                <h3 className="h4 mb-3">Our Core Values:</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-heart-fill text-success me-2"></i> 
                    <strong>Empathy:</strong> We listen with compassion
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-shield-fill text-success me-2"></i> 
                    <strong>Integrity:</strong> We maintain the highest ethical standards
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-lightbulb-fill text-success me-2"></i> 
                    <strong>Innovation:</strong> We use evidence-based, cutting-edge techniques
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-people-fill text-success me-2"></i> 
                    <strong>Inclusivity:</strong> We serve all individuals regardless of background
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src={mission}
                alt="Team working together" 
                className="img-fluid rounded shadow-lg hover-zoom"
                style={{transition: 'transform 0.3s ease'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section py-5">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5">Our Story</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="story-timeline position-relative">
                {/* Timeline line */}
                <div className="timeline-line position-absolute top-0 start-50 translate-middle-x h-100 bg-success bg-opacity-25" 
                  style={{width: '2px'}}></div>
                
                <div className="timeline-item position-relative mb-5">
                  <div className="timeline-year bg-success text-white rounded-pill px-3 py-1 d-inline-block">2020</div>
                  <div className="timeline-content bg-light p-4 rounded shadow-sm">
                    <h3 className="h4 text-success">The Beginning</h3>
                    <p className="mb-0">
                      Founder Elango Annamalai began his journey as a counseling practitioner at workspace after 
                      overcoming his own emotional challenges through NLP and therapeutic techniques.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item position-relative mb-5">
                  <div className="timeline-year bg-success text-white rounded-pill px-3 py-1 d-inline-block">2022</div>
                  <div className="timeline-content bg-light p-4 rounded shadow-sm">
                    <h3 className="h4 text-success">First Breakthrough</h3>
                    <p className="mb-0">
                      Developed the unique Emotion Regulation Framework after working with 50+ clients 
                      and synthesizing various therapeutic approaches.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item position-relative mb-5">
                  <div className="timeline-year bg-success text-white rounded-pill px-3 py-1 d-inline-block">2024</div>
                  <div className="timeline-content bg-light p-4 rounded shadow-sm">
                    <h3 className="h4 text-success">Team Expansion</h3>
                    <p className="mb-0">
                      Sucheta Sinha joined to help scale the mission through digital outreach, bringing marketing expertise, 
                      while Thilagavathi managed the technical aspects, ensuring smooth execution and platform support.
                    </p>
                  </div>
                </div>
                
                <div className="timeline-item position-relative">
                  <div className="timeline-year bg-success text-white rounded-pill px-3 py-1 d-inline-block">2025</div>
                  <div className="timeline-content bg-light p-4 rounded shadow-sm">
                    <h3 className="h4 text-success">Program Launch</h3>
                    <p className="mb-0">
                      Officially launched EmotionEase with three structured programs that have since 
                      helped over 100+ individuals transform their emotional wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section py-5 bg-light">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5">Meet Our Team</h2>
          <div className="row g-4">

            {/* Team Member 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4 text-center">
                  <div className="mx-auto mb-4 overflow-hidden" style={{width: "150px", height: "150px"}}>
                    <img 
                      src={ElangoPhoto}
                      alt="Elango Annamalai"
                      className="img-fluid rounded-circle w-100 h-100 object-fit-cover border border-3 border-success hover-zoom"
                      style={{transition: 'transform 0.3s ease'}}
                    />
                  </div>
                  <h3 className="h4 mb-2">Elango Annamalai</h3>
                  <p className="text-success mb-3 fw-semibold">Founder & Emotion Regulation Specialist</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                    <span className="badge bg-success bg-opacity-10 text-success">NLP Practitioner</span>
                    <span className="badge bg-success bg-opacity-10 text-success">Certified Counselor</span>
                    <span className="badge bg-success bg-opacity-10 text-success">Trauma-Informed Care</span>
                  </div>
                  <p className="text-muted mb-0">
                    With 5+ years of experience in emotional wellbeing, Elango has developed 
                    unique methodologies combining NLP, cognitive behavioral techniques, and 
                    mindfulness practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4 text-center">
                  <div className="mx-auto mb-4 overflow-hidden" style={{width: "150px", height: "150px"}}>
                    <img 
                      src={SuchetaImage} 
                      alt="Sucheta Sinha"
                      className="img-fluid rounded-circle w-100 h-100 object-fit-cover border border-3 border-success hover-zoom"
                      style={{transition: 'transform 0.3s ease'}}
                    />
                  </div>
                  <h3 className="h4 mb-2">Sucheta Sinha</h3>
                  <p className="text-success mb-3 fw-semibold">Content & Marketing Expert</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                    <span className="badge bg-success bg-opacity-10 text-success">Digital Marketing</span>
                    <span className="badge bg-success bg-opacity-10 text-success">Content Strategy</span>
                  </div>
                  <p className="text-muted mb-0">
                    Sucheta brings 4 years of digital marketing experience with a passion for 
                    mental health advocacy. She ensures EmotionEase's message reaches those who 
                    need it most.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4 text-center">
                  <div className="mx-auto mb-4 overflow-hidden" style={{width: "150px", height: "150px"}}>
                    <img 
                      src={ThilagaMC}
                      alt="Thilagavathi MC"
                      className="img-fluid rounded-circle w-100 h-100 object-fit-cover border border-3 border-success hover-zoom"
                      style={{transition: 'transform 0.3s ease'}}
                    />
                  </div>
                  <h3 className="h4 mb-2">Thilagavathi MC</h3>
                  <p className="text-success mb-3 fw-semibold">Creative Designer</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                    <span className="badge bg-success bg-opacity-10 text-success">MERN Stack</span>
                    <span className="badge bg-success bg-opacity-10 text-success">IAM Specialist</span>
                  </div>
                  <p className="text-muted mb-0">
                    A security Engineer with around 2 years of IAM experience, now focused on becoming 
                    a skilled Full Stack Developer blending security and seamless user experience.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="methodology-section py-5">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-5">Our Methodology</h2>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4 text-center">
                  <div className="method-icon mb-3 text-success" style={{fontSize: '2rem'}}>
                    <i className="bi bi-cpu"></i>
                  </div>
                  <h3 className="h4 mb-3">NLP Techniques</h3>
                  <p className="mb-0">
                    We use Neuro-Linguistic Programming to help reframe thought patterns and 
                    create positive behavioral changes at the subconscious level.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4 text-center">
                  <div className="method-icon mb-3 text-success" style={{fontSize: '2rem'}}>
                    <i className="bi bi-heart-pulse"></i>
                  </div>
                  <h3 className="h4 mb-3">Emotional Regulation</h3>
                  <p className="mb-0">
                    Our proprietary framework helps identify, process, and healthily express 
                    emotions without suppression or exaggeration.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4 text-center">
                  <div className="method-icon mb-3 text-success" style={{fontSize: '2rem'}}>
                    <i className="bi bi-people"></i>
                  </div>
                  <h3 className="h4 mb-3">Relational Therapy</h3>
                  <p className="mb-0">
                    We incorporate attachment theory and communication strategies to improve 
                    personal and professional relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-light">
        <div className="container">
          <h2 className="display-5 fw-bold text-center mb-4">Ready to Begin Your Emotional Wellness Journey?</h2>
          <p className="lead text-center mb-4">
            Our team is here to support you every step of the way.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <ScrollToTopLink 
              to="/programs" 
              className="btn btn-success btn-lg px-4 py-2"
            >
              Explore Programs
            </ScrollToTopLink>
            <ScrollToTopLink 
              to="/contact" 
              className="btn btn-outline-success btn-lg px-4 py-2"
            >
              Contact Us
            </ScrollToTopLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;