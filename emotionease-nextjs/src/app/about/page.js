'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import './About.css'

export default function AboutPage() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    document.title = "About: Expert Mental Health & Executive Coaching"
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const copyDriveLink = () => {
    navigator.clipboard.writeText('https://drive.google.com/file/d/1exwAszrVP2WI3s-Nxj8zS7V9WxK_SX-0/view')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Team members data
  const teamMembers = [
    {
      name: "Elango Annamalai",
      role: "Founder & Emotion Regulation Specialist",
      image: "/ElangoPhoto.webp",
      qualifications: ["NLP Practitioner", "Certified Counselor", "Trauma-Informed Care"],
      description: "With 5+ years of experience in emotional wellbeing, Elango has developed unique methodologies combining NLP, cognitive behavioral techniques, and mindfulness practices."
    },
    {
      name: "Sucheta Sinha",
      role: "Content & Marketing Expert",
      image: "/SuchetaImage.webp",
      qualifications: ["Digital Marketing", "Content Strategy"],
      description: "Sucheta brings 4 years of digital marketing experience with a passion for mental health advocacy. She ensures EmotionEase's message reaches those who need it most."
    },
    {
      name: "Thilagavathi MC",
      role: "Creative Designer",
      image: "/ThilagaMC.webp",
      qualifications: ["MERN Stack", "IAM Specialist"],
      description: "A security Engineer with around 2 years of IAM experience, now focused on becoming a skilled Full Stack Developer blending security and seamless user experience."
    }
  ]

  // Timeline data
  const timelineData = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founder Elango Annamalai began his journey as a counseling practitioner at workspace after overcoming his own emotional challenges through NLP and therapeutic techniques."
    },
    {
      year: "2022",
      title: "First Breakthrough",
      description: "Developed the unique Emotion Regulation Framework after working with 50+ clients and synthesizing various therapeutic approaches."
    },
    {
      year: "2024",
      title: "Team Expansion",
      description: "Sucheta Sinha joined to help scale the mission through digital outreach, bringing marketing expertise, while Thilagavathi managed the technical aspects, ensuring smooth execution and platform support."
    },
    {
      year: "2025",
      title: "Program Launch",
      description: "Officially launched EmotionEase with three structured programs that have since helped over 100+ individuals transform their emotional wellbeing."
    }
  ]

  // Methodology data
  const methodologyData = [
    {
      icon: "bi-cpu",
      title: "NLP Techniques",
      description: "We use Neuro-Linguistic Programming to help reframe thought patterns and create positive behavioral changes at the subconscious level."
    },
    {
      icon: "bi-heart-pulse",
      title: "Emotional Regulation",
      description: "Our proprietary framework helps identify, process, and healthily express emotions without suppression or exaggeration."
    },
    {
      icon: "bi-people",
      title: "Relational Therapy",
      description: "We incorporate attachment theory and communication strategies to improve personal and professional relationships."
    }
  ]

  return (
    <>
      <Navbar />
      <div className="about-page">
        
        {/* Mission Section */}
        <section className="mission-section py-5" style={{backgroundColor: 'rgba(63, 230, 102, 0.1)'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="section-title">Our Mission</h1>
                <p className="mission-text">
                  At EmotionEase, we are dedicated to transforming emotional wellbeing through 
                  accessible, personalized programs that empower individuals to navigate life challenges 
                  with confidence and resilience.
                </p>
                <div className="mission-values mt-4">
                  <h3>Our Core Values:</h3>
                  <ul className="values-list">
                    <li><i className="bi bi-heart-fill"></i><strong>Empathy:</strong> We listen with compassion</li>
                    <li><i className="bi bi-shield-fill"></i><strong>Integrity:</strong> We maintain the highest ethical standards</li>
                    <li><i className="bi bi-lightbulb-fill"></i><strong>Innovation:</strong> We use evidence-based, cutting-edge techniques</li>
                    <li><i className="bi bi-people-fill"></i><strong>Inclusivity:</strong> We serve all individuals regardless of background</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <video controls className="img-fluid rounded shadow w-100">
                  <source src="/A-MessageVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Two Buttons Below Video */}
                <div className="mt-3 d-flex gap-3">
                  <button 
                    onClick={copyDriveLink}
                    className="btn btn-success"
                  >
                    <i className="bi bi-link-45deg me-2"></i>
                    {copied ? 'Link Copied!' : 'Copy Drive Link'}
                  </button>
                  <a 
                    href="https://drive.google.com/uc?export=download&id=1exwAszrVP2WI3s-Nxj8zS7V9WxK_SX-0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    <i className="bi bi-download me-2"></i>Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Timeline Section */}
        <section className="story-section py-5">
          <div className="container">
            <h2 className="section-title mb-5">Our Story</h2>
            <div className="timeline">
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-year-badge">{item.year}</span>
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section py-5 bg-light">
          <div className="container">
            <h2 className="section-title mb-5">Meet Our Team</h2>
            <div className="row g-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 border-0 shadow-sm team-card">
                    <div className="card-body p-4 text-center">
                      <div className="team-image-wrapper mb-3">
                        <Image 
                          src={member.image}
                          alt={member.name}
                          width={150}
                          height={150}
                          className="rounded-circle team-photo"
                          style={{ objectFit: 'cover', border: '4px solid #e8f5e9' }}
                        />
                      </div>
                      <h3 className="team-name h5 mb-2">{member.name}</h3>
                      <p className="team-role mb-3 fw-semibold">{member.role}</p>
                      <div className="team-qualifications mb-3">
                        {member.qualifications.map((qual, i) => (
                          <span key={i} className="skill-badge">{qual}</span>
                        ))}
                      </div>
                      <p className="team-description small">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Methodology Section */}
        <section className="methodology-section py-5">
          <div className="container">
            <h2 className="section-title mb-5">Our Methodology</h2>
            <div className="row g-4">
              {methodologyData.map((method, index) => (
                <div key={index} className="col-md-4">
                  <div className="method-card h-100">
                    <div className="method-icon-wrapper">
                      <i className={`bi ${method.icon} method-icon`}></i>
                    </div>
                    <h3 className="method-title">{method.title}</h3>
                    <p className="method-description">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-5 text-center">
          <div className="container">
            <h2 className="mb-4 display-5 fw-bold">Ready to Begin Your Emotional Wellness Journey?</h2>
            <p className="lead mb-4">Our team is here to support you every step of the way.</p>
            <div>
              <Link href="/programs" className="btn btn-light btn-lg me-3 px-4 py-2" onClick={scrollToTop}>
                Explore Programs
              </Link>
              <Link href="/contact" className="btn btn-outline-light btn-lg px-4 py-2" onClick={scrollToTop}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
