import { FaCalendar, FaClock, FaUser, FaArrowRight } from 'react-icons/fa';
import './featuredstuffzs.css';

const FeaturedStuffzs = () => {
  const stuffs = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Explore how artificial intelligence is reshaping the landscape of web development. From intelligent code completion to automated testing, AI is revolutionizing how developers work.",
      image: "/blog-image-1.png",
      date: "October 8, 2024",
      author: "Jane Doe",
      readTime: "5 min read",
      category: "Technology",
      tags: ["AI", "Web Development", "Future Tech"],
      link: "/blog/1"
    },
    {
      title: "Mastering React Hooks",
      excerpt: "Dive deep into React Hooks and learn how to build more efficient functional components. This comprehensive guide covers useState, useEffect, useContext, and custom hooks.",
      image: "/blog-image-1.png",
      date: "October 10, 2024",
      author: "John Smith",
      readTime: "8 min read",
      category: "Development",
      tags: ["React", "JavaScript", "Hooks"],
      link: "/blog/2"
    },
    {
      title: "The Rise of Serverless Architecture",
      excerpt: "Discover how serverless architecture is changing the way we build and deploy applications. Learn about the benefits, challenges, and best practices for adopting serverless.",
      image: "/blog-image-1.png",
      date: "October 12, 2024",
      author: "Alice Johnson",
      readTime: "6 min read",
      category: "Infrastructure",
      tags: ["Cloud", "Architecture", "DevOps"],
      link: "/blog/3"
    }
  ];

  return (
    <section className="featuredstuffz">
      <h2 className="featuredstuffz-title">Featured Stuffzs</h2>
      <div className="featuredstuffz-grid">
        {stuffs.map((stuff, index) => (
          <article key={index} className="featuredstuffz-card">
            <div className="featuredstuffz-image-wrapper">
              <img src={stuff.image} alt={stuff.title} className="featuredstuffz-image" />
              <span className="featuredstuffz-category">{stuff.category}</span>
            </div>
            <div className="featuredstuffz-content">
              <h3 className="featuredstuffz-heading">{stuff.title}</h3>
              <p className="featuredstuffz-excerpt">{stuff.excerpt}</p>
              <div className="featuredstuffz-meta">
                <span className="featuredstuffz-meta-item">
                  <FaUser /> {stuff.author}
                </span>
                <span className="featuredstuffz-meta-item">
                  <FaCalendar /> {stuff.date}
                </span>
                <span className="featuredstuffz-meta-item">
                  <FaClock /> {stuff.readTime}
                </span>
              </div>
              <div className="featuredstuffz-tags">
                {stuff.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="featuredstuffz-tag">{tag}</span>
                ))}
              </div>
              <a href={stuff.link} className="featuredstuffz-link">
                Read More <FaArrowRight className="arrow-icon" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStuffzs;
