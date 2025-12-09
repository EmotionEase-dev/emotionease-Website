'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Card, ListGroup, Accordion } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import './WorkplaceStress.css'

export default function WorkplaceStressPage() {
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
      <div className="stress-management-page container py-5 py-lg-5" style={{ marginTop: '10px' }}>
        
        {/* Stats Bar */}
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
                    <i className={`bi ${stat.icon} fs-3 text-success mb-2 d-block`}></i>
                    <h3 className="stat-value mb-1">{stat.value}</h3>
                    <p className="stat-label text-muted mb-0 small">{stat.label}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        {/* Workplace Stress Management Section */}
        <section style={{paddingTop: '30px'}}>
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
                <div className="section-header mb-4 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-briefcase fs-4"></i>
                  </div>
                  <h1 className="fw-bold mb-0" style={{fontSize: '1.75rem', lineHeight: '1.3'}}>Workplace Stress Management Therapy</h1>
                </div>
                
                <p className="lead text-success" style={{fontSize: '1.1rem'}}>
                  Over 60% of Indian employees face workplace stress. We offer confidential online therapy to help you manage and move forward.
                </p>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  We often hear about &apos;stress&apos; from colleagues and doctors, but what does workplace stress really mean? It&apos;s a state of mental or physical tension caused by negative or overwhelming professional influences. It can manifest as anxiety, frustration, irritability, or exhaustion - and doesn&apos;t always stem from bad situations. Even positive changes, when unmanaged, can disrupt your emotional balance.
                </p>
                
                <Card className="border-0 mb-4" style={{backgroundColor: 'rgba(25, 135, 84, 0.1)'}}>
                  <Card.Body>
                    <p className="mb-0" style={{fontSize: '1rem', lineHeight: '1.7'}}>
                      Workplace stress isn&apos;t inevitable. With professional help, it can be understood, managed, and overcome.
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
                  Book First Free Consultation
                </a>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Common Causes of Workplace Stress Section */}
        <section className="py-5">
          <Container>
            <Row className="g-5">
              <Col lg={12} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-exclamation-triangle fs-4"></i>
                  </div>
                  <h2 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>Common Causes of Workplace Stress</h2>
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
                          <div className="d-flex align-items-start">
                            <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-2 me-3 flex-shrink-0" style={{width: '48px', height: '48px'}}>
                              <i className={`bi ${cause.icon} fs-5`}></i>
                            </div>
                            <div>
                              <h3 className="h5 fw-bold mb-2">{cause.title}</h3>
                              <p className="text-muted mb-0" style={{fontSize: '0.95rem', lineHeight: '1.6'}}>{cause.content}</p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* How EmotionEase Can Help Section */}
        <section className="py-5">
          <Container>
            <Row className="g-5 align-items-center">
              <Col lg={6} className="animate-on-scroll slide-in-left">
                <img 
                  src="/Therapy.webp" 
                  alt="Therapy session" 
                  className="img-fluid rounded-4 shadow hover-zoom w-100" 
                />
              </Col>
              <Col lg={6} className="animate-on-scroll fade-in-up">
                <div className="section-header mb-4 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-heart-pulse fs-4"></i>
                  </div>
                  <h3 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>How EmotionEase Can Help?</h3>
                </div>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
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
                    <ListGroup.Item key={i} className="bg-transparent ps-0 border-0 py-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span style={{fontSize: '0.95rem'}}>{item}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <Link 
                  href="/programs" 
                  className="btn btn-success btn-lg px-4 py-3 fw-medium"
                  style={{borderRadius: '8px'}}
                >
                  Start Your Healing Journey
                </Link>
                <br />
                <small className="text-muted mt-2 d-block">EmotionEase is based out of India but our sessions are 100% online.</small>
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
              Here are some of the most common questions people ask about workplace stress management therapy.
            </p>
          </div>

          <Row className="animate-on-scroll fade-in-up justify-content-center">
            <Col lg={10}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>Why do you need counseling or therapy for workplace/office stress management?</Accordion.Header>
                  <Accordion.Body>
                    Because, counseling for workplace stress helps you manage pressure, prevent burnout, and maintain emotional balance. It equips you with coping tools to stay productive and resilient at work.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>How will I benefit from EmotionEase&apos;s workplace stress management therapy?</Accordion.Header>
                  <Accordion.Body>
                    You&apos;ll learn to identify stress triggers, set healthy boundaries, and build resilience, helping you stay balanced, focused, and productive at work.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>Is my privacy and confidentiality protected during online counseling?</Accordion.Header>
                  <Accordion.Body>
                    Yes, absolutely! We respect our clients&apos; right to privacy and ensure that their personal information is never shared or disclosed under any circumstances.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>How soon can I start sessions with EmotionEase?</Accordion.Header>
                  <Accordion.Body>
                    You can get in touch with EmotionEase via email at admin@emotionease.com or call/whatsapp us on these numbers +91 9345330187 and +91 9677198550. We will reach out to you personally as soon as possible and schedule a consultation at your convenience.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>How long is each online counseling or therapy session with EmotionEase?</Accordion.Header>
                  <Accordion.Body>
                    Each online counseling session typically lasts 45 minutes to 1 hour, giving you enough time to address key concerns in a focused and meaningful way.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
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
      <section className="py-5 bg-success text-light text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">Ready to Manage Your Workplace Stress?</h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Let EmotionEase be your partner in achieving a healthier work-life balance.
          </p>
          <Link 
            href="/contact"
            className="btn btn-light btn-lg rounded-pill px-4 py-3 fw-medium"
            style={{marginBottom: '2%'}}
          >
            Begin Your Journey to Wellness
          </Link>
        </Container>
      </section>
    </>
  )
}