import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Badge,Accordion  } from 'react-bootstrap';
import './StressManagement.css';
import { Helmet } from "react-helmet-async";

const StressManagementPage = () => {
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

    <div className="stress-management-page container py-5 py-lg-5" style={{ marginTop: '10px' }}>
      <Helmet>
      <title>
      Stress, Depression & Anxiety Management Online | EmotionEase
    </title>
     <meta
          name="description"
          content="If you're dealing with stress, anxiety, or depression, don't hesitate to seek help. EmotionEase is a safe, non-judgmental online space where we listen, support, and work with you to manage and resolve your challenges."
        />
      <meta name="keywords" content="stress management, depression counseling, anxiety therapy, online therapy, mental health, emotional well-being, stress relief, depression help, anxiety management" />
      <meta name="author" content="EmotionEase" />
      </Helmet>

      <div className="stats-bar bg-white shadow-sm">
        <Container>
          <Row className="g-3 text-center">
            {[
              { value: '30-50%', label: 'Global stress prevalence', icon: 'bi-globe' },
              { value: '77%', label: 'Indians experience stress', icon: 'bi-people' },
              { value: '89%', label: 'Clients report improvement', icon: 'bi-graph-up' },
              { value: 'Flexible', label: 'Session scheduling', icon: 'bi-calendar' }
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

      {/* Stress Management Section */}
      <section style={{paddingTop: '10px'}}>
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="animate-on-scroll slide-in-left">
              <img 
                src="/stress-management.webp" 
                alt="Stress management" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-green bg-opacity-10 text-green rounded-circle p-3 me-3">
                  <i className="bi bi-activity fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">Online Stress Management Therapy and Counseling</h2>
              </div>
              
              <p className="lead text-green">
                Health experts often cite the harmful impact of stress on physical health, yet practical methods to manage stress are rarely talked about.
              </p>
              
              <p>
                Life is full of trials and tribulations. There will always be something that keeps you on your toes. With time and experience, you can learn to manage stress, but let's be honest: handling stress isn't easy.
              </p>
              
              <p>
                Research shows 30-50% of people globally experience psychological stress, with 77% of Indians reporting regular symptoms. Whether from work, relationships, or daily responsibilities, unmanaged stress can lead to exhaustion, health issues, and emotional breakdowns.
              </p>
              
              <Card className="border-0 bg-green bg-opacity-10 mb-4 hover-glow-green">
                <Card.Body>
                  <p className="mb-0">
                    At EmotionEase, we offer a safe, confidential space to manage stress and resolve underlying causes. Our online sessions let you connect from anywhere you feel comfortable.
                  </p>
                </Card.Body>
              </Card>

              <Button 
                href="/contact" 
                className="btn btn-success btn-lg px-4 py-3 fw-medium"
              >
                Get in Touch With Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Depression Counseling Section */}
      <section className="py-6 bg-light-green">
        <Container>
          <Row className="g-5 align-items-center flex-lg-row-reverse">
            <Col lg={6} className="animate-on-scroll slide-in-right">
              <img 
                src="/depression-help.webp" 
                alt="Depression help" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-teal bg-opacity-10 text-teal rounded-circle p-3 me-3">
                  <i className="bi bi-emoji-frown fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">Online Counseling and Therapy for Depression</h2>
                <h3 className="h5 text-muted mt-2">Is It Just Sadness, or Something More?</h3>
              </div>
              
              <p>
As we grow, life becomes more layered, we take on responsibilities, form new relationships, advance in our careers, and go through physical and emotional changes. Through it all, our mind works silently in the background, helping us adapt, cope, and move forward. It shapes how we accept what is, and let go of what isn’t.
              </p>
              <p>
                But sometimes, the mind struggles to keep up.
              </p>
              <p>
                When the changes become overwhelming or prolonged, and our inner resilience starts to wear thin, that’s when depression can begin to take hold. Contrary to popular belief, depression doesn't always stem from a major traumatic event. It can develop quietly, in anyone, at any stage of life.
              </p>
              <p>
                When the changes become overwhelming or prolonged, and our inner resilience starts to wear thin, that’s when depression can begin to take hold. Contrary to popular belief, depression doesn't always stem from a major traumatic event. It can develop quietly, in anyone, at any stage of life.
              </p>
              <p>
                What affects you and how deeply, is personal. What may seem minor to one person might feel life-altering to another. And often, people don’t even realize that something is wrong until much later. Even when they do sense that something is off, it can be difficult to identify the symptoms, let alone the cause.
              </p>
              <p>
                At EmotionEase, we’re here to help you make sense of what your mind is going through. Depression is not a weakness. It’s not something to fear. And most importantly, depression is treatable.
              </p>
              <p>
                With the right support and compassionate guidance, you can begin your healing journey at any time. We're here to walk with you, every step of the way.
              </p>
{/*               
              <Card className="border-0 bg-teal bg-opacity-10 mb-4 hover-glow-teal">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      "Depression isn't weakness or something to fear. It's treatable. With the right support, healing can begin anytime."
                    </p>
                  </blockquote>
                </Card.Body>
              </Card> */}
              
              <Button 
                href="/contact" 
                className="btn btn-success btn-lg px-4 py-3 fw-medium"
              >
                Talk to Us About Depression
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Anxiety Therapy Section */}
      <section className="py-6">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="animate-on-scroll slide-in-left">
              <img 
                src="/anxietyHelp.webp" 
                alt="Anxiety help" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-forest bg-opacity-10 text-forest rounded-circle p-3 me-3">
                  <i className="bi bi-lightning-charge fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">Personalized Online Therapy for Anxiety Relief and Management</h2>
              </div>
              
              <p>
You could be sitting at a café with close friends, enjoying yourself, when suddenly an innocent comment, a passing visual, a message, or even a sound pulls you away from the present. Outwardly, you're smiling. Inwardly, you're battling a wave of emotion, an urge to react, to speak, to escape.
              </p>
              
              <p>
<b>That’s how anxiety works. It quietly robs you of your best moments, unless you learn to set boundaries with it.</b> It must be acknowledged and confronted, again and again, until it no longer holds the power to disrupt the life you're working so hard to build. 
              </p>
              <p>
                To truly regain control, those of us who have been gripped by anxiety time and again need the guidance of an expert, someone who understands the many faces of anxiety and knows how to navigate them.
              </p>
              
              {/* <div className="specialist-card p-4 rounded-3 bg-forest bg-opacity-10 mb-4 hover-glow-forest">
                <div className="d-flex align-items-center">
                  <img 
                    src="/ElangoPhoto.jpg" 
                    alt="Therapist" 
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
                    <p className="text-muted small mb-2">Anxiety Specialist (20+ years experience)</p>
                    <div className="d-flex flex-wrap gap-2 ">
                      {['CBT', 'Mindfulness', 'Trauma Care'].map((skill, i) => (
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
                Check Out Our Anxiety Programs
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>

          {/* FAQ Section */}
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
                  <Accordion.Header >What is online counseling for stress, depression, and anxiety?</Accordion.Header>
                  <Accordion.Body>
                    Online counseling/therapy for anxiety, depression, and stress is designed to support individuals struggling with persistent sadness (doesn’t matter if the cause of sadness is identified or unidentified), overwhelming stress at home or workplace, and those who experience excessive anxiety even in low-pressure situations.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>Is online therapy as effective as in-person sessions?</Accordion.Header>
                  <Accordion.Body>
                    EmotionEase’s online therapy and counseling sessions are as effective as in-person sessions. First, they are conducted via voice or video calls. Secondly, all sessions are confidential, and individuals can talk to our experts from their preferred location.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How many therapy or counseling sessions will I need to feel better?</Accordion.Header>
                  <Accordion.Body>
                    The number of sessions varies for each person. In the first few sessions, your therapist will assess the root cause, your coping style, and how well strategies are working. At EmotionEase, we aim to make a difference from the very first session and guide you toward recovery.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>What sort of outcomes can I expect from stress/depression/anxiety counseling sessions?</Accordion.Header>
                  <Accordion.Body>
                      1.You will be able to identify the cause of your sadness/depression (if you haven’t already)
                      2.You will be able to identify and cope with your behavioral symptoms early on..
                      3.You will be able to establish measurable goals for yourself 
                      4.You will have realistic expectations from yourself and others around you
                      5.You will be kinder to yourself and others around you
                  </Accordion.Body>
                </Accordion.Item>
                 <Accordion.Item eventKey="4" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>Is my privacy and confidentiality protected during online counseling?</Accordion.Header>
                  <Accordion.Body>
                     Yes, absolutely! We respect our clients’ right to privacy and ensure that their personal information is never shared or disclosed under any circumstances.
                  </Accordion.Body>
                </Accordion.Item>
                 <Accordion.Item eventKey="5" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How soon can I start sessions with EmotionEase?</Accordion.Header>
                  <Accordion.Body>
                      You can get in touch with EmotionEase via email at admin@emotionease.com or call/whatsapp us on these numbers  +91 9345330187 and +91 9677198550. We will reach out to you personally as soon as possible and schedule a consultation at your convenience.
                  </Accordion.Body>
                </Accordion.Item>
                 <Accordion.Item eventKey="6" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How long is each online counseling or therapy session?</Accordion.Header>
                  <Accordion.Body>
                    Each online counseling session typically lasts 45 minutes to 1 hour, giving you enough time to address key concerns in a focused and meaningful way.
                  </Accordion.Body>
                </Accordion.Item>
                 <Accordion.Item eventKey="7" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>For which nationalities are your therapy and counseling services available?</Accordion.Header>
                  <Accordion.Body>
                     We offer emotional healing and counseling sessions for stress, depression, and anxiety to people based in India, UAE (Dubai), Saudi Arabia, the Philippines, Singapore, the United States, and the United Kingdom.
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

export default StressManagementPage;