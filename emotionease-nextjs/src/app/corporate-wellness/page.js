'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import './CorporateWellness.css'

export default function CorporateWellnessPage() {
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
      <main>
        <div className="CorporateWellnessPage container py-5 py-lg-5" style={{ marginTop: '10px' }}>
          
          {/* Stats Bar */}
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
                      <i className={`bi ${stat.icon} fs-3 text-success mb-2 d-block`}></i>
                      <h3 className="stat-value mb-1">{stat.value}</h3>
                      <p className="stat-label text-muted mb-0 small">{stat.label}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Container>
          </div>

          {/* Why Workplace Well-Being is Important Section */}
          <section style={{paddingTop: '30px'}}>
            <Container>
              <Row className="g-5 align-items-center">
                <Col lg={6} className="animate-on-scroll slide-in-left">
                  <img 
                    src="/CoupleTherapy.webp" 
                    alt="Corporate Wellness Session" 
                    className="img-fluid rounded-4 shadow hover-zoom w-100" 
                  />
                </Col>
                <Col lg={6} className="animate-on-scroll fade-in-up">
                  <div className="section-header mb-4 d-flex align-items-start">
                    <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                      <i className="bi bi-people-fill fs-4"></i>
                    </div>
                    <h1 className="fw-bold mb-0" style={{fontSize: '1.75rem', lineHeight: '1.3'}}>Why Workplace Well-Being is Important?</h1>
                  </div>
                  
                  <p>
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

          {/* Thriving Workplaces Section */}
          <section className="py-5">
            <Container>
              <Row className="g-5 align-items-center flex-lg-row-reverse">
                <Col lg={6} className="animate-on-scroll slide-in-right">
                  <img 
                    src="/confidentchild.webp" 
                    alt="Thriving workplace" 
                    className="img-fluid rounded-4 shadow hover-zoom w-100" 
                  />
                </Col>
                <Col lg={6} className="animate-on-scroll fade-in-up">
                  <div className="section-header mb-4 d-flex align-items-start">
                    <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                      <i className="bi bi-emoji-smile fs-4"></i>
                    </div>
                    <h2 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>Thriving Workplaces, Thriving People, Thriving Profits</h2>
                  </div>
                  
                  <p>
                    In today&apos;s fast-paced world, it&apos;s easy for constant connectivity and digital demands to leave people feeling drained and disconnected. At EmotionEase, we believe that work should be a place where people feel supported, inspired, and able to bring their best selves forward. Our Corporate Wellness Programs and Workshops are designed to nurture well-being, ease stress, and create a culture of connection where employees feel valued and motivated.
                  </p>
                  
                  <p>
                    When people feel good, they do good, and that&apos;s when both individuals and businesses truly thrive.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>

          {/* 5-Step Framework Section */}
          <section className="py-5">
            <Container>
              <Row className="g-5">
                <Col lg={12} className="animate-on-scroll fade-in-up">
                  <div className="section-header mb-4 d-flex align-items-start">
                    <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                      <i className="bi bi-heart fs-4"></i>
                    </div>
                    <h3 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>Our 5-Step Framework for Prime Performance</h3>
                  </div>
                  
                  <p>
                    We believe true workplace well-being comes from a balance of structure and care. Our 5-step framework guides organizations through a clear, supportive journey that leads to lasting performance and thriving teams.
                  </p>
                  
                  <Row className="g-4 mt-4">
                    {[
                      {
                        title: "Discover & Assess",
                        content: "Confidential audits and well-being checkups to understand your team's needs.",
                        icon: "bi-search"
                      },
                      {
                        title: "Design & Propose",
                        content: "Tailored seminars, workshops, and our Unlimited Sessions\u2122 plan.",
                        icon: "bi-pencil-square"
                      },
                      {
                        title: "Implement",
                        content: "Engaging skill-building programs, psycho-education, and crisis support.",
                        icon: "bi-gear"
                      },
                      {
                        title: "Counsel & Coach",
                        content: "Personalized therapy or performance coaching through Unlimited Sessions\u2122.",
                        icon: "bi-chat-dots"
                      },
                      {
                        title: "Evaluate & Refresh",
                        content: "Ongoing surveys, ROI dashboards, and continuous support to sustain progress.",
                        icon: "bi-arrow-repeat"
                      }
                    ].map((step, index) => (
                      <Col md={6} lg={4} key={index}>
                        <Card className="h-100 border-0 shadow-sm hover-lift">
                          <Card.Body className="p-4">
                            <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 mb-3">
                              <i className={`bi ${step.icon} fs-4`}></i>
                            </div>
                            <h4 className="h5 mb-3">{step.title}</h4>
                            <p className="mb-0 text-muted" style={{fontSize: '0.95rem'}}>{step.content}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Signature Wellness & Leadership Services Section */}
          <section className="py-5">
            <Container>
              <Row className="g-5">
                <Col lg={12} className="animate-on-scroll fade-in-up">
                  <div className="section-header mb-4 d-flex align-items-start">
                    <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                      <i className="bi bi-heart-pulse fs-4"></i>
                    </div>
                    <h4 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>Signature Wellness & Leadership Services</h4>
                  </div>

                  <p className="mb-4">
                    Our programs empower both employees and leaders to bring out their best:
                  </p>
                  
                  <Row className="g-4">
                    {[
                      {
                        title: "Executive Coaching",
                        content: "One-on-one Unlimited Sessions\u2122 for transformative growth",
                        icon: "bi-person-badge"
                      },
                      {
                        title: "Expert Seminars",
                        content: "Emotional Intelligence, Positive Psychology, Conflict Resolution, and more",
                        icon: "bi-mortarboard"
                      },
                      {
                        title: "Skill Workshops",
                        content: "Practical tools like Mindfulness, CBT techniques, Stress Management, Assertiveness Training",
                        icon: "bi-tools"
                      },
                      {
                        title: "Functional Support",
                        content: "Well-being checkups, Mental Health First Aid, and Critical Incident Stress Debriefing",
                        icon: "bi-heart-pulse"
                      }
                    ].map((service, index) => (
                      <Col md={6} lg={3} key={index}>
                        <Card className="h-100 border-0 shadow-sm hover-lift">
                          <Card.Body className="p-4">
                            <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 mb-3">
                              <i className={`bi ${service.icon} fs-4`}></i>
                            </div>
                            <h4 className="h5 mb-3">{service.title}</h4>
                            <p className="mb-0 text-muted" style={{fontSize: '0.95rem'}}>{service.content}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Confidential and Secured Platform Section */}
          <section className="py-5">
            <Container>
              <Row className="g-5 align-items-center flex-lg-row-reverse">
                <Col lg={6} className="animate-on-scroll slide-in-right">
                  <img 
                    src="/BenefitCoupleTherapy.webp" 
                    alt="Confidential platform" 
                    className="img-fluid rounded-4 shadow hover-zoom w-100" 
                  />
                </Col>
                <Col lg={6} className="animate-on-scroll fade-in-up">
                  <div className="section-header mb-4 d-flex align-items-start">
                    <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                      <i className="bi bi-shield-lock fs-4"></i>
                    </div>
                    <h4 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>EmotionEase is a Confidential and Secured Platform For You</h4>
                  </div>
                  
                  <p>
                    At EmotionEase, we understand that well-being can only flourish when people feel safe and protected. That&apos;s why our platform is built with the highest standards of confidentiality and security, ensuring every conversation stays private and every interaction is handled with care.
                  </p>
                  
                  <ListGroup variant="flush" className="mb-4">
                    {[
                      "We follow GDPR & HIPAA-aligned protocols",
                      "We have role-based consultant access only",
                      "We ensure anonymous reporting for HR teams",
                      "We provide private and secure virtual rooms for all sessions"
                    ].map((item, i) => (
                      <ListGroup.Item key={i} className="bg-transparent ps-0 border-0 py-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span style={{fontSize: '0.95rem'}}>{item}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Why Partner with EmotionEase Section */}
          <section className="py-5">
            <Container>
              <Row className="g-5 align-items-center">
                <Col lg={6} className="animate-on-scroll slide-in-left">
                  <img 
                    src="/HonestConvo.webp" 
                    alt="Partner with EmotionEase" 
                    className="img-fluid rounded-4 shadow hover-zoom w-100" 
                  />
                </Col>
                <Col lg={6} className="animate-on-scroll fade-in-up">
                  <div className="section-header mb-4 d-flex align-items-start">
                    <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                      <i className="bi bi-people fs-4"></i>
                    </div>
                    <h4 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>Why Partner with EmotionEase?</h4>
                  </div>
                
                  <ListGroup variant="flush" className="mb-4">
                    {[
                      "Tailored programs designed around your organization's unique needs",
                      "Unlimited Sessions\u2122 for deep, lasting transformation",
                      "Confidential, secure, and measurable outcomes you can trust",
                      "A sustainable culture of well-being that fuels performance"
                    ].map((item, i) => (
                      <ListGroup.Item key={i} className="bg-transparent ps-0 border-0 py-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span style={{fontSize: '0.95rem'}}>{item}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </section>

        </div>

        {/* Final CTA */}
        <section className="py-5 bg-success text-light text-center">
          <Container>
            <h2 className="display-5 fw-bold mb-4">Contact EmotionEase</h2>
            <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Contact EmotionEase Today to explore customized Corporate Wellness Programs and Workshops for your organization.
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
      </main>
    </>
  )
}