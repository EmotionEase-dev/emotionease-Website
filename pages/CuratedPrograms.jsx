import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Badge,Accordion } from 'react-bootstrap';
import './CuratedPrograms.css';
import { motion } from 'framer-motion';

const CuratedPrograms = () => {
  const programs = [
    {
      level: "Level 1",
      title: "Emotional Enablement Group Workshop",
      duration: "3 days (90 mins/day)",
      price: "$50",
      for: "Entrepreneurs, Working Professionals & Students",
      description: "Begin your journey with our foundational workshop where you'll learn powerful techniques to reshape your mindset and handle emotions better in everyday life.",
      features: [
        "Empowered thinking patterns",
        "Healthy emotional management",
        "Improved rapport building",
        "Basic stress reduction techniques",
        "Achieve heart-aligned goals"
      ],
      outcomes: [
        "Handle daily stressors effectively",
        "Improved focus and clarity",
        "Better emotional awareness",
        "Enhanced interpersonal skills"
      ],
      cta: "Start My Transformation",
      formLink: "https://forms.gle/SHwWReus7cpLidg3A",
      popular: true,
      ribbonText: "MOST POPULAR"
    },
    {
      level: "Level 2",
      title: "Personalized Emotional Resilience Program",
      duration: "4-6 weeks (flexible scheduling)",
      price: "$150",
      for: "Individuals Seeking Deeper Healing",
      description: "Our tailored program for those dealing with long-term stress, trauma, identity crisis, low self-esteem, or strained relationships.",
      features: [
        "A free Assessment session",
        "One-on-one personalized sessions",
        "Unlimited support during program",
        "Trauma-informed techniques",
        "Customized emotional regulation tools",
        "Regular practice exercises",
        "3-month follow-up included"
      ],
      outcomes: [
        "Sustainable inner peace",
        "Stronger self-esteem",
        "Emotional fearlessness",
        "Healing from past wounds"
      ],
      requirement: "Completion of Level 1 required",
      cta: "Build My Resilience",
      formLink: "https://forms.gle/fdYa1wB1yUJUvgzBA"
    },
    {
      level: "Level 3",
      title: "Wholesome Relationships Family Program",
      duration: "2-3 weeks (couple's schedule)",
      price: "$50/person",
      for: "Couples, Business Partners & Close Friends",
      description: "This advanced program helps deepen emotional bonds, set healthy boundaries, and create thriving personal and professional relationships.",
      features: [
        "Dyadic emotional alignment",
        "Conflict resolution frameworks",
        "Boundary establishment techniques",
        "Communication enhancement",
        "Family dynamics guidance"
      ],
      outcomes: [
        "Healthier relationship boundaries",
        "Deeper emotional connections",
        "Improved conflict resolution",
        "Nurturing family environment"
      ],
      requirement: "Completion of Level 1 & 2 required",
      cta: "Strengthen My Relationships",
      formLink: "https://forms.gle/6gyALcZrvabUvEDE7"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const cardHover = {
    scale: 1.03,
    y: -10,
    transition: { type: "spring", stiffness: 300 }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400 }
  };

  // const pulse = {
  //   scale: [1, 1.05, 1],
  //   transition: { duration: 2, repeat: Infinity }
  // };

  return (
    <div className="programs-page">
      {/* Hero Section */}
      <motion.section 
        className="programs-hero py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <motion.h1 
                className="display-4 fw-bold mb-4"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Our Curated Programs
              </motion.h1>
              <motion.p 
                className="lead mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Structured pathways designed for progressive emotional mastery and relational wellbeing
              </motion.p>
              <motion.div 
                className="d-flex justify-content-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                  <a href="https://forms.gle/YbcSchKPpTkaxu1ZA" className="btn btn-light btn-lg px-4" target="_blank" 
  rel="noopener noreferrer"
>
Book Level 2 Free Assessment Session
              </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Program Tiers */}
<section className="program-tiers py-5 bg-light">
  <div className="container">
    <motion.div 
      className="text-center mb-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">Progressive Learning Pathways</h2>
      <p className="lead text-muted">
        Our tiered approach ensures solid foundation before advancing to deeper work
      </p>
    </motion.div>
    
    <motion.div 
      className="row g-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {programs.map((program, index) => (
        <motion.div 
          key={index} 
          className="col-lg-4"
          variants={item}
        >
          <motion.div 
            className={`program-card h-100 ${program.popular ? 'popular-card' : ''}`}
            data-ribbon={program.popular ? program.ribbonText : ''}
            whileHover={cardHover}
            whileTap={{ scale: 0.98 }}
          >
            <div className="card-header">
              {program.popular && (
                <div className="popular-tag">
                  <i className="bi bi-star-fill"></i>Most Popular
                </div>
              )}
              <span className="program-level">{program.level}</span>
              <h3 className="program-title">{program.title}</h3>
              <div className="price-tag">
                <span className="price">{program.price}</span>
                <span className="duration">{program.duration}</span>
              </div>
            </div>
            
            <div className="card-body">
              <div className="program-for">
                <i className="bi bi-people-fill"></i>
                <span>{program.for}</span>
              </div>
              
              <p className="program-description">{program.description}</p>
              
              <div className="program-features">
                <h4>Key Features:</h4>
                <ul>
                  {program.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <i className="bi bi-check-circle-fill"style={{margin:"4px"}}></i>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="program-outcomes">
                <h4>Expected Outcomes:</h4>
                <ul>
                  {program.outcomes.map((outcome) => (
                    <motion.li 
                      key={outcome}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="d-inline-flex align-items-center gap-1">
                        <i className="bi bi-arrow-right-circle-fill"></i>
                        {outcome}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              {program.requirement && (
                <div className="program-requirement">
                  <i className="bi bi-info-circle-fill" style={{margin:'4px'}}></i>
                  {program.requirement}
                </div>
              )}
            </div>
            
            <div className="card-footer">
              <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                <a 
                  href={program.formLink} 
                  className="btn w-100" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {program.cta} <i className="bi bi-arrow-right"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* Program Comparison */}
      <section className="program-comparison py-5">
        <div className="container">
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Program Comparison</h2>
            <p className="text-muted">See which program matches your current needs</p>
          </motion.div>
          
          <motion.div 
            className="table-responsive"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  {programs.map((program, index) => (
                    <th key={index} scope="col">{program.level}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Duration</td>
                  {programs.map((program, index) => (
                    <td key={index}>{program.duration}</td>
                  ))}
                </tr>
                <tr>
                  <td>Investment</td>
                  {programs.map((program, index) => (
                    <td key={index}>{program.price}</td>
                  ))}
                </tr>
                <tr>
                  <td>Format</td>
                  <td>Group Workshop</td>
                  <td>1-on-1 Sessions</td>
                  <td>Dyadic Sessions</td>
                </tr>
                <tr>
                  <td>Follow-up Period</td>
                  <td>1 month</td>
                  <td>3 months</td>
                  <td>1 month</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>Online</td>
                  <td>Online</td>
                  <td>Online</td>
                </tr>
                <tr>
                  <td>Satisfaction Guarantee</td>
                  <td><i className="bi bi-check-lg"></i></td>
                  <td><i className="bi bi-check-lg"></i></td>
                  <td><i className="bi bi-check-lg"></i></td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="program-cta py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container text-center">
          <motion.h2 
            className="display-5 mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unsure which program is right for you?
          </motion.h2>
          <motion.p 
            className="lead mb-5"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our emotional wellbeing specialists can guide you to the perfect starting point
          </motion.p>
          <div className="d-flex justify-content-center gap-3">
            <motion.div 
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/919345330187"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light btn-lg px-4"
              >
                <i className="bi bi-whatsapp me-2"></i> Chat With Us
              </a>
            </motion.div>
            <motion.div 
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
            >
              <a href="tel:+919345330187" className="btn btn-outline-light btn-lg px-4">
                <i className="bi bi-telephone me-2"></i> Call +91-9345330187
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};


export default CuratedPrograms;







