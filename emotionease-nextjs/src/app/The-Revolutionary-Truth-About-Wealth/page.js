'use client'

import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'

export default function BlogPost4() {
  const router = useRouter()
  
  const handleProgramsClick = () => {
    router.push('/programs')
  }

  const handleBackClick = () => {
    router.push('/blog')
  }

  return (
    <>
      <Navbar />
      <main>
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.5rem 1rem 0' }}>
            <button 
              onClick={handleBackClick}
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
                e.target.style.backgroundColor = '#28a745'
                e.target.style.color = 'white'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white'
                e.target.style.color = '#28a745'
              }}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Blogs
            </button>
          </div>

          <div style={{ 
            background: 'linear-gradient(to right, #218838, #28a745)',
            padding: '5rem 1rem',
            marginBottom: '3rem'
          }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', lineHeight: '1.2' }}>
                I Am Already Rich
              </h1>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', opacity: 0.9, fontWeight: '400' }}>
                The Revolutionary Truth About Wealth That Will Transform Your Life
              </h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto 2rem' }}>
                We have been taught that wealth is something to chase. But what if that is the biggest lie ever told?
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <span><i className="bi bi-calendar-event me-2"></i>October 26, 2025</span>
                <span><i className="bi bi-clock me-2"></i>12 min read</span>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
            
            <div style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}>
              <div style={{ 
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '0.75rem',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                borderLeft: '4px solid #28a745'
              }}>
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', margin: 0 }}>
                  What if wealth is not something you need to pursue, but something you need to recognize? What if abundance is not waiting for you in the future, but sitting right here in your present moment, invisible only because you have been trained not to see it? This is not just another positive thinking exercise. This is a fundamental shift in how you perceive reality and it changes everything.
                </p>
              </div>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}>
              <h2 style={{ 
                color: '#218838',
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
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
                The Day Everything Changed
              </h2>
              
              <div style={{ 
                backgroundColor: '#e8f5e9',
                padding: '2rem',
                borderRadius: '0.75rem',
                borderLeft: '4px solid #28a745'
              }}>
                <p style={{ 
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  margin: 0,
                  color: '#1b5e20'
                }}>
                  I used to wake up every morning with a knot in my stomach. My first thought was not gratitude, it was anxiety. Bills to pay. Goals not yet met. A bank account that never seemed quite enough. I was living in a constant state of not yet, not yet successful, not yet secure, not yet arrived.
                </p>
                <p style={{ 
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  marginTop: '1rem',
                  marginBottom: 0,
                  color: '#1b5e20'
                }}>
                  Then something shifted. Not my bank account. Not my circumstances. But my awareness. The truth hit me like a lightning bolt: I was already rich, and I just did not know it.
                </p>
              </div>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}>
              <h2 style={{ 
                color: '#218838',
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                textAlign: 'center'
              }}>
                The 8 Dimensions of True Wealth
              </h2>
              
              {/* Dimension 1: Financial Abundance */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(to right, #218838, #28a745)',
                  color: 'white',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <i className="bi bi-cash-coin" style={{ fontSize: '2.5rem' }}></i>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: 0, marginBottom: '0.25rem' }}>
                      1. Financial Abundance: The Energy of Enough
                    </h3>
                    <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, fontStyle: 'italic' }}>
                      I feel financially secure and free.
                    </p>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#333' }}>
                    Financial abundance is not about having a specific number in your bank account. It is about the energy you carry around money. It is the feeling of enough and more than enough. It is making decisions from abundance rather than scarcity.
                  </p>
                  <div style={{ backgroundColor: '#e8f5e9', padding: '1rem 1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #28a745' }}>
                    <p style={{ margin: 0, fontWeight: '500', color: '#1b5e20', fontSize: '1rem' }}>
                      <strong>The shift:</strong> Money is not your master, it is your tool. It flows to you naturally because you have shifted from grasping to receiving.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimension 2: Time Freedom */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(to right, #218838, #28a745)',
                  color: 'white',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <i className="bi bi-hourglass-split" style={{ fontSize: '2.5rem' }}></i>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: 0, marginBottom: '0.25rem' }}>
                      2. Time Freedom: The Ultimate Currency
                    </h3>
                    <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, fontStyle: 'italic' }}>
                      I control how I spend my time.
                    </p>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#333' }}>
                    Time is the one thing you cannot buy back. Real wealth means owning your hours. It means saying no without guilt and yes with joy.
                  </p>
                  <div style={{ backgroundColor: '#e8f5e9', padding: '1rem 1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #28a745' }}>
                    <p style={{ margin: 0, fontWeight: '500', color: '#1b5e20', fontSize: '1rem' }}>
                      <strong>The shift:</strong> You stop trading your precious hours for things that do not truly matter. Your time becomes sacred.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimension 3: Health & Vitality */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(to right, #218838, #28a745)',
                  color: 'white',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <i className="bi bi-heart-pulse" style={{ fontSize: '2.5rem' }}></i>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: 0, marginBottom: '0.25rem' }}>
                      3. Health & Vitality: The Foundation of Everything
                    </h3>
                    <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, fontStyle: 'italic' }}>
                      I feel strong, energized, and alive.
                    </p>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#333' }}>
                    Without health, nothing else matters. Wealth means waking up pain-free, breathing freely, moving with ease. It is energy that does not run out by noon.
                  </p>
                  <div style={{ backgroundColor: '#e8f5e9', padding: '1rem 1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #28a745' }}>
                    <p style={{ margin: 0, fontWeight: '500', color: '#1b5e20', fontSize: '1rem' }}>
                      <strong>The shift:</strong> You stop neglecting your body for work or stress. You sleep well, eat consciously, and move with joy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimension 4: Loving Relationships */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(to right, #218838, #28a745)',
                  color: 'white',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <i className="bi bi-heart-fill" style={{ fontSize: '2.5rem' }}></i>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: 0, marginBottom: '0.25rem' }}>
                      4. Loving Relationships: Richness in Connection
                    </h3>
                    <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, fontStyle: 'italic' }}>
                      I feel deeply loved and connected.
                    </p>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#333' }}>
                    No amount of money can replace the warmth of being truly seen and loved. True wealth is laughing with people who get you. It is feeling safe to be yourself.
                  </p>
                  <div style={{ backgroundColor: '#e8f5e9', padding: '1rem 1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #28a745' }}>
                    <p style={{ margin: 0, fontWeight: '500', color: '#1b5e20', fontSize: '1rem' }}>
                      <strong>The shift:</strong> You invest in deep, meaningful connections. You let go of toxic ties and nurture those who uplift you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimension 5: Personal Growth */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(to right, #218838, #28a745)',
                  color: 'white',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <i className="bi bi-graph-up-arrow" style={{ fontSize: '2.5rem' }}></i>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: 0, marginBottom: '0.25rem' }}>
                      5. Personal Growth: Expanding into Your Best Self
                    </h3>
                    <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, fontStyle: 'italic' }}>
                      I am constantly evolving and becoming.
                    </p>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#333' }}>
                    Wealth is not stagnation. It is growth. It is becoming more self-aware, more compassionate, more wise. It is learning, failing, and rising stronger.
                  </p>
                  <div style={{ backgroundColor: '#e8f5e9', padding: '1rem 1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #28a745' }}>
                    <p style={{ margin: 0, fontWeight: '500', color: '#1b5e20', fontSize: '1rem' }}>
                      <strong>The shift:</strong> You embrace challenges as growth opportunities. You invest in yourself—books, courses, therapy, mentorship.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimension 6: Creative Expression */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(to right, #218838, #28a745)',
                  color: 'white',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <i className="bi bi-palette" style={{ fontSize: '2.5rem' }}></i>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: 0, marginBottom: '0.25rem' }}>
                      6. Creative Expression: The Wealth of Your Unique Voice
                    </h3>
                    <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, fontStyle: 'italic' }}>
                      I express myself freely and authentically.
                    </p>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#333' }}>
                    True wealth allows you to create. To write, paint, dance, build. To express the unique spark inside you without fear of judgment.
                  </p>
                  <div style={{ backgroundColor: '#e8f5e9', padding: '1rem 1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #28a745' }}>
                    <p style={{ margin: 0, fontWeight: '500', color: '#1b5e20', fontSize: '1rem' }}>
                      <strong>The shift:</strong> You stop waiting for permission. You create because it brings you alive. Art, music, words—your gifts matter.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimension 7: Mental Clarity */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(to right, #218838, #28a745)',
                  color: 'white',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <i className="bi bi-lightbulb" style={{ fontSize: '2.5rem' }}></i>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: 0, marginBottom: '0.25rem' }}>
                      7. Mental Clarity: The Wealth of a Quiet Mind
                    </h3>
                    <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, fontStyle: 'italic' }}>
                      I feel clear, focused, and at peace.
                    </p>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#333' }}>
                    Peace of mind is one of the rarest and most valuable forms of wealth. A mind free from constant anxiety, rumination, and fear.
                  </p>
                  <div style={{ backgroundColor: '#e8f5e9', padding: '1rem 1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #28a745' }}>
                    <p style={{ margin: 0, fontWeight: '500', color: '#1b5e20', fontSize: '1rem' }}>
                      <strong>The shift:</strong> You prioritize mental health as seriously as physical health. You practice mindfulness, set boundaries, and protect your peace fiercely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Dimension 8: Spiritual Fullness */}
              <div style={{ 
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                marginBottom: '1.5rem',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  background: 'linear-gradient(to right, #218838, #28a745)',
                  color: 'white',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <i className="bi bi-stars" style={{ fontSize: '2.5rem' }}></i>
                  <div>
                    <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: 0, marginBottom: '0.25rem' }}>
                      8. Spiritual Fullness: Connected to Something Greater
                    </h3>
                    <p style={{ fontSize: '1rem', margin: 0, opacity: 0.9, fontStyle: 'italic' }}>
                      I feel deeply connected to life itself.
                    </p>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#333' }}>
                    Spiritual fullness is the feeling that you are part of something bigger. That your life has meaning. That you are connected to the infinite.
                  </p>
                  <div style={{ backgroundColor: '#e8f5e9', padding: '1rem 1.5rem', borderRadius: '0.5rem', borderLeft: '3px solid #28a745' }}>
                    <p style={{ margin: 0, fontWeight: '500', color: '#1b5e20', fontSize: '1rem' }}>
                      <strong>The shift:</strong> You move from feeling isolated to feeling connected. From meaningless to purposeful. From anxious to trusting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto 4rem' }}>
              <div style={{ 
                background: 'linear-gradient(to right, #218838, #28a745)',
                padding: '3rem 2rem',
                borderRadius: '1rem',
                textAlign: 'center',
                color: 'white',
                boxShadow: '0 10px 30px rgba(40, 167, 69, 0.3)'
              }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.8rem' }}>
                  The Abundance Declaration: Your New Reality
                </h2>
                <div style={{ fontSize: '1.3rem', lineHeight: '2.0', fontWeight: '500' }}>
                  <div style={{ marginBottom: '0.3rem' }}>I do not need to prove my wealth.</div>
                  <div style={{ marginBottom: '0.3rem' }}>I do not need to chase abundance.</div>
                  <div style={{ marginBottom: '0.5rem' }}>I do not need to become rich someday.</div>
                  <div style={{ marginBottom: '0.8rem', fontSize: '1.8rem', fontWeight: 'bold' }}>I AM RICH NOW.</div>
                  <div>Wealth is my natural state. Abundance is who I am.</div>
                </div>
                <p style={{ fontSize: '1.1rem', marginTop: '1.2rem', opacity: 0.95, lineHeight: '1.5', fontStyle: 'italic' }}>
                  This is not affirmation for the sake of affirmation. This is recognizing what is already true.
                </p>
              </div>
            </div>

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
                    Ready to Transform Your Mindset?
                  </h2>
                  <p style={{ color: 'white', fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9, lineHeight: '1.6' }}>
                    Start recognizing the abundance that is already present in your life.
                  </p>
                  <button 
                    onClick={handleProgramsClick}
                    style={{ 
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
                      e.target.style.transform = 'scale(1.05)'
                      e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)'
                      e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  >
                    <i className="bi bi-gem me-2"></i>
                    Discover Your Wealth
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', textAlign: 'center' }}>
            <button 
              onClick={handleBackClick}
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
                e.target.style.backgroundColor = '#28a745'
                e.target.style.color = 'white'
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white'
                e.target.style.color = '#28a745'
              }}
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to All Blogs
            </button>
          </div>
        </div>
      </main>
    </>
  )
}




