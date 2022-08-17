import React from "react";
import "../css/footer.css";

function FooterLanding(props) {  

  return (
    <>
      <div id="contact">
        <div className={`footer ${props.bgColor}`}>
          <div class="grid-container">
            <div class="wanna-talk-to-us">
              <h1>Wanna talk to us?</h1>
            </div>
            <div class="write-to-us">
              <form id="contact-us">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                ></input>
                <textarea
                  type="text"
                  id="message"
                  name="messsage"
                  placeholder="Start typing!"
                ></textarea>
                {/* TODO: style the button */}
                <div className="send-btn-container">
                  <input type="submit" value="Send" className="send"></input>
                </div>
              </form>
            </div>
            <div class="links">
              <ul class="footer-links flex-container">
                <li>
                  <a
                    href="https://www.linkedin.com/company"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/channel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-info">
              <div class="desc">
                <div class="description1">
                  <p class="contact strong">Feel free to contact us</p>
                  <br></br>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>Lorem Ipsum</p>
                  <p>751024</p>
                  <p>Email: Lorem Ipsum@gmail.com</p>
                  <p>Phone: +91 Lorem Ipsum</p>
                  <br></br>
                </div>
                <div>
                  <div class="description3">
                    <p class="guideline strong">General Guidelines</p>
                    <br></br>
                    <p>Code of Conduct</p>
                    <br></br>
                    <br></br>
                  </div>
                  <div class="description2">
                    <p class="community strong">Community</p>
                    <br></br>
                    <p>GFG KIIT</p>
                    <br></br>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterLanding;
