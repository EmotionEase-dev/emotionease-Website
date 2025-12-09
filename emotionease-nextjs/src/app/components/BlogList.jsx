'use client'

import Link from 'next/link'

export default function BlogList() {
  const blogs = [
    {
      id: 1,
      title: "Breaking the 'Hiya' Culture",
      excerpt: "Why Unlimited Therapy Sessions Transform Filipino Mental Health Recovery",
      image: "/Breaking the Hiya Culture.webp",
      date: 'June 15, 2023',
      readTime: '5 min read',
      slug: "solving-mental-health-with-unlimited-therapy-sessions"
    },
    {
      id: 2,
      title: "Healing Your Emotional Wounds",
      excerpt: "A Step-by-Step Guide to Lasting Well-Being",
      image: "/Healing your Emotional Wounds.webp",
      date: 'July 22, 2023',
      readTime: '7 min read',
      slug: "step-by-step-guide-to-heal-emotional-wounds"
    },
    {
      id: 3,
      title: "Psycho-Educational Coaching",
      excerpt: "Coaching for IT Tech Managers: Building Resilience and Team Success",
      image: "/Psycho-Educational Coaching.webp",
      date: 'June 22, 2025',
      readTime: '6 min read',
      slug: "Empowering-IT-Leaders-and-CEOs-for-Sustainable-Success-and-Wellbeing"
    },
    {
      id: 4,
      title: "I Am Already Rich",
      excerpt: "The Revolutionary Truth About Wealth That Will Transform Your Life",
      image: "/I am already rich.webp",
      date: 'Aug 12, 2025',
      readTime: '12 min read',
      slug: "The-Revolutionary-Truth-About-Wealth"
    },
    {
      id: 5,
      title: "A Complete Healing Guide",
      excerpt: "How to Reparent Your Inner Child for Boredom",
      image: "/A Complete Healing Guide.webp",
      date: 'Aug 22, 2025',
      readTime: '15 min read',
      slug: "Understanding-the-Boredom-Wound"
    },
    {
      id: 6,
      title: "Democratizing Emotional Wellness",
      excerpt: "How EmotionEase is Healing Communities from Within",
      image: "/Democratizing Emotional Wellness.webp",
      date: 'Sep 15, 2025',
      readTime: '10 min read',
      slug: "Democratizing-Emotional-Wellness"
    }
  ]

  return (
    <>
      <div className="container py-5" style={{ backgroundColor: '#e8f5e9' }}>
        <h1 className="text-center mb-5" style={{ color: '#218838' }}>EmotionEase Blog</h1>
        
        <div className="row justify-content-center">
          {blogs.map(blog => (
            <div key={blog.id} className="col-lg-8 mb-4">
              <div className="card border-0 shadow-sm hover-effect">
                <div className="row g-0">
                  <div className="col-md-4">
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
                          e.target.style.display = 'none'
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body h-100 d-flex flex-column">
                      <div>
                        <h2 className="card-title" style={{ color: '#218838' }}>{blog.title}</h2>
                        <p className="card-text text-muted mb-2">
                          <small>
                            <i className="bi bi-calendar-event me-2"></i>
                            {blog.date}
                          </small>
                          <small className="ms-3">
                            <i className="bi bi-clock me-2"></i>
                            {blog.readTime}
                          </small>
                        </p>
                        <p className="card-text mb-3">{blog.excerpt}</p>
                      </div>
                      <div className="mt-auto">
                        <Link 
                          href={`/${blog.slug}`}
                          className="btn btn-success hover-lift"
                          style={{ 
                            backgroundColor: '#28a745', 
                            borderColor: '#28a745',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <i className="bi bi-book-open me-2"></i>
                          Read Blog
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="py-6 bg-success text-light text-center">
        <div className="container">
          <h2 className="display-5 fw-bold mb-4">Apprehensive About Discussing Premarital Doubts?</h2>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            Let EmotionEase be your guiding light toward a happy, healthy marriage.
          </p>
          <Link 
            href="/contact"
            className="btn btn-light btn-lg rounded-pill px-4 py-3 hover-lift fw-medium"
            style={{
              marginBottom: '2%',
              transition: 'all 0.3s ease',
              color: '#218838'
            }}
          >
            Begin Your Journey Together
          </Link>
        </div>
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

  )
}
