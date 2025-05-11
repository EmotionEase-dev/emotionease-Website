import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./PostGallery.css";

const PostGallery = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Using reliable image sources with specific dimensions
        const mockPosts = [
          {
            id: 1,
            title: "5-Minute Anxiety Relief",
            imageUrl: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80",
            content: "Try the 5-4-3-2-1 grounding technique..."
          },
          {
            id: 2,
            title: "Breathing Exercise",
            imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80",
            content: "Deep breathing techniques for stress relief..."
          },
          {
            id: 3,
            title: "Mindfulness Practice",
            imageUrl: "https://images.unsplash.com/photo-1548602088-9d12a4f9c839?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80",
            content: "Daily mindfulness exercises"
          },
          {
            id: 4,
            title: "Sleep Hygiene",
            imageUrl: "https://images.unsplash.com/photo-1548286978-f218023f8d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80",
            content: "Tips for better sleep quality"
          }
        ];

        setPosts(mockPosts);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return <div className="post-gallery-loading">Loading posts...</div>;
  }

  return (
    <div className="post-gallery-container">
      <h2 className="post-gallery-header">Mental Health Resources</h2>

      <div className="post-gallery-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-image-container">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="post-image"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = `https://via.placeholder.com/600x600/28a745/ffffff?text=${encodeURIComponent(post.title)}`;
                  e.target.style.backgroundColor = "#f8f9fa";
                }}
              />
            </div>

            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-text">{post.content}</p>
              <Button 
                className="post-button"
                onClick={() => window.open(post.imageUrl, '_blank')} // Test image in new tab
              >
                View Post
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostGallery;