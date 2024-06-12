import React from "react";
import "./footers.scss";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const style = {
  textDecoration: "none",
  color: "#ccc",
  fontSize: "12px",
};
const Footers = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section branded">
          <h3>Hazel Charity</h3>
          <img
            src="/hazelfrontend/images/logo2.jpeg"
            alt="HAZEL Logo"
            height={50}
            width={50}
          />
        </div>
        <div className="footer-section">
          <h4>Data</h4>
          <ul>
            <li>Preferences</li>

            <li>Privacy</li>
            <li>Terms of Service</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Keep in touch</h4>
          <ul>
            <li>Phone: +2348035963834</li>
            <li>Email: hazelcharityfoundation@gmail.com</li>
            <li>No 15 Orizor Close Amike Abba, Abakaliki</li>
            <li>Ebonyi State Nigeria</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help</li>

            <li>Give us Feedback</li>
          </ul>
        </div>
        <div className="footer-section follow-us">
          <div className="social-icons">
            <i className="fab fa-facebook-f">
              <FaFacebookSquare />
            </i>
            <i className="fab fa-x-twitter">
              <FaSquareXTwitter />
            </i>
            <i className="fab fa-linkedin-in">
              <FaYoutubeSquare />
            </i>
          </div>

          <Link to="/donate" className="donate-button">
            Donate
          </Link>
          <p>Your generous donation matters</p>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="horizontal_line" />
        <p>
          © {date} Hazel Charity. All rights reserved.
          <Link style={style} to="https://www.azcodezone.com">
            {" "}
            Powered by Azcodezone
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footers;
