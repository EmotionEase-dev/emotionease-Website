import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import './Home.css';
import PeacefulMeditation from '../public/PeacefulMeditation.png';
import Human from '../public/Human.png';
import Cage from '../public/cage.png';
import Freedom from '../public/Freedom.png';


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 100,
      damping: 10,
      mass: 0.5
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const cardHover = {
  hover: {
    y: -10,
    boxShadow: "0 15px 30px rgba(40, 167, 69, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
  <div className="container py-5 py-lg-5">
    <div className="row align-items-center g-3">
      <div className="col-lg-6 order-lg-1 order-2 d-flex flex-column" style={{height: "100%"}}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="d-flex flex-column h-100"
        >
          {/*  variants={itemVariants} */}
          <div className="flex-grow-1 d-flex flex-column justify-content-center">
            <motion.h1 className="hero-title display-3 fw-bold mb-4">
              Life Situations Causing <span className="text-gradient-success">Emotional Turbulence!</span>
            </motion.h1>
            
            <motion.div 
              className="hero-questions bg-white p-4 p-lg-5 rounded-4 shadow-sm mb-4" 
              variants={itemVariants}
              whileHover={{
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)"
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="lead fw-medium">Dear People,</p>
              <div style={{ paddingLeft: 0,fontSize: "1.2rem" }}>
  {[
    "Do you feel insecure & stressed frequently?",
    "Do you want to succeed in your career confidently even after a setback?",
    "Do your past events or circumstances haunt you even now?",
    "Are you feeling Hurt or irritated often?",
    "Are your dear ones Not listening & not respecting you?",
    "Are you facing a strained unhappy relationship?",
    "Are your thoughts making you feel anxious?"
  ].map((question, index) => (
    <motion.div
      key={index}
      className="d-flex mb-2"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
      <span>{question}</span>
    </motion.div>
  ))}
</div>


            </motion.div>
          </div>
          
          <motion.div 
            className="hero-cta bg-success bg-opacity-10 p-4 p-lg-5 rounded-4" 
            variants={itemVariants}
            whileHover={{
              boxShadow: "0 10px 25px rgba(40, 167, 69, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-success fw-bold mb-3">We Support!</h3>
            <p className="mb-4">
              Our unique, structured programs are designed to empower you to take control 
              of your emotional wellbeing and live a more fulfilled life—both personally 
              and professionally.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/contact" 
                className="btn btn-success btn-lg px-4 py-3 fw-medium"
              >
                Reach Out to Us <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="col-lg-6 order-lg-2 order-1">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="position-relative h-100"
        >
          <div id="heroCarousel" className="carousel slide rounded-4 shadow-lg h-100" data-bs-ride="carousel">
            <div className="carousel-inner rounded-4 h-100">
              {/* Slide 1 */}
              <div className="carousel-item active h-100">
                <div className="hero-image-wrapper floating h-100">
                  <img 
                    src={PeacefulMeditation}
                    alt="Peaceful meditation" 
                    className="d-block w-100 h-100 img-fluid rounded-4"
                    style={{objectFit: "cover"}}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4 overflow-hidden z-index-1">
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-success bg-opacity-10"></div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item h-100">
                <img 
                  src={Human}
                  alt="Second slide" 
                  className="d-block w-100 h-100 img-fluid rounded-4"
                  style={{objectFit: "cover"}}
                />
              </div>

              {/* Slide 3 */}
              <div className="carousel-item h-100">
                <img 
                  src={Cage}
                  alt="Third slide" 
                  className="d-block w-100 h-100 img-fluid rounded-4"
                  style={{objectFit: "cover"}}
                />
              </div>

              {/* Slide 4 */}
              <div className="carousel-item h-100">
                <img 
                  src={Freedom}
                  alt="Fourth slide" 
                  className="d-block w-100 h-100 img-fluid rounded-4"
                  style={{objectFit: "cover"}}
                />
              </div>
            </div>

            {/* Carousel Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button 
                type="button" 
                data-bs-target="#heroCarousel" 
                data-bs-slide-to="0" 
                className="active" 
                aria-current="true" 
                aria-label="Slide 1"
              ></button>
              <button 
                type="button" 
                data-bs-target="#heroCarousel" 
                data-bs-slide-to="1" 
                aria-label="Slide 2"
              ></button>
              <button 
                type="button" 
                data-bs-target="#heroCarousel" 
                data-bs-slide-to="2" 
                aria-label="Slide 3"
              ></button>
              <button 
                type="button" 
                data-bs-target="#heroCarousel" 
                data-bs-slide-to="3" 
                aria-label="Slide 4"
              ></button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* What You Get Section */}
      <section className="benefits-section py-5 py-lg-7 bg-light">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-5 mb-lg-7 delay-100"
          >
            <motion.h2 className="section-title display-3 fw-bold mb-3" variants={itemVariants}>
              What Will You <span className="text-gradient-success">Get?</span>
            </motion.h2>
            <motion.p className="lead text-muted mx-auto" style={{ maxWidth: '700px',fontWeight:'bold' }} variants={itemVariants}>
              Our comprehensive approach addresses all aspects of emotional & Relational wellbeing
            </motion.p>
          </motion.div>
          
          <div className="row g-4">
            {[
              { 
                title: "Transform Your Thinking", 
                icon: "bi-arrow-repeat",
                desc: "Shift from negative to positive thought patterns"
              },
              { 
                title: "Heal Emotionally", 
                icon: "bi-heart",
                desc: "Process and release past emotional wounds"
              },
              { 
                title: "Develop Healthy Emotions", 
                icon: "bi-emoji-smile",
                desc: "Cultivate emotional resilience and balance"
              },
              { 
                title: "Build Harmonious Relationships", 
                icon: "bi-people",
                desc: "Create deeper connections with others"
              },
              { 
                title: "Communicate Skillfully", 
                icon: "bi-chat-square-text",
                desc: "Express yourself clearly and effectively"
              },
              { 
                title: "Achieve Personal & Professional Goals", 
                icon: "bi-trophy",
                desc: "Overcome emotional barriers to success"
              },
              { 
                title: "Develop Fearlessness", 
                icon: "bi-shield-check",
                desc: "Face challenges with confidence"
              },
              { 
                title: "Find Inner Peace", 
                icon: "bi-brightness-high",
                desc: "Cultivate lasting calm and contentment"
              }
            ].map((benefit, index) => (
              <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={itemVariants}
                  className="benefit-card h-100 p-4 rounded-4 shadow-sm border-start border-4 border-success bg-white"
                  whileHover="hover"
                >
                  <div className="benefit-icon mb-3">
                    <i className={`bi ${benefit.icon} fs-1`}></i>
                  </div>
                  <h3 className="h5 fw-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted mb-0">{benefit.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotions Wisdom Section */}
<section className="wisdom-section py-5 py-lg-7 position-relative">
  <div className="container position-relative z-index-1"  >
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="text-center mb-5 mb-lg-7"
    >
      <motion.h2 className="section-title display-3 fw-bold mb-3" variants={itemVariants}>
        Few Words on <span className="text-gradient-success">Emotions…</span>
      </motion.h2>
    </motion.div>
    
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="step-card h-100 p-4 p-lg-5 rounded-4 bg-white shadow-sm border border-2 border-success border-opacity-10"
    >
    <motion.div className="row g-4" variants={containerVariants}>
        <motion.div className="col-lg-4 " variants={itemVariants}>
          <motion.div 
            className="h-100 p-3 p-lg-4 rounded-3 border border-2 border-transparent  "
            whileHover={{
              borderColor: "#198754", // Bootstrap success color
              transition: { duration: 0.3 }
            }}
          >
            <div className="d-flex align-items-center mb-3 ">
              <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                <i className="bi bi-lightning-charge-fill fs-4"></i>
              </div>
              <h3 className="h5 fw-bold mb-0">Emotion is Energy</h3>
            </div>
            <p className="mb-0">
              Emotion is our energy to move so respect it. By managing and expressing our 
              emotions effortlessly and in a healthy fashion by our choice gives us organic 
              happiness, health and efficiency.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div className="col-lg-4" variants={itemVariants}>
          <motion.div 
            className="h-100 p-3 p-lg-4 rounded-3 border border-2 border-transparent"
            whileHover={{
              borderColor: "#198754", // Bootstrap success color
              transition: { duration: 0.3 }
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success bg-opacity-10 text-success rounded-circle p-2 me-3">
                <i className="bi bi-heart-fill fs-4"></i>
              </div>
              <h3 className="h5 fw-bold mb-0">Every Emotion Matters</h3>
            </div>
            <p className="mb-0">
              Every emotion is valuable, even anger is a healthy emotion if it's used to 
              establish boundaries with our love's ones. We could reduce the intensity of 
              our emotions by breathing slowly & deeply.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div className="col-lg-4" variants={itemVariants}>
          <motion.div 
            className="h-100 p-3 p-lg-4 rounded-3 border border-2 border-transparent"
            whileHover={{
              borderColor: "#198754", // Bootstrap success color
              transition: { duration: 0.3 }
            }}
          >
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success bg-opacity-10 text-success rounded-circle p-2 me-3">
                <i className="bi bi-shield-fill-check fs-4"></i>
              </div>
              <h3 className="h5 fw-bold mb-0">Meeting Emotional Needs</h3>
            </div>
            <p className="mb-0">
              If our emotional needs are unmet then it would lead to emotional 
              stagnation so work towards meeting your needs in a healthier fashion.
              Resist the temptation to take decisions when emotions are low.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      
    </motion.div>

    
      
  </div>
</section>

      {/* Uniqueness Section */}
      <section id="uniqueness-section" className="uniqueness-section py-5 py-lg-7 bg-light">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-5 mb-lg-7"
          >
            <motion.h2 className="section-title display-3 fw-bold mb-3" variants={itemVariants}>
              Our <span className="text-gradient-success">6 Uniqueness</span>
            </motion.h2>
            <motion.p className="lead text-muted fst-italic" variants={itemVariants} style={{fontWeight: 'bold' }}>
              "Seeking Help when needed is a sign of maturity"
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="row g-4"
          >
            {[
              "We will make you feel better from Day 1 by sharing you the reasons and right solutions.",
              "Our sessions have No time restrictions as we really care for you.",
              "We provide Unlimited sessions until you feel fully empowered with confidence (for Level 2 & 3 participants).",
              "We follow up with you for 3-months post enablement as we never let you down.",
              "We give 50% refund of your money if in case you are unhappy with the results anytime as your satisfaction is our primary goal.",
              "We give a 'Free First session' so that people get a better chance to understand our work."
            ].map((item, index) => (
              <motion.div key={index} className="col-md-6" variants={itemVariants}>
                <motion.div 
                  className="uniqueness-card h-100 p-4 p-lg-5 rounded-4 bg-white position-relative shadow-sm"
                  whileHover="hover"
                  variants={cardHover}
                >
                  <div className="uniqueness-number bg-success text-white rounded-circle d-flex align-items-center justify-content-center fs-4 fw-bold">
                    {index + 1}
                  </div>
                  <p className="mb-0 ps-5">{item}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How Programs Work Section */}
      <section className="programs-work-section py-5 py-lg-7">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-5 mb-lg-7"
          >
            <motion.h2 className="section-title display-3 fw-bold mb-3" variants={itemVariants}>
              How Our <span className="text-gradient-success">Programs Work</span>
            </motion.h2>
            <motion.p className="lead text-muted mx-auto" style={{ maxWidth: '700px',fontWeight:'bold' }} variants={itemVariants}>
              A structured approach to emotional wellbeing
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="row g-4 mb-5"
          >
            {[
              {
                title: "Foundation Workshop",
                desc: "Start with our 5-day intensive to build emotional awareness and basic regulation skills.",
                features: ["Group Sessions", "Daily Exercises"],
                icon: "bi-layers"
              },
              {
                title: "Personal Transformation",
                desc: "1-on-1 sessions to heal deeper emotional patterns and build resilience.",
                features: ["Customized Plan", "Unlimited Support"],
                icon: "bi-person"
              },
              {
                title: "Relationship Mastery",
                desc: "Apply your skills to create fulfilling personal and professional relationships.",
                features: ["Dyadic Sessions", "Family Dynamics"],
                icon: "bi-people"
              }
            ].map((step, index) => (
              <motion.div key={index} className="col-md-4" variants={itemVariants}>
                <motion.div 
                  className="step-card h-100 p-4 p-lg-5 rounded-4 bg-white shadow-sm border border-2 border-success border-opacity-10"
                  whileHover="hover"
                  variants={cardHover}
                >
                  <div className="step-number bg-success text-white rounded-circle d-flex align-items-center justify-content-center mb-4 mx-auto">
                    <i className={`bi ${step.icon} fs-4`}></i>
                  </div>
                  <h3 className="h4 fw-bold text-center mb-3">{step.title}</h3>
                  <p className="text-muted text-center mb-4">{step.desc}</p>
                  <div className="d-flex justify-content-center flex-wrap gap-2">
                    {step.features.map((feature, i) => (
                      <motion.span 
                        key={i} 
                        className="badge bg-opacity-10 rounded-pill px-3 py-2"
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center"
          >
            <motion.div 
  className="bg-success bg-opacity-10 p-4 rounded-4 border border-success border-opacity-25 d-inline-block mb-5"
  whileHover={{ scale: 1.02 }}
>
  <p className="text-uppercase small fw-bold text-success mb-3">ALL PROGRAMS INCLUDE:</p>
  <div className="d-flex flex-wrap justify-content-center gap-4 mb-3">
    <div className="d-flex align-items-center">
      <i className="bi bi-check-circle-fill text-success me-2"></i>
      <span>3-month follow-up</span>
    </div>
    <div className="d-flex align-items-center">
      <i className="bi bi-check-circle-fill text-success me-2"></i>
      <span>Satisfaction guarantee</span>
    </div>
    <div className="d-flex align-items-center">
      <i className="bi bi-check-circle-fill text-success me-2"></i>
      <span>Free first session</span>
    </div>
    <div className="d-flex align-items-center">
      <i className="bi bi-check-circle-fill text-success me-2"></i>
      <span>50% money back guarantee</span>
    </div>
  </div>
  <p className="small text-muted text-center mb-0">*Terms and conditions apply</p>
</motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/programs" 
                className="btn btn-success btn-lg px-5 py-3 fw-medium"
              >
                Explore All Program Details <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Review Section */}
<section id="review-section" className="review-section py-5 py-lg-7 bg-light">
  <div className="container">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="text-center mb-5 mb-lg-7"
    >
      <motion.h2 className="section-title display-3 fw-bold mb-3" variants={itemVariants}>
        What Our <span className="text-gradient-success">Clients Say</span>
      </motion.h2>
      <motion.p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }} variants={itemVariants}>
        Real stories from people who transformed their emotional wellbeing
      </motion.p>
    </motion.div>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="row g-4"
    >
      {[
        {
          quote: "EmotionEase helped me find tools to manage my anxiety in just 3 weeks. The personalized approach made all the difference.",
          name: "Sarah J.",
          role: "Teacher",
          rating: 5,
        },
        {
          quote: "After years of struggling with emotional regulation, I finally found a program that understands and addresses my unique needs.",
          name: "Michael T.",
          role: "Software Developer",
          rating: 5,
        },
        {
          quote: "The unlimited sessions and follow-up support gave me the confidence to make lasting changes in my emotional health.",
          name: "Priya K.",
          role: "Healthcare Worker",
          rating: 5,
        }
      ].map((testimonial, index) => (
        <motion.div key={index} className="col-md-4" variants={itemVariants}>
          <motion.div 
            className="testimonial-card h-100 p-4 p-lg-5 rounded-4 bg-white shadow-sm"
            whileHover="hover"
            variants={cardHover}
          >
            <div className="d-flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i key={i} className="bi bi-star-fill text-warning me-1"></i>
              ))}
            </div>
            <p 
              className="lead fst-italic mb-4"
              style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.25rem' }}
            >
              "{testimonial.quote}"
            </p>
            <div className="d-flex align-items-center">
              <motion.img 
              />
              <div>
                <h4 
                  className="h6 fw-bold mb-0"
                  style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.1rem' }}
                >
                  {testimonial.name}
                </h4>
                <small className="text-muted">{testimonial.role}</small>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Final CTA Section */}
      <section className="final-cta py-5 py-lg-7 text-center  bg-opacity-5" style={{backgroundColor: "#f0fdf4"}}>
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2 className="display-3 fw-bold mb-3" variants={itemVariants}>
              Ready to Transform Your Emotional Wellbeing?
            </motion.h2>
            <motion.p className="lead mb-4 mx-auto" style={{maxWidth: "600px"}} variants={itemVariants}>
              Begin your journey to emotional balance and personal growth with a{' '}
              <span className="text-decoration-underline fw-bold">free, no-obligation</span>{' '}
              first session.
            </motion.p>
            <motion.div className="d-flex justify-content-center gap-3 flex-wrap" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link 
                  to="https://forms.gle/YbcSchKPpTkaxu1ZA" 
                  className="btn btn-success btn-lg px-4 py-3 fw-medium"
                >
                  Book My Free First Session <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              </motion.div>
            </motion.div>
            <motion.p className="small mt-3 text-muted" variants={itemVariants}>
              No credit card required • 100% confidential
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-5 bg-dark text-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h3 className="h4 fw-bold text-success mb-3">EmotionEase</h3>
              <p className="small">
                Empowering emotional wellness through personalized care and community support.
              </p>

              <div className="social-links mt-4">
  {[
    // { name: 'facebook', url: 'https://www.facebook.com/emotionease' },
    // { name: 'twitter-x', url: 'https://x.com/emotionease' },
    { name: 'instagram', url: 'https://www.instagram.com/emotionease' },
    { name: 'linkedin', url: 'https://www.linkedin.com/company/emotionease/' },
    // { name: 'youtube', url: 'https://www.youtube.com/@emotionease' }
  ].map((social, index) => (
    <motion.a 
      key={index} 
      href={social.url} 
      className="text-white me-3"
      whileHover={{ y: -3, color: '#28a745' }}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className={`bi bi-${social.name} fs-5`}></i>
    </motion.a>
  ))}
</div>



            </div>
            
            <div className="col-lg-2 col-md-4">
              <h4 className="h5 fw-bold mb-3">Quick Links</h4>
              <ul className="list-unstyled">
                {['Home', 'About', 'Programs', 'Contact'].map((link, index) => (
                  <motion.li 
                    key={index} 
                    className="mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      to={`/${link.toLowerCase()}`} 
                      className="text-white text-decoration-none"
                    >
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-4">
              <h4 className="h5 fw-bold mb-3">Programs</h4>
              <ul className="list-unstyled">
                {[
                  { name: "Foundation Workshop", link: "#foundation" },
                  { name: "Personal Transformation", link: "#transformation" },
                  { name: "Relationship Mastery", link: "#relationship" }
                ].map((program, index) => (
                  <motion.li 
                    key={index} 
                    className="mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <Link 
                      to={`/programs${program.link}`} 
                      className="text-white text-decoration-none"
                    >
                      {program.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="col-lg-3 col-md-4">
              <h4 className="h5 fw-bold mb-3">Contact</h4>
              <ul className="list-unstyled small">
                <motion.li 
                  className="mb-2 d-flex align-items-center"
                  whileHover={{ x: 5 }}
                >
                  <i className="bi bi-geo-alt-fill text-success me-2"></i>
                  <span>Chennai</span>
                </motion.li>
                <motion.li 
                  className="mb-2 d-flex align-items-center"
                  whileHover={{ x: 5 }}
                >
                  <i className="bi bi-telephone-fill text-success me-2"></i>
                  <span>+91-9345330187</span>
                </motion.li>
                <motion.li 
                  className="d-flex align-items-center"
                  whileHover={{ x: 5 }}
                >
                  <i className="bi bi-envelope-fill text-success me-2"></i>
                  <span>emotionease@gmail.com</span>
                </motion.li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom mt-5 pt-4 border-top border-secondary text-center">
            <p className="small mb-0" >
              © {new Date().getFullYear()} EmotionEase. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;