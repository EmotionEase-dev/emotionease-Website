import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Badge,Accordion } from 'react-bootstrap';
import { Helmet } from "react-helmet-async";
import './StressManagement.css';

const WorkplaceStressManagementPage = () => {
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
        Workplace Stress Management Online Therapy & Counseling | EmotionEase
    </title>
    <meta name="description" content="Over 60% of Indian employees face workplace stress. EmotionEase offers confidential online therapy to help you manage and move forward.
" />
    <meta name="keywords" content="workplace stress management, online therapy, counseling, stress relief, mental health, employee wellness, workplace anxiety, burnout therapy" />
    <meta name="author" content="EmotionEase" />
    </Helmet>
    <div className="stress-management-page container py-5 py-lg-5" style={{ marginTop: '10px' }}>
      <div className="stats-bar bg-white shadow-sm py-4">
        <Container>
          <Row className="g-3 text-center">
            {[
              { value: '60%+', label: 'Indian employees face stress', icon: 'bi-people' },
              { value: '83%', label: 'Report improved coping', icon: 'bi-graph-up' },
              { value: 'Flexible', label: 'Session scheduling', icon: 'bi-calendar' },
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

      {/* Workplace Stress Management Section */}
      <section style={{paddingTop: '10px'}}>
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="animate-on-scroll slide-in-left">
              <img 
                src="/WorkManage.webp" 
                alt="Workplace stress management" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-green bg-opacity-10 text-green rounded-circle p-3 me-3">
                  <i className="bi bi-briefcase fs-2"></i>
                </div>
                <h1 className="fw-bold mb-0">Workplace Stress Management Therapy</h1>
              </div>
              
              <p className="lead text-green">
                Over 60% of Indian employees face workplace stress. We offer confidential online therapy to help you manage and move forward.
              </p>
              
              <p>
                We often hear about 'stress' from colleagues and doctors, but what does workplace stress really mean? It's a state of mental or physical tension caused by negative or overwhelming professional influences. It can manifest as anxiety, frustration, irritability, or exhaustion - and doesn't always stem from bad situations. Even positive changes, when unmanaged, can disrupt your emotional balance.
              </p>
              
              <Card className="border-0 bg-green bg-opacity-10 mb-4 hover-glow-green">
                <Card.Body>
                  <p className="mb-0">
                    Workplace stress isn't inevitable. With professional help, it can be understood, managed, and overcome.
                  </p>
                </Card.Body>
              </Card>

              <Button 
                href="https://forms.gle/YbcSchKPpTkaxu1ZA" 
                target="_blank"
                className="btn btn-success btn-lg px-4 py-3 fw-medium"
              >
                Book First Free Consultation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Causes of Workplace Stress Section */}
      <section className="py-6 bg-light-green">
        <Container>
          <Row className="g-5">
            <Col lg={12} className="animate-on-scroll fade-in-up">

                         <div className="section-header mb-4">
                <div className="icon-wrapper bg-forest bg-opacity-10 text-forest rounded-circle p-3 me-3">
                                    <i className="bi bi-exclamation-triangle fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">Common Causes of Workplace Stress</h2>
              </div>

              
              <Row className="g-4 mt-4">
                {[
                  {
                    title: "Overworking",
                    content: "Every individual has limited capacity. When consistently exceeded, tasks become burdensome, leading to mental fatigue and high stress levels.",
                    icon: "bi-clock-history"
                  },
                  {
                    title: "Irregular Hours",
                    content: "Repeatedly working beyond standard hours leads to burnout, reduced efficiency, and long-term exhaustion.",
                    icon: "bi-alarm"
                  },
                  {
                    title: "Feeling Exploited",
                    content: "Long hours without fair recognition or incentives makes employees feel undervalued, resulting in frustration and low morale.",
                    icon: "bi-coin"
                  },
                  {
                    title: "Job Insecurity",
                    content: "Constant fear of job loss creates high stress, reducing work quality, impacting decisions, and causing chronic anxiety.",
                    icon: "bi-shield-exclamation"
                  },
                  {
                    title: "Office Politics",
                    content: "Gossip, favoritism, and unnecessary criticism create toxic environments that harm performance and emotional well-being.",
                    icon: "bi-people-fill"
                  },
                  {
                    title: "Micromanagement",
                    content: "Excessive monitoring damages confidence, causes anxiety, and leads to mistakes. Restricted autonomy creates ongoing stress.",
                    icon: "bi-mic"
                  }
                ].map((cause, index) => (
                  <Col md={6} key={index}>
                    <Card className="h-100 border-0 shadow-sm hover-lift">
                      <Card.Body className="p-4">
                        <div className="icon-wrapper bg-teal bg-opacity-10 text-teal rounded-circle p-3 mb-3">
                          <i className={`bi ${cause.icon} fs-3`}></i>
                        </div>
                        <h4 className="mb-3">{cause.title}</h4>
                        <p className="mb-0">{cause.content}</p>
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
      <section className="py-6">
        <Container>
          <Row className="g-5 align-items-center flex-lg-row-reverse">
            <Col lg={6} className="animate-on-scroll slide-in-right">
              <img 
                src="/Therapy.webp" 
                alt="Therapy session" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-forest bg-opacity-10 text-forest rounded-circle p-3 me-3">
                  <i className="bi bi-heart-pulse fs-2"></i>
                </div>
                <h3 className="fw-bold mb-0">How EmotionEase Can Help?</h3>
              </div>
              
              <p>
                At EmotionEase, we provide confidential, online therapy tailored to your work-related challenges. Your sessions will be led by Elango Annamalai, a highly experienced Emotion Regulation Consultant and Counseling Practitioner with over two decades of experience helping professionals like you.
              </p>
              
              <ListGroup variant="flush" className="mb-4">
                {[
                  "Identify specific stress triggers in your work environment",
                  "Develop healthy coping mechanisms tailored to your situation",
                  "Improve communication strategies for difficult workplace relationships",
                  "Establish work-life balance boundaries",
                  "Build resilience against workplace pressures",
                  "Address anxiety related to job performance or security"
                ].map((item, i) => (
                  <ListGroup.Item key={i} className="bg-transparent ps-0 border-0">
                    <i className="bi bi-check-circle-fill text-green me-2"></i>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>

              {/* <div className="specialist-card p-4 rounded-3 bg-forest bg-opacity-10 mb-4 hover-glow-forest">
                <div className="d-flex align-items-center">
                  <img 
                    src="/ElangoPhoto.jpg" 
                    alt="Elango Annamalai" 
                    className="rounded-circle me-3" 
                    width="80" 
                    height="80" 
                  />
                  <div>
                    <h4 className="h5 fw-bold mb-1">
                      <card className="text-decoration-none hover-underline-green">
                        Elango Annamalai
                      </card>
                    </h4>
                    <p className="text-muted small mb-2">Emotion Regulation Consultant (20+ years experience)</p>
                    <div className="d-flex flex-wrap gap-2">
                      {['Workplace Stress', 'Anxiety Management', 'CBT'].map((skill, i) => (
                        <Badge pill bg="forest" key={i} className="px-3 py-2 badge rounded-pill bg-success">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              <Button 
                href="/programs" 
                className="btn btn-success btn-lg px-4 py-3 fw-medium"
              >
                Start Your Healing Journey
              </Button>
              <br /><small>EmotionEase is based out of India but our sessions are 100% online.</small>

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
                  <Accordion.Header >Why do you need counseling or therapy for workplace/office stress management?</Accordion.Header>
                  <Accordion.Body>
                   Because, counseling for workplace stress helps you manage pressure, prevent burnout, and maintain emotional balance. It equips you with coping tools to stay productive and resilient at work.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How will I benefit from EmotionEase’s workplace stress management therapy?</Accordion.Header>
                  <Accordion.Body>
                   You’ll learn to identify stress triggers, set healthy boundaries, and build resilience, helping you stay balanced, focused, and productive at work.

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>Is my privacy and confidentiality protected during online counseling?</Accordion.Header>
                  <Accordion.Body>
                    Yes, absolutely! We respect our clients’ right to privacy and ensure that their personal information is never shared or disclosed under any circumstances.

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How soon can I start sessions with EmotionEase?</Accordion.Header>
                  <Accordion.Body>
                    You can get in touch with EmotionEase via email at admin@emotionease.com or call/whatsapp us on these numbers  +91 9345330187 and +91 9677198550. We will reach out to you personally as soon as possible and schedule a consultation at your convenience.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How long is each online counseling or therapy session with EmotionEase?</Accordion.Header>
                  <Accordion.Body>
                   Each online counseling session typically lasts 45 minutes to 1 hour, giving you enough time to address key concerns in a focused and meaningful way.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>For which nationalities are your therapy and counseling services available?</Accordion.Header>
                  <Accordion.Body>
                    We offer our workplace or office related stress management therapy cum counseling sessions to people based in India, UAE (Dubai), Saudi Arabia, the Philippines, Singapore, the United States, and the United Kingdom.
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

export default WorkplaceStressManagementPage;