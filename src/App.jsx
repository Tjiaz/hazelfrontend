import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Aboutus from "./components/AboutUs/Aboutus";
import Register from "./components/Register/Register";
import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/contact";

// import "./components/Navbar/navbar.scss";

import Spinner from "./components/spinner/Spinner";
// import Joinhaziel from "./components/Joinhaziel/Joinhaziel";
import Recentnews from "./components/RecentNews/Recentnews";
import Team from "./components/Team/Team";
import Sponsors from "./components/Sponsors/Sponsors";
import Footers from "./components/Footers/Footers";
import { FaBars, FaTimes } from "react-icons/fa";
import Campaign from "./components/Campaign/Campaign";
import { getQueryParams } from "../utils";
import Eventts from "./components/Eventts/Eventts";
import CampaignLearnMore from "./components/CampaignLearnMore/CampaignLearnMore";
import TeamCard from "./components/Team/Teamcard";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/home" || location.pathname === "/";
  const [Words, setWords] = useState("");
  const [remWords, setRemWords] = useState(false);
  const [showLinks, setShowLinks] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Split the entire text into words
    const allWords =
      "haziel - haziel Charity Foundation. A not-for-profit and non-political organization to firmly and solemnly revolve to provide for ourselves a constitution and to be governed by the provisions therein contained.".split(
        " "
      );

    const intervals = setInterval(() => {
      setRemWords((prevState) => !prevState);

      if (remWords) {
        const firstFiveWords = allWords.slice(0, 5).join(" ");
        setWords(firstFiveWords);
      }
    }, 10000);

    return () => {
      clearInterval(intervals);
    };
  }, [remWords]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 767.98) {
        setShowLinks(true); // Set to true for larger screens
      } else {
        setShowLinks(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const queryParams = getQueryParams();
    const message = queryParams.get("message");
    if (message) {
      setMessage(message);
      // Clear the query parameter after displaying the message
      const url = new URL(window.location);
      url.searchParams.delete("message");
      window.history.replaceState({}, document.title, url);
      // Set a timeout to clear the message after 5 seconds
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      // Clean up the timer if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {message && <p className="message">{message}</p>}
      <div className="top-section">
        <Link to="/joinus">
          <button className="join-btn">Contact </button>
        </Link>
        <img
          src="/hazelfrontend/images/logo2.jpeg"
          alt="haziel Logo"
          className="logo"
        />
        <button className="support-btn">Support</button>
      </div>
      <div className="description">
        <p>
          {remWords
            ? "A not-for-profit and non-political organization to firmly and solemnly revolve to provide for ourselves a constitution and to be governed by the provisions therein contained."
            : Words}
        </p>
      </div>

      <div className="navbar">
        {showLinks ? (
          <FaTimes className="bar-icon" onClick={() => setShowLinks(false)} />
        ) : (
          <FaBars className="bar-icon" onClick={() => setShowLinks(true)} />
        )}

        {showLinks && (
          <>
            <Link to="/home" className="nav-item">
              Home
            </Link>
            <Link to="/aboutus" className="nav-item">
              About
            </Link>

            <Link to="/eventts" className="nav-item">
              Events
            </Link>
            {/* <Link to="/contact" className="nav-item">
              Contact-us
            </Link> */}
            <Link to="/campaign" className="nav-item">
              Campaigns
            </Link>
            {/* <Link to="/register" className="nav-item">
              Register
            </Link> */}
          </>
        )}
      </div>
      {isHomePage && <Hero />}
      {isHomePage && <Intro />}
      {isHomePage && <Recentnews />}
      {isHomePage && <Team />}
      {isHomePage && <Sponsors />}
      {isHomePage && <Footers />}

      <Routes>
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Campaign" element={<Campaign />} />
        <Route path="/Eventts" element={<Eventts />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/campaign/:id" element={<CampaignLearnMore />} />
        <Route path="/campaign/:id" element={<TeamCard />} />
      </Routes>
    </>
  );
}

export default App;
