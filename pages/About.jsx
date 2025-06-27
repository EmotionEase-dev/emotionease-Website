import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import mission from '../public/mission-image.png';
import ElangoPhoto from '../public/ElangoPhoto.jpg';
import SuchetaImage from '../public/SuchetaImage.jpg';
import ThilagaMC from '../public/ThilagaMC.jpg';

const About = () => {


    useEffect(() => {
    document.title = "EmotionEase | Online Counselling & Emotional Wellbeing";
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

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
  <ul style={{ listStyleType: 'none', padding: 0 }}>
    <li style={{ display: 'grid', gridTemplateColumns: '24px auto', alignItems: 'start' }}>
      <span><i className="bi bi-heart-fill" style={{ fontSize: '1.2rem' }}></i></span>
      <span><strong>Empathy:</strong> We listen with compassion</span>
    </li>
    <li style={{ display: 'grid', gridTemplateColumns: '24px auto', alignItems: 'start'}}>
      <span><i className="bi bi-shield-fill" style={{ fontSize: '1.2rem' }}></i></span>
      <span><strong>Integrity:</strong> We maintain the highest ethical standards</span>
    </li>
    <li style={{ display: 'grid', gridTemplateColumns: '24px auto', alignItems: 'start'}}>
      <span><i className="bi bi-lightbulb-fill" style={{ fontSize: '1.2rem' }}></i></span>
      <span><strong>Innovation:</strong> We use evidence-based, cutting-edge techniques</span>
    </li>
    <li style={{ display: 'grid', gridTemplateColumns: '24px auto', alignItems: 'start'}}>
      <span><i className="bi bi-people-fill" style={{ fontSize: '1.2rem' }}></i></span>
      <span><strong>Inclusivity:</strong> We serve all individuals regardless of background</span>
    </li>
  </ul>
</div>


              
            </div>
<div className="col-lg-6">
  <video controls className="img-fluid rounded shadow" style={{ width: '100%' }}>
    <source src="/A-MessageVideo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="mt-3 d-flex flex-wrap gap-3 align-items-center">
  {/* 1. Copy Drive Link Button - Enhanced */}
  <button
    className="btn btn-primary position-relative overflow-hidden"
    onClick={(e) => {
      const driveUrl = "https://drive.google.com/file/d/1exwAszrVP2WI3s-Nxj8zS7V9WxK_SX-0/view?usp=sharing";
      navigator.clipboard.writeText(driveUrl);
      
      // Create and show toast
      const toast = document.createElement('div');
      toast.className = 'position-fixed top-0 start-50 translate-middle-x p-3 toast-animation';
      toast.style.zIndex = '9999';
      toast.innerHTML = `
        <div class="toast show bg-white" role="alert">
          <div class="toast-body d-flex align-items-center shadow-sm">
            <i class="bi bi-check-circle-fill text-success me-2 fs-5"></i>
            <span class="fw-medium">Google Drive link copied to clipboard!</span>
          </div>
        </div>
      `;
      document.body.appendChild(toast);
      
      // Button click effect
      const button = e.currentTarget;
      button.classList.add('active');
      setTimeout(() => button.classList.remove('active'), 300);
      
      // Remove toast after delay
      setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    }}
    style={{
      transition: 'all 0.3s ease',
      minWidth: '140px'
    }}
  >
    <i className="bi bi-google-drive me-2"></i>
    <span>Copy Drive Link</span>
    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-0 hover-effect"></span>
  </button>

  {/* 2. Download Button - Enhanced */}
  <a
    href="https://drive.google.com/uc?export=download&id=1exwAszrVP2WI3s-Nxj8zS7V9WxK_SX-0"
    className="btn btn-dark position-relative overflow-hidden"
    style={{
      transition: 'all 0.3s ease',
      minWidth: '140px'
    }}
    download
  >
    <i className="bi bi-download me-2"></i>
    <span>Download</span>
    <span className="position-absolute top-0 start-0 w-100 h-100 bg-white opacity-0 hover-effect"></span>
  </a>
</div>

<style jsx>{`
  /* Button hover effect */
  .hover-effect {
    transition: opacity 0.3s ease;
  }
  
  .btn:hover .hover-effect {
    opacity: 0.1 !important;
  }
  
  .btn.active {
    transform: scale(0.95);
  }
  
  /* Toast animations */
  .toast-animation {
    animation: slideIn 0.3s forwards;
  }
  
  .fade-out {
    animation: fadeOut 0.3s forwards;
  }
  
  @keyframes slideIn {
    from { 
      opacity: 0;
      transform: translate(-50%, -20px);
    }
    to { 
      opacity: 1;
      transform: translate(-50%, 20px);
    }
  }
  
  @keyframes fadeOut {
    from { 
      opacity: 1;
      transform: translate(-50%, 20px);
    }
    to { 
      opacity: 0;
      transform: translate(-50%, -20px);
    }
  }
  
  /* Toast styling */
  .toast {
    border-radius: 12px !important;
    border: none !important;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
  }
  
  .toast-body {
    padding: 12px 16px;
    border-radius: 12px;
  }
`}</style>
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
                      Founder Elango Annamalai began his journey as a counseling practitioner at workspace after 
                      overcoming his own emotional challenges through NLP and therapeutic techniques.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2022</div>
                  <div className="timeline-content">
                    <h3>First Breakthrough</h3>
                    <p>
                      Developed the unique Emotion Regulation Framework after working with 50+ clients 
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
          <h2 className="section-title text-center mb-5">Meet Our Team</h2>
          
          <div className="row g-4">
            {/* Team Member 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                <div className="card-body p-4 text-center">
                  <div className="mx-auto mb-4" style={{width: "150px", height: "150px"}}>
                    <img 
                      src={ElangoPhoto}
                      alt="Elango Annamalai"
                      className="img-fluid rounded-circle w-100 h-100 object-fit-cover border border-3 border-success"
                    />
                  </div>
                  <h3 className="h5 mb-2">Elango Annamalai</h3>
                  <p className="mb-3 fw-semibold">Founder & Emotion Regulation Specialist</p>
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
                  <div className="mx-auto mb-4" style={{width: "150px", height: "150px"}}>
                    <img 
                      src={SuchetaImage} 
                      alt="Sucheta Sinha"
                      className="img-fluid rounded-circle w-100 h-100 object-fit-cover border border-3 border-success"
                    />
                  </div>
                  <h3 className="h5 mb-2">Sucheta Sinha</h3>
                  <p className="mb-3 fw-semibold">Content & Marketing Expert</p>
                  
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
                  <div className="mx-auto mb-4" style={{width: "150px", height: "150px"}}>
                    <img 
                      src={ThilagaMC}
                      alt="Thilagavathi MC"
                      className="img-fluid rounded-circle w-100 h-100 object-fit-cover border border-3 border-success"
                    />
                  </div>
                  <h3 className="h5 mb-2">Thilagavathi MC</h3>
                  <p className="mb-3 fw-semibold">Creative Designer</p>
                  
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
      <section className="cta-section py-5 text-center bg-light">
        <div className="container">
          <h2 className="mb-4 display-5 fw-bold">Ready to Begin Your Emotional Wellness Journey?</h2>
          <p className="lead mb-4">
            Our team is here to support you every step of the way.
          </p>
          <div className="cta-buttons">
            <Link 
              to="/programs" 
              className="btn btn-primary btn-lg me-3 px-4 py-2"
              onClick={scrollToTop}
            >
              Explore Programs
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-outline-primary btn-lg px-4 py-2"
              onClick={scrollToTop}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;