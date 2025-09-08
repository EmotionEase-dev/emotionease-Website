import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import blogImage from '../public/Blog1Logo.png';

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: "Breaking the 'Hiya' Culture",
      excerpt: "Why Unlimited Therapy Sessions Transform Filipino Mental Health Recovery",
      image: blogImage,
      date: 'June 15, 2023',
      readTime: '5 min read',
      slug:"solving-mental-health-with-unlimited-therapy-sessions"
    },
    {
      id: 2,
      title: "Healing Your Emotional Wounds",
      excerpt: "A Step-by-Step Guide to Lasting Well-Being",
      image: blogImage,
      date: 'July 22, 2023',
      readTime: '7 min read',
      slug:"step-by-step-guide-to-heal-emotional-wounds"
    }
  ];

  return (
    <>
      <Container className="py-5" style={{ backgroundColor: '#e8f5e9' }}>
        <h1 className="text-center mb-5" style={{ color: '#218838' }}>EmotionEase Blog</h1>
        
        <Row className="justify-content-center">
          {blogs.map(blog => (
            <Col key={blog.id} lg={8} className="mb-4">
              <Card className="border-0 shadow-sm hover-effect">
                <Row className="g-0">
                  <Col md={4}>
                    <div 
                      className="h-100 position-relative overflow-hidden"
                      style={{ 
                        backgroundColor: '#5cb85c', 
                        minHeight: '200px',
                        borderTopLeftRadius: '0.25rem',
                        borderBottomLeftRadius: '0.25rem'
                      }}
                    >
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-100 h-100 object-fit-cover"
                        style={{
                          transition: 'transform 0.3s ease',
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="h-100 d-flex flex-column">
                      <div>
                        <Card.Title as="h2" style={{ color: '#218838' }}>{blog.title}</Card.Title>
                        <Card.Text className="text-muted mb-2">
                          <small>
                            <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                            {blog.date}
                          </small>
                          <small className="ms-3">
                            <FontAwesomeIcon icon={faClock} className="me-2" />
                            {blog.readTime}
                          </small>
                        </Card.Text>
                        <Card.Text className="mb-3">{blog.excerpt}</Card.Text>
                      </div>
                      <div className="mt-auto">
                        <Button 
                          as={Link} 
                          to={`/${blog.slug}`}
                          variant="success" 
                          style={{ 
                            backgroundColor: '#28a745', 
                            borderColor: '#28a745',
                            transition: 'all 0.3s ease'
                          }}
                          className="hover-lift"
                        >
                          <FontAwesomeIcon icon={faBookOpen} className="me-2" />
                          Read Blog
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Final CTA Section */}
      <section className="py-6 bg-success text-light text-center">
        <Container>
          <h2 className="display-5 fw-bold mb-4">Apprehensive About Discussing Premarital Doubts?</h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Let EmotionEase be your guiding light toward a happy, healthy marriage.
          </p>
          <Button 
            as={Link}
            to="/contact"
            variant="light" 
            size="lg" 
            className="rounded-pill px-4 py-3 hover-lift fw-medium"
            style={{
              marginBottom: '2%',
              transition: 'all 0.3s ease',
              color: '#218838'
            }}
          >
            Begin Your Journey Together
          </Button>
        </Container>
      </section>

      <style jsx>{`
        .hover-effect {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-effect:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
        .hover-effect:hover img {
          transform: scale(1.05);
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .object-fit-cover {
          object-fit: cover;
          object-position: center;
        }
      `}</style>
    </>
  );
};

export default BlogList;