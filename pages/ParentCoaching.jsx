import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import './StressManagement.css';

const ParentCoachingPage = () => {
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
    <title>
        Parent Coaching and Confidence Building for Kids | EmotionEase
    </title>
    <meta name="description" content="Learn the right approach and techniques to parent your kids and instill confidence in them through EmotionEase’s online sessions." />
    <meta name="keywords" content="parent coaching, confidence building, child development, online coaching, emotional support, parenting skills" />
    <meta name="author" content="EmotionEase" />

            <h1 className="hero-title display-3 fw-bold text-success text-center">
                             Online Parent Coaching and Confidence Building for Kids | EmotionEase{" "}
                            <span className="text-gradient-success">
                              | EmotionEase!
                            </span>
            </h1>

    <div className="parent-coaching-page container py-5 py-lg-5" style={{ marginTop: '10px' }}>
      <div className="stats-bar bg-white shadow-sm py-4">
        <Container>
          <Row className="g-3 text-center">
            {[
              { value: '80%+', label: 'Parents feel unprepared', icon: 'bi-people' },
              { value: '92%', label: 'See child confidence improve', icon: 'bi-graph-up' },
              { value: 'Flexible', label: 'Online sessions', icon: 'bi-calendar' },
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

      {/* Parent Coaching Section */}
      <section className="py-6">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="animate-on-scroll slide-in-left">
              <img 
                src="/ParentingChallenges.png" 
                alt="Parenting challenges" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle p-3 me-3">
                  <i className="bi bi-people-fill fs-2"></i>
                </div>
                <h1 className="fw-bold mb-0">What is Parent Coaching and Why Do You Need It?</h1>
              </div>
              
              <p className="lead text-success">
                Being a parent is a full-time role - whether you're in a meeting or taking a quick bathroom break, your child is always on your mind.
              </p>
              
              <p>
                In trying to meet society's expectations, many parents unintentionally overlook what's truly beneficial for their child's emotional and developmental needs. We often follow the parenting patterns we grew up with, and while they offer some guidance, they may fall short in today's context.
              </p>
              
              <Card className="border-0 bg-success bg-opacity-10 mb-4 hover-glow-success">
                <Card.Body>
                  <p className="mb-0 fst-italic">
                    "Parenting isn't just instinct, it's a skill that evolves."
                  </p>
                </Card.Body>
              </Card>

              <p>
                Good parenting is about being present in your child's emotional and physical world. Great parenting is about staying open to learning and growing, even when it's uncomfortable.
              </p>

              <Button 
                href="/programs" 
                className="btn btn-success btn-lg px-4 py-3 fw-medium"
              >
                Book Free Discovery Session
              </Button>
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
                src="/confidentchild.png" 
                alt="Confident child" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-teal bg-opacity-10 text-teal rounded-circle p-3 me-3">
                  <i className="bi bi-emoji-smile fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">Confidence Building and Fearlessness Training for Kids</h2>
              </div>
              
              <p>
                Children are smart, yet vulnerable. They are emotionally rich but often not equipped to distinguish between right and wrong, just and unjust, politeness and fearfulness, or courage and arrogance.
              </p>
              
              <p>
                As their parents and primary guides, it's our responsibility to offer them a sense of security and to help them develop the emotional and social skills that will make others feel secure around them too.
              </p>

              <p>
                Whether it's public speaking, trying out a new sport, wearing a different kind of outfit, or attending a public event, a child can truly enjoy the experience only when they feel safe and confident within themselves.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Causes of Low Confidence Section */}
      <section className="py-6">
        <Container>
          <Row className="g-5">
            <Col lg={12} className="animate-on-scroll fade-in-up">
               <div className="section-header mb-4">
                <div className="icon-wrapper bg-forest bg-opacity-10 text-forest rounded-circle p-3 me-3">
                    <i className="bi bi-exclamation-triangle fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">Common Causes of Low Confidence in Children</h2>
              </div>

              
              <p className="mb-5">
                There are many reasons why a child may appear overly shy, anxious, or lacking in confidence.
              </p>
              
              <Row className="g-4">
                {[
                  "Bullying experiences",
                  "Lack of emotional validation",
                  "Excessive time spent alone",
                  "Constant criticism",
                  "Inability to express deeper emotions",
                  "Pressure to act mature beyond their age",
                  "Academic stress or comparison with peers"
                ].map((cause, index) => (
                  <Col md={6} lg={4} key={index}>
                    <Card className="h-100 border-0 shadow-sm hover-lift">
                      <Card.Body className="p-4">
                        <div className="icon-wrapper bg-success bg-opacity-10 text-success rounded-circle p-3 mb-3">
                          <i className="bi bi-heartbreak fs-3"></i>
                        </div>
                        <h4 className="mb-3">{cause}</h4>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              
              <div className="mt-5 text-center">
                <p className="lead">
                  Parenting is a continuous learning journey. It's okay if mistakes were made in the past; what matters is what we do now.
                </p>
                <p>
                  Take time to truly understand your child. Bring them to us, and let us help you understand them better. Together, we can nurture their confidence and guide them toward living life with courage and joy.
                </p>
              </div>
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
                <h2 className="fw-bold mb-0">How EmotionEase Can Help</h2>
              </div>

              <Row className="mb-5">
                <Col lg={8}>
                  <p>
                    At EmotionEase, our expert counsellor Elango, with over 20+ years of experience, guides you through the emotional challenges of parenting, helping you raise resilient, confident children with clarity and compassion.
                  </p>
                </Col>
              </Row>
              
              <Row className="g-4">
                {[
                  {
                    title: "Parent Coaching",
                    content: "Personalized guidance to improve your parenting approach and emotional connection with your child",
                    icon: "bi-people-fill"
                  },
                  {
                    title: "Confidence Building",
                    content: "Techniques to help your child develop self-assurance and social skills",
                    icon: "bi-emoji-smile"
                  },
                  {
                    title: "Emotional Validation",
                    content: "Teaching parents how to acknowledge and support their child's emotional needs",
                    icon: "bi-heart-fill"
                  },
                  {
                    title: "Behavior Understanding",
                    content: "Helping decode your child's actions and reactions for better communication",
                    icon: "bi-lightbulb"
                  },
                  {
                    title: "Fear Reduction",
                    content: "Strategies to help children overcome anxieties and try new experiences",
                    icon: "bi-shield-check"
                  },
                  {
                    title: "Family Dynamics",
                    content: "Improving overall family communication and emotional health",
                    icon: "bi-house-heart"
                  }
                ].map((service, index) => (
                  <Col md={6} lg={4} key={index}>
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

      {/* Specialist Section */}
      <section className="py-4 ">
        <Container>
          {/* <Row className="justify-content-center">
            <Col lg={8} className="animate-on-scroll fade-in-up">
              <div className="specialist-card p-4 p-lg-5 rounded-4 bg-success bg-opacity-10 text-center hover-glow-success">
                <div className="mb-4">
                  <img 
                    src="/ElangoPhoto.jpg" 
                    alt="Elango Annamalai" 
                    className="rounded-circle mx-auto" 
                    width="120" 
                    height="120" 
                  />
                </div>
                <h3 className="fw-bold mb-3">
                    Elango Annamalai
                </h3>
                <p className="text-muted mb-4">Emotion Regulation Consultant (20+ years experience)</p>
                
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                  {['Parent Coaching', 'Child Development', 'Confidence Building', 'Family Therapy'].map((skill, i) => (
                    <Badge pill bg="success" key={i} className="px-3 py-2 badge rounded-pill bg-success">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <p className="mb-4">
                  With over two decades of experience helping families, Elango provides compassionate, expert guidance to help you navigate the challenges of parenting and build your child's confidence.
                </p>
              </div>
            </Col>
            
          </Row> */}
          <Button 
                  href="/contact" 
                  variant="success" 
                  size="lg" 
                  className="rounded-pill px-4 py-3 hover-lift-success fw-medium"
                >
                  Book Free Discovery Session
                </Button>
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

export default ParentCoachingPage;