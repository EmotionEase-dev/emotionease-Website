import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Badge,Accordion} from 'react-bootstrap';
import './StressManagement.css';
import { Helmet } from "react-helmet-async";
const CorporateWellnessPage = () => {
  useEffect(() => {
    // Initialize tooltips
    const tooltips = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      .map(el => new window.bootstrap.Tooltip(el));

    // Scroll animations
    const animateElements = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateElements);
    animateElements(); // Run on load

    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <>
    <Helmet>
      <title>CorporateWellnessPage | EmotionEase</title>
      <meta name="description" content="Boost workplace wellbeing with EmotionEase Corporate Wellness programs. Enhance team productivity, reduce stress, and create a healthier, happier work culture."
     />
      <meta name="keywords" content="corporate wellness, employee wellbeing, workplace mental health, stress management, team productivity, emotional wellness, burnout prevention, work-life balance, leadership training, mental health programs, EmotionEase" />
      <meta name="author" content="EmotionEase" />
    </Helmet>

      <div className="CorporateWellnessPage container py-5 py-lg-5" style={{ marginTop: '10px' }}>

        <div className="stats-bar bg-white shadow-sm py-4">
          <Container>
            <Row className="g-3 text-center">
              {[
                { value: '40%+', label: 'Improvement in decision-making clarity among leadership teams', icon: 'bi-chat-square-text' },
                { value: '28%', label: 'Boost in trust and collaboration within teams', icon: 'bi-heart' },
                { value: '25%', label: 'Increase in psychological safety across diverse workplaces', icon: 'bi-award' }
              ].map((stat, i) => (
                <Col md={4} sm={6} key={i}>
                  <div className={`stat-item p-3 rounded-3 animate-on-scroll fade-in delay-${i+1}`}>
                    <i className={`bi ${stat.icon} fs-3 text-success mb-2`}></i>
                    <h3 className="stat-value mb-1">{stat.value}</h3>
                    <p className="stat-label text-muted mb-0">{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* What is CorporateWellness Section */}
        <section style={{paddingTop: '10px'}}>
          <Container>
            <Row className="g-5 align-items-center">
              <Col lg={6} className="animate-on-scroll slide-in-left">
                <img 
                  src="/CoupleTherapy.webp" 
                  alt="CorporateWellness Session" 
                  className="img-fluid rounded-4 shadow hover-zoom w-100" 
                />
              </Col>
              <Col lg={6} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4">
                  <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle p-3 me-3">
                    <i className="bi bi-people-fill fs-2"></i>
                  </div>
                  <h1 className="fw-bold mb-0">Why Workplace Well-Being is Important?</h1>
                </div>
                
                <p className="">
                 Workplace well-being is essential, as it directly impacts both employee satisfaction and organizational success. When individuals feel supported, valued, and balanced in their professional environment, they become more motivated, engaged, and productive.
                </p>
                
                <p>
                 Prioritizing well-being helps reduce stress, prevent burnout, and promote healthier lifestyles; ultimately lowering absenteeism and turnover rates. It also fosters a positive workplace culture where collaboration and creativity can flourish.
                </p>
                <p>
                 By supporting the mental and emotional well-being of their teams, organizations empower employees to grow personally and perform at their best professionally.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
 {/* Confidence Building Section */}
      <section className="py-6 bg-light-success">
        <Container>
          <Row className="g-5 align-items-center flex-lg-row-reverse">
            <Col lg={6} className="animate-on-scroll slide-in-right">
              <img 
                src="/confidentchild.webp" 
                alt="Confident child" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-teal bg-opacity-10 text-teal rounded-circle p-3 me-3">
                  <i className="bi bi-emoji-smile fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">Thriving Workplaces, Thriving People, Thriving Profits</h2>
              </div>
              
              <p>
                In today’s fast-paced world, it’s easy for constant connectivity and digital demands to leave people feeling drained and disconnected. At EmotionEase, we believe that work should be a place where people feel supported, inspired, and able to bring their best selves forward. Our Corporate Wellness Programs and Workshops are designed to nurture well-being, ease stress, and create a culture of connection where employees feel valued and motivated. 
              </p>
              
              <p>
                When people feel good, they do good, and that’s when both individuals and businesses truly thrive.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
        {/* Benefits of CorporateWellness Section */}
        <section className="py-6 bg-light-success">
          <Container>
            <Row className="g-5">
              <Col lg={12} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4">
                  <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle p-3 me-3">
                    <i className="bi bi-heart fs-2"></i>
                  </div>
                  <h3 className="fw-bold mb-0">Our 5-Step Framework for Prime Performance</h3>
                </div>
                
                <p className="lead">
                 We believe true workplace well-being comes from a balance of structure and care. Our 5-step framework guides organizations through a clear, supportive journey that leads to lasting performance and thriving teams.
                </p>
                
                <Row className="g-4 mt-4">
                  {[
                    {
                      title: "Discover & Assess ",
                      content: "Confidential audits and well-being checkups to understand your team’s needs.",
                      icon: "bi-chat-left-dots"
                    },
                    {
                      title: "Design & Propose ",
                      content: "ATailored seminars, workshops, and our Unlimited Sessions™ plan.",
                      icon: "bi-emoji-smile"
                    },
                    {
                      title: "Implement ",
                      content: "Engaging skill-building programs, psycho-education, and crisis support.",
                      icon: "bi-heart"
                    },
                    {
                      title: "Counsel & Coach",
                      content: "Personalized therapy or performance coaching through Unlimited  Sessions™.",
                      icon: "bi-bullseye"
                    },
                    {
                      title: "Evaluate & Refresh",
                      content: "Ongoing surveys, ROI dashboards, and continuous support to sustain progress.",
                      icon: "bi-shield-check"
                    }
                  ].map((benefit, index) => (
                    <Col md={6} key={index}>
                      <Card className="h-100 border-0 shadow-sm hover-lift">
                        <Card.Body className="p-4">
                          <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle p-3 mb-3">
                            <i className={`bi ${benefit.icon} fs-3`}></i>
                          </div>
                          <h4 className="mb-3">{benefit.title}</h4>
                          <p className="mb-0">{benefit.content}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

{/* How We Help Section */}
      <section className="py-6 bg-light-success">
        <Container>
          <Row className="g-5">
            <Col lg={12} className="animate-on-scroll fade-in-up">

                <div className="section-header mb-4">
                <div className="icon-wrapper bg-forest bg-opacity-10 text-forest rounded-circle p-3 me-3">
                                    <i className="bi bi-heart-pulse fs-2"></i>
                </div>
                <h4 className="fw-bold mb-0">Signature Wellness & Leadership Services</h4>
              </div>

              <Row className="mb-5">
                <Col lg={8}>
                  <p>
                    Our programs empower both employees and leaders to bring out their best:
                  </p>
                </Col>
              </Row>
              
              <Row className="g-4">
                {[
                  {
                    title: "Executive Coaching ",
                    content: "One-on-one Unlimited Sessions™ for transformative growth",
                    icon: "bi-people-fill"
                  },
                  {
                    title: "Expert Seminars",
                    content: "Emotional Intelligence, Positive Psychology, Conflict Resolution, and more",
                    icon: "bi-emoji-smile"
                  },
                  {
                    title: "Skill Workshops",
                    content: "Practical tools like Mindfulness, CBT techniques, Stress Management, Assertiveness Training",
                    icon: "bi-heart-fill"
                  },
                  {
                    title: "Functional Support ",
                    content: "Well-being checkups, Mental Health First Aid, and Critical Incident Stress Debriefing",
                    icon: "bi-lightbulb"
                  }
                ].map((service, index) => (
                  <Col md={3} lg={3} key={index}>
                    <Card className="h-100 border-0 shadow-sm hover-lift">
                      <Card.Body className="p-4">
                        <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle p-3 mb-3">
                          <i className={`bi ${service.icon} fs-3`}></i>
                        </div>
                        <h4 className="mb-3">{service.title}</h4>
                        <p className="mb-0">{service.content}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
        {/* What is CorporateWellness Section */}
        <section className="py-6">
          <Container>
            <Row className="g-5 align-items-center flex-lg-row-reverse">
              <Col lg={6} className="animate-on-scroll slide-in-right">
                <img 
                  src="/BenefitCoupleTherapy.webp" 
                  alt="CorporateWellness session" 
                  className="img-fluid rounded-4 shadow hover-zoom w-100" 
                />
              </Col>
              <Col lg={6} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4">
                  <div className="icon-wrapper bg-indigo bg-opacity-10 text-indigo rounded-circle p-3 me-3">
                    <i className="bi bi-people fs-2"></i>
                  </div>
                  <h4 className="fw-bold mb-0">EmotionEase is a Confidential and Secured Platform For You</h4>
                </div>
                
                <p>
                  At EmotionEase, we understand that well-being can only flourish when people feel safe and protected. That’s why our platform is built with the highest standards of confidentiality and security, ensuring every conversation stays private and every interaction is handled with care.
                </p>
                
                <ListGroup variant="flush" className="mb-4">
                  {[
                    "We follow GDPR & HIPAA-aligned protocols",
                    "We have role-based consultant access only",
                    "We ensure anonymous reporting for HR teams",
                    "We provide private and secure virtual rooms for all sessions"
                  ].map((item, i) => (
                    <ListGroup.Item key={i} className="bg-transparent ps-0 border-0">
                      <i className="bi bi-check-circle-fill text-indigo me-2"></i>
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </section>


 {/* What is CorporateWellness Section */}
        <section className="py-6">
          <Container>
            <Row className="g-5 align-items-center">
              <Col lg={6} className="animate-on-scroll slide-in-right">
                <img 
                  src="/BenefitCoupleTherapy.webp" 
                  alt="CorporateWellness session" 
                  className="img-fluid rounded-4 shadow hover-zoom w-100" 
                />
              </Col>
              <Col lg={6} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4">
                  <div className="icon-wrapper bg-indigo bg-opacity-10 text-indigo rounded-circle p-3 me-3">
                    <i className="bi bi-people fs-2"></i>
                  </div>
                  <h4 className="fw-bold mb-0">Why Partner with EmotionEase?</h4>
                </div>
              
                <ListGroup variant="flush" className="mb-4">
                  {[
                    "Tailored programs designed around your organization’s unique needs",
                    "Unlimited Sessions™ for deep, lasting transformation",
                    "Confidential, secure, and measurable outcomes you can trust",
                    "A sustainable culture of well-being that fuels performanc"
                  ].map((item, i) => (
                    <ListGroup.Item key={i} className="bg-transparent ps-0 border-0">
                      <i className="bi bi-check-circle-fill text-indigo me-2"></i>
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </section>

      </div>

       {/* Final CTA */}
                <section className="py-6 bg-success text-light text-center">
                  <Container>
                    <h2 className="display-5 fw-bold mb-4">Contact EmotionEase</h2>
                    <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                     Contact EmotionEase Today to explore customized Corporate Wellness Programs and Workshops for your organization.
                    </p>
                    <Button 
                      href="/contact" 
                      variant="light" 
                      size="lg" 
                      className="rounded-pill px-4 py-3 hover-lift-pink fw-medium"
                      style={{marginBottom: '2%'}}
                      
                    >
                      Begin Your Journey Together
                    </Button>
                  </Container>
                </section>
    </>
  );
};

export default CorporateWellnessPage;