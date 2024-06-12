import React, { useState } from "react";
import "./intro.scss";

const Intro = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  const fulltext = `Founded with a profound commitment to societal welfare, the Haziel
              Charity Foundation stands as a beacon of hope in Ebonyi State,
              Nigeria. This nonprofit, apolitical organization is dedicated to a
              broad spectrum of humanitarian causes, embodying principles of
              compassion and social justice. Among its primary initiatives are
              mental health support, advocating for human rights, advancing
              education, and promoting women's empowerment. Through these
              efforts, the foundation aims to address systemic issues and uplift
              marginalized communities, both in urban centers and rural areas.
              Central to its mission is fostering community engagement and
              encouraging healthy living practices. By empowering local
              residents and promoting collective action, the foundation seeks to
              create sustainable change from the ground up. Governed by a
              constitution grounded in principles of integrity, transparency,
              and accountability, Haziel Charity Foundation operates with a
              commitment to ethical stewardship of resources and partnerships.
              Through strategic planning and collaboration, the foundation not
              only provides immediate assistance to those in need but also
              invests in long-term solutions. By empowering individuals with the
              skills and resources necessary for self-sufficiency, it aims to
              create lasting impact and build a more equitable society for
              future generations.`;

  const shortText = fulltext.split(" ").slice(0, 100).join(" ") + "...";

  return (
    <main>
      <section className="intro-section">
        <div className="title">
          <h2>Introduction to Haziel Charity Foundation</h2>
          <div className="underline"></div>
        </div>
        <div className="video-text-container">
          <div className="video-container">
            {/* Replace with your video component */}
            <div className="video-placeholder">
              <video
                controls
                autoPlay
                loop
                muted
                poster="poster.jpg"
                className="responsive_video"
              >
                <source src="/hazelfrontend/video.mp4" type="video/mp4" />
                <p>Your browser does not support the video tag.</p>
              </video>
            </div>
          </div>
          <div className="text-container">
            <p>{isExpanded ? fulltext : shortText}</p>
            <button onClick={toggleText}>
              {isExpanded ? "Readless" : "Readmore"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Intro;
