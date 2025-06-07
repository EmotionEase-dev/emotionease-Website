import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import "./Home.css";
import PeacefulMeditation from "../public/PeacefulMeditation.png";
import Human from "../public/Human.png";
import Cage from "../public/cage.png";
import Freedom from "../public/Freedom.png";
import TermsModal from "../components/TermsModal";
import SignupForm from '../components/SignUp';



// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.5,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const cardHover = {
  hover: {
    y: -10,
    boxShadow: "0 15px 30px rgba(40, 167, 69, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  const [currentTestimonialPage, setCurrentTestimonialPage] = React.useState(1);
  const [showTerms, setShowTerms] = useState(false);
const [showSignupForm, setShowSignupForm] = useState(false);


 // In your Home component
useEffect(() => {
  // Check if form was previously closed
  const isClosed = localStorage.getItem('signupFormClosed') === 'true';
  if (!isClosed) {
    // Show form after a slight delay for better UX
    const timer = setTimeout(() => {
      setShowSignupForm(true);
    }, 1000);
    return () => clearTimeout(timer);
  }
}, []);

const handleCloseForm = () => {
  setShowSignupForm(false);
  localStorage.setItem('signupFormClosed', 'true');
};

// In your return statement (make sure this is near the top of your component)
{showSignupForm && (
  <div className="modal-backdrop" style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1050,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <div className="modal-content" style={{
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '0.5rem',
      maxWidth: '500px',
      width: '90%'
    }}>
      <SignupForm onClose={handleCloseForm} />
    </div>
  </div>
)}



  const handleTestimonialPageChange = (pageNumber) => {
    setCurrentTestimonialPage(pageNumber);
  };

  return (
    <div className="home-page">
     {/* Signup Form Modal */}
      <SignupForm show={showSignupForm} onClose={handleCloseForm} />

      {/* Hero Section */}
      <section className="hero-section">
  <div className="container py-5 py-lg-5">
    <div className="row align-items-center g-3">
      <div className="col-lg-6 order-lg-1 order-2 d-flex flex-column" style={{ height: "100%" }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="d-flex flex-column h-100"
        >
          <div className="flex-grow-1 d-flex flex-column justify-content-center">

            <motion.h1 className="hero-title display-3 fw-bold mb-4 text-success">
              Emotional Healing & {" "}
              <span className="text-gradient-success">
               Anxiety Relief Online EmotionEase!
              </span>
            </motion.h1>
            {/* <motion.p className="mission-text text-gradient-success">
              Seek Help for Emotional Turbulence from Experts.
            </motion.p> */}

            <motion.p className="mission-text">
              EmotionEase is a safe space for emotional healing, self-regulation, and personal growth. We offer support for emotional overwhelm, anxiety, and stress, helping you build emotional resilience and healthier relationships. Our sessions are held online and can be attended from the comfort of your home or any location that feels right for you. Founded and led by Elango Annamalai, a Certified Counselling Practitioner and specialist in Emotion Regulation; EmotionEase is grounded in deep, real-world understanding of human emotions and mental well-being.
            </motion.p>

            <motion.div
              className="hero-questions bg-white p-4 p-lg-5 rounded-4 shadow-sm mb-4"
              variants={itemVariants}
              whileHover={{
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="lead fw-medium">Dear People,</p>
              <ul style={{
  fontSize: "1.2rem",
  listStyle: "none",
  paddingLeft: 0,
  marginLeft: 0,
  marginBottom: 0,
}}>
  {[
    "Do you feel insecure & stressed frequently?",
    "Do you want to succeed in your career confidently even after a setback?",
    "Do your past events or circumstances haunt you even now?",
    "Are you feeling emotionally hurt by near and dear ones?",
    "Are you feeling disrespected at work and unheard at home?",
    "Do you need help with navigating toxic relationships?",
    "Are your thoughts making you feel anxious?",
  ].map((question, index) => (
    <motion.li
      key={index}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        alignItems: "center",
        listStyle: "none",
        paddingLeft: 0,
        marginLeft: 0,
        marginBottom: "0.5rem",
        position: "relative",
      }}
    >
      {/* Double protection checkmark */}
      <span style={{
        display: "inline-flex",
        marginRight: "0.5rem",
        color: "#28a745", /* Bootstrap's text-success color */
      }}>
        <i className="bi bi-check-circle-fill" aria-hidden="true" />
      </span>
      <span>{question}</span>
    </motion.li>
  ))}
</ul>

            </motion.div>
          </div>

          <motion.div
            className="hero-cta bg-success bg-opacity-10 p-4 p-lg-5 rounded-4"
            variants={itemVariants}
            whileHover={{
              boxShadow: "0 10px 25px rgba(40, 167, 69, 0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-success fw-bold mb-3">We Support!</h2>
            <p className="mb-4">
              Our unique, structured programs are designed to empower you
              to take control of your emotional wellbeing and live a more
              fulfilled life—both personally and professionally.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="btn btn-success btn-lg px-4 py-3 fw-medium"
                aria-label="Reach out to EmotionEase for support"
              >
                Reach Out to Us <i className="bi bi-arrow-right ms-2" aria-hidden="true"></i>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="col-lg-6 order-lg-2 order-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="position-relative h-100"
        >
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade rounded-4 shadow-lg overflow-hidden h-100"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner h-100">
              {/* Slide 1 */}
              <div className="carousel-item active h-100">
                <motion.div
                  className="position-relative h-100"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={PeacefulMeditation}
                    alt="Online Emotion Healing and Counselling by EmotionEase"
                    className="d-block w-100 h-100 img-fluid object-cover"
                    loading="lazy"
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                    <h3 className="h5 fw-bold">Inner Peace</h3>
                    <p>Find your center through mindful meditation</p>
                  </div>
                </motion.div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item h-100">
                <motion.div
                  className="position-relative h-100"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={Human}
                    alt="Online Emotion Healing and Counselling by EmotionEase"
                    className="d-block w-100 h-100 img-fluid object-cover"
                    loading="lazy"
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                    <h3 className="h5 fw-bold">Human Connection</h3>
                    <p>Building meaningful relationships</p>
                  </div>
                </motion.div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item h-100">
                <motion.div
                  className="position-relative h-100"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={Cage}
                    alt="Online Emotion Healing and Counselling by EmotionEase"
                    className="d-block w-100 h-100 img-fluid object-cover"
                    loading="lazy"
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                    <h3 className="h5 fw-bold">Break Barriers</h3>
                    <p>Overcome limitations and grow</p>
                  </div>
                </motion.div>
              </div>

              {/* Slide 4 */}
              <div className="carousel-item h-100">
                <motion.div
                  className="position-relative h-100"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={Freedom}
                    alt="Online Emotion Healing and Counselling by EmotionEase"
                    className="d-block w-100 h-100 img-fluid object-cover"
                    loading="lazy"
                  />
                  <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                    <h3 className="h5 fw-bold">True Freedom</h3>
                    <p>Discover the liberty within yourself</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="prev"
              aria-label="Previous slide"
            >
              <span
                className="carousel-control-prev-icon bg-dark bg-opacity-50 rounded-circle p-3"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide="next"
              aria-label="Next slide"
            >
              <span
                className="carousel-control-next-icon bg-dark bg-opacity-50 rounded-circle p-3"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active rounded-circle" : "rounded-circle"}
                  style={{ width: "10px", height: "10px" }}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
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
            <motion.h2
              className="section-title display-3 fw-bold mb-3"
              variants={itemVariants}
            >
              What You Will Gain from Our <span className="text-gradient-success"> Emotional Wellness Programs?</span>
            </motion.h2>
            <motion.p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px", fontWeight: "bold" }}
              variants={itemVariants}
            >
              Our comprehensive approach addresses all aspects of emotional &
              Relational wellbeing
            </motion.p>
          </motion.div>

          <div className="row g-4">
            {[
              {
                title: "Transform Your Thinking",
                icon: "bi-arrow-repeat",
                desc: "Shift from negative to positive thought patterns",
              },
              {
                title: "Heal Emotionally",
                icon: "bi-heart",
                desc: "Process and release past emotional wounds",
              },
              {
                title: "Develop Healthy Emotions",
                icon: "bi-emoji-smile",
                desc: "Cultivate emotional resilience and balance",
              },
              {
                title: "Build Harmonious Relationships",
                icon: "bi-people",
                desc: "Create deeper connections with others",
              },
              {
                title: "Communicate Skillfully",
                icon: "bi-chat-square-text",
                desc: "Express yourself clearly and effectively",
              },
              {
                title: "Achieve Personal & Professional Goals",
                icon: "bi-trophy",
                desc: "Overcome emotional barriers to success",
              },
              {
                title: "Develop Fearlessness",
                icon: "bi-shield-check",
                desc: "Face challenges with confidence",
              },
              {
                title: "Find Inner Peace",
                icon: "bi-brightness-high",
                desc: "Cultivate lasting calm and contentment",
              },
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
        <div className="container position-relative z-index-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-5 mb-lg-7"
          >
            <motion.h2
              className="section-title display-3 fw-bold mb-3"
              variants={itemVariants}
            >
              Understanding Emotions {" "}
              <span className="text-gradient-success">The Foundation of  Emotion and Mental Health</span>
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
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="d-flex align-items-center mb-3 ">
                    <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                      <i className="bi bi-lightning-charge-fill fs-4"></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">Emotion is Energy</h3>
                  </div>
                  <p className="mb-0">
                    Emotion is our energy to move so respect it. By managing and
                    expressing our emotions effortlessly and in a healthy
                    fashion by our choice gives us organic happiness, health and
                    efficiency.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div className="col-lg-4" variants={itemVariants}>
                <motion.div
                  className="h-100 p-3 p-lg-4 rounded-3 border border-2 border-transparent"
                  whileHover={{
                    borderColor: "#198754", // Bootstrap success color
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle p-2 me-3">
                      <i className="bi bi-heart-fill fs-4"></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">Every Emotion Matters</h3>
                  </div>
                  <p className="mb-0">
                    Every emotion is valuable, even anger is a healthy emotion
                    if it's used to establish boundaries with our love's ones.
                    We could reduce the intensity of our emotions by breathing
                    slowly & deeply.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div className="col-lg-4" variants={itemVariants}>
                <motion.div
                  className="h-100 p-3 p-lg-4 rounded-3 border border-2 border-transparent"
                  whileHover={{
                    borderColor: "#198754", // Bootstrap success color
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success bg-opacity-10 text-success rounded-circle p-2 me-3">
                      <i className="bi bi-shield-fill-check fs-4"></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">Meeting Emotional Needs</h3>
                  </div>
                  <p className="mb-0">
                    If our emotional needs are unmet then it would lead to
                    emotional stagnation so work towards meeting your needs in a
                    healthier fashion. Resist the temptation to take decisions
                    when emotions are low.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Uniqueness Section */}
      <section
        id="uniqueness-section"
        className="uniqueness-section py-5 py-lg-7 bg-light"
      >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-5 mb-lg-7"
          >
            <motion.h2
              className="section-title display-3 fw-bold mb-3"
              variants={itemVariants}
            >
              Reasons Why You Should <span className="text-gradient-success"> Reach Out to EmotionEase</span>
            </motion.h2>
            <motion.p
              className="lead text-muted fst-italic"
              variants={itemVariants}
              style={{ fontWeight: "bold" }}
            >
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
              "We give a 'Free First session' so that people get a better chance to understand our work.",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="col-md-6"
                variants={itemVariants}
              >
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
            <motion.h2
              className="section-title display-3 fw-bold mb-3"
              variants={itemVariants}
            >
              How Our{" "}
              <span className="text-gradient-success">Programs Work</span>
            </motion.h2>
            <motion.p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px", fontWeight: "bold" }}
              variants={itemVariants}
            >
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
                icon: "bi-layers",
              },
              {
                title: "Personal Transformation",
                desc: "1-on-1 sessions to heal deeper emotional patterns and build resilience.",
                features: ["Customized Plan", "Unlimited Support"],
                icon: "bi-person",
              },
              {
                title: "Relationship Mastery",
                desc: "Apply your skills to create fulfilling personal and professional relationships.",
                features: ["Dyadic Sessions", "Family Dynamics"],
                icon: "bi-people",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="col-md-4"
                variants={itemVariants}
              >
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
              <p className="text-uppercase small fw-bold text-success mb-3">
                ALL PROGRAMS INCLUDE:
              </p>
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
              <p className="small text-muted text-center mb-0">
                <div>
                  <button
                    className="btn btn-link"
                    style={{ textDecoration: "none", color: "#000000" }}
                    onClick={() => setShowTerms(true)}
                  >
                    *View Terms and Conditions
                  </button>

                  <TermsModal
                    show={showTerms}
                    onHide={() => setShowTerms(false)}
                  />
                </div>
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Link
                to="/programs"
                className="btn btn-success btn-lg px-5 py-3 fw-medium"
              >
                Explore All Program Details{" "}
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Review Section */}
      <section
        id="review-section"
        className="review-section py-5 py-lg-7 bg-light"
      >
        <div className="container">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-5 mb-lg-7"
          >
            <motion.h2
              className="display-4 fw-bold mb-3"
              variants={itemVariants}
            >
              What Our{" "}
              <span className="text-gradient-success">Clients Say</span>
            </motion.h2>
            <motion.p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px" }}
              variants={itemVariants}
            >
              Real stories from people who transformed their emotional wellbeing
            </motion.p>
          </motion.div>

          {/* Add Review Button */}
          <div className="text-center mb-5">
            <a
              href="https://forms.gle/tRgauc3KoAPxG3wn6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success btn-lg px-4"
            >
              <i className="bi bi-plus-circle me-2"></i> Add Your Review
            </a>
          </div>

          {/* Testimonials Carousel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Carousel */}
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {/* Page 1 */}
                <div
                  className={`carousel-item ${
                    currentTestimonialPage === 1 ? "active" : ""
                  }`}
                >
                  <div className="row g-4">
                    {[
                      {
                        quote:
                          "The Level 1 workshop transformed how I handle work stress. The mindset techniques helped me stay calm during high-pressure situations.",
                        name: "Rahul K.",
                        role: "Startup Founder",
                        rating: 5,
                        program: "Level 1 Workshop",
                      },
                      {
                        quote:
                          "After Level 2, I finally processed childhood trauma that was affecting my relationships. The personalized approach made me feel truly heard.",
                        name: "Ananya P.",
                        role: "Marketing Executive",
                        rating: 5,
                        program: "Level 2 Program",
                      },
                      {
                        quote:
                          "The Level 3 program saved our marriage. We learned communication tools that helped us resolve conflicts with compassion.",
                        name: "Vikram & Meera",
                        role: "Married Couple",
                        rating: 5,
                        program: "Level 3 Program",
                      },
                    ].map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="col-md-4"
                        variants={itemVariants}
                      >
                        <motion.div
                          className="card h-100 border-0 shadow-sm"
                          whileHover={{ y: -5 }}
                        >
                          <div className="card-body p-4">
                            <span className="badge bg-success bg-opacity-10 text-light mb-3">
                              {testimonial.program}
                            </span>
                            <div className="mb-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <i
                                  key={i}
                                  className="bi bi-star-fill text-warning me-1"
                                ></i>
                              ))}
                            </div>
                            <blockquote className="blockquote mb-4">
                              <p className="font-italic">
                                "{testimonial.quote}"
                              </p>
                            </blockquote>
                            <div className="d-flex align-items-center">
                              <div>
                                <h5 className="mb-1">{testimonial.name}</h5>
                                <small className="text-muted">
                                  {testimonial.role}
                                </small>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Page 2 */}
                <div
                  className={`carousel-item ${
                    currentTestimonialPage === 2 ? "active" : ""
                  }`}
                >
                  <div className="row g-4">
                    {[
                      {
                        quote:
                          "As a student, Level 1 gave me tools to manage exam anxiety. The daily exercises were easy to implement between classes.",
                        name: "Aditi S.",
                        role: "College Student",
                        rating: 5,
                        program: "Level 1 Workshop",
                      },
                      {
                        quote:
                          "Level 2 helped me rebuild self-worth after a toxic relationship. The trauma-informed techniques were life-changing.",
                        name: "Karan M.",
                        role: "Financial Analyst",
                        rating: 5,
                        program: "Level 2 Program",
                      },
                      {
                        quote:
                          "Our business partnership improved dramatically after Level 3. We now handle disagreements productively.",
                        name: "Neha & Raj",
                        role: "Co-founders",
                        rating: 5,
                        program: "Level 3 Program",
                      },
                    ].map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="col-md-4"
                        variants={itemVariants}
                      >
                        <motion.div
                          className="card h-100 border-0 shadow-sm"
                          whileHover={{ y: -5 }}
                        >
                          <div className="card-body p-4">
                            <span className="badge bg-success bg-opacity-10 text-text mb-3">
                              {testimonial.program}
                            </span>
                            <div className="mb-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <i
                                  key={i}
                                  className="bi bi-star-fill text-warning me-1"
                                ></i>
                              ))}
                            </div>
                            <blockquote className="blockquote mb-4">
                              <p className="font-italic">
                                "{testimonial.quote}"
                              </p>
                            </blockquote>
                            <div className="d-flex align-items-center">
                              <div>
                                <h5 className="mb-1">{testimonial.name}</h5>
                                <small className="text-muted">
                                  {testimonial.role}
                                </small>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Page 3 */}
                <div
                  className={`carousel-item ${
                    currentTestimonialPage === 3 ? "active" : ""
                  }`}
                >
                  <div className="row g-4">
                    {[
                      {
                        quote:
                          "Level 1's daily exercises helped me stay centered during my job search. The emotional awareness techniques were invaluable.",
                        name: "Arjun V.",
                        role: "Career Transition",
                        rating: 5,
                        program: "Level 1 Workshop",
                      },
                      {
                        quote:
                          "After Level 2, I set healthy boundaries with my family for the first time. The follow-up support ensured lasting change.",
                        name: "Divya R.",
                        role: "Graphic Designer",
                        rating: 5,
                        program: "Level 2 Program",
                      },
                      {
                        quote:
                          "Level 3 helped my sister and I heal childhood wounds. The dyadic exercises brought us closer than ever.",
                        name: "Aisha & Zoya",
                        role: "Sisters",
                        rating: 5,
                        program: "Level 3 Program",
                      },
                    ].map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className="col-md-4"
                        variants={itemVariants}
                      >
                        <motion.div
                          className="card h-100 border-0 shadow-sm"
                          whileHover={{ y: -5 }}
                        >
                          <div className="card-body p-4">
                            <span className="badge bg-success bg-opacity-10 text-light mb-3">
                              {testimonial.program}
                            </span>
                            <div className="mb-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <i
                                  key={i}
                                  className="bi bi-star-fill text-warning me-1"
                                ></i>
                              ))}
                            </div>
                            <blockquote className="blockquote mb-4">
                              <p className="font-italic">
                                "{testimonial.quote}"
                              </p>
                            </blockquote>
                            <div className="d-flex align-items-center">
                              <div>
                                <h5 className="mb-1">{testimonial.name}</h5>
                                <small className="text-muted">
                                  {testimonial.role}
                                </small>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}

              <div className="d-flex justify-content-center mt-4">
                <button
                  className={`btn btn-sm mx-1 ${
                    currentTestimonialPage === 1
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => handleTestimonialPageChange(1)}
                  disabled={currentTestimonialPage === 1}
                >
                  1
                </button>
                <button
                  className={`btn btn-sm mx-1 ${
                    currentTestimonialPage === 2
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => handleTestimonialPageChange(2)}
                  disabled={currentTestimonialPage === 2}
                >
                  2
                </button>
                <button
                  className={`btn btn-sm mx-1 ${
                    currentTestimonialPage === 3
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => handleTestimonialPageChange(3)}
                  disabled={currentTestimonialPage === 3}
                >
                  3
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="final-cta py-5 py-lg-7 text-center  bg-opacity-5"
        style={{ backgroundColor: "#f0fdf4" }}
      >
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              className="display-3 fw-bold mb-3"
              variants={itemVariants}
            >
              Ready to Transform Your Emotional Wellbeing?
            </motion.h2>
            <motion.p
              className="lead mb-4 mx-auto"
              style={{ maxWidth: "600px" }}
              variants={itemVariants}
            >
              Begin your journey to emotional balance and personal growth with a{" "}
              <span className="text-decoration-underline fw-bold">
                free, no-obligation
              </span>{" "}
              first session.
            </motion.p>
            <motion.div
              className="d-flex justify-content-center gap-3 flex-wrap"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="https://forms.gle/YbcSchKPpTkaxu1ZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg px-4 py-3 fw-medium"
                >
                   Book Your 1st Free Counselling with EmotionEase{" "}
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              ></motion.div>
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
                Empowering emotional wellness through personalized care and
                community support.
              </p>

              <div className="social-links mt-4">
                {[
                  // { name: 'facebook', url: 'https://www.facebook.com/emotionease' },
                  // { name: 'twitter-x', url: 'https://x.com/emotionease' },
                  {
                    name: "instagram",
                    url: "https://www.instagram.com/emotionease",
                  },
                  {
                    name: "linkedin",
                    url: "https://www.linkedin.com/company/emotionease/",
                  },
                  // { name: 'youtube', url: 'https://www.youtube.com/@emotionease' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="text-white me-3"
                    whileHover={{ y: -3, color: "#28a745" }}
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
    {["Home", "About", "Programs", "Contact"].map((link, index) => (
      <motion.li key={index} className="mb-2" whileHover={{ x: 5 }}>
        <HashLink
          to={`/${link.toLowerCase()}#top`}
          className="text-white text-decoration-none"
          scroll={(el) => {
            el.scrollIntoView({ behavior: "smooth" });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {link}
        </HashLink>
      </motion.li>
    ))}

    {/* Privacy & Policy - styled like other links */}
    <motion.li className="mb-2" whileHover={{ x: 5 }}>
      <span
        onClick={() => setShowTerms(true)}
        style={{ cursor: 'pointer' }}
        className="text-white text-decoration-none d-inline-block"
      >
        Privacy Policy
      </span>
      <TermsModal show={showTerms} onHide={() => setShowTerms(false)} />
    </motion.li>

    {/* Feedback - styled like other links */}
    <motion.li className="mb-2" whileHover={{ x: 5 }}>
      <a
        href="https://forms.gle/tRgauc3KoAPxG3wn6"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-decoration-none"
      >
        Feedback
      </a>
    </motion.li>
  </ul>
</div>


            <div className="col-lg-3 col-md-4">
              <h4 className="h5 fw-bold mb-3">Programs</h4>
              <ul className="list-unstyled">
                {[
                  { name: "Foundation Workshop" },
                  { name: "Personal Transformation" },
                  { name: "Relationship Mastery" },
                ].map((program, index) => (
                  <motion.li key={index} className="mb-2" whileHover={{ x: 5 }}>
                    <Link
                      to="/programs"
                      className="text-white text-decoration-none"
                      onClick={() => {
                        // Scroll to top after navigation completes
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 0);
                      }}
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
            <p className="small mb-0">
              © {new Date().getFullYear()} EmotionEase. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
