import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Card, Button, ListGroup, Badge,Accordion } from 'react-bootstrap';
import './StressManagement.css';

const BurnoutTherapyPage = () => {
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
    <title>
        Burnout Therapy and Counseling Online | EmotionEase
    </title>
    <meta name="description" content="Experiencing burnout lately? Transform your mental health by connecting with our expert at EmotionEase. We specialize in burnout therapy and counseling.
"/>
    <meta name="keywords" content="burnout therapy, online counseling, emotional wellness, stress management, mental health support, burnout recovery" />
    <meta name="author" content="EmotionEase" />
    </Helmet>

    <div className="burnout-therapy-page container py-5 py-lg-5" style={{ marginTop: '10px' }}>
      <div className="stats-bar bg-white shadow-sm py-4">
        <Container>
          <Row className="g-3 text-center">
            {[
              { value: '75%+', label: 'Adults experience burnout', icon: 'bi-people' },
              { value: '89%', label: 'Report improved energy', icon: 'bi-graph-up' },
              { value: 'Flexible', label: 'Online sessions', icon: 'bi-calendar' },
              { value: '20+ Years', label: 'Expert experience', icon: 'bi-award' }
            ].map((stat, i) => (
              <Col md={3} sm={6} key={i}>
                <div className={`stat-item p-3 rounded-3 animate-on-scroll fade-in delay-${i+1}`}>
                  <i className={`bi ${stat.icon} fs-3 text-green mb-2`}></i>
                  <h3 className="stat-value mb-1">{stat.value}</h3>
                  <p className="stat-label text-muted mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Burnout Therapy Section */}
      <section style={{paddingTop: '10px'}}>
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="animate-on-scroll slide-in-left">
              <img 
                src="/Burnout.webp" 
                alt="Burnout exhaustion" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">

              <div className="section-header mb-4">
                <div className="icon-wrapper bg-green bg-opacity-10 text-green rounded-circle p-3 me-3">
                  <i className="bi bi-heartbreak fs-2"></i>
                </div>
                <h1 className="fw-bold mb-0">What is Burnout?</h1>
              </div>
              
              <p className="lead text-green">
                Burnout is a state of chronic physical and emotional exhaustion, often caused by prolonged stress or lack of work-life balance.
              </p>
              
              <p>
                Burnout may show up as constant fatigue, loss of motivation, and a growing reluctance to participate in daily tasks or social interactions. Individuals experiencing burnout often feel disconnected, irritable, and mentally drained, even when doing routine activities.
              </p>
              
              <Card className="border-0 bg-green bg-opacity-10 mb-4 hover-glow-green">
                <Card.Body>
                  <p className="mb-0">
                    Burnout isn't just tiredness - it's a state of complete exhaustion that affects your mind, body, and emotions.
                  </p>
                </Card.Body>
              </Card>

              <Button 
                href="/contact" 
                className="btn btn-success btn-lg px-4 py-3 fw-medium"
              >
                Get in Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What is Burnout Therapy Section */}
      <section className="py-6 bg-light-green">
        <Container>
          <Row className="g-5">
            <Col lg={12} className="animate-on-scroll fade-in-up">

             <div className="section-header mb-4">
                <div className="icon-wrapper bg-forest bg-opacity-10 text-forest rounded-circle p-3 me-3">
                 <i className="bi bi-chat-square-heart fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">What is Burnout Therapy?</h2>
              </div>



              <Row className="justify-content-center mt-4">
                <Col lg={8}>
                  <p className="text-center lead">
                    Burnout therapy is a structured process that helps individuals identify the root causes of emotional and mental exhaustion. It involves self-reflection, exploring uncomfortable emotions, reassessing lifestyle habits, and addressing the underlying triggers of stress, anxiety, and irritability.
                  </p>
                  <p className="text-center">
                    The goal is to restore balance, build emotional resilience, and regain a sense of purpose and calm.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Symptoms Section */}
      <section className="py-6">
        <Container>
          <Row className="g-5">
            <Col lg={12} className="animate-on-scroll fade-in-up">

              <div className="section-header mb-4">
                <div className="icon-wrapper bg-forest bg-opacity-10 text-forest rounded-circle p-3 me-3">
                  <i className="bi bi-exclamation-triangle fs-2"></i>
                </div>
                <h3 className="fw-bold mb-0">Common Signs and Symptoms of Burnout</h3>
              </div>
              
              <p className="mb-4">
                Recognizing the early signs of burnout is key to preventing long-term emotional and physical exhaustion. If you or someone you know is experiencing the following symptoms, it might be time to seek support:
              </p>
              
              <Row className="g-4">
                {[
                  "Chronic stress and anxiety that doesn't go away",
                  "Emotional exhaustion and feeling mentally drained",
                  "Persistent physical fatigue, even after rest",
                  "Lack of interest in daily tasks or personal responsibilities",
                  "Increased desire for isolation and avoiding social interactions",
                  "Withdrawal from socializing or group activities",
                  "Difficulty completing tasks or leaving projects unfinished",
                  "Frequent irritability and mood swings"
                ].map((symptom, index) => (
                  <Col md={6} key={index}>
                    <Card className="h-100 border-0 shadow-sm hover-lift">
                      <Card.Body className="p-4">
                        <div className="icon-wrapper bg-forest bg-opacity-10 text-forest rounded-circle p-3 mb-3">
                          <i className="bi bi-check-circle fs-3"></i>
                        </div>
                        <p className="mb-0">{symptom}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              
              <div className="mt-5 text-center">
                <p className="lead">
                  These symptoms may vary from person to person but are common indicators of burnout. Addressing them early through burnout therapy or professional support can make a significant difference.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How We Help Section */}
      <section className="py-6 bg-light-green">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="animate-on-scroll slide-in-left">
              <img 
                src="/BurnoutRecovery.webp"  
                alt="Burnout recovery" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-green bg-opacity-10 text-green rounded-circle p-3 me-3">
                  <i className="bi bi-heart-pulse fs-2"></i>
                </div>
                <h3 className="fw-bold mb-0">How EmotionEase Can Help</h3>
              </div>
              
              <p>
                EmotionEase offers a safe, non-judgmental space for individuals from all walks of life to openly talk about their experiences with burnout.
              </p>
              
              <p>
                We listen with empathy, help you uncover the root causes of your exhaustion, and guide you with proven techniques to gradually reduce the impact of burnout. Our goal is to support you in restoring balance, rebuilding emotional resilience, and helping you feel like yourself again or even better than before.
              </p>
              
              <ListGroup variant="flush" className="mb-4">
                {[
                  "Personalized burnout assessment and recovery plan",
                  "Strategies to manage chronic stress and exhaustion",
                  "Techniques to rebuild motivation and engagement",
                  "Work-life balance and boundary setting",
                  "Emotional resilience building",
                  "Cognitive behavioral techniques for burnout"
                ].map((item, i) => (
                  <ListGroup.Item key={i} className="bg-transparent ps-0 border-0">
                    <i className="bi bi-check-circle-fill text-green me-2"></i>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <Button 
                href="/contact" 
                className="btn btn-success btn-lg px-4 py-3 fw-medium"
              >
                Get in Touch
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
<section className="py-5 bg-light">
        <Container>
          <div className="animate-on-scroll fade-in-up text-center mb-5">
            <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted">
              Here are some of the most common questions people ask about stress, depression, and anxiety therapy.
            </p>
          </div>

          <Row className="animate-on-scroll fade-in-up justify-content-center">
            <Col lg={10}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header >Who can enroll for burnout therapy?
</Accordion.Header>
                  <Accordion.Body>
                   Our burnout therapy and counseling sessions are designed for individuals who feel less motivated in life, have a reduced desire to socialize, struggle with procrastination, or feel uninspired in different areas of life.


                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How will burnout therapy help?

</Accordion.Header>
                  <Accordion.Body>
                  Burnout therapy provides you with practical strategies and techniques to regain a sense of purpose and emotional balance. The causes and symptoms of burnout will be addressed, and you’ll receive a structured plan to support your recovery.

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>Is burnout common among individuals?
</Accordion.Header>
                  <Accordion.Body>
                    Yes, burnout is very common and can affect people of all ages and walks of life. When the mind and body feel overwhelmed, you may experience lethargy, demotivation, and difficulty managing daily responsibilities. Our burnout therapy helps you relax, rebuild resilience, and rediscover a sense of purpose in life.


                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How soon can I start burnout therapy sessions with EmotionEase?</Accordion.Header>
                  <Accordion.Body>
                    You can get in touch with EmotionEase via email at admin@emotionease.com or call/whatsapp us on these numbers  +91 9345330187 and +91 9677198550. We will reach out to you personally as soon as possible and schedule a consultation at your convenience.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>Who can enroll for the burnout therapy session worldwide?
                 </Accordion.Header>
                  <Accordion.Body>
                  Our burnout therapy sessions are held online and we offer them to people based in India, UAE (Dubai), Saudi Arabia, the Philippines, Singapore, the United States, and the United Kingdom.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How long does each burnout therapy session with EmotionEase last?

              </Accordion.Header>
                  <Accordion.Body>
                    Each burnout therapy session will last 45 minutes to 1 hour, giving you enough time to speak about your issues unhesitantly.

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
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

export default BurnoutTherapyPage;