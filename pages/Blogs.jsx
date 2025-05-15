import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blogs.css';

const Blog = () => {
  // Sample blog data
  const allBlogPosts = [
    {
      id: 1,
      title: "Understanding Emotional Well-being",
      excerpt: "Learn the fundamentals of emotional health and why it's crucial for your overall well-being.",
      date: "May 10, 2023",
      author: "Dr. Sarah Johnson",
      category: "Mental Health"
    },
    {
      id: 2,
      title: "5 Daily Practices for Emotional Balance",
      excerpt: "Simple techniques you can incorporate into your daily routine to maintain emotional equilibrium.",
      date: "April 28, 2023",
      author: "Michael Chen",
      category: "Self-Care"
    },
    {
      id: 3,
      title: "The Science Behind EmotionEase",
      excerpt: "How our application uses evidence-based methods to help you manage emotions effectively.",
      date: "April 15, 2023",
      author: "EmotionEase Team",
      category: "Technology"
    },
    {
      id: 4,
      title: "Building Resilience in Challenging Times",
      excerpt: "Strategies to strengthen your emotional resilience when facing life's difficulties.",
      date: "March 30, 2023",
      author: "Dr. Lisa Rodriguez",
      category: "Resilience"
    },
    {
      id: 5,
      title: "Mindfulness Meditation Techniques",
      excerpt: "Beginner-friendly mindfulness exercises to help center your thoughts and emotions.",
      date: "March 22, 2023",
      author: "James Wilson",
      category: "Mindfulness"
    },
    {
      id: 6,
      title: "The Connection Between Sleep and Emotions",
      excerpt: "How quality sleep affects your emotional regulation and mental health.",
      date: "March 15, 2023",
      author: "Dr. Emily Park",
      category: "Mental Health"
    },
    {
      id: 7,
      title: "Digital Detox for Emotional Clarity",
      excerpt: "Why taking breaks from technology can improve your emotional well-being.",
      date: "March 5, 2023",
      author: "Alex Turner",
      category: "Self-Care"
    },
    {
      id: 8,
      title: "Journaling for Emotional Release",
      excerpt: "How writing about your feelings can help process and understand them better.",
      date: "February 28, 2023",
      author: "Maria Garcia",
      category: "Self-Care"
    }
  ];

  // Get all unique categories
  const allCategories = ['All', ...new Set(allBlogPosts.map(post => post.category))];

  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const postsPerPage = 3;

  // Filter posts by selected category
  const filteredPosts = selectedCategory === 'All' 
    ? allBlogPosts 
    : allBlogPosts.filter(post => post.category === selectedCategory);

  // Calculate current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPosts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <header className="blog-hero bg-success text-white py-5 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">EmotionEase Blog</h1>
              <p className="lead mb-0">Insights, tips, and research on emotional well-being and mental health</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className="row">
          {/* Blog Posts */}
          <div className="col-lg-8">
            {/* Category Filter (Mobile) */}
            <div className="d-lg-none mb-4">
              <select 
                className="form-select"
                value={selectedCategory}
                onChange={(e) => handleCategorySelect(e.target.value)}
              >
                {allCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Active Category Indicator */}
            {selectedCategory !== 'All' && (
              <div className="mb-4">
                <h5>Showing posts in: <span className="badge bg-success">{selectedCategory}</span></h5>
                <button 
                  className="btn btn-sm btn-outline-success ms-2"
                  onClick={() => handleCategorySelect('All')}
                >
                  Clear filter
                </button>
              </div>
            )}

            {/* Blog Posts List */}
            {currentPosts.length > 0 ? (
              currentPosts.map(post => (
                <div key={post.id} className="card mb-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-success">{post.category}</span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                    <h2 className="card-title h4">{post.title}</h2>
                    <p className="card-text">{post.excerpt}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">By {post.author}</span>
                      <a href={`/blog/${post.id}`} className="btn btn-success btn-sm">Read More →</a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="alert alert-info">
                No posts found in this category.
              </div>
            )}

            {/* Pagination */}
            {pageNumbers.length > 1 && (
              <nav aria-label="Blog pagination">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button 
                      className="page-link" 
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                  </li>
                  
                  {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={() => paginate(number)}
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                  
                  <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
                    <button 
                      className="page-link" 
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === pageNumbers.length}
                    >
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* About Card */}
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">About EmotionEase</h5>
                <p className="card-text">EmotionEase is your companion for emotional well-being, offering tools and resources to help you navigate your feelings and build resilience.</p>
                <a href="/about" className="btn btn-success">Learn More</a>
              </div>
            </div>

            {/* Categories */}
            <div className="card mb-4">
              <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                <span>Categories</span>
                {selectedCategory !== 'All' && (
                  <button 
                    className="btn btn-sm btn-light"
                    onClick={() => handleCategorySelect('All')}
                  >
                    View All
                  </button>
                )}
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {allCategories.map(category => (
                    <li key={category} className="py-1">
                      <button 
                        className={`btn btn-sm w-100 text-start ${selectedCategory === category ? 'btn-success text-white' : 'btn-link text-success'}`}
                        onClick={() => handleCategorySelect(category)}
                        style={{ textDecoration: 'none' }}
                      >
                        {category} 
                        {selectedCategory === category && (
                          <span className="float-end">✓</span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="card">
              <div className="card-header bg-success text-white">
                Subscribe to Newsletter
              </div>
              <div className="card-body">
                <p>Get the latest articles and tips delivered to your inbox.</p>
                <form>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your email" required />
                  </div>
                  <button type="submit" className="btn btn-success w-100">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Post Banner */}
      <div className="container-fluid bg-success text-white py-4 mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h3 className="mb-1">Featured: The Power of Emotional Intelligence</h3>
              <p className="mb-0">Discover how developing your EQ can transform your personal and professional life.</p>
            </div>
            <div className="col-md-4 text-md-end">
              <a href="#" className="btn btn-light">Read Featured Article</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;