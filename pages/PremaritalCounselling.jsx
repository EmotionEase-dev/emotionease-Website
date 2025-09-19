import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Badge,Accordion } from 'react-bootstrap';
import './StressManagement.css';
import { Helmet } from "react-helmet-async";
const PremaritalcounselingPage = () => {
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
        Premarital counseling | EmotionEase
    </title>
    <meta name="description" content="Marriage is a long-term commitment. EmotionEase’s online premarital counselling helps you build a happy, healthy foundation together.
" />
    <meta name="keywords" content="premarital counseling, online counseling, marriage preparation, relationship counseling, conflict resolution, communication skills" />
    <meta name="author" content="EmotionEase" />
    </Helmet>

    <div className="premarital-counseling-page container py-5 py-lg-5" style={{ marginTop: '10px' }}>
      <div className="stats-bar bg-white shadow-sm py-4">
        <Container>
          <Row className="g-3 text-center">
            {[
              { value: '70%+', label: 'Couples report better communication', icon: 'bi-chat-heart' },
              { value: '85%', label: 'See improved conflict resolution', icon: 'bi-graph-up' },
              { value: 'Flexible', label: 'Online sessions', icon: 'bi-calendar' },
              { value: '20+ Years', label: 'Expert experience', icon: 'bi-award' }
            ].map((stat, i) => (
              <Col md={3} sm={6} key={i}>
                <div className={`stat-item p-3 rounded-3 animate-on-scroll fade-in delay-${i+1}`}>
                  <i className={`bi ${stat.icon} fs-3 text-pink mb-2`}></i>
                  <h3 className="stat-value mb-1">{stat.value}</h3>
                  <p className="stat-label text-muted mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* Premarital counseling Section */}
      <section style={{paddingTop: '10px'}}>
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6} className="animate-on-scroll slide-in-left">
              <img 
                src="/CoupleConversion.png" 
                alt="Couple communication" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-pink bg-opacity-10 text-pink rounded-circle p-3 me-3">
                  <i className="bi bi-hearts fs-2"></i>
                </div>
                <h1 className="fw-bold mb-0">What is Premarital counseling?</h1>
              </div>
              
              <p className="lead text-pink">
                Premarital counseling is a form of preventive therapy that prepares two individuals for the journey of marriage.
              </p>
              
              <p>
                It creates space for open conversations about each person's personality traits, lifestyle choices, and areas of agreement or disagreement. Couples also explore common issues that tend to arise in marriages, along with practical approaches to handle both minor and major conflicts.
              </p>
              
              <Card className="border-0 bg-pink bg-opacity-10 mb-4 hover-glow-pink">
                <Card.Body>
                  <p className="mb-0">
                    Beyond challenges, premarital counseling highlights each partner's strengths and areas for growth, helping build a strong foundation for marriage.
                  </p>
                </Card.Body>
              </Card>

              <Button 
                href="/programs" 
                className="btn btn-pink btn-lg px-4 py-3 fw-medium"
              >
                Start Your Journey
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-6 bg-light-pink">
        <Container>
          <Row className="g-5 align-items-center flex-lg-row-reverse">
            <Col lg={6} className="animate-on-scroll slide-in-right">
              <img 
                src="/HonestConvo.png" 
                alt="Honest conversations" 
                className="img-fluid rounded-4 shadow hover-zoom w-100" 
              />
            </Col>
            <Col lg={6} className="animate-on-scroll fade-in-up">
              <div className="section-header mb-4">
                <div className="icon-wrapper bg-purple bg-opacity-10 text-purple rounded-circle p-3 me-3">
                  <i className="bi bi-chat-square-heart fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">Why Choose EmotionEase for Open, Honest Premarital Conversations?</h2>
              </div>
              
              <p>
                An individual preparing for marriage may have a myriad of questions. Even though we're surrounded by married couples, most of us still don't know how to approach the institution with both optimism and practicality.
              </p>
              
              <p>
                At EmotionEase, we offer a safe, non-judgemental space where you and your partner are encouraged to open up - freely expressing your doubts, questions, and insecurities about marriage.
              </p>

              <ListGroup variant="flush" className="mb-4">
                {[
                  "Online sessions for convenience and privacy",
                  "Expert guidance from experienced counselors",
                  "Structured approach to important conversations",
                  "Tools for effective communication",
                  "Conflict resolution strategies",
                  "Financial and lifestyle compatibility discussions"
                ].map((item, i) => (
                  <ListGroup.Item key={i} className="bg-transparent ps-0 border-0">
                    <i className="bi bi-check-circle-fill text-pink me-2"></i>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section style={{paddingTop: '10px'}}>
        <Container>
          <Row className="g-5">
            <Col lg={12} className="animate-on-scroll fade-in-up">

               <div className="section-header mb-4">
                <div className="icon-wrapper bg-purple bg-opacity-10 text-purple rounded-circle p-3 me-3">
                    <i className="bi bi-stars fs-2"></i>
                </div>
                <h2 className="fw-bold mb-0">Benefits of Premarital counseling</h2>
              </div>
              <Row className="g-4 mt-4">
                {[
                  {
                    title: "Improved Communication",
                    content: "Learn to express needs and listen effectively before issues arise",
                    icon: "bi-chat-dots"
                  },
                  {
                    title: "Conflict Resolution",
                    content: "Develop healthy ways to handle disagreements before they become patterns",
                    icon: "bi-people"
                  },
                  {
                    title: "Realistic Expectations",
                    content: "Align your visions for marriage and daily life together",
                    icon: "bi-lightbulb"
                  },
                  {
                    title: "Financial Alignment",
                    content: "Discuss money management approaches and financial goals",
                    icon: "bi-cash-coin"
                  },
                  {
                    title: "Intimacy Understanding",
                    content: "Explore emotional and physical intimacy expectations",
                    icon: "bi-heart"
                  },
                  {
                    title: "Family Dynamics",
                    content: "Navigate relationships with in-laws and extended family",
                    icon: "bi-house-heart"
                  }
                ].map((benefit, index) => (
                  <Col md={6} lg={4} key={index}>
                    <Card className="h-100 border-0 shadow-sm hover-lift">
                      <Card.Body className="p-4">
                        <div className="icon-wrapper bg-purple bg-opacity-10 text-purple rounded-circle p-3 mb-3">
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
                  <Accordion.Header >Who can enroll for the premarital counseling sessions?</Accordion.Header>
                  <Accordion.Body>
                    Premarital counseling is designed for couples who are engaged, betrothed, or in a long-term relationship and planning marriage as their next step.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How does premarital counseling with EmotionEase help us?
</Accordion.Header>
                  <Accordion.Body>
                   Marriage is a big decision, and choosing a life partner involves many factors and uncertainties. At EmotionEase, you and your partner will learn to resolve conflicts, understand each other’s needs, and align future goals on intimacy, family, and finances to build a stronger foundation for marriage.

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How many sessions of premarital counseling with EmotionEase are required?</Accordion.Header>
                  <Accordion.Body>
                    There’s no fixed number of sessions. Some couples find clarity in just one session, while others may need two or more. Once you both feel your doubts are addressed and you’re satisfied, you can choose to discontinue. For more details, we recommend visiting our Programs page.
 </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>How soon can I start premarital counseling sessions with EmotionEase?
</Accordion.Header>
                  <Accordion.Body>
                    You can get in touch with EmotionEase via email at admin@emotionease.com or call/whatsapp us on these numbers  +91 9345330187 and +91 9677198550. We will reach out to you personally as soon as possible and schedule a consultation at your convenience.

                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>Who can access your premarital counseling services worldwide?
</Accordion.Header>
                  <Accordion.Body>
                    Our premarital counseling sessions are held online and we offer them to people based in India, UAE (Dubai), Saudi Arabia, the Philippines, Singapore, the United States, and the United Kingdom.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="mb-3 btn-primary shadow-sm rounded-3 border-0">
                  <Accordion.Header>Will our conversations during the sessions remain confidential?

</Accordion.Header>
                  <Accordion.Body>
                    Yes. Every session at EmotionEase is 100% confidential. Your personal details and discussions will never be shared with anyone under any circumstances, ensuring a safe and trusted space for you.
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

export default PremaritalcounselingPage;