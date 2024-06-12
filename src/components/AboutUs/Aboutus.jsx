import React from "react";
import "./aboutus.scss";
import Footers from "../Footers/Footers";

const Aboutus = () => {
  return (
    <div>
      <div className="about-page">
        <header className="header">
          <div className="header-content">
            <h1>About</h1>
            <p>About Us</p>
          </div>
        </header>

        <div className="content">
          <aside className="sidebar">
            <h2>More About Us</h2>
            <ul>
              <li>Accessibility</li>
              <li>Child Ambassador</li>
              <li>Women Empowerment</li>
              <li>Data Protection</li>
              <li>Diversity</li>
              <li>Legal Advisors</li>
              <li>Our Board</li>
              <li>Our Fundraising Promise</li>
              <li>Our Medical Advisor</li>
              <li>Our Patron</li>
              <li>Our Values</li>
              <li>Standards</li>
              <li>Terms of Use</li>
            </ul>
          </aside>

          <main className="main-content">
            <blockquote>
              "You are providing a wonderful service and help. The world needs
              great souls like yours now more than ever. Thank you for caring
              and sharing!"
            </blockquote>
            <p>
              Hazel foundation provides support for families to help their
              children with disabilities and sickness.
            </p>
            <p>
              Hazel foundation is passionate about the relief of sickness and
              preservation of good physical and mental health of children and
              young people under the age of 25 years resident in Africa, Nigeria
              in particular, and without limitation, by providing and assisting
              in the provision of services and grants to enable them to obtain
              medical treatment, therapies and equipment which would not
              otherwise be available to them.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <blockquote>
              Hazel provides fundraising support for families in these areas:
            </blockquote>
            <p>
              Among its primary initiatives are mental health support,
              advocating for human rights, advancing education, and promoting
              women's empowerment. Through these efforts, the foundation aims to
              address systemic issues and uplift marginalized communities, both
              in urban centers and rural areas. Central to its mission is
              fostering community engagement and encouraging healthy living
              practices.
            </p>
            <blockquote className="highlight">
              By empowering local residents and promoting collective action, the
              foundation seeks to create sustainable change from the ground up.
              Governed by a constitution grounded in principles of integrity,
              transparency, and accountability, Haziel Charity Foundation
              operates with a commitment to ethical stewardship of resources and
              partnerships. Through strategic planning and collaboration, the
              foundation not only provides immediate assistance to those in need
              but also invests in long-term solutions. By empowering individuals
              with the skills and resources necessary for self-sufficiency, it
              aims to create lasting impact and build a more equitable society
              for future generations.
            </blockquote>
            <p>
              If we can help you further please contact us on our Freephone
              number: <a href="tel:+2348035963834">+2348035963834</a>
            </p>
            <div className="image-cards">
              <div className="card">
                <img src="/hazelfrontend/images/aboutimg1.jpeg" alt="Our Values" />
                <div className="card-title">Our Values</div>
              </div>
              <div className="card">
                <img src="/hazelfrontend/images/aboutimg2.jpeg" alt="Accessibility" />
                <div className="card-title">Accessibility</div>
              </div>
              <div className="card">
                <img
                  src="/hazelfrontend/images/aboutimg3.jpeg"
                  alt="Child Ambassador"
                />
                <div className="card-title">Child Ambassador</div>
              </div>
              <div className="card">
                <img src="/hazelfrontend/images/aboutimg4.jpeg" alt="Legal Advisors" />
                <div className="card-title">Legal Advisors</div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Aboutus;
