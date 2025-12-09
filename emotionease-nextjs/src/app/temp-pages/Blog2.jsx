import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faChild, 
  faBrain, 
  faHeartbeat,
  faLightbulb,
  faBookOpen,
  faCalendarAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
const BlogPostEmotionalHealing = () => {
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
    id: 2,
    title: "Healing Your Emotional Wounds",
    subtitle: "A Step-by-Step Guide to Lasting Well-Being",
    excerpt: "Emotional healing begins with understanding how your past shapes your present—and how to process pain to build healthier, more resilient responses.",
    date: "July 22, 2023",
    readTime: "7 min read",
    content: {
      introduction: "Your Emotional Blueprint Is Formed Early. Childhood experiences—from family interactions to cultural norms—create the unconscious core beliefs that guide your emotional reactions.",
      keyPoints: [
        "Identify how past events programmed you to think, feel, and behave.",
        "Notice recurring patterns (e.g., 'I'm not enough') that stem from unmet childhood needs."
      ],
      sections: [
        {
          title: "Healthy Emotional Processing: The Key to Release",
          content: "When you experience emotional pain, acknowledging and expressing it in a safe manner unlocks genuine healing.",
          items: [
            "Seek comfort and reassurance: Talk with a trusted friend or counsellor.",
            "Use mindful techniques: Deep breathing, journaling, or grounding exercises.",
            "Allow emotions to flow: Name and feel anger, sadness, or fear without judgment."
          ]
        },
        {
          title: "What Happens When Emotions Go Unprocessed?",
          content: "Ignoring emotional pain causes it to store as negative core beliefs, leading to:",
          consequences: [
            "Self-criticism ('I'm not worthy')",
            "Avoidance behaviours (withdrawing from relationships)",
            "Physical symptoms (headaches, tension)"
          ]
        },
        {
          title: "Triggers Activate Stored Emotional Pain",
          content: "Everyday events—a harsh comment, a deadline, or a memory—can reactivate deep-seated hurts.",
          tips: [
            "Recognise your triggers: Pay attention to situations that spark an emotional outburst.",
            "Pause and reflect: Before reacting, take a breath to separate current reality from past pain."
          ]
        },
        {
          title: "Healthy vs. Unhealthy Emotional Responses",
          table: {
            headers: ["Aspect", "Healthy Response (Goal)", "Unhealthy Response (Challenge)"],
            rows: [
              ["Core Belief Activation", "Balanced, positive self-view", "Negative, self-limiting thoughts"],
              ["Reaction to Trigger", "Calm, solution-focused action", "Emotional outburst, blame"],
              ["Perception", "Objective, clear perspective", "Distorted, self-centred lens"],
              ["Emotional Expression", "Mindful, measured communication", "Impulsive, overwhelming responses"]
            ]
          },
          conclusion: "Mastering healthy responses rewires your brain for resilience and self-compassion."
        }
      ],
      coachingAssignment: {
        title: "Coaching Assignment: Start Your Healing Journey",
        content: "Put theory into practice with EmotionEase's guided exercise:",
        steps: [
          "Identify five emotional expressions you notice in yourself or others.",
          "For each, analyse the underlying thoughts, feelings, and unmet needs.",
          "Trace them back to early core beliefs.",
          "Use our tailored EmotionEase tools—mindful journaling, breathwork prompts, and cognitive reframing—to begin shifting those beliefs."
        ]
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Helmet>
                <title>
                   A Step-by-Step Guide To Heal Your Emotional Wounds
                </title>
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
            {/* <div className="d-flex justify-content-center">
              <div className="hero-image" style={{
                height: '300px',
                width: '100%',
                maxWidth: '800px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid rgba(255,255,255,0.3)'
              }}>
                <img
                  alt="Blog Hero"
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ 
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }} 
                />
              </div>
            </div> */}
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
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                {blog.content.introduction}
              </p>
              <ListGroup variant="flush">
                {blog.content.keyPoints.map((point, index) => (
                  <ListGroup.Item key={index} className="border-0 ps-0 bg-transparent">
                    <div className="d-flex align-items-start">
                      <div className="me-3 mt-1">
                        <FontAwesomeIcon icon={faLightbulb} style={{ color: '#28a745' }} />
                      </div>
                      <p className="mb-2">{point}</p>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>
        </Row>

        {/* Blog Sections */}
        {blog.content.sections.map((section, index) => (
          <Row key={index} className="mb-5">
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
                  {section.title}
                </h2>
                
                {section.content && (
                  <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                    {section.content}
                  </p>
                )}
                
                {section.items && (
                  <ListGroup variant="flush" className="mb-4">
                    {section.items.map((item, i) => (
                      <ListGroup.Item key={i} className="py-3 border-0" style={{ backgroundColor: 'transparent' }}>
                        <div className="d-flex align-items-start">
                          <div className="me-3 mt-1" style={{ 
                            width: '24px',
                            height: '24px',
                            backgroundColor: '#28a745',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.8rem',
                            flexShrink: 0
                          }}>
                            {i+1}
                          </div>
                          <div>
                            <p className="mb-0">{item}</p>
                          </div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
                
                {section.consequences && (
                  <Card className="border-0 shadow-sm mb-4" style={{ backgroundColor: '#e8f5e9' }}>
                    <Card.Body>
                      <Card.Title className="mb-3">
                        <FontAwesomeIcon icon={faHeartbeat} className="me-2 text-danger" />
                        Common Consequences:
                      </Card.Title>
                      <ListGroup variant="flush">
                        {section.consequences.map((item, i) => (
                          <ListGroup.Item key={i} className="border-0 bg-transparent">
                            <div className="d-flex align-items-start">
                              <div className="me-3 mt-1">
                                <FontAwesomeIcon icon={faChild} style={{ color: '#6c757d' }} />
                              </div>
                              <p className="mb-1">{item}</p>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                )}
                
                {section.tips && (
                  <Card className="border-success mb-4">
                    <Card.Header className="bg-success text-white fw-bold">
                      <FontAwesomeIcon icon={faLightbulb} className="me-2" />
                      Practical Tips
                    </Card.Header>
                    <Card.Body>
                      <ListGroup variant="flush">
                        {section.tips.map((tip, i) => (
                          <ListGroup.Item key={i}>
                            <div className="d-flex align-items-start">
                              <div className="me-3 mt-1 text-success fw-bold">{i + 1}.</div>
                              <p className="mb-0">{tip}</p>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                )}
                
                {section.table && (
                  <div className="mb-4">
                    <div className="table-responsive">
                      <Table striped bordered hover className="mt-4">
                        <thead>
                          <tr>
                            {section.table.headers.map((header, i) => (
                              <th key={i} className={i > 0 ? "text-center" : ""}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j} className={j > 0 ? "" : "fw-semibold"}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                    {section.conclusion && (
                      <p className="fs-5 mt-3" style={{ lineHeight: '1.8' }}>
                        {section.conclusion}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </Col>
          </Row>
        ))}

        {/* Coaching Assignment Section */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <Card className="border-success shadow">
              <Card.Header className="bg-success text-white fw-bold fs-4">
                <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                {blog.content.coachingAssignment.title}
              </Card.Header>
              <Card.Body>
                <p className="fs-5 mb-4">{blog.content.coachingAssignment.content}</p>
                <ListGroup as="ol" numbered>
                  {blog.content.coachingAssignment.steps.map((step, i) => (
                    <ListGroup.Item as="li" key={i} className="border-0 bg-transparent">
                      {step}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
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
                <h2 className="fw-bold text-white mb-4">Take the First Step: Ready to Heal Your Emotions?</h2>
                <p className="fs-5 text-white mb-4" style={{ opacity: '0.9' }}>
                  Emotional transformation is a journey, not a one-time event. With unlimited sessions at EmotionEase, you gain ongoing support until your core beliefs are realigned with your true potential.
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
                  <FontAwesomeIcon icon={faBrain} className="me-2" />
                  Start Healing Now
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
        .table th {
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
};

export default BlogPostEmotionalHealing;