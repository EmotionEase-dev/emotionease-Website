'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Link from 'next/link'

export default function BlogPost1() {
  const router = useRouter()
  
  const handleProgramsClick = () => {
    router.push('/programs')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const blog = {
    id: 1,
    title: "Breaking the 'Hiya' Culture",
    excerpt: "Why Unlimited Therapy Sessions Transform Filipino Mental Health Recovery",
    date: "June 15, 2023",
    readTime: "5 min read",
    content: {
      introduction: "In the Philippines, mental health conversations are often shrouded in silence, stigma, and the cultural concept of hiya (shame). This deeply rooted value can discourage individuals from seeking help, leading many to struggle alone until their distress becomes overwhelming. At EmotionEase, we believe that breaking this cycle requires not just awareness, but a fundamental shift in how therapy is offeredâ€”starting with unlimited, judgment-free sessions.",
      sections: [
        {
          title: "Understanding 'Hiya' and Its Impact",
          content: "Hiya is more than embarrassment; it's a powerful social force that shapes how Filipinos interact, especially regarding personal struggles. Many Filipinos avoid formal mental health care for fear of being judged, dishonoring their family, or losing face in their community. Instead, they often turn to close friends, family, or even traditional healers, seeking comfort in familiar spaces but rarely accessing professional support until problems become severe."
        },
        {
          title: "Key Barriers to Mental Health Help-Seeking",
          content: "",
          items: [
            "Stigma and Shame: Mental illness is often seen as a personal failing.",
            "Preference for Informal Support: Many rely on family networks rather than professionals.",
            "Financial and Accessibility Issues: Limited access to affordable care.",
            "Self-Reliance and Resilience: Cultural values encourage enduring hardship quietly."
          ]
        },
        {
          title: "Why Unlimited Therapy Sessions Matter",
          content: "Traditional therapy modelsâ€”limited by session caps or high costsâ€”can reinforce the hiya barrier. Unlimited therapy changes this:",
          benefits: [
            {
              title: "Building Trust Over Time",
              content: "Unlimited sessions allow clients to build genuine, trusting relationships with therapists.",
              icon: "bi-people"
            },
            {
              title: "Deepening Self-Awareness",
              content: "Healing isn't linear. Unlimited sessions allow for setbacks and deeper understanding.",
              icon: "bi-heart"
            },
            {
              title: "Destigmatizing Care",
              content: "Regular therapy normalizes mental health conversations, breaking the silence of hiya.",
              icon: "bi-chat-dots"
            }
          ]
        }
      ]
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <div style={{ backgroundColor: '#e8f5e9', minHeight: '100vh' }}>
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
                <h1 className="display-4 fw-bold mb-4">
                  {blog.title}
                </h1>
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
                <div className="d-flex justify-content-center">
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
                    border: '2px solid rgba(255,255,255,0.3)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src="/Blog1.webp"
                      alt="Breaking the Hiya Culture - Filipino Mental Health"
                      width={800}
                      height={300}
                      quality={90}
                      className="rounded-3 shadow-sm"
                      style={{ objectFit: 'cover' }}
                      priority
                    />
                  </div>
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
                  <p className="fs-5" style={{ lineHeight: '1.8' }}>
                    {blog.content.introduction}
                  </p>
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
                    
                    {section.items && (
                      <ul className="list-group list-group-flush mb-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="list-group-item py-3 border-0" style={{ backgroundColor: 'transparent' }}>
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
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {section.benefits && (
                      <div className="row mt-4 g-4">
                        {section.benefits.map((benefit, i) => (
                          <div key={i} className="col-md-4 mb-4">
                            <div className="card h-100 border-0 rounded-4 overflow-hidden shadow-sm hover-effect">
                              <div style={{ 
                                height: '8px',
                                backgroundColor: '#28a745'
                              }}></div>
                              <div className="card-body p-4 d-flex flex-column">
                                <div className="icon-box mb-3" style={{
                                  width: '60px',
                                  height: '60px',
                                  backgroundColor: 'rgba(40, 167, 69, 0.1)',
                                  borderRadius: '12px',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}>
                                  <i 
                                    className={`bi ${benefit.icon} fs-3`}
                                    style={{ color: '#28a745' }} 
                                  ></i>
                                </div>
                                <h5 className="card-title fw-bold" style={{ color: '#218838' }}>
                                  {benefit.title}
                                </h5>
                                <p className="card-text flex-grow-1">
                                  {benefit.content}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Section */}
            <div className="row mb-5">
              <div className="col-lg-8 offset-lg-2">
                <div className="p-5 rounded-4 text-center position-relative overflow-hidden" style={{ 
                  backgroundColor: '#5cb85c',
                  boxShadow: '0 10px 30px rgba(92, 184, 92, 0.3)'
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
                    <h2 className="fw-bold text-white mb-4">Ready to Begin Your Healing Journey?</h2>
                    <p className="fs-5 text-white mb-4" style={{ opacity: '0.9' }}>
                      EmotionEase provides unlimited therapy tailored to Filipino experiences.
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
                      <i className="bi bi-hand-thumbs-up me-2"></i>
                      Start Your Recovery
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
            .icon-box {
              transition: all 0.3s ease;
            }
            .icon-box:hover {
              transform: scale(1.1);
              background-color: rgba(40, 167, 69, 0.2) !important;
            }
          `}</style>
        </div>
      </main>
    </>
  )
}
