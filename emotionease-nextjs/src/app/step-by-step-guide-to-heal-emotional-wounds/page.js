'use client'

import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function BlogPost2() {
  const router = useRouter()
  
  const handleProgramsClick = () => {
    router.push('/programs')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

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
            {/* Introduction - Aligned with other sections */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="intro-text p-4 p-md-5 rounded-3" style={{ 
                  backgroundColor: 'white',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                  borderLeft: '4px solid #28a745'
                }}>
                  <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                    {blog.content.introduction}
                  </p>
                  <ul className="list-group list-group-flush">
                    {blog.content.keyPoints.map((point, index) => (
                      <li key={index} className="list-group-item border-0 ps-0 bg-transparent">
                        <div className="d-flex align-items-start">
                          <div className="me-3 mt-1">
                            <i className="bi bi-lightbulb" style={{ color: '#28a745', fontSize: '1.1rem' }}></i>
                          </div>
                          <p className="mb-2">{point}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Blog Sections */}
            {blog.content.sections.map((section, index) => (
              <div key={index} className="row mb-5">
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
                      {section.title}
                    </h2>
                    
                    {section.content && (
                      <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                        {section.content}
                      </p>
                    )}
                    
                    {/* Items with numbered circles */}
                    {section.items && (
                      <ul className="list-group list-group-flush mb-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="list-group-item py-3 border-0" style={{ backgroundColor: 'transparent' }}>
                            <div className="d-flex align-items-start">
                              <div className="me-3" style={{ 
                                width: '28px',
                                height: '28px',
                                backgroundColor: '#28a745',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '0.9rem',
                                flexShrink: 0
                              }}>
                                {i + 1}
                              </div>
                              <div>
                                <p className="mb-0">{item}</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {/* Consequences section with heartbreak and person-standing icons */}
                    {section.consequences && (
                      <div className="card border-0 shadow-sm mb-4" style={{ backgroundColor: '#e8f5e9' }}>
                        <div className="card-body">
                          <h5 className="card-title mb-3">
                            <i className="bi bi-heartbreak-fill me-2" style={{ color: '#dc3545' }}></i>
                            Common Consequences:
                          </h5>
                          <ul className="list-group list-group-flush">
                            {section.consequences.map((item, i) => (
                              <li key={i} className="list-group-item border-0 bg-transparent">
                                <div className="d-flex align-items-start">
                                  <div className="me-3 mt-1">
                                    <i className="bi bi-person-standing" style={{ color: '#6c757d' }}></i>
                                  </div>
                                  <p className="mb-1">{item}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {/* Tips section with lightbulb icon */}
                    {section.tips && (
                      <div className="card border-success mb-4">
                        <div className="card-header bg-success text-white fw-bold">
                          <i className="bi bi-lightbulb me-2"></i>
                          Practical Tips
                        </div>
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            {section.tips.map((tip, i) => (
                              <li key={i} className="list-group-item">
                                <div className="d-flex align-items-start">
                                  <div className="me-3 mt-1 text-success fw-bold">{i + 1}.</div>
                                  <p className="mb-0">{tip}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {/* Table section */}
                    {section.table && (
                      <div className="mb-4">
                        <div className="table-responsive">
                          <table className="table table-striped table-bordered table-hover mt-4">
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
                          </table>
                        </div>
                        {section.conclusion && (
                          <p className="fs-5 mt-3" style={{ lineHeight: '1.8' }}>
                            {section.conclusion}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Coaching Assignment Section with journal-bookmark icon */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="card border-success shadow">
                  <div className="card-header bg-success text-white fw-bold fs-4">
                    <i className="bi bi-journal-bookmark-fill me-2"></i>
                    {blog.content.coachingAssignment.title}
                  </div>
                  <div className="card-body">
                    <p className="fs-5 mb-4">{blog.content.coachingAssignment.content}</p>
                    <ol className="list-group list-group-numbered">
                      {blog.content.coachingAssignment.steps.map((step, i) => (
                        <li key={i} className="list-group-item border-0 bg-transparent">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section with yin-yang icon */}
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
                    <h2 className="fw-bold text-white mb-4">Take the First Step: Ready to Heal Your Emotions?</h2>
                    <p className="fs-5 text-white mb-4" style={{ opacity: '0.9' }}>
                      Emotional transformation is a journey, not a one-time event. With unlimited sessions at EmotionEase, you gain ongoing support until your core beliefs are realigned with your true potential.
                    </p>
                    <button 
                      onClick={handleProgramsClick}
                      className="btn btn-light btn-lg rounded-pill px-4 fw-bold shadow-sm"
                      style={{ 
                        backgroundColor: 'white',
                        color: '#218838',
                        border: 'none',
                        transition: 'all 0.3s ease',
                        minWidth: '250px'
                      }}
                    >
                      <i className="bi bi-yin-yang me-2"></i>
                      Start Healing Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with Back Button */}
          <div className="container py-5">
            <Link 
              href="/blog" 
              className="btn btn-outline-success d-block mx-auto px-4"
              style={{ borderColor: '#28a745', color: '#28a745', width: 'fit-content' }}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to All Blogs
            </Link>
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
            .table th {
              background-color: #f8f9fa;
            }
          `}</style>
        </div>
      </main>
    </>
  )
}


