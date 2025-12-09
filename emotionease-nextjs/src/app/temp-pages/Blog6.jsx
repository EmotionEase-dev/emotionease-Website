import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft,
  faUsers,
  faHandHoldingHeart,
  faLightbulb,
  faChartLine,
  faCalendarAlt,
  faClock,
  faCheckCircle,
  faHeart,
  faBrain,
  faGlobe,
  faHandshake,
  faSeedling
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const BlogPostDemocratizing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const handleProgramsClick = () => {
    navigate('/programs');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const blog = {
    id: 6,
    title: "Democratizing Emotional Wellness",
    subtitle: "How EmotionEase is Healing Communities from Within",
    excerpt: "In an age where mental health conversations are thriving online but still out of reach for millions, one social venture is rewriting the rules of emotional well-being.",
    date: "November 5, 2025",
    readTime: "8 min read",
    content: {
      introduction: "EmotionEase stands at the intersection of neuroscience, trauma healing, and social innovation—proving that emotional wellness can be accessible, inclusive, and community-driven.",
      
      sections: [
        {
          title: "The Hidden Crisis: Emotional Pain in Underserved Communities",
          content: "Across marginalized communities, emotional wounds run deep. Poverty, discrimination, and generational stress have created silent cycles of anxiety and low self-worth. Yet therapy—often expensive, stigmatized, and urban-centric—remains inaccessible to those who need it most.",
          impact: "The result? Burned-out caregivers, overwhelmed social workers, and youth trapped in survival patterns. Emotional care, long seen as a privilege, has become a missing link in holistic community development."
        },
        {
          title: "EmotionEase: A Scalable Solution for Collective Healing",
          intro: "EmotionEase is flipping this narrative with a 4-week transformation model rooted in reparenting, guided visualization, and neuroplasticity. The approach helps participants rewire subconscious emotional patterns, heal old wounds, and build resilience—without clinical therapy infrastructures.",
          features: [
            "Accessible through audio-visual modules in multiple languages",
            "Empowers community health workers, social sector teams, and peer mentors to become facilitators of healing",
            "Participants report reduced reactivity, better self-compassion, improved relationships, and stronger emotional stability in just four weeks"
          ]
        },
        {
          title: "The Science Behind the Method",
          content: "Unlike conventional talk therapy, EmotionEase works at the subconscious level using neuroplasticity-based reprogramming. This helps individuals safely revisit early emotional imprints, release conditioned shame, and cultivate self-acceptance.",
          approach: "Each lesson is trauma-informed, culturally relevant, and structured as a skill-building journey—not pathology treatment—making emotional wellness stigma-free and universally approachable."
        },
        {
          title: "How It Transforms Communities",
          intro: "EmotionEase isn't just for individuals—it's designed for social organizations and grassroots changemakers.",
          benefits: [
            {
              category: "Caregivers and Social Workers",
              impact: "Learn to heal their own emotional fatigue, reducing burnout"
            },
            {
              category: "Families",
              impact: "Experience less conflict and more emotional safety"
            },
            {
              category: "Youth",
              impact: "Gain emotional intelligence and purpose-driven confidence"
            },
            {
              category: "Women",
              impact: "Reclaim agency from generational and societal conditioning"
            },
            {
              category: "NGOs",
              impact: "Notice improved engagement and retention in education, health, and livelihood programs"
            }
          ],
          model: "The model grows from within—training community facilitators to lead \"EmotionEase Circles,\" ensuring emotional wellness becomes self-sustaining and deeply rooted."
        },
        {
          title: "Partnership and Implementation Model",
          intro: "EmotionEase integrates seamlessly into existing community programs and NGO structures.",
          deliveryFormats: {
            title: "Delivery Formats Include:",
            formats: [
              "Weekly group circles (8–12 participants) for emotional processing",
              "Self-paced mobile modules for individual growth",
              "Hybrid models blending group and solo learning"
            ]
          },
          trainingComponents: {
            title: "Training Components:",
            components: [
              "Two-day facilitator certification",
              "Ongoing mentorship support",
              "Open-source emotional literacy resources for grassroots access"
            ]
          },
          impactMetrics: {
            title: "Impact Measurable in 4 Weeks:",
            metrics: [
              "Improved emotional regulation, better sleep quality, reduced anxiety",
              "Strengthened relationships and decision-making",
              "Greater organizational morale and lower staff burnout"
            ]
          }
        },
        {
          title: "Why EmotionEase Stands Out",
          intro: "EmotionEase bridges psychology, indigenous wisdom, and neuroscience to make wellness both scientific and soulful.",
          uniqueFeatures: [
            {
              feature: "Designed for low-resource settings",
              description: "No dependence on therapy clinics"
            },
            {
              feature: "Community-owned",
              description: "Rather than expert-dependent"
            },
            {
              feature: "Data-backed results",
              description: "Reinforced by participant stories"
            },
            {
              feature: "Scalable",
              description: "For NGOs, government initiatives, and youth movements alike"
            }
          ],
          tagline: "This is wellness as a social movement, not a marketplace."
        },
        {
          title: "A Call for Collaboration",
          intro: "EmotionEase invites social entrepreneurs, NGOs, and changemakers to join hands in democratizing mental wellness.",
          collaborationWays: [
            "Pilot EmotionEase programs in your community",
            "Co-create localized modules for women, youth, or crisis-affected groups",
            "Train your team in EmotionEase facilitation",
            "Measure and publish emotional impact metrics",
            "Become part of a growing global network for emotional resilience"
          ],
          callout: "Together, we can make emotional wellness a human right—not a luxury."
        }
      ],
      
      vision: {
        title: "The Vision Ahead",
        content: "Imagine communities where trauma survivors become healers, where emotional intelligence—not pain—is passed between generations, and where social transformation starts from within. This is the world EmotionEase is building—one healed heart at a time.",
        tagline: "EmotionEase – Emotional Wellness for All"
      },
      
      closingQuote: {
        text: "When we heal ourselves, we heal our communities. When we heal our communities, we transform society."
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Helmet>
        <title>Democratizing Emotional Wellness - How EmotionEase is Healing Communities | EmotionEase</title>
      </Helmet>

      {/* Navigation Back Button */}
      <Container className="pt-4">
        <Button 
          as={Link} 
          to="/blog" 
          variant="outline-success" 
          className="mb-4"  
          style={{ borderColor: '#28a745', color: '#28a745' }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to Blogs
        </Button>
      </Container>

      {/* Hero Section */}
      <div className="hero-section" style={{ 
        backgroundColor: '#218838',
        padding: '5rem 0',
        marginBottom: '3rem',
        backgroundImage: 'linear-gradient(to right, #218838, #28a745)'
      }}>
        <Container>
          <div className="text-center text-white">
            <h1 className="display-4 fw-bold mb-3">
              {blog.title}
            </h1>
            <h2 className="h3 mb-4" style={{ opacity: 0.9 }}>
              {blog.subtitle}
            </h2>
            <p className="lead mb-5">
              {blog.excerpt}
            </p>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                {blog.date}
              </span>
              <span>
                <FontAwesomeIcon icon={faClock} className="me-2" />
                {blog.readTime}
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="py-5">
        {/* Introduction */}
        <Row className="mb-5">
          <Col lg={{ span: 10, offset: 1 }}>
            <div className="intro-text p-4 p-md-5 rounded-3" style={{ 
              backgroundColor: 'white',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              borderLeft: '4px solid #28a745'
            }}>
              <p className="fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                {blog.content.introduction}
              </p>
            </div>
          </Col>
        </Row>

        {/* The Hidden Crisis */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="mb-4">
              <h2 className="fw-bold mb-4" style={{ 
                color: '#218838',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#28a745',
                  borderRadius: '2px'
                }}></span>
                {blog.content.sections[0].title}
              </h2>
              
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                {blog.content.sections[0].content}
              </p>

              <Card className="border-0 shadow-sm" style={{ backgroundColor: '#fff3cd' }}>
                <Card.Body>
                  <div className="d-flex align-items-start">
                    <FontAwesomeIcon icon={faUsers} className="me-3 mt-1" style={{ fontSize: '1.5rem', color: '#856404' }} />
                    <p className="mb-0 fw-semibold" style={{ color: '#856404', lineHeight: '1.7' }}>
                      {blog.content.sections[0].impact}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* EmotionEase Solution */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="mb-4">
              <h2 className="fw-bold mb-4" style={{ 
                color: '#218838',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#28a745',
                  borderRadius: '2px'
                }}></span>
                {blog.content.sections[1].title}
              </h2>
              
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                {blog.content.sections[1].intro}
              </p>

              <ListGroup variant="flush" className="mb-4">
                {blog.content.sections[1].features.map((feature, i) => (
                  <ListGroup.Item key={i} className="border-0 px-0 py-3 bg-transparent">
                    <div className="d-flex align-items-start">
                      <FontAwesomeIcon icon={faCheckCircle} className="me-3 mt-1 text-success" style={{ fontSize: '1.2rem' }} />
                      <p className="mb-0">{feature}</p>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>

        {/* The Science */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <Card className="border-success shadow">
              <Card.Header className="bg-success text-white fw-bold fs-4">
                <FontAwesomeIcon icon={faBrain} className="me-2" />
                {blog.content.sections[2].title}
              </Card.Header>
              <Card.Body className="p-4">
                <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                  {blog.content.sections[2].content}
                </p>
                <div className="p-3 rounded" style={{ backgroundColor: '#e8f5e9', borderLeft: '4px solid #28a745' }}>
                  <p className="mb-0 fst-italic" style={{ lineHeight: '1.8' }}>
                    {blog.content.sections[2].approach}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Community Transformation */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="mb-4">
              <h2 className="fw-bold mb-4" style={{ 
                color: '#218838',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#28a745',
                  borderRadius: '2px'
                }}></span>
                {blog.content.sections[3].title}
              </h2>
              
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                {blog.content.sections[3].intro}
              </p>

              <h4 className="fw-bold mb-3" style={{ color: '#218838' }}>
                <FontAwesomeIcon icon={faHandHoldingHeart} className="me-2" />
                Key Social Impact Benefits:
              </h4>

              {blog.content.sections[3].benefits.map((benefit, i) => (
                <Card key={i} className="mb-3 border-0 shadow-sm hover-effect">
                  <Card.Body>
                    <div className="d-flex align-items-start">
                      <div className="me-3">
                        <div style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#28a745',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FontAwesomeIcon icon={faHeart} style={{ color: 'white', fontSize: '1.2rem' }} />
                        </div>
                      </div>
                      <div>
                        <h5 className="fw-bold text-success mb-2">{benefit.category}</h5>
                        <p className="mb-0">{benefit.impact}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}

              <div className="p-4 rounded mt-4" style={{ backgroundColor: '#f1f8f4', borderLeft: '4px solid #28a745' }}>
                <p className="fs-5 mb-0 fst-italic" style={{ lineHeight: '1.8', color: '#1b5e20' }}>
                  {blog.content.sections[3].model}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Partnership Model */}
        <Row className="mb-5">
          <Col lg={{ span: 10, offset: 1 }}>
            <Card className="border-0 shadow-lg">
              <Card.Header className="bg-success text-white fw-bold fs-3 py-4">
                <FontAwesomeIcon icon={faHandshake} className="me-2" />
                {blog.content.sections[4].title}
              </Card.Header>
              <Card.Body className="p-4 p-md-5">
                <p className="fs-5 mb-5" style={{ lineHeight: '1.8' }}>
                  {blog.content.sections[4].intro}
                </p>

                <Row className="g-4">
                  <Col md={4}>
                    <Card className="h-100 border-success">
                      <Card.Header className="bg-light fw-bold">
                        <FontAwesomeIcon icon={faUsers} className="me-2 text-success" />
                        {blog.content.sections[4].deliveryFormats.title}
                      </Card.Header>
                      <Card.Body>
                        <ListGroup variant="flush">
                          {blog.content.sections[4].deliveryFormats.formats.map((format, i) => (
                            <ListGroup.Item key={i} className="border-0 px-0 py-2">
                              <div className="d-flex align-items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 mt-1 text-success" />
                                <span className="small">{format}</span>
                              </div>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4}>
                    <Card className="h-100 border-success">
                      <Card.Header className="bg-light fw-bold">
                        <FontAwesomeIcon icon={faLightbulb} className="me-2 text-success" />
                        {blog.content.sections[4].trainingComponents.title}
                      </Card.Header>
                      <Card.Body>
                        <ListGroup variant="flush">
                          {blog.content.sections[4].trainingComponents.components.map((component, i) => (
                            <ListGroup.Item key={i} className="border-0 px-0 py-2">
                              <div className="d-flex align-items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 mt-1 text-success" />
                                <span className="small">{component}</span>
                              </div>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={4}>
                    <Card className="h-100 border-success">
                      <Card.Header className="bg-light fw-bold">
                        <FontAwesomeIcon icon={faChartLine} className="me-2 text-success" />
                        {blog.content.sections[4].impactMetrics.title}
                      </Card.Header>
                      <Card.Body>
                        <ListGroup variant="flush">
                          {blog.content.sections[4].impactMetrics.metrics.map((metric, i) => (
                            <ListGroup.Item key={i} className="border-0 px-0 py-2">
                              <div className="d-flex align-items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="me-2 mt-1 text-success" />
                                <span className="small">{metric}</span>
                              </div>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Why EmotionEase Stands Out */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="mb-4">
              <h2 className="fw-bold mb-4" style={{ 
                color: '#218838',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#28a745',
                  borderRadius: '2px'
                }}></span>
                {blog.content.sections[5].title}
              </h2>
              
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                {blog.content.sections[5].intro}
              </p>

              <h4 className="fw-bold mb-3" style={{ color: '#218838' }}>What Makes It Unique:</h4>

              <Row className="g-3 mb-4">
                {blog.content.sections[5].uniqueFeatures.map((item, i) => (
                  <Col md={6} key={i}>
                    <Card className="h-100 border-0 shadow-sm hover-effect">
                      <Card.Body>
                        <h5 className="fw-bold text-success mb-2">
                          <FontAwesomeIcon icon={faSeedling} className="me-2" />
                          {item.feature}
                        </h5>
                        <p className="mb-0 text-muted">{item.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="p-4 rounded text-center" style={{ backgroundColor: '#e8f5e9' }}>
                <p className="fs-4 fw-bold mb-0" style={{ color: '#1b5e20' }}>
                  {blog.content.sections[5].tagline}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Call for Collaboration */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <Card className="border-success shadow-lg">
              <Card.Header className="bg-success text-white fw-bold fs-4">
                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                {blog.content.sections[6].title}
              </Card.Header>
              <Card.Body className="p-4">
                <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                  {blog.content.sections[6].intro}
                </p>

                <h5 className="fw-bold mb-3" style={{ color: '#218838' }}>Here's how you can collaborate:</h5>

                <ListGroup as="ol" numbered>
                  {blog.content.sections[6].collaborationWays.map((way, i) => (
                    <ListGroup.Item as="li" key={i} className="border-0 bg-transparent py-2">
                      {way}
                    </ListGroup.Item>
                  ))}
                </ListGroup>

                <div className="p-4 mt-4 rounded text-center" style={{ backgroundColor: '#f1f8f4' }}>
                  <p className="fs-5 fw-bold mb-0" style={{ color: '#218838' }}>
                    {blog.content.sections[6].callout}
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Vision Section */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <Card className="border-0 shadow-lg" style={{ backgroundColor: '#e8f5e9' }}>
              <Card.Body className="p-5">
                <h2 className="fw-bold mb-4 text-center" style={{ color: '#218838' }}>
                  {blog.content.vision.title}
                </h2>
                <p className="fs-5 mb-4 text-center" style={{ lineHeight: '1.8' }}>
                  {blog.content.vision.content}
                </p>
                <div className="text-center">
                  <Badge bg="success" className="px-4 py-2 fs-5">
                    {blog.content.vision.tagline}
                  </Badge>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Closing Quote */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <Card className="border-0 text-center" style={{ backgroundColor: 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <Card.Body className="p-5">
                <FontAwesomeIcon icon={faHeart} className="text-success fs-1 mb-4" />
                <p className="display-6 fw-bold mb-0" style={{ color: '#218838', lineHeight: '1.4' }}>
                  "{blog.content.closingQuote.text}"
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="p-5 rounded-4 text-center position-relative overflow-hidden" style={{ 
              backgroundColor: '#28a745',
              boxShadow: '0 10px 30px rgba(40, 167, 69, 0.3)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '-30px',
                width: '100px',
                height: '100px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '50%'
              }}></div>
              <div className="position-relative">
                <h2 className="fw-bold text-white mb-4">Join the Movement</h2>
                <p className="fs-5 text-white mb-4" style={{ opacity: '0.9' }}>
                  Partner with EmotionEase to bring transformative emotional wellness to your community. Together, we can make healing accessible to all.
                </p>
                <Button 
                  variant="light"
                  onClick={handleProgramsClick}
                  size="lg"
                  className="rounded-pill px-4 fw-bold shadow-sm"
                  style={{ 
                    backgroundColor: 'white',
                    color: '#218838',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    minWidth: '250px'
                  }}
                >
                  <FontAwesomeIcon icon={faHandshake} className="me-2" />
                  Partner With Us
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Footer with Back Button */}
      <Container className="py-5">
        <Button 
          as={Link} 
          to="/blog" 
          variant="outline-success" 
          className="d-block mx-auto px-4"
          style={{ borderColor: '#28a745', color: '#28a745' }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back to All Blogs
        </Button>
      </Container>

      {/* CSS */}
      <style jsx>{`
        .hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
        .hero-section {
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default BlogPostDemocratizing;