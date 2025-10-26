import React from 'react';

const BlogPostPsychoEducational = () => {
  const blog = {
    id: 3,
    title: "Psycho-Educational Coaching",
    subtitle: "Empowering IT Leaders and CEOs for Sustainable Success and Wellbeing",
    excerpt: "In today's rapidly evolving tech landscape and high-stakes business environment, IT leaders and CEOs face intense challenges that impact their professional performance and personal wellbeing.",
    date: "October 15, 2023",
    readTime: "10 min read",
    content: {
      introduction: "Psycho-educational coaching offers a transformative approach tailored to the unique pain points of IT Directors, IT Tech Managers, and CEOs. By addressing these critical challenges with evidence-based strategies, this coaching empowers leaders to enhance emotional intelligence, resilience, and decision-making—driving sustained success and holistic wellness.",
      sections: [
        {
          title: "Coaching for IT Directors: Leading with Clarity and Confidence",
          subtitle: "IT Directors bear heavy responsibilities, managing complex technological changes and high-pressure decisions.",
          professionalChallenges: {
            title: "Key Professional Challenges:",
            items: [
              {
                heading: "High-Pressure Decision-Making",
                description: "Pressure to deliver flawless results can cloud judgment. Coaching improves emotional regulation and mental clarity to navigate stress and boost leadership confidence."
              },
              {
                heading: "Navigating Change",
                description: "Rapid technology shifts and restructuring create uncertainty. Coaching fosters adaptive strategies and communication that keep teams engaged through transitions."
              },
              {
                heading: "Leadership Isolation",
                description: "The executive role is isolating with limited peer support. Coaches provide a trusted space for reflection and growth, reducing loneliness and sharpening leadership presence."
              }
            ]
          },
          personalChallenges: {
            title: "On the Personal Front:",
            items: [
              {
                heading: "Work-Life Imbalance",
                description: "Long hours and constant demands strain health and relationships. Coaching encourages boundary-setting and self-care habits for balance."
              },
              {
                heading: "Stress and Burnout",
                description: "Chronic stress risks emotional exhaustion. Coaching offers resilience-building techniques for sustained energy and recovery."
              }
            ]
          },
          conclusion: "Through psycho-educational coaching, IT Directors gain the tools to lead effectively while maintaining wellbeing and presence in their roles."
        },
        {
          title: "Coaching for IT Tech Managers: Building Resilience and Team Success",
          subtitle: "IT Tech Managers face intense project deadlines, evolving technologies, and interpersonal challenges.",
          professionalChallenges: {
            title: "Common Professional Pain Points:",
            items: [
              {
                heading: "Burnout and Chronic Stress",
                description: "Pressure from deadlines and change can lead to exhaustion. Coaching equips managers with mindfulness, stress management, and boundary-setting tools to restore productivity and wellness."
              },
              {
                heading: "Ineffective Communication and Team Conflict",
                description: "Misunderstandings hamper morale and outcomes. Coaching develops advanced listening, assertiveness, and conflict resolution skills for motivated, cohesive teams."
              },
              {
                heading: "Resistance to Change",
                description: "Tech upgrades often meet pushback. Coaching builds adaptability and leadership skills to support smooth transitions."
              }
            ]
          },
          personalChallenges: {
            title: "Personal Challenges:",
            items: [
              {
                heading: "Emotional Isolation and Relationship Strain",
                description: "High demands erode connections. Coaching enhances emotional awareness and relationship skills for healthier bonds both at work and home."
              },
              {
                heading: "Low Confidence and Fear of Mistakes",
                description: "Stress and perfectionism undermine self-belief. Coaching fosters self-reflection and risk-taking as growth opportunities, boosting confidence and innovation."
              }
            ]
          },
          conclusion: "This coaching prepares IT Tech Managers to excel professionally while thriving personally and leading their teams resiliently."
        },
        {
          title: "Coaching for CEOs: Enhancing Leadership and Holistic Wellbeing",
          subtitle: "CEOs face the weight of leading an entire organization with constant high-stakes decisions and limited peer support.",
          professionalChallenges: {
            title: "Key Professional Pain Points:",
            items: [
              {
                heading: "Isolation and Loneliness",
                description: "Heavy responsibilities often lead to emotional isolation. Coaching provides a confidential space for reflection and problem-solving, enhancing decision-making confidence."
              },
              {
                heading: "High-Stress Decision-Making",
                description: "Constant pressure can be mentally overwhelming. Coaching cultivates emotional regulation, focus, and resilience to navigate stress calmly."
              },
              {
                heading: "Managing Organizational Change",
                description: "Leading culture shifts involves complexity and resistance. Coaching equips CEOs with adaptive leadership and communication skills for inclusive, effective change."
              }
            ]
          },
          personalChallenges: {
            title: "On the Personal Side:",
            items: [
              {
                heading: "Work-Life Imbalance",
                description: "Leadership demands impact health and relationships. Coaching fosters prioritization of boundaries, self-care, and sustainable routines for lasting energy."
              },
              {
                heading: "Emotional Burnout",
                description: "Prolonged pressure causes fatigue and reduced resilience. Tailored stress management and mindfulness techniques help restore balance and vigor."
              }
            ]
          },
          conclusion: "Psycho-educational coaching enables CEOs to elevate leadership capacity and personal wellbeing, driving transformative, sustainable success."
        }
      ],
      whyCoaching: {
        title: "Why Psycho-Educational Coaching?",
        content: "Psycho-educational coaching combines educational insights with therapeutic techniques to address the cognitive, emotional, and relational aspects of leadership stress and growth.",
        benefits: [
          "Enhanced emotional intelligence and regulation to improve decision-making.",
          "Practical resilience and stress management strategies for sustainable energy.",
          "Improved communication and conflict resolution to foster stronger teams.",
          "Strategies for work-life balance to prevent burnout and maintain wellbeing.",
          "Tailored growth plans that empower leaders to meet evolving challenges with confidence."
        ],
        conclusion: "Whether IT Directors navigating technological transformations, IT Tech Managers leading dynamic teams, or CEOs driving organizational vision, psycho-educational coaching supports them in growing as effective, balanced, and visionary leaders."
      },
      testimonials: [
        {
          quote: "EmotionEase coaching helped me transform my leadership approach under pressure. The emotional regulation techniques have been a game-changer for managing complex IT project demands.",
          author: "Rajesh M.",
          position: "IT Director"
        },
        {
          quote: "Thanks to EmotionEase, I've developed stronger communication skills that resolved team conflicts and boosted morale. This coaching truly empowered me to lead with confidence.",
          author: "Anjali S.",
          position: "IT Tech Manager"
        },
        {
          quote: "As a CEO, the isolation can be overwhelming. The coaching sessions provided me with clarity, resilience, and a supportive space to recharge and grow. Highly recommend EmotionEase.",
          author: "Vikram D.",
          position: "CEO"
        }
      ],
      nextSteps: {
        title: "Take the Next Step with EmotionEase Coaching",
        content: "Ready to elevate your leadership and redefine your wellbeing? Discover how tailored psycho-educational coaching can empower your journey.",
        actions: [
          "Book a Free Consultation: Connect with our expert coaches to explore your unique challenges and goals.",
          "Join Our Leadership Wellness Workshops: Enhance your skills with focused group sessions designed for IT leaders and executives.",
          "Subscribe to Our Newsletter: Get ongoing insights on executive wellbeing, stress management, and leadership strategies."
        ]
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation Back Button */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem 1rem 0' }}>
        <button 
          style={{ 
            padding: '0.5rem 1.5rem',
            backgroundColor: 'white',
            color: '#28a745',
            border: '2px solid #28a745',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#28a745';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#28a745';
          }}
        >
          ← Back to Blogs
        </button>
      </div>

      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(to right, #218838, #28a745)',
        padding: '5rem 1rem',
        marginBottom: '3rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.2' }}>
            {blog.title}
          </h1>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', opacity: 0.9, fontWeight: '400' }}>
            {blog.subtitle}
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto 2rem' }}>
            {blog.excerpt}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <span>📅 {blog.date}</span>
            <span>⏱️ {blog.readTime}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        
        {/* Introduction */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}>
          <div style={{ 
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '0.75rem',
            boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            borderLeft: '4px solid #28a745'
          }}>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', margin: 0 }}>
              {blog.content.introduction}
            </p>
          </div>
        </div>

        {/* Leadership Sections */}
        {blog.content.sections.map((section, index) => (
          <div key={index} style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}>
            <h2 style={{ 
              color: '#218838',
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              position: 'relative',
              paddingBottom: '0.75rem'
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
            
            {section.subtitle && (
              <p style={{ fontSize: '1.1rem', color: '#6c757d', marginBottom: '2rem', lineHeight: '1.8' }}>
                {section.subtitle}
              </p>
            )}

            {/* Professional Challenges */}
            {section.professionalChallenges && (
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  backgroundColor: '#28a745',
                  color: 'white',
                  padding: '1rem 1.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  💼 {section.professionalChallenges.title}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  {section.professionalChallenges.items.map((item, i) => (
                    <div key={i} style={{ 
                      marginBottom: i !== section.professionalChallenges.items.length - 1 ? '1.5rem' : 0,
                      paddingBottom: i !== section.professionalChallenges.items.length - 1 ? '1.5rem' : 0,
                      borderBottom: i !== section.professionalChallenges.items.length - 1 ? '1px solid #e0e0e0' : 'none'
                    }}>
                      <h5 style={{ 
                        color: '#28a745',
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                        fontSize: '1.1rem'
                      }}>
                        💡 {item.heading}
                      </h5>
                      <p style={{ margin: 0, lineHeight: '1.7', color: '#333' }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Personal Challenges */}
            {section.personalChallenges && (
              <div style={{ 
                backgroundColor: '#e8f5e9',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  backgroundColor: '#66bb6a',
                  color: 'white',
                  padding: '1rem 1.5rem',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  ⚖️ {section.personalChallenges.title}
                </div>
                <div style={{ padding: '1.5rem' }}>
                  {section.personalChallenges.items.map((item, i) => (
                    <div key={i} style={{ 
                      marginBottom: i !== section.personalChallenges.items.length - 1 ? '1.5rem' : 0,
                      paddingBottom: i !== section.personalChallenges.items.length - 1 ? '1.5rem' : 0,
                      borderBottom: i !== section.personalChallenges.items.length - 1 ? '1px solid #a5d6a7' : 'none'
                    }}>
                      <h5 style={{ 
                        color: '#2e7d32',
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                        fontSize: '1.1rem'
                      }}>
                        💚 {item.heading}
                      </h5>
                      <p style={{ margin: 0, lineHeight: '1.7', color: '#1b5e20' }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.conclusion && (
              <div style={{ 
                backgroundColor: '#f1f8f4',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #28a745'
              }}>
                <p style={{ 
                  fontSize: '1.25rem',
                  margin: 0,
                  fontStyle: 'italic',
                  lineHeight: '1.8',
                  color: '#1b5e20'
                }}>
                  {section.conclusion}
                </p>
              </div>
            )}
          </div>
        ))}

        {/* Why Coaching Section */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}>
          <div style={{ 
            backgroundColor: 'white',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            overflow: 'hidden',
            border: '2px solid #28a745'
          }}>
            <div style={{ 
              backgroundColor: '#28a745',
              color: 'white',
              padding: '1.5rem',
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}>
              🧠 {blog.content.whyCoaching.title}
            </div>
            <div style={{ padding: '2rem' }}>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                {blog.content.whyCoaching.content}
              </p>
              <h5 style={{ color: '#28a745', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                Key Benefits:
              </h5>
              <div>
                {blog.content.whyCoaching.benefits.map((benefit, i) => (
                  <div key={i} style={{ 
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '1.5rem',
                    padding: '1rem 0'
                  }}>
                    <div style={{ 
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#28a745',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      flexShrink: 0,
                      marginRight: '1rem'
                    }}>
                      {i+1}
                    </div>
                    <p style={{ margin: 0, lineHeight: '1.7' }}>{benefit}</p>
                  </div>
                ))}
              </div>
              <div style={{ 
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: '#e8f5e9',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #28a745'
              }}>
                <p style={{ 
                  fontSize: '1.25rem',
                  margin: 0,
                  fontStyle: 'italic',
                  lineHeight: '1.8',
                  color: '#1b5e20'
                }}>
                  {blog.content.whyCoaching.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}>
          <h2 style={{ 
            textAlign: 'center',
            color: '#218838',
            fontWeight: 'bold',
            marginBottom: '2rem',
            fontSize: '2rem'
          }}>
            Client Testimonials
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {blog.content.testimonials.map((testimonial, i) => (
              <div key={i} style={{ 
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ color: '#28a745', fontSize: '2rem', opacity: 0.3 }}>❝</span>
                </div>
                <p style={{ flexGrow: 1, marginBottom: '1.5rem', lineHeight: '1.7', color: '#333' }}>
                  {testimonial.quote}
                </p>
                <div>
                  <p style={{ fontWeight: 'bold', color: '#28a745', margin: 0 }}>
                    {testimonial.author}
                  </p>
                  <p style={{ color: '#6c757d', fontSize: '0.9rem', margin: 0 }}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps Section */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}>
          <div style={{ 
            backgroundColor: '#f1f8f4',
            padding: '3rem 2rem',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ 
              textAlign: 'center',
              color: '#218838',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontSize: '2rem'
            }}>
              📚 {blog.content.nextSteps.title}
            </h2>
            <p style={{ 
              fontSize: '1.25rem',
              textAlign: 'center',
              marginBottom: '2rem',
              lineHeight: '1.8',
              color: '#1b5e20'
            }}>
              {blog.content.nextSteps.content}
            </p>
            <div>
              {blog.content.nextSteps.actions.map((action, i) => (
                <div key={i} style={{ 
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem',
                  padding: '1rem 0'
                }}>
                  <span style={{ 
                    color: '#28a745',
                    fontSize: '1.5rem',
                    marginRight: '1rem',
                    flexShrink: 0
                  }}>
                    💡
                  </span>
                  <p style={{ margin: 0, lineHeight: '1.7', fontSize: '1rem' }}>
                    {action}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0, color: '#1b5e20' }}>
                Visit <span style={{ color: '#28a745' }}>emotionease.in</span> to start your coaching journey today.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #28a745, #20c997)',
            padding: '3rem 2rem',
            borderRadius: '1.5rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
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
            <div style={{ position: 'relative' }}>
              <h2 style={{ color: 'white', fontWeight: 'bold', marginBottom: '1.5rem', fontSize: '2rem' }}>
                Ready to Transform Your Leadership?
              </h2>
              <p style={{ color: 'white', fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9, lineHeight: '1.6' }}>
                Join leading IT professionals and CEOs who have transformed their leadership and wellbeing through EmotionEase coaching.
              </p>
              <button style={{ 
                backgroundColor: 'white',
                color: '#218838',
                border: 'none',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}>
                👥 Explore Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Back Button */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>
        <button 
          style={{ 
            padding: '0.75rem 2rem',
            backgroundColor: 'white',
            color: '#28a745',
            border: '2px solid #28a745',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#28a745';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#28a745';
          }}
        >
          ← Back to All Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogPostPsychoEducational;