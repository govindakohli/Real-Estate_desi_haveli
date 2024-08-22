import React from "react";
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import "../Blog/Blog.css";

const blogPosts = [
  {
    title: "The Ultimate Guide to Property Buying",
    summary:
      "Discover everything you need to know about buying a property, from finding the right home to closing the deal.",
    image: "https://sanchigroup.in/wp-content/uploads/2021/09/blog-6.jpg",
    link: "/blog/ultimate-guide-to-property-buying",
  },
  {
    title: "Top Strategies for Selling Your Home Fast",
    summary:
      "Learn the best strategies and tips to sell your home quickly and at the best price.",
    image:
      "https://media.licdn.com/dms/image/D4D12AQE3juYxrySPAw/article-cover_image-shrink_720_1280/0/1682575234578?e=2147483647&v=beta&t=HKeDfan4QUYAqBAnCC9RqLaAj4rNsbDFn1Y05--ruB4",
    link: "/blog/top-strategies-for-selling-your-home-fast",
  },
  {
    title: "How to Find the Perfect Rental Property",
    summary:
      "Get expert advice on how to find and secure the perfect rental property for your needs.",
    image:
      "https://media.licdn.com/dms/image/D4E12AQGcDEFbLyt-OQ/article-cover_image-shrink_720_1280/0/1682163715451?e=2147483647&v=beta&t=XHDkjRQUTycnMtNvhi4BY2jakMAzdxePcGCovv4_0Qs",
    link: "/blog/how-to-find-the-perfect-rental-property",
  },
  {
    title: "Essential Tips for Effective Property Management",
    summary:
      "Explore key tips and best practices for managing your property efficiently and effectively.",
    image:
      "https://gstatic.me/uploads/building_photos/25b245cac9e344709aebff1c8d0228b0.thumbnail_big.jpg",
    link: "/blog/essential-tips-for-effective-property-management",
  },
];

function Blog() {
  return (
    <div className="blog">
      <section className="blog-hero-section">
        <div className="hero-content">
          <h1>Our Blog</h1>
          <p>
            Stay updated with the latest trends, tips, and insights in the real
            estate world.
          </p>
        </div>
      </section>

      <section className="blog-content">
        <div className="posts">
          {blogPosts.map((post, index) => (
            <div className="post-card" key={index}>
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-info">
                <h2>{post.title}</h2>
                <p>{post.summary}</p>
                <a href={post.link} className="read-more">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        <aside className="sidebar">
          <div className="sidebar-widget">
            <h3>Recent Posts</h3>
            <ul>
              {blogPosts.map((post, index) => (
                <li key={index}>
                  <a href={post.link}>{post.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <footer className="blog-footer">
        <p>&copy; 2024 Your Real Estate Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Blog;
