'use client'

import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function BlogPost6() {
  const router = useRouter()
  
  const handleProgramsClick = () => {
    router.push('/programs')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
  }

  return (
    <>
      <Navbar />
      <main>
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
          {/* Navigation Back Button */}
          <div className="container pt-4">
            <Link 
              href="/blog" 
              className="btn btn-outline-success mb-4"
              style={{ borderColor: '#28a745', color: '#28a745' }}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Blogs
            </Link>
          </div>

          {/* Hero Section */}
          <div className="hero-section" style={{ 
            backgroundColor: '#218838',
            padding: '5rem 0',
            marginBottom: '3rem',
            backgroundImage: 'linear-gradient(to right, #218838, #28a745)'
          }}>
            <div className="container">
              <div className="text-center text-white">
                <h1 className="display-4 fw-bold mb-3" style={{ fontStyle: 'italic' }}>
                  {blog.title}
                </h1>
                <h2 className="h3 mb-4" style={{ opacity: 0.9, fontStyle: 'italic' }}>
                  {blog.subtitle}
                </h2>
                <p className="lead mb-5">
                  {blog.excerpt}
                </p>
                <div className="d-flex justify-content-center gap-3 mb-4">
                  <span>
                    <i className="bi bi-calendar-event me-2"></i>
                    {blog.date}
                  </span>
                  <span>
                    <i className="bi bi-clock me-2"></i>
                    {blog.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container py-5">
            {/* Introduction */}
            <div className="row mb-5">
              <div className="col-lg-10 offset-lg-1">
                <div className="intro-text p-4 p-md-5 rounded-3" style={{ 
                  backgroundColor: 'white',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                  borderLeft: '4px solid #28a745'
                }}>
                  <p className="fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                    {blog.content.introduction}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 1: Hidden Crisis */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
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
                  
                  <div className="p-4 rounded" style={{ backgroundColor: '#fff3cd', borderLeft: '4px solid #ffc107' }}>
                    <p className="mb-0 fw-bold" style={{ lineHeight: '1.8' }}>
                      <i className="bi bi-exclamation-triangle-fill text-warning me-2"></i>
                      {blog.content.sections[0].impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Scalable Solution */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="card border-0 shadow" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <div className="card-header bg-success text-white fw-bold fs-5 py-3">
                    <i className="bi bi-lightbulb-fill me-2"></i>
                    {blog.content.sections[1].title}
                  </div>
                  <div className="card-body p-4 bg-white">
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      {blog.content.sections[1].intro}
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#218838' }}>Key Features:</h5>
                    <ul className="list-unstyled">
                      {blog.content.sections[1].features.map((feature, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start">
                          <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: The Science - Green card style */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="card border-0 shadow" style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#28a745' }}>
                  <div className="card-header fw-bold fs-5 py-3 border-0" style={{ backgroundColor: '#28a745', color: 'white' }}>
                    <i className="bi bi-lightbulb-fill me-2"></i>
                    {blog.content.sections[2].title}
                  </div>
                  <div className="card-body p-4 bg-white">
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      {blog.content.sections[2].content}
                    </p>
                    
                    <div className="p-3 rounded" style={{ backgroundColor: '#e8f5e9', borderLeft: '4px solid #28a745' }}>
                      <p className="mb-0 fst-italic" style={{ lineHeight: '1.8', color: '#1b5e20' }}>
                        <i className="bi bi-stars text-success me-2"></i>
                        {blog.content.sections[2].approach}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Community Transformation - vertical list style */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
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
                
                <p className="mb-4" style={{ lineHeight: '1.8' }}>
                  {blog.content.sections[3].intro}
                </p>

                <h5 className="fw-bold mb-3" style={{ color: '#218838' }}>
                  <i className="bi bi-bar-chart-fill me-2"></i>
                  Key Social Impact Benefits:
                </h5>
                
                {/* Benefits listed vertically with green square icons */}
                <div className="mb-4">
                  {blog.content.sections[3].benefits.map((benefit, i) => (
                    <div key={i} className="d-flex align-items-start mb-3 pb-3" style={{ borderBottom: i < blog.content.sections[3].benefits.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                      <div className="me-3 d-flex align-items-center justify-content-center" style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        backgroundColor: '#28a745',
                        flexShrink: 0
                      }}>
                        <i className="bi bi-check-lg text-white"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold text-success mb-1">{benefit.category}</h6>
                        <p className="mb-0 text-muted small">{benefit.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded" style={{ backgroundColor: '#e8f5e9', borderLeft: '3px solid #28a745' }}>
                  <p className="mb-0 fst-italic" style={{ lineHeight: '1.7' }}>
                    <strong>The Model:</strong> {blog.content.sections[3].model}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5: Partnership Model - 3 column layout */}
            <div className="row mb-5">
              <div className="col-lg-10 offset-lg-1">
                <div className="card border-0 shadow" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <div className="card-header bg-success text-white fw-bold fs-5 py-3">
                    <i className="bi bi-diagram-3-fill me-2"></i>
                    {blog.content.sections[4].title}
                  </div>
                  <div className="card-body p-4 bg-white">
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      {blog.content.sections[4].intro}
                    </p>

                    {/* 3-column layout for delivery, training, impact */}
                    <div className="row g-4">
                      {/* Delivery Formats */}
                      <div className="col-md-4">
                        <div className="card h-100 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                          <div className="card-body">
                            <h6 className="fw-bold mb-3" style={{ color: '#218838' }}>
                              <i className="bi bi-box-fill me-2"></i>
                              {blog.content.sections[4].deliveryFormats.title}
                            </h6>
                            <ul className="list-unstyled mb-0">
                              {blog.content.sections[4].deliveryFormats.formats.map((format, i) => (
                                <li key={i} className="mb-2 d-flex align-items-start">
                                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{ fontSize: '0.75rem' }}></i>
                                  <span className="small">{format}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Training Components */}
                      <div className="col-md-4">
                        <div className="card h-100 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                          <div className="card-body">
                            <h6 className="fw-bold mb-3" style={{ color: '#218838' }}>
                              <i className="bi bi-mortarboard-fill me-2"></i>
                              {blog.content.sections[4].trainingComponents.title}
                            </h6>
                            <ul className="list-unstyled mb-0">
                              {blog.content.sections[4].trainingComponents.components.map((component, i) => (
                                <li key={i} className="mb-2 d-flex align-items-start">
                                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{ fontSize: '0.75rem' }}></i>
                                  <span className="small">{component}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Impact Metrics */}
                      <div className="col-md-4">
                        <div className="card h-100 border-0" style={{ backgroundColor: '#f8f9fa' }}>
                          <div className="card-body">
                            <h6 className="fw-bold mb-3" style={{ color: '#218838' }}>
                              <i className="bi bi-graph-up-arrow me-2"></i>
                              {blog.content.sections[4].impactMetrics.title}
                            </h6>
                            <ul className="list-unstyled mb-0">
                              {blog.content.sections[4].impactMetrics.metrics.map((metric, i) => (
                                <li key={i} className="mb-2 d-flex align-items-start">
                                  <i className="bi bi-check-circle-fill text-success me-2 mt-1" style={{ fontSize: '0.75rem' }}></i>
                                  <span className="small">{metric}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Why It Stands Out */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
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

                  <div className="row g-3 mb-4">
                    {blog.content.sections[5].uniqueFeatures.map((item, i) => (
                      <div key={i} className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm hover-effect">
                          <div className="card-body">
                            <h5 className="fw-bold text-success mb-2">
                              <i className="bi bi-check-circle-fill me-2"></i>
                              {item.feature}
                            </h5>
                            <p className="mb-0 text-muted">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded text-center" style={{ backgroundColor: '#e8f5e9' }}>
                    <p className="fs-4 fw-bold mb-0" style={{ color: '#1b5e20' }}>
                      {blog.content.sections[5].tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Call for Collaboration */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="card border-0 shadow" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                  <div className="card-header bg-success text-white fw-bold fs-5 py-3">
                    <i className="bi bi-globe me-2"></i>
                    {blog.content.sections[6].title}
                  </div>
                  <div className="card-body p-4 bg-white">
                    <p className="mb-4" style={{ lineHeight: '1.8' }}>
                      {blog.content.sections[6].intro}
                    </p>

                    <h5 className="fw-bold mb-3" style={{ color: '#218838' }}>Here&apos;s how you can collaborate:</h5>

                    <ol className="ps-3">
                      {blog.content.sections[6].collaborationWays.map((way, i) => (
                        <li key={i} className="mb-2">
                          {way}
                        </li>
                      ))}
                    </ol>

                    <div className="p-4 mt-4 rounded text-center" style={{ backgroundColor: '#f1f8f4' }}>
                      <p className="fs-5 fw-bold mb-0" style={{ color: '#218838' }}>
                        {blog.content.sections[6].callout}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Section */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="card border-0 shadow-lg" style={{ backgroundColor: '#e8f5e9', borderRadius: '12px' }}>
                  <div className="card-body p-5">
                    <h2 className="fw-bold mb-4 text-center" style={{ color: '#218838' }}>
                      {blog.content.vision.title}
                    </h2>
                    <p className="mb-4 text-center" style={{ lineHeight: '1.8' }}>
                      {blog.content.vision.content}
                    </p>
                    <div className="text-center">
                      <span className="badge bg-success px-4 py-2 fs-6">
                        {blog.content.vision.tagline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Quote */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="card border-0 text-center" style={{ backgroundColor: 'white', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', borderRadius: '12px' }}>
                  <div className="card-body p-5">
                    <span style={{ fontSize: '2.5rem', color: '#28a745' }}>💚</span>
                    <p className="display-6 fw-bold mb-0 mt-3" style={{ color: '#218838', lineHeight: '1.4' }}>
                      &quot;{blog.content.closingQuote.text}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
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
                    <p className="text-white mb-4" style={{ opacity: '0.9' }}>
                      Partner with EmotionEase to bring transformative emotional wellness to your community. Together, we can make healing accessible to all.
                    </p>
                    <button 
                      onClick={handleProgramsClick}
                      className="btn btn-light btn-lg rounded-pill px-4 fw-bold shadow-sm"
                      style={{ 
                        backgroundColor: 'white',
                        color: '#218838',
                        border: 'none',
                        transition: 'all 0.3s ease',
                        minWidth: '200px'
                      }}
                    >
                      <i className="bi bi-people-fill me-2"></i>
                      Partner With Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Back Button */}
          <div className="container py-5">
            <div className="text-center">
              <Link 
                href="/blog" 
                className="btn btn-outline-success px-4"
                style={{ borderColor: '#28a745', color: '#28a745' }}
              >
                <i className="bi bi-arrow-left me-2"></i>
                Back to All Blogs
              </Link>
            </div>
          </div>

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
      </main>
    </>
  )
}