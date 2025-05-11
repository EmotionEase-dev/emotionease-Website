import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import mission from '../src/assets/images/mission-image.png';
import ElangoPhoto from '../src/assets/images/ElangoPhoto.jpg';
import SuchetaImage from '../src/assets/images/SuchetaImage.jpg';
import ThilagaMC from '../src/assets/images/ThilagaMC.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Mission Section */}
      <section className="mission-section py-5" style={{backgroundColor: 'rgba(63, 230, 102, 0.1)'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="section-title">Our Mission</h1>
              <p className="mission-text">
                At EmotionEase, we're dedicated to transforming emotional wellbeing through 
                accessible, personalized programs that empower individuals to navigate life's 
                challenges with confidence and resilience.
              </p>
              <div className="mission-values">
                <h3>Our Core Values:</h3>
                <ul>
                  <li><i className="bi bi-heart-fill"></i> <strong>Empathy:</strong> We listen with compassion</li>
                  <li><i className="bi bi-shield-fill"></i> <strong>Integrity:</strong> We maintain the highest ethical standards</li>
                  <li><i className="bi bi-lightbulb-fill"></i> <strong>Innovation:</strong> We use evidence-based, cutting-edge techniques</li>
                  <li><i className="bi bi-people-fill"></i> <strong>Inclusivity:</strong> We serve all individuals regardless of background</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <img 
                src={mission} 
                alt="Team working together" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Story</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="story-timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2020</div>
                  <div className="timeline-content">
                    <h3>The Beginning</h3>
                    <p>
                      Founder Elango Annamalai began his journey as a counseling practitioner &at workspace after 
                      overcoming his own emotional challenges through NLP and therapeutic techniques.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2022</div>
                  <div className="timeline-content">
                    <h3>First Breakthrough</h3>
                    <p>
                      Developed the unique Emotion Regulation Framework after working with 100+ clients 
                      and synthesizing various therapeutic approaches.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h3>Team Expansion</h3>
                    <p>
                    Sucheta Sinha joined to help scale the mission through digital outreach, bringing marketing expertise, while Thilagavathi managed the technical aspects, ensuring smooth execution and platform support.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-content">
                    <h3>Program Launch</h3>
                    <p>
                      Officially launched EmotionEase with three structured programs that have since 
                      helped over 500 individuals transform their emotional wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Team Section */}
<section className="team-section py-5">
  <div className="container">
    <h2 className="section-title text-center mb-5">Meet Our Team</h2>
    <div className="row">

      {/* Team Member 1 */}
      <div className="col-md-4 mb-4">
        <div className="team-card p-4 h-100 text-center">
          <div className="team-image-holder mx-auto mb-4">
            <img 
              src={ElangoPhoto}
              alt="Elango Annamalai"
              className="img-fluid rounded-circle"
            />
          </div>
          <h3 className="team-name">Elango Annamalai</h3>
          <p className="team-role">Founder & Emotion Regulation Specialist</p>
          <div className="team-qualifications mb-3">
            <span className="badge me-2">NLP Practitioner</span>
            <span className="badge me-2">Certified Counselor</span>
            <span className="badge">Trauma-Informed Care</span>
          </div>
          <p className="team-bio">
            With 5+ years of experience in emotional wellbeing, Elango has developed 
            unique methodologies combining NLP, cognitive behavioral techniques, and 
            mindfulness practices. His approach focuses on practical, results-oriented 
            emotional regulation.
          </p>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="col-md-4 mb-4">
        <div className="team-card p-4 h-100 text-center">
          <div className="team-image-holder mx-auto mb-4">
            <img 
              src={SuchetaImage} 
              alt="Sucheta Sinha"
              className="img-fluid rounded-circle"
            />
          </div>
          <h3 className="team-name">Sucheta Sinha</h3>
          <p className="team-role">Content  & Marketing expertise</p>
          <div className="team-qualifications mb-3">
            <span className="badge me-2">Digital Marketing</span>
            <span className="badge me-2">Content Strategy</span>
          </div>
          <p className="team-bio">
            Sucheta brings 4 years of digital marketing experience with a passion for 
            mental health advocacy. She ensures EmotionEase's message reaches those who 
            need it most while maintaining authentic, compassionate communication.
          </p>
        </div>
      </div>

      {/* Team Member 3 - Add your third team member here */}
      <div className="col-md-4 mb-4">
        <div className="team-card p-4 h-100 text-center">
          <div className="team-image-holder mx-auto mb-4">
            <img 
              src={ThilagaMC}
              alt="ThilagavathiMC"
              className="img-fluid rounded-circle"
            />
          </div>
          <h3 className="team-name">Thilagavathi MC</h3>
          <p className="team-role">Creative Designer</p>
          <div className="team-qualifications mb-3">
            <span className="badge me-2">MERN Stack</span>
            <span className="badge me-2">Identity & Access management</span>
          </div>
          <p className="team-bio">
         A security Engineer with around 2 years of IAM experience, now focused on becoming a skilled Full Stack Developer blending security and seamless user experience.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Methodology Section */}
      <section className="methodology-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Methodology</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="method-card p-4 h-100">
                <div className="method-icon mb-3">
                  <i className="bi bi-cpu"></i>
                </div>
                <h3>NLP Techniques</h3>
                <p>
                  We use Neuro-Linguistic Programming to help reframe thought patterns and 
                  create positive behavioral changes at the subconscious level.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="method-card p-4 h-100">
                <div className="method-icon mb-3">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <h3>Emotional Regulation</h3>
                <p>
                  Our proprietary framework helps identify, process, and healthily express 
                  emotions without suppression or exaggeration.
                </p>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="method-card p-4 h-100">
                <div className="method-icon mb-3">
                  <i className="bi bi-people"></i>
                </div>
                <h3>Relational Therapy</h3>
                <p>
                  We incorporate attachment theory and communication strategies to improve 
                  personal and professional relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Ready to Begin Your Emotional Wellness Journey?</h2>
          <p className="mb-4">
            Our team is here to support you every step of the way.
          </p>
          <div className="cta-buttons">
            <Link to="/programs" className="btn btn-outline-primary btn-lg me-3">
              Explore Programs
            </Link>
            <Link to="/contact" className="btn btn-outline-primary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;