import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faChild,
  faHeart,
  faBrain, 
  faLightbulb,
  faBookOpen,
  faCalendarAlt,
  faClock,
  faCheckCircle,
  faSeedling,
  faHandHoldingHeart,
  faSpa,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const BlogPostInnerChild = () => {
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
    id: 5,
    title: "How to Reparent Your Inner Child for Boredom",
    subtitle: "A Complete Healing Guide",
    excerpt: "Transform Your Relationship with Stillness Through Deep Subconscious Reprogramming",
    date: "November 1, 2025",
    readTime: "15 min read",
    badges: ["15-Minute Visualization Practice", "Evidence-Based Inner Child Work", "Lasting Emotional Healing"],
    content: {
      introduction: "Do you find yourself constantly reaching for your phone, scrolling endlessly, or feeling anxious when there's nothing to do? You're not alone. For many of us, boredom doesn't feel neutral—it feels unbearable. This deep-rooted discomfort with stillness often stems from childhood experiences that taught us boredom was dangerous, shameful, or meant something was wrong with us. The good news? You can heal this wound through inner child reparenting.",
      
      sections: [
        {
          title: "Understanding the Boredom Wound",
          intro: "Most adults struggle with boredom not because there's something inherently wrong with them, but because they carry unhealed childhood experiences around stillness and unstructured time.",
          subsections: [
            {
              subtitle: "Common Childhood Messages That Create Boredom Anxiety",
              messages: [
                { text: "\"Go find something to do\"", translation: "Your presence without productivity is burdensome" },
                { text: "\"Stop being lazy\"", translation: "Rest and stillness equal worthlessness" },
                { text: "\"You're always bothering me\"", translation: "Your need for connection in quiet moments is annoying" },
                { text: "Watching constantly busy adults", translation: "Value comes from constant doing" },
                { text: "Being left alone for long periods", translation: "Stillness means abandonment" }
              ]
            },
            {
              subtitle: "The Core Wound",
              content: "Your inner child learned that boredom was an emergency that needed immediate escape. They developed a belief that stillness was dangerous, that their worth depended on being productive or entertaining, and that something was fundamentally wrong with them when they felt unstimulated."
            }
          ]
        },
        {
          title: "What Is Inner Child Reparenting?",
          content: "Inner child reparenting is a therapeutic technique where your adult self provides the nurturing, validation, and guidance that your younger self needed but didn't receive. It works by creating new neural pathways and emotional memories that overwrite old, painful programming.",
          subsections: [
            {
              subtitle: "How Reparenting Rewires Your Brain",
              content: "When you engage in visualization and emotional healing work, you're not just thinking differently—you're literally changing your brain structure through neuroplasticity. By repeatedly offering your inner child the experience of safety in stillness, you create new associations that replace the old fear-based responses."
            },
            {
              subtitle: "The Three Pillars of Effective Reparenting",
              pillars: [
                { title: "Emotional Attunement", description: "Recognizing and validating your inner child's feelings without judgment" },
                { title: "Corrective Experience", description: "Providing what was missing in the original situation" },
                { title: "Consistent Practice", description: "Repeating the new pattern until it becomes automatic" }
              ]
            }
          ]
        },
        {
          title: "Why Boredom Feels So Uncomfortable",
          subtitle: "(And What It's Really Telling You)",
          content: "Boredom is rarely just boredom. For most people with a wounded inner child, boredom masks deeper emotions that were unsafe to feel in childhood.",
          subsections: [
            {
              subtitle: "What Boredom Often Masks",
              masks: [
                { emotion: "Loneliness", meaning: "\"I need connection but don't know how to ask for it\"" },
                { emotion: "Anxiety", meaning: "\"I'm afraid to slow down and feel what's inside\"" },
                { emotion: "Grief or Sadness", meaning: "\"There's pain I haven't processed\"" },
                { emotion: "Emptiness", meaning: "\"I've lost touch with my authentic desires\"" },
                { emotion: "Fear of Insignificance", meaning: "\"If I'm not doing something, do I matter?\"" }
              ]
            }
          ],
          conclusion: "When you heal your relationship with boredom, you're actually healing your relationship with yourself. You're learning that you don't need to earn your right to exist through constant productivity or entertainment."
        },
        {
          title: "The Complete Visualization Practice",
          subtitle: "Deep Subconscious Reparenting",
          intro: "This 15-20 minute guided visualization is designed to access your subconscious mind and create lasting change. Practice it weekly for 4-6 weeks for optimal results.",
          parts: [
            {
              partTitle: "Preparation (2-3 minutes)",
              steps: [
                "Find a quiet, comfortable place where you won't be disturbed. Sit or lie down in a position that feels safe and supported.",
                "Close your eyes and take three deep breaths: Inhale for 4 counts, Hold for 4 counts, Exhale for 6 counts",
                "Let your body become heavy and relaxed. Allow any tension to melt away with each exhale."
              ]
            },
            {
              partTitle: "Part 1: Meeting Your Inner Child (3-5 minutes)",
              content: "Imagine yourself walking down a familiar hallway from your childhood. Notice the colors, the textures, the light filtering through windows. You come to a door. Behind this door is a younger version of you—the age when you first learned that boredom was something to fear or escape.",
              guidance: [
                "Open the door gently. You see your younger self sitting alone in a room. Notice what they're doing.",
                "Observe their face. What emotion do you see there? Just notice, without judgment.",
                "Approach them slowly and sit beside them. Let them know you're the adult version of them, here from the future.",
                "Ask them gently: \"What does boredom feel like to you?\"",
                "Listen. Let them speak, even if it's just in feelings rather than words."
              ]
            },
            {
              partTitle: "Part 2: Witnessing the Origin Wound (3-5 minutes)",
              content: "Ask your younger self: \"When did you first learn that boredom was bad? Show me.\" Allow a memory to surface. Don't force it. Your subconscious knows what needs healing.",
              examples: [
                "A parent saying \"stop bothering me, go find something to do\" with frustration or dismissal",
                "Being punished for being restless or \"not entertaining yourself\"",
                "Watching adults always busy, learning that stillness equals laziness",
                "Feeling invisible or unwanted when you weren't being productive",
                "Being told you were \"too much\" or \"annoying\" when you sought connection"
              ],
              action: "Witness this memory as your adult self. See what that child needed but didn't receive. Place your hand on your younger self's shoulder. Feel the warmth and weight of your connection. Let them know: \"I see what happened to you. I understand why you feel this way.\""
            },
            {
              partTitle: "Part 3: The Reparenting Intervention (5-7 minutes)",
              intro: "Now, you get to rewrite this moment. This is where the healing happens.",
              affirmations: [
                "\"I'm here now, and I'm not going anywhere. You don't need to do anything or be anything for me to stay.\"",
                "\"Boredom isn't a sign that something is wrong with you. It's just a feeling, like clouds passing through the sky.\"",
                "\"Let's practice being bored together. Let's see what happens when we don't run away from it.\""
              ],
              process: "Sit together in silence. Visualize yourself and your younger self simply being present together. As restlessness arises, you stay calm. Model the peace they need to learn. Hold their hand gently, breathe slowly, and say: \"I know this feels uncomfortable. That's okay. Uncomfortable isn't the same as unsafe. I'm right here. You're safe with me.\"",
              transformation: "Watch as the restlessness begins to soften. With your steady, loving presence, your younger self begins to relax. Something beautiful happens in the stillness—a creative idea bubbles up, a forgotten feeling surfaces, or a sense of deep peace settles in."
            },
            {
              partTitle: "Part 4: The Gift and Integration (3-4 minutes)",
              oldBelief: "Your younger self reaches into their pocket and pulls out an object representing the old belief about boredom they've been carrying. What does it look like? Take it with compassion: \"Thank you for protecting me by carrying this. You don't need to carry it anymore.\"",
              newGift: "Now reach into your own pocket and pull out a new gift. This represents the new belief about boredom:",
              giftExamples: [
                "A smooth stone radiating warmth whispering \"stillness is safe\"",
                "A white feather floating gently, saying \"lightness in the pause\"",
                "A seed full of potential promising \"creativity grows in spaciousness\"",
                "A soft blanket wrapping comfort, affirming \"rest is not laziness\""
              ],
              integration: "Place this gift in their hands. Watch as it begins to glow with golden warmth. Your younger self absorbs this gift into their heart. The light spreads through their body—every cell is being reprogrammed with this new truth. Embrace your younger self and say: \"You can come back to me anytime. Whenever you feel that old panic about boredom, I'm here.\" Watch as they merge into your adult body, now healed and at peace with stillness."
            },
            {
              partTitle: "Part 5: Returning and Anchoring (2-3 minutes)",
              steps: [
                "Place both hands on your heart. Feel the warmth there.",
                "Create an anchor: Choose a simple gesture you can use anytime boredom arises (placing hand on heart, touching thumb and forefinger, tapping chest three times)",
                "Slowly bring your awareness back to the room. Wiggle your fingers and toes.",
                "When you're ready, open your eyes. Welcome back."
              ]
            }
          ]
        },
        {
          title: "Integration and Daily Practice",
          subtitle: "The visualization is powerful, but real change happens through integration.",
          practices: [
            {
              timeframe: "Immediately After the Visualization",
              actions: [
                "Journal: Write about what you experienced without censoring",
                "Record messages: Note any words your inner child shared",
                "Document the symbols: What did the old object look like? What was the new gift?",
                "Honor the emotions: If you cried, laughed, or felt resistant, that's all valuable data"
              ]
            },
            {
              timeframe: "In the Coming Days and Weeks",
              actions: [
                "Use your anchor gesture whenever boredom or restlessness arises",
                "Notice without judgment if your response to boredom feels different",
                "Practice \"boring sits\" for 5-10 minutes daily—just sitting with no distraction",
                "Revisit the visualization weekly for the first month, then as needed",
                "Be patient with yourself—decades of conditioning don't dissolve overnight"
              ]
            },
            {
              timeframe: "The 30-Day Integration Challenge",
              weeks: [
                { week: "Week 1", plan: "Full visualization 3 times + daily anchor practice" },
                { week: "Week 2-4", plan: "Full visualization weekly + daily anchor practice + 5-minute boring sits" },
                { week: "Week 4+", plan: "Monthly visualization + anchor as needed + embrace boredom when it naturally arises" }
              ]
            }
          ]
        },
        {
          title: "Signs Your Reparenting Is Working",
          subtitle: "Healing isn't always linear, but you'll notice shifts if you stay consistent with the practice.",
          categories: [
            {
              category: "Body-Level Signs",
              signs: [
                "Boredom feels less urgent or panic-inducing in your nervous system",
                "You can sit in stillness for longer periods without physical restlessness",
                "The automatic reach for your phone happens less frequently",
                "Your body feels more relaxed during unstructured time"
              ]
            },
            {
              category: "Emotional Signs",
              signs: [
                "Curiosity replaces anxiety when boredom arises",
                "You feel more connected to yourself during quiet moments",
                "Stillness feels like rest rather than abandonment",
                "You experience more spontaneous creativity and ideas"
              ]
            },
            {
              category: "Behavioral Signs",
              signs: [
                "You choose presence over distraction more often",
                "You can be in waiting rooms or lines without immediately reaching for entertainment",
                "You intentionally create space for \"doing nothing\"",
                "You notice and appreciate subtle things you used to miss"
              ]
            }
          ]
        }
      ],
      advancedTechniques: {
        title: "Advanced Reparenting Techniques",
        intro: "Once you're comfortable with the basic visualization, you can deepen your practice:",
        techniques: [
          {
            name: "Multi-Age Healing",
            description: "Visit your inner child at different ages (age 5, 10, 13, etc.) to heal multiple origin points. Each age may carry different wounds around boredom."
          },
          {
            name: "Real-Time Reparenting",
            description: "When boredom strikes in daily life, close your eyes briefly and invite your inner child into the moment. Ask them: \"What do you need right now?\" Then provide it."
          },
          {
            name: "Create a Boredom Sanctuary",
            description: "In your imagination, design a safe space where you and your inner child can always return when boredom feels overwhelming. Fill it with comfort, safety, and the permission to simply be."
          }
        ]
      },
      finalThoughts: {
        title: "Your Relationship with Boredom Can Transform",
        content: "The discomfort you feel with stillness isn't a character flaw—it's an old survival strategy your inner child developed. By reparenting that younger part of yourself, you're not just healing boredom; you're reclaiming your right to exist peacefully in your own presence.",
        quote: "You were never meant to be constantly stimulated and productive. You are a human being, not a human doing. The quiet moments, the 'boring' moments—these are where you remember who you are beneath all the noise.",
        callToAction: "Start your first visualization today. Your inner child has been waiting.",
        reminder: "This visualization rewires your nervous system by creating a new felt experience of safety around boredom. Each time you practice it, you strengthen the neural pathways of peace and presence. Practice weekly for 4-6 weeks for lasting transformation."
      }
    }
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Helmet>
        <title>How to Reparent Your Inner Child for Boredom | EmotionEase</title>
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
            <p className="lead mb-4">
              {blog.excerpt}
            </p>
            <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
              {blog.badges.map((badge, index) => (
                <Badge key={index} bg="light" text="dark" className="px-3 py-2 fs-6">
                  {badge}
                </Badge>
              ))}
            </div>
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
              <p className="fs-5 mb-0" style={{ lineHeight: '1.8' }}>
                {blog.content.introduction}
              </p>
            </div>
          </Col>
        </Row>

        {/* Understanding the Boredom Wound */}
        <Row className="mb-5">
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
                {blog.content.sections[0].title}
              </h2>
              
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                {blog.content.sections[0].intro}
              </p>

              <h4 className="fw-bold mb-3" style={{ color: '#218838' }}>
                <FontAwesomeIcon icon={faChild} className="me-2" />
                {blog.content.sections[0].subsections[0].subtitle}
              </h4>
              
              <ListGroup variant="flush" className="mb-4">
                {blog.content.sections[0].subsections[0].messages.map((msg, i) => (
                  <ListGroup.Item key={i} className="border-0 px-0 py-3">
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
                        <p className="mb-1 fw-semibold">{msg.text}</p>
                        <p className="mb-0 text-muted fst-italic">Translation: {msg.translation}</p>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <Card className="border-0 shadow-sm" style={{ backgroundColor: '#e8f5e9' }}>
                <Card.Body>
                  <Card.Title className="mb-3">
                    <FontAwesomeIcon icon={faHeart} className="me-2 text-success" />
                    {blog.content.sections[0].subsections[1].subtitle}
                  </Card.Title>
                  <p className="mb-0" style={{ lineHeight: '1.7' }}>
                    {blog.content.sections[0].subsections[1].content}
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* What Is Inner Child Reparenting */}
        <Row className="mb-5">
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
                {blog.content.sections[1].title}
              </h2>
              
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                {blog.content.sections[1].content}
              </p>

              <h4 className="fw-bold mb-3" style={{ color: '#218838' }}>
                <FontAwesomeIcon icon={faBrain} className="me-2" />
                {blog.content.sections[1].subsections[0].subtitle}
              </h4>
              
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                {blog.content.sections[1].subsections[0].content}
              </p>

              <Card className="border-success mb-4">
                <Card.Header className="bg-success text-white fw-bold">
                  <FontAwesomeIcon icon={faSeedling} className="me-2" />
                  {blog.content.sections[1].subsections[1].subtitle}
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    {blog.content.sections[1].subsections[1].pillars.map((pillar, i) => (
                      <ListGroup.Item key={i}>
                        <div className="d-flex align-items-start">
                          <div className="me-3 mt-1 text-success fw-bold fs-5">{i + 1}.</div>
                          <div>
                            <strong className="d-block mb-1">{pillar.title}:</strong>
                            <span>{pillar.description}</span>
                          </div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Why Boredom Feels Uncomfortable */}
        <Row className="mb-5">
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
                {blog.content.sections[2].title}
              </h2>
              
              <p className="text-muted fs-5 mb-3">{blog.content.sections[2].subtitle}</p>
              
              <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                {blog.content.sections[2].content}
              </p>

              <h4 className="fw-bold mb-3" style={{ color: '#218838' }}>
                <FontAwesomeIcon icon={faEye} className="me-2" />
                {blog.content.sections[2].subsections[0].subtitle}
              </h4>
              
              <Row className="g-3 mb-4">
                {blog.content.sections[2].subsections[0].masks.map((mask, i) => (
                  <Col md={6} key={i}>
                    <Card className="h-100 border-0 shadow-sm hover-effect">
                      <Card.Body>
                        <h5 className="fw-bold text-success mb-2">{mask.emotion}</h5>
                        <p className="mb-0 fst-italic text-muted">{mask.meaning}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="p-4 rounded" style={{ backgroundColor: '#f1f8f4', borderLeft: '4px solid #28a745' }}>
                <p className="fs-5 mb-0 fst-italic" style={{ lineHeight: '1.8', color: '#1b5e20' }}>
                  {blog.content.sections[2].conclusion}
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* The Complete Visualization Practice */}
        <Row className="mb-5">
          <Col lg={{ span: 10, offset: 1 }}>
            <Card className="border-success shadow-lg">
              <Card.Header className="bg-success text-white fw-bold fs-3 py-4">
                <FontAwesomeIcon icon={faSpa} className="me-2" />
                {blog.content.sections[3].title}
              </Card.Header>
              <Card.Body className="p-4 p-md-5">
                <p className="text-muted fs-5 mb-3">{blog.content.sections[3].subtitle}</p>
                <p className="fs-5 mb-5" style={{ lineHeight: '1.8' }}>
                  {blog.content.sections[3].intro}
                </p>

                {blog.content.sections[3].parts.map((part, index) => (
                  <div key={index} className="mb-5 pb-4" style={{ borderBottom: index < blog.content.sections[3].parts.length - 1 ? '2px solid #e0e0e0' : 'none' }}>
                    <h4 className="fw-bold mb-3" style={{ color: '#218838' }}>
                      <FontAwesomeIcon icon={faHandHoldingHeart} className="me-2" />
                      {part.partTitle}
                    </h4>
                    
                    {part.steps && (
                      <ListGroup variant="flush" className="mb-3">
                        {part.steps.map((step, i) => (
                          <ListGroup.Item key={i} className="border-0 px-0 py-2">
                            <div className="d-flex align-items-start">
                              <FontAwesomeIcon icon={faCheckCircle} className="me-2 mt-1 text-success" />
                              <span>{step}</span>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    )}
                    
                    {part.content && (
                      <p className="mb-3" style={{ lineHeight: '1.8' }}>{part.content}</p>
                    )}
                    
                    {part.guidance && (
                      <ListGroup variant="flush" className="mb-3">
                        {part.guidance.map((guide, i) => (
                          <ListGroup.Item key={i} className="border-0 px-0 py-2">
                            <div className="d-flex align-items-start">
                              <FontAwesomeIcon icon={faLightbulb} className="me-2 mt-1 text-success" />
                              <span>{guide}</span>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    )}
                    
                    {part.examples && (
                      <Card className="mb-3" style={{ backgroundColor: '#e8f5e9' }}>
                        <Card.Body>
                          <p className="fw-semibold mb-2">The memory might be:</p>
                          <ul className="mb-0">
                            {part.examples.map((example, i) => (
                              <li key={i} style={{ marginBottom: '0.5rem' }}>{example}</li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    )}
                    
                    {part.action && (
                      <div className="p-3 rounded" style={{ backgroundColor: '#f1f8f4', borderLeft: '4px solid #28a745' }}>
                        <p className="mb-0 fst-italic">{part.action}</p>
                      </div>
                    )}
                    
                    {part.intro && <p className="mb-3" style={{ lineHeight: '1.8' }}>{part.intro}</p>}
                    
                    {part.affirmations && (
                      <Card className="mb-3" style={{ backgroundColor: '#e8f5e9' }}>
                        <Card.Body>
                          <p className="fw-semibold mb-2">Speak to your younger self:</p>
                          {part.affirmations.map((aff, i) => (
                            <p key={i} className="mb-2 fst-italic">• {aff}</p>
                          ))}
                        </Card.Body>
                      </Card>
                    )}
                    
                    {part.process && (
                      <p className="mb-3" style={{ lineHeight: '1.8' }}>{part.process}</p>
                    )}
                    
                    {part.transformation && (
                      <div className="p-3 rounded" style={{ backgroundColor: '#f1f8f4', borderLeft: '4px solid #28a745' }}>
                        <p className="mb-0">{part.transformation}</p>
                      </div>
                    )}
                    
                    {part.oldBelief && (
                      <div className="mb-3">
                        <p className="mb-2" style={{ lineHeight: '1.8' }}>{part.oldBelief}</p>
                      </div>
                    )}
                    
                    {part.newGift && (
                      <p className="mb-2" style={{ lineHeight: '1.8' }}>{part.newGift}</p>
                    )}
                    
                    {part.giftExamples && (
                      <Card className="mb-3" style={{ backgroundColor: '#e8f5e9' }}>
                        <Card.Body>
                          <p className="fw-semibold mb-2">Perhaps:</p>
                          <ul className="mb-0">
                            {part.giftExamples.map((example, i) => (
                              <li key={i} style={{ marginBottom: '0.5rem' }}>{example}</li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    )}
                    
                    {part.integration && (
                      <div className="p-3 rounded" style={{ backgroundColor: '#f1f8f4', borderLeft: '4px solid #28a745' }}>
                        <p className="mb-0 fst-italic">{part.integration}</p>
                      </div>
                    )}
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Integration and Daily Practice */}
        <Row className="mb-5">
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
                {blog.content.sections[4].title}
              </h2>
              
              <p className="text-muted fs-5 mb-4">{blog.content.sections[4].subtitle}</p>

              {blog.content.sections[4].practices.map((practice, index) => (
                <Card key={index} className="mb-4 border-0 shadow-sm">
                  <Card.Header className="bg-light fw-bold">
                    <FontAwesomeIcon icon={faBookOpen} className="me-2 text-success" />
                    {practice.timeframe}
                  </Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      {practice.actions && practice.actions.map((action, i) => (
                        <ListGroup.Item key={i} className="border-0 px-0 py-2">
                          <div className="d-flex align-items-start">
                            <FontAwesomeIcon icon={faCheckCircle} className="me-2 mt-1 text-success" />
                            <span>{action}</span>
                          </div>
                        </ListGroup.Item>
                      ))}
                      {practice.weeks && practice.weeks.map((week, i) => (
                        <ListGroup.Item key={i} className="border-0 px-0 py-2">
                          <div className="d-flex align-items-start">
                            <div className="me-3">
                              <Badge bg="success">{week.week}</Badge>
                            </div>
                            <span>{week.plan}</span>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>

        {/* Signs Your Reparenting Is Working */}
        <Row className="mb-5">
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
                {blog.content.sections[5].title}
              </h2>
              
              <p className="text-muted fs-5 mb-4">{blog.content.sections[5].subtitle}</p>

              {blog.content.sections[5].categories.map((category, index) => (
                <Card key={index} className="mb-4 border-0 shadow-sm">
                  <Card.Header className="bg-success text-white fw-bold">
                    <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                    {category.category}
                  </Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      {category.signs.map((sign, i) => (
                        <ListGroup.Item key={i} className="border-0 px-0 py-2">
                          <div className="d-flex align-items-start">
                            <FontAwesomeIcon icon={faCheckCircle} className="me-2 mt-1 text-success" />
                            <span>{sign}</span>
                          </div>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>

        {/* Advanced Techniques */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <Card className="border-success shadow">
              <Card.Header className="bg-success text-white fw-bold fs-4">
                <FontAwesomeIcon icon={faBrain} className="me-2" />
                {blog.content.advancedTechniques.title}
              </Card.Header>
              <Card.Body>
                <p className="fs-5 mb-4">{blog.content.advancedTechniques.intro}</p>
                {blog.content.advancedTechniques.techniques.map((technique, i) => (
                  <div key={i} className="mb-4 pb-3" style={{ borderBottom: i < blog.content.advancedTechniques.techniques.length - 1 ? '1px solid #e0e0e0' : 'none' }}>
                    <h5 className="fw-bold text-success mb-2">
                      <FontAwesomeIcon icon={faLightbulb} className="me-2" />
                      {technique.name}
                    </h5>
                    <p className="mb-0" style={{ lineHeight: '1.7' }}>{technique.description}</p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Final Thoughts */}
        <Row className="mb-5">
          <Col lg={{ span: 8, offset: 2 }}>
            <Card className="border-0 shadow-lg" style={{ backgroundColor: '#e8f5e9' }}>
              <Card.Body className="p-5">
                <h2 className="fw-bold mb-4 text-center" style={{ color: '#218838' }}>
                  {blog.content.finalThoughts.title}
                </h2>
                <p className="fs-5 mb-4" style={{ lineHeight: '1.8' }}>
                  {blog.content.finalThoughts.content}
                </p>
                <Card className="border-0 mb-4" style={{ backgroundColor: 'white' }}>
                  <Card.Body>
                    <FontAwesomeIcon icon={faHeart} className="text-success fs-3 mb-3 d-block" />
                    <p className="fs-5 mb-0 fst-italic" style={{ lineHeight: '1.8', color: '#1b5e20' }}>
                      {blog.content.finalThoughts.quote}
                    </p>
                  </Card.Body>
                </Card>
                <p className="fs-5 fw-bold mb-4 text-center" style={{ color: '#218838' }}>
                  {blog.content.finalThoughts.callToAction}
                </p>
                <div className="p-3 rounded" style={{ backgroundColor: '#f1f8f4', borderLeft: '4px solid #28a745' }}>
                  <p className="mb-0 fst-italic" style={{ lineHeight: '1.8' }}>
                    <strong>Remember:</strong> {blog.content.finalThoughts.reminder}
                  </p>
                </div>
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
                <h2 className="fw-bold text-white mb-4">Ready to Transform Your Relationship with Stillness?</h2>
                <p className="fs-5 text-white mb-4" style={{ opacity: '0.9' }}>
                  Discover how EmotionEase's expert coaching can guide you through deeper inner child healing and lasting emotional transformation. You don't have to do this alone.
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
                  <FontAwesomeIcon icon={faChild} className="me-2" />
                  Explore Our Programs
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
      `}</style>
    </div>
  );
};

export default BlogPostInnerChild;