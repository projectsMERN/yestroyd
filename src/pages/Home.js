import React from "react";
import "../App.css";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
  return (
    <div className="Home">
      <Header />
      <HeroSection />
      <ProgramsSection />
      <ResourcesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

const Header = () => (
  <header>
    <div className="container">
      <h1>Yestoryd</h1>
      <nav>
        <a href="#programs">Programs</a>
        <a href="#resources">Resources</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="hero">
    <div className="container">
      <h2>Innovative Educational Platform for Children</h2>
      <p>
        Yestoryd is dedicated to fostering a love for reading and literacy in young children.
        Discover our range of educational programs and resources for kids and caregivers.
      </p>
      <a href="#programs" className="btn">Explore Programs</a>
    </div>
  </section>
);

const ProgramsSection = () => (
  <section id="programs" className="programs">
    <div className="container">
      <h2>Our Programs</h2>
      <div className="programs-grid">
        <div className="program">
          <h3>
            <a href="/coming-soon" className="program-link" target="_blank" rel="noopener noreferrer">
              Reading Lessons
            </a>
          </h3>
          <p>Phonics-based reading lessons for children aged 0-12 years.</p>
        </div>
        <div className="program">
          <h3>
            <a href="/coming-soon" className="program-link" target="_blank" rel="noopener noreferrer">
              Creative Writing
            </a>
          </h3>
          <p>Boost your child's creativity through engaging writing exercises.</p>
        </div>
        <div className="program">
          <h3>
            <a href="/coming-soon" className="program-link" target="_blank" rel="noopener noreferrer">
            {/* <a href="/audiobook-portal" className="program-link" target="_blank" rel="noopener noreferrer"> */}
              Storytelling Workshops
            </a>
          </h3>
          <p>Fun and interactive storytelling workshops to enhance imagination.</p>
        </div>
        <div className="program">
          <h3>
            <a href="/coming-soon" className="program-link" target="_blank" rel="noopener noreferrer">
              Library Services
            </a>
          </h3>
          <p>Access to a wide range of children's books through our membership program.</p>
        </div>
      </div>
    </div>
  </section>
);


const ResourcesSection = () => (
  <section id="resources" className="resources">
    <div className="container">
      <h2>Reading Resources</h2>
      <p>Download materials, book recommendations, and activities for kids and parents.</p>
      <div className="resource-grid">
        <div className="resource">
          <h3>Downloadable Materials</h3>
        </div>
        <div className="resource">
          <h3>Book Recommendations</h3>
        </div>
        <div className="resource">
          <h3>Educational Podcasts</h3>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="testimonials">
    <div className="container">
      <h2>Success Stories</h2>
      <div className="testimonial">
        <p>"Yestoryd's reading lessons have transformed my child's learning experience!"</p>
        <h4>— Parent of a 6-year-old</h4>
      </div>
      <div className="testimonial">
        <p>"The storytelling workshops are fantastic! My students love them."</p>
        <h4>— Teacher</h4>
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form fields
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const message = e.target.elements[2].value;

    // Construct the email
    const recipient = "rishilshindework@gmail.com";
    const subject = `New message from ${name} Please Check`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Create a mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Redirect to the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Have any questions? Reach out to us!</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
};


const Footer = () => (
  <footer>
    <div className="container">
      <p>&copy; 2024 Yestoryd. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Home;