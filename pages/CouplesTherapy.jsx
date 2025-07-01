import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import './StressManagement.css';

const CouplesTherapyPage = () => {
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
      <title>Couples Therapy and Relationship Counselling Online | EmotionEase</title>
      <meta name="description" content="Struggling in a relationship? EmotionEase offers couples therapy & relationship counselling. A fresh perspective can make all the difference." />
      <meta name="keywords" content="couples therapy, relationship counselling, EmotionEase, online, marriage, interpersonal relationship, harmony, peace, love, stress, anxiety" />
      <meta name="author" content="EmotionEase" />

                          <h1 className="hero-title display-3 fw-bold text-success text-center">
                              Couples Therapy and Relationship Counselling{" "}
                            <span className="text-gradient-success">
                              | EmotionEase!
                            </span>
        </h1>

      <div className="couples-therapy-page container py-5 py-lg-5" style={{ marginTop: '10px' }}>

        <div className="stats-bar bg-white shadow-sm py-4">
          <Container>
            <Row className="g-3 text-center">
              {[
                { value: '75%+', label: 'Couples report improved communication', icon: 'bi-chat-square-text' },
                { value: '89%', label: 'Feel more connected after therapy', icon: 'bi-heart' },
                { value: 'Flexible', label: 'Online session scheduling', icon: 'bi-calendar' },
                { value: '20+ Years', label: 'Expert experience', icon: 'bi-award' }
              ].map((stat, i) => (
                <Col md={3} sm={6} key={i}>
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

        {/* What is Couples Therapy Section */}
        <section className="py-6">
          <Container>
            <Row className="g-5 align-items-center">
              <Col lg={6} className="animate-on-scroll slide-in-left">
                <img 
                  src="/CoupleTherapy.png" 
                  alt="Couples therapy session" 
                  className="img-fluid rounded-4 shadow hover-zoom w-100" 
                />
              </Col>
              <Col lg={6} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4">
                  <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle p-3 me-3">
                    <i className="bi bi-people-fill fs-2"></i>
                  </div>
                  <h2 className="fw-bold mb-0">What is Couples Therapy?</h2>
                </div>
                
                <p className="lead text-success">
                  Couples therapy is a form of psychological support where both partners work with a trained therapist to address challenges and rebuild emotional connection.
                </p>
                
                <p>
                  Whether you're navigating conflict, dealing with trust issues, or simply feeling distant, EmotionEase's online couples therapy offers a safe space to explore and heal. Through guided sessions, couples gain clarity, rebuild trust, and rediscover the love and harmony that brought them together.
                </p>
                
                <Card className="border-0 bg-success bg-opacity-10 mb-4 hover-glow-success">
                  <Card.Body>
                    <p className="mb-0">
                      Marriage therapy helps partners reconnect deeply and develop healthier conflict-resolution strategies for lasting relationship success.
                    </p>
                  </Card.Body>
                </Card>

                <Button 
                  href="https://forms.gle/YbcSchKPpTkaxu1ZA" 
                  target="_blank"
                  className="btn btn-success btn-lg px-4 py-3 fw-medium"
                >
                  Begin Your Healing Journey
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Benefits of Couples Therapy Section */}
        <section className="py-6 bg-light-success">
          <Container>
            <Row className="g-5">
              <Col lg={12} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4">
                  <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle p-3 me-3">
                    <i className="bi bi-heart fs-2"></i>
                  </div>
                  <h2 className="fw-bold mb-0">How Will You and Your Partner Benefit from Couples Therapy?</h2>
                </div>
                
                <p className="lead">
                  At EmotionEase, online couples therapy is designed to nurture understanding, empathy, and teamwork.
                </p>
                
                <Row className="g-4 mt-4">
                  {[
                    {
                      title: "Improve Communication",
                      content: "Break harmful patterns and learn to express thoughts and emotions constructively.",
                      icon: "bi-chat-left-dots"
                    },
                    {
                      title: "Resolve Conflicts Peacefully",
                      content: "Address recurring issues without blame or hostility through proven techniques.",
                      icon: "bi-emoji-smile"
                    },
                    {
                      title: "Reignite Intimacy",
                      content: "Rekindle affection, trust, and both emotional and physical connection.",
                      icon: "bi-heart"
                    },
                    {
                      title: "Develop Shared Goals",
                      content: "Align on important life decisions, parenting, finances, family relationships, and more.",
                      icon: "bi-bullseye"
                    },
                    {
                      title: "Manage Stress Together",
                      content: "Support each other through personal, professional, and shared struggles.",
                      icon: "bi-shield-check"
                    },
                    {
                      title: "Build Lasting Harmony",
                      content: "Create a relationship that grows stronger through life's challenges.",
                      icon: "bi-rainbow"
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

        {/* What is Relationship Counselling Section */}
        <section className="py-6">
          <Container>
            <Row className="g-5 align-items-center flex-lg-row-reverse">
              <Col lg={6} className="animate-on-scroll slide-in-right">
                <img 
                  src="/BenefitCoupleTherapy.png" 
                  alt="Relationship counselling session" 
                  className="img-fluid rounded-4 shadow hover-zoom w-100" 
                />
              </Col>
              <Col lg={6} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4">
                  <div className="icon-wrapper bg-indigo bg-opacity-10 text-indigo rounded-circle p-3 me-3">
                    <i className="bi bi-people fs-2"></i>
                  </div>
                  <h2 className="fw-bold mb-0">What is Relationship Counselling?</h2>
                </div>
                
                <p>
                  Relationship counselling goes beyond romantic partnerships. It's a therapeutic process aimed at healing and strengthening your interpersonal relationships with:
                </p>
                
                <ListGroup variant="flush" className="mb-4">
                  {[
                    "Parents and in-laws",
                    "Siblings and extended family",
                    "Close friends and social circles",
                    "Work colleagues and professional relationships",
                    "Adult children and blended families"
                  ].map((item, i) => (
                    <ListGroup.Item key={i} className="bg-transparent ps-0 border-0">
                      <i className="bi bi-check-circle-fill text-indigo me-2"></i>
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                
                <p>
                  At EmotionEase, we understand how the people closest to us shape our emotional world. Unresolved tensions can cause stress, anxiety, and emotional strain. Our sessions provide clarity and coping tools to navigate these complexities.
                </p>

                <Button 
                  href="/programs" 
                  className="btn btn-indigo btn-lg px-4 py-3 fw-medium"
                >
                  Explore Relationship Counselling
                </Button>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Why Relationship Counselling is Essential Section */}
        <section className="py-6 bg-light-indigo">
          <Container>
            <Row className="g-5">
              <Col lg={12} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4">
                  <div className="icon-wrapper bg-indigo bg-opacity-10 text-indigo rounded-circle p-3 me-3">
                    <i className="bi bi-lightning-charge fs-2"></i>
                  </div>
                  <h2 className="fw-bold mb-0">Why is Relationship Counselling Essential in Today's Fast-Paced Life?</h2>
                </div>
                
                <p className="lead">
                  In our increasingly digital and demanding world, relationships often suffer silently. The pressure of deadlines, social expectations, and personal responsibilities can create emotional distance.
                </p>
                
                <Row className="g-4 mt-4">
                  {[
                    {
                      title: "Reconnect Amidst Disconnection",
                      content: "Rebuild ties that feel frayed or forgotten in our busy lives.",
                      icon: "bi-phone"
                    },
                    {
                      title: "Handle Life Transitions",
                      content: "Navigate career shifts, marriage, parenthood, and aging parents with stability.",
                      icon: "bi-arrow-repeat"
                    },
                    {
                      title: "Break Unhealthy Cycles",
                      content: "Heal generational trauma and unlearn patterns affecting family dynamics.",
                      icon: "bi-arrow-left-right"
                    },
                    {
                      title: "Reduce Loneliness",
                      content: "Strengthen support systems and experience true emotional safety.",
                      icon: "bi-person-x"
                    },
                    {
                      title: "Set Healthy Boundaries",
                      content: "Learn to maintain relationships without compromising your well-being.",
                      icon: "bi-shield-lock"
                    },
                    {
                      title: "Improve All Relationships",
                      content: "Skills learned help every interpersonal connection in your life.",
                      icon: "bi-diagram-3"
                    }
                  ].map((reason, index) => (
                    <Col md={6} key={index}>
                      <Card className="h-100 border-0 shadow-sm hover-lift">
                        <Card.Body className="p-4">
                          <div className="icon-wrapper bg-indigo bg-opacity-10 text-indigo rounded-circle p-3 mb-3">
                            <i className={`bi ${reason.icon} fs-3`}></i>
                          </div>
                          <h4 className="mb-3">{reason.title}</h4>
                          <p className="mb-0">{reason.content}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

       {/* Final CTA */}
                <section className="py-6 bg-success text-light text-center">
                  <Container>
                    <h2 className="display-5 fw-bold mb-4">Apprehensive About Discussing Premarital Doubts?</h2>
                    <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                      Let EmotionEase be your guiding light toward a happy, healthy marriage.
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

export default CouplesTherapyPage;