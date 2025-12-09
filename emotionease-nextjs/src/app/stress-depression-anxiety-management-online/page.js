'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import './StressManagement.css'

export default function StressManagementPage() {
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
                { value: '30-50%', label: 'Global stress prevalence', icon: 'bi-globe' },
                { value: '77%', label: 'Indians experience stress', icon: 'bi-people' },
                { value: '89%', label: 'Clients report improvement', icon: 'bi-graph-up' },
                { value: 'Flexible', label: 'Session scheduling', icon: 'bi-calendar' }
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

        {/* Stress Management Section */}
        <section style={{paddingTop: '30px'}}>
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
                <div className="section-header mb-4 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-activity fs-4"></i>
                  </div>
                  <h1 className="fw-bold mb-0" style={{fontSize: '1.75rem', lineHeight: '1.3'}}>Online Stress Management Therapy and Counseling</h1>
                </div>
                
                <p className="lead text-success" style={{fontSize: '1.1rem'}}>
                  Health experts often cite the harmful impact of stress on physical health, yet practical methods to manage stress are rarely talked about.
                </p>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  Life is full of trials and tribulations. There will always be something that keeps you on your toes. With time and experience, you can learn to manage stress, but let&apos;s be honest: handling stress isn&apos;t easy.
                </p>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  Research shows 30-50% of people globally experience psychological stress, with 77% of Indians reporting regular symptoms. Whether from work, relationships, or daily responsibilities, unmanaged stress can lead to exhaustion, health issues, and emotional breakdowns.
                </p>
                
                <Card className="border-0 mb-4" style={{backgroundColor: 'rgba(25, 135, 84, 0.1)'}}>
                  <Card.Body>
                    <p className="mb-0" style={{fontSize: '1rem', lineHeight: '1.7'}}>
                      At EmotionEase, we offer a safe, confidential space to manage stress and resolve underlying causes. Our online sessions let you connect from anywhere you feel comfortable.
                    </p>
                  </Card.Body>
                </Card>

                <Link 
                  href="/contact" 
                  className="btn btn-success btn-lg px-4 py-3 fw-medium"
                  style={{borderRadius: '8px'}}
                >
                  Get in Touch With Us
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Depression Counseling Section */}
        <section className="py-5">
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
                <div className="section-header mb-3 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-emoji-frown fs-4"></i>
                  </div>
                  <div>
                    <h2 className="fw-bold mb-1" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>Online Counseling and Therapy for Depression</h2>
                    <p className="text-muted mb-0" style={{fontSize: '1rem'}}>Is It Just Sadness, or Something More?</p>
                  </div>
                </div>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  As we grow, life becomes more layered, we take on responsibilities, form new relationships, advance in our careers, and go through physical and emotional changes. Through it all, our mind works silently in the background, helping us adapt, cope, and move forward. It shapes how we accept what is, and let go of what isn&apos;t.
                </p>
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  But sometimes, the mind struggles to keep up.
                </p>
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  When the changes become overwhelming or prolonged, and our inner resilience starts to wear thin, that&apos;s when depression can begin to take hold. Contrary to popular belief, depression doesn&apos;t always stem from a major traumatic event. It can develop quietly, in anyone, at any stage of life.
                </p>
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  What affects you and how deeply, is personal. What may seem minor to one person might feel life-altering to another. And often, people don&apos;t even realize that something is wrong until much later. Even when they do sense that something is off, it can be difficult to identify the symptoms, let alone the cause.
                </p>
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  At EmotionEase, we&apos;re here to help you make sense of what your mind is going through. Depression is not a weakness. It&apos;s not something to fear. And most importantly, depression is treatable.
                </p>
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  With the right support and compassionate guidance, you can begin your healing journey at any time. We&apos;re here to walk with you, every step of the way.
                </p>
                
                <Link 
                  href="/contact" 
                  className="btn btn-success btn-lg px-4 py-3 fw-medium"
                  style={{borderRadius: '8px'}}
                >
                  Talk to Us About Depression
                </Link>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Anxiety Therapy Section */}
        <section className="py-5">
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
                <div className="section-header mb-4 d-flex align-items-start">
                  <div className="icon-wrapper bg-success-subtle text-success rounded-circle p-3 me-3 flex-shrink-0">
                    <i className="bi bi-lightning-charge fs-4"></i>
                  </div>
                  <h3 className="fw-bold mb-0" style={{fontSize: '1.5rem', lineHeight: '1.3'}}>Personalized Online Therapy for Anxiety Relief and Management</h3>
                </div>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  You could be sitting at a café with close friends, enjoying yourself, when suddenly an innocent comment, a passing visual, a message, or even a sound pulls you away from the present. Outwardly, you&apos;re smiling. Inwardly, you&apos;re battling a wave of emotion, an urge to react, to speak, to escape.
                </p>
                
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  <strong>That&apos;s how anxiety works. It quietly robs you of your best moments, unless you learn to set boundaries with it.</strong> It must be acknowledged and confronted, again and again, until it no longer holds the power to disrupt the life you&apos;re working so hard to build.
                </p>
                <p style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  To truly regain control, those of us who have been gripped by anxiety time and again need the guidance of an expert, someone who understands the many faces of anxiety and knows how to navigate them.
                </p>

                <Link 
                  href="/programs" 
                  className="btn btn-success btn-lg px-4 py-3 fw-medium"
                  style={{borderRadius: '8px'}}
                >
                  Check Out Our Anxiety Programs
                </Link>
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
                <Accordion.Item eventKey="0" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>What is online counseling for stress, depression, and anxiety?</Accordion.Header>
                  <Accordion.Body>
                    Online counseling/therapy for anxiety, depression, and stress is designed to support individuals struggling with persistent sadness (doesn&apos;t matter if the cause of sadness is identified or unidentified), overwhelming stress at home or workplace, and those who experience excessive anxiety even in low-pressure situations.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>Is online therapy as effective as in-person sessions?</Accordion.Header>
                  <Accordion.Body>
                    EmotionEase&apos;s online therapy and counseling sessions are as effective as in-person sessions. First, they are conducted via voice or video calls. Secondly, all sessions are confidential, and individuals can talk to our experts from their preferred location.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>How many therapy or counseling sessions will I need to feel better?</Accordion.Header>
                  <Accordion.Body>
                    The number of sessions varies for each person. In the first few sessions, your therapist will assess the root cause, your coping style, and how well strategies are working. At EmotionEase, we aim to make a difference from the very first session and guide you toward recovery.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>What sort of outcomes can I expect from stress/depression/anxiety counseling sessions?</Accordion.Header>
                  <Accordion.Body>
                    <ol style={{paddingLeft: '1.2rem'}}>
                      <li>You will be able to identify the cause of your sadness/depression (if you haven&apos;t already)</li>
                      <li>You will be able to identify and cope with your behavioral symptoms early on</li>
                      <li>You will be able to establish measurable goals for yourself</li>
                      <li>You will have realistic expectations from yourself and others around you</li>
                      <li>You will be kinder to yourself and others around you</li>
                    </ol>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>Is my privacy and confidentiality protected during online counseling?</Accordion.Header>
                  <Accordion.Body>
                    Yes, absolutely! We respect our clients&apos; right to privacy and ensure that their personal information is never shared or disclosed under any circumstances.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>How soon can I start sessions with EmotionEase?</Accordion.Header>
                  <Accordion.Body>
                    You can get in touch with EmotionEase via email at admin@emotionease.com or call/whatsapp us on these numbers +91 9345330187 and +91 9677198550. We will reach out to you personally as soon as possible and schedule a consultation at your convenience.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
                  <Accordion.Header>How long is each online counseling or therapy session?</Accordion.Header>
                  <Accordion.Body>
                    Each online counseling session typically lasts 45 minutes to 1 hour, giving you enough time to address key concerns in a focused and meaningful way.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7" className="mb-3 shadow-sm rounded-3 border-0 overflow-hidden">
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
      <section className="py-5 bg-success text-light text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">Ready to Take Control of Your Mental Health?</h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Let EmotionEase guide you toward a calmer, more balanced life.
          </p>
          <Link 
            href="/contact"
            className="btn btn-light btn-lg rounded-pill px-4 py-3 fw-medium"
            style={{marginBottom: '2%'}}
          >
            Start Your Healing Journey
          </Link>
        </Container>
      </section>
    </>
  )
}