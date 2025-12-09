'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Card, ListGroup, Accordion } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import './CouplesTherapy.css'

export default function CouplesTherapyPage() {
  useEffect(() => {
    // Scroll animations
    const animateElements = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('animated')
        }
      })
    }

    window.addEventListener('scroll', animateElements)
    animateElements()

    return () => window.removeEventListener('scroll', animateElements)
  }, [])

  return (
    <>
      <Navbar />
      <div className="couples-therapy-page container py-5 py-lg-5" style={{ marginTop: '10px' }}>
        
        {/* Stats Bar */}
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
                    <i className={`bi ${stat.icon} fs-3 text-success mb-2 d-block`}></i>
                    <h3 className="stat-value mb-1">{stat.value}</h3>
                    <p className="stat-label text-muted mb-0 small">{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* What is Couples Therapy Section */}
        <section style={{paddingTop: '30px'}}>
          <Container>
            <Row className="g-5 align-items-center">
              <Col lg={6} className="animate-on-scroll slide-in-left">
                <img 
                  src="/CoupleTherapy.webp" 
                  alt="Couples therapy session" 
                  className="img-fluid rounded-4 shadow hover-zoom w-100" 
                />
              </Col>
              <Col lg={6} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-people-fill fs-4"></i>
                  </div>
                  <h1 className="fw-bold mb-0" style={{fontSize: '1.75rem', lineHeight: '1.3'}}>What is Couples Therapy?</h1>
                </div>
                
                <p className="lead text-success" style={{fontSize: '1.1rem'}}>
                  Couples therapy is a form of psychological support where both partners work with a trained therapist to address challenges and rebuild emotional connection.
                </p>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  Whether you&apos;re navigating conflict, dealing with trust issues, or simply feeling distant, EmotionEase&apos;s online couples therapy offers a safe space to explore and heal. Through guided sessions, couples gain clarity, rebuild trust, and rediscover the love and harmony that brought them together.
                </p>
                
                <Card className="border-0 mb-4" style={{backgroundColor: 'rgba(25, 135, 84, 0.1)'}}>
                  <Card.Body>
                    <p className="mb-0" style={{fontSize: '1rem', lineHeight: '1.7'}}>
                      Marriage therapy helps partners reconnect deeply and develop healthier conflict-resolution strategies for lasting relationship success.
                    </p>
                  </Card.Body>
                </Card>

                <a 
                  href="https://forms.gle/YbcSchKPpTkaxu1ZA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg px-4 py-3 fw-medium"
                  style={{borderRadius: '8px'}}
                >
                  Begin Your Healing Journey
                </a>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Benefits of Couples Therapy Section */}
        <section className="py-5">
          <Container>
            <Row className="g-5">
              <Col lg={12} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-heart fs-4"></i>
                  </div>
                  <h2 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>How Will You and Your Partner Benefit from Couples Therapy?</h2>
                </div>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
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
                      content: "Create a relationship that grows stronger through life&apos;s challenges.",
                      icon: "bi-rainbow"
                    }
                  ].map((benefit, index) => (
                    <Col md={6} key={index}>
                      <Card className="h-100 border-0 shadow-sm hover-lift">
                        <Card.Body className="p-4">
                          <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 mb-3">
                            <i className={`bi ${benefit.icon} fs-4`}></i>
                          </div>
                          <h4 className="h5 mb-3">{benefit.title}</h4>
                          <p className="mb-0 text-muted" style={{fontSize: '0.95rem'}}>{benefit.content}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* What is Relationship Counseling Section */}
        <section className="py-5">
          <Container>
            <Row className="g-5 align-items-center">
              <Col lg={6} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-chat-square-heart fs-4"></i>
                  </div>
                  <h2 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>What is Relationship Counseling?</h2>
                </div>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  Relationship counseling goes beyond romantic partnerships. It&apos;s a therapeutic process aimed at healing and strengthening your interpersonal relationships with:
                </p>
                
                <ListGroup variant="flush" className="mb-4">
                  {[
                    "Parents and in-laws",
                    "Siblings and extended family",
                    "Close friends and social circles",
                    "Work colleagues and professional relationships",
                    "Adult children and blended families"
                  ].map((item, i) => (
                    <ListGroup.Item key={i} className="bg-transparent ps-0 border-0 py-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span style={{fontSize: '0.95rem'}}>{item}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  At EmotionEase, we understand how the people closest to us shape our emotional world. Unresolved tensions can cause stress, anxiety, and emotional strain. Our sessions provide clarity and coping tools to navigate these complexities.
                </p>

                <Link 
                  href="/programs" 
                  className="btn btn-success btn-lg px-4 py-3 fw-medium"
                  style={{borderRadius: '8px'}}
                >
                  Explore Relationship Counseling
                </Link>
              </Col>
              <Col lg={6} className="animate-on-scroll slide-in-right">
                <img 
                  src="/BenefitCoupleTherapy.webp" 
                  alt="Relationship counseling" 
                  className="img-fluid rounded-4 shadow hover-zoom w-100" 
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Why Relationship Counseling is Essential Section */}
        <section className="py-5">
          <Container>
            <Row className="g-5">
              <Col lg={12} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-lightning-charge fs-4"></i>
                  </div>
                  <h3 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>Why is Relationship Counseling Essential in Today&apos;s Fast-Paced Life?</h3>
                </div>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
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
                      icon: "bi-person-heart"
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
                          <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 mb-3">
                            <i className={`bi ${reason.icon} fs-4`}></i>
                          </div>
                          <h4 className="h5 mb-3">{reason.title}</h4>
                          <p className="mb-0 text-muted" style={{fontSize: '0.95rem'}}>{reason.content}</p>
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

      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="animate-on-scroll fade-in-up text-center mb-5">
            <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted">
              Here are some of the most common questions people ask about couples therapy and relationship counseling.
            </p>
          </div>

          <Row className="animate-on-scroll fade-in-up justify-content-center">
            <Col lg={10}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>Who can enroll for couples therapy?</Accordion.Header>
                  <Accordion.Body>
                    Couples therapy is designed for married, unmarried, or engaged partners who are experiencing challenges in their relationship and want to resolve them with expert guidance.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>How will couples therapy with EmotionEase help us?</Accordion.Header>
                  <Accordion.Body>
                    Couples therapy helps you work through conflicts, find common ground, and address difficult topics in a safe space. The goal is to create clarity and harmony so you and your partner can decide what&apos;s best for your relationship.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>What else is provided other than couples therapy at EmotionEase?</Accordion.Header>
                  <Accordion.Body>
                    At EmotionEase, we also offer relationship counseling. Whether you need guidance in handling difficult relatives or close ones, or want support in improving dynamics at home, work, or within your inner circle, our counseling helps you break unhealthy patterns and build stronger connections.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>How soon can we start couples therapy sessions with EmotionEase?</Accordion.Header>
                  <Accordion.Body>
                    You can get in touch with EmotionEase via email at admin@emotionease.com or call/whatsapp us on these numbers +91 9345330187 and +91 9677198550. We will reach out to you personally as soon as possible and schedule a consultation at your convenience.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>Who can access couples therapy sessions internationally?</Accordion.Header>
                  <Accordion.Body>
                    EmotionEase&apos;s couples therapy sessions are held online. They are offered to people based in India, UAE (Dubai), Saudi Arabia, the Philippines, Singapore, the United States, and the United Kingdom.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>How long does each couples therapy session with EmotionEase last?</Accordion.Header>
                  <Accordion.Body>
                    Each couples therapy session lasts 45 minutes to 1 hour, giving you and your partner plenty of time to openly share your concerns in a safe and supportive space.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-5 bg-success text-light text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">Ready to Strengthen Your Relationship?</h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Let EmotionEase be your guiding light toward a happy, healthy partnership.
          </p>
          <Link 
            href="/contact"
            className="btn btn-light btn-lg rounded-pill px-4 py-3 fw-medium"
            style={{marginBottom: '2%'}}
          >
            Begin Your Journey Together
          </Link>
        </Container>
      </section>
    </>
  )
}