import React from "react";
import "../About/About.css";

function About() {
  return (
    <div className="about">
      <section className="abouthero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Discover the essence of DesiHaveli, where tradition meets modern
            living.
          </p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              At DesiHaveli, our mission is to bridge the gap between
              traditional values and modern real estate needs. We are dedicated
              to providing exceptional living spaces that reflect the cultural
              richness of India while embracing contemporary comforts. Our goal
              is to help you find your perfect home where tradition and
              modernity coexist harmoniously.
            </p>
          </div>

          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              Our vision is to be the leading real estate platform that
              celebrates India's heritage while innovating for the future. We
              aim to create a seamless experience for our clients, ensuring that
              every property we offer embodies quality, tradition, and a touch
              of modern elegance. We aspire to make every home a story of
              comfort and tradition.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img
              src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              alt="Team Member 1"
            />
            <h3>Mahesh Pal</h3>
            <p>CEO & Founder</p>
            <p>
              Mahesh is passionate about blending traditional values with modern
              living. With over 20 years in real estate, he leads our team with
              dedication and vision.
            </p>
          </div>
          <div className="team-member">
            <img
              src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
              alt="Team Member 2"
            />
            <h3>Nancy Verma</h3>
            <p>Head of Sales</p>
            <p>
              Nancy ensures that every client finds their dream home. Her
              expertise and commitment make her a key player in our team.
            </p>
          </div>
          <div className="team-member">
            <img
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              alt="Team Member 3"
            />
            <h3>Raj Patel</h3>
            <p>Customer Relations</p>
            <p>
              Raj is dedicated to providing exceptional customer service. His
              approachability and problem-solving skills make him an invaluable
              part of our team.
            </p>
          </div>
        </div>
      </section>

      <section className="our-history">
        <h2>Our History</h2>
        <p>
          DesiHaveli was founded with a vision to transform the real estate
          landscape by integrating traditional aesthetics with modern
          functionality. Our journey began with a simple idea: to offer homes
          that are both culturally rich and architecturally advanced. Over the
          years, we have grown into a trusted name in the industry, known for
          our commitment to excellence and customer satisfaction.
        </p>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to reach out
          to us. We are here to help you find your perfect home.
        </p>
      </section>
    </div>
  );
}

export default About;
