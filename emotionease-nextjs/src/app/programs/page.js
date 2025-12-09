'use client'

import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../components/Navbar'
import './CuratedPrograms.css'

export default function ProgramsPage() {
  const programs = [
    {
      level: "Level 1",
      title: "Emotional Enablement Coaching",
      duration: "4 days (60 mins/day)",
      price: "$50",
      for: "Entrepreneurs, Working Professionals & Students",
      description: "Begin your journey with our foundational Coaching where you'll learn powerful techniques to reshape your mindset and handle emotions better in everyday life.",
      features: [
        "Empowered thinking patterns",
        "Healthy emotional management",
        "Improved rapport building",
        "Basic stress reduction techniques",
        "Achieve heart-aligned goals"
      ],
      outcomes: [
        "Handle daily stressors effectively",
        "Improved focus and clarity",
        "Better emotional awareness",
        "Enhanced interpersonal skills"
      ],
      cta: "Start My Transformation",
      formLink: "https://forms.gle/SHwWReus7cpLidg3A",
      popular: true,
      ribbonText: "MOST POPULAR"
    },
    {
      level: "Level 2",
      title: "Personalized Emotional Resilience Program",
      duration: "4-6 weeks (flexible scheduling)",
      price: "$150",
      for: "Individuals Seeking Deeper Healing",
      description: "Our tailored program for those dealing with long-term stress, trauma, identity crisis, low self-esteem, or strained relationships.",
      features: [
        "A free Assessment session",
        "One-on-one personalized sessions",
        "Unlimited support during program",
        "Trauma-informed techniques",
        "Customized emotional regulation tools",
        "Regular practice exercises",
        "3-month follow-up included"
      ],
      outcomes: [
        "Sustainable inner peace",
        "Stronger self-esteem",
        "Emotional fearlessness",
        "Healing from past wounds"
      ],
      requirement: "Completion of Level 1 required",
      cta: "Build My Resilience",
      formLink: "https://forms.gle/fdYa1wB1yUJUvgzBA"
    },
    {
      level: "Level 3",
      title: "Wholesome Relationships Family Program",
      duration: "2-3 weeks (couple's schedule)",
      price: "$50/person",
      for: "Couples, Business Partners & Close Friends",
      description: "This advanced program helps deepen emotional bonds, set healthy boundaries, and create thriving personal and professional relationships.",
      features: [
        "Dyadic emotional alignment",
        "Conflict resolution frameworks",
        "Boundary establishment techniques",
        "Communication enhancement",
        "Family dynamics guidance"
      ],
      outcomes: [
        "Healthier relationship boundaries",
        "Deeper emotional connections",
        "Improved conflict resolution",
        "Nurturing family environment"
      ],
      requirement: "Completion of Level 1 & 2 required",
      cta: "Strengthen My Relationships",
      formLink: "https://forms.gle/6gyALcZrvabUvEDE7"
    }
  ]

  useEffect(() => {
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
      <main className="programs-page">
        {/* Hero Section */}
        <section className="programs-hero py-5">
          <Container className="py-3">
            <Row className="align-items-center">
              <Col lg={8} className="mx-auto text-center">
                <h1 className="mb-3">Our Curated Programs</h1>
                <p className="lead mb-4">
                  Structured pathways designed for progressive emotional mastery and relational wellbeing
                </p>
                <div className="d-flex justify-content-center">
                  <a 
                    href="https://forms.gle/YbcSchKPpTkaxu1ZA" 
                    className="btn btn-light px-4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Book Level 2 Free Assessment Session
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Program Tiers */}
        <section className="program-tiers py-5 bg-light">
          <Container>
            <div className="text-center mb-5 animate-on-scroll fade-in-up">
              <h2 className="section-title">Progressive Learning Pathways</h2>
              <p className="text-muted mt-3">
                Our tiered approach ensures solid foundation before advancing to deeper work
              </p>
            </div>
            
            <Row className="g-5">
              {programs.map((program, index) => (
                <Col lg={4} key={index}>
                  <div 
                    className={`program-card h-100 ${program.popular ? 'popular-card' : ''}`}
                    data-ribbon={program.popular ? program.ribbonText : ''}
                  >
                    <div className="program-header">
                      {program.popular && (
                        <div className="popular-tag">
                          <i className="bi bi-star-fill"></i> Most Popular
                        </div>
                      )}
                      <span className="program-level">{program.level}</span>
                      <h3 className="program-title">{program.title}</h3>
                      <div className="price-tag">
                        <span className="price">{program.price}</span>
                        <span className="duration">{program.duration}</span>
                      </div>
                    </div>
                    
                    <div className="program-body">
                      <div className="program-for">
                        <i className="bi bi-people-fill"></i>
                        <span>{program.for}</span>
                      </div>
                      
                      <p className="program-description">{program.description}</p>
                      
                      <div className="program-features">
                        <h4>Key Features:</h4>
                        <ul>
                          {program.features.map((feature, i) => (
                            <li key={i}>
                              <i className="bi bi-check-circle-fill"></i>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="program-outcomes">
                        <h4>Expected Outcomes:</h4>
                        <ul>
                          {program.outcomes.map((outcome, i) => (
                            <li key={i}>
                              <i className="bi bi-check-circle-fill"></i>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {program.requirement && (
                        <div className="program-requirement">
                          <i className="bi bi-info-circle-fill"></i>
                          <span>{program.requirement}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="program-footer">
                      <a 
                        href={program.formLink} 
                        className="btn w-100" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {program.cta} <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Program Comparison */}
        <section className="program-comparison py-5">
          <Container>
            <div className="text-center mb-5 animate-on-scroll fade-in-up">
              <h2 className="section-title">Program Comparison</h2>
              <p className="text-muted mt-3">See which program matches your current needs</p>
            </div>
            
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Features</th>
                    {programs.map((program, index) => (
                      <th key={index} scope="col">{program.level}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Duration</td>
                    {programs.map((program, index) => (
                      <td key={index}>{program.duration}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Investment</td>
                    {programs.map((program, index) => (
                      <td key={index}>{program.price}</td>
                    ))}
                  </tr>
                  <tr>
                    <td>Format</td>
                    <td>Group Workshop</td>
                    <td>1-on-1 Sessions</td>
                    <td>Dyadic Sessions</td>
                  </tr>
                  <tr>
                    <td>Follow-up Period</td>
                    <td>1 month</td>
                    <td>3 months</td>
                    <td>1 month</td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>Online</td>
                    <td>Online</td>
                    <td>Online</td>
                  </tr>
                  <tr>
                    <td>Satisfaction Guarantee</td>
                    <td><i className="bi bi-check-lg"></i></td>
                    <td><i className="bi bi-check-lg"></i></td>
                    <td><i className="bi bi-check-lg"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="program-cta py-5">
          <Container className="text-center">
            <h2 className="mb-4">
              Unsure which program is right for you?
            </h2>
            <p className="lead mb-4">
              Our emotional wellbeing specialists can guide you to the perfect starting point
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a
                href="https://wa.me/919345330187"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light px-4"
              >
                <i className="bi bi-whatsapp"></i> Chat With Us
              </a>
              <a 
                href="tel:+919345330187" 
                className="btn btn-outline-light px-4"
              >
                <i className="bi bi-telephone"></i> Call +91-9345330187
              </a>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}