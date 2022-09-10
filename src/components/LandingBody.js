import React from "react";
import "../css/landing-body.css";
import Background from "./Background";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import recruitment from "../img/recruitment.png";

const LandingBody = () => {
  
  return (
    <div class="parent-element">
      {/* <!-- Dynamic Title --> */}
      <Helmet>
        <title>Get Your Certificate</title>
      </Helmet>
      <Background
        clipType="clipping-landing"
        overlayColor="bgcolor-landing"
      ></Background>
      <div id="landing_title">
        <lable id="landing_title_right1">Get Your Certificate</lable> <br />
        <lable id="landing_title_right2">ONE for ALL; ALL for ONE</lable>
      </div>
      
      <div className="landing_intro" id="about">
        <h1 id="landing_intro_title">One for All, All for One</h1>
        <div id="landing_intro_line"></div>
        <div className="LI_content">
          <div className="LI_image"></div>
          <div className="LI_context">
          Join our community and work as an intern. In stead of running hither and thither for internships. Join us as we bring to you the scope of getting and working with different organizations all at one place.
No need of paying bulk amounts just to earn few certificates. We cordially take the charge to reduce your stress and bring opportunities to you.
          </div>
        </div>
      </div>

      {/* Recruitment Page */}

      <div id="certificates">
      <h1 id="upcomingEvent">Certificates</h1>
            <div id="landing_line_Event"></div>
            <div id="event">
              <div id="event_img">
                <img src={recruitment}/>
              </div>
              <div id="event_context">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScsKARGwLuDcpEPvPMh3quBIlZ7i6kUHbIRxSzQ6PxFuH-SEg/viewform"
                  id="register_button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>

                {/* <a href="/RegistrationForm" id="watch_now_button">Watch Now</a> */}
              </div>
             
            </div>    

            </div> 
      
      <div id="companies">
      <h1 id="landingProjectsDisplay">Companies</h1>
      <div id="landing_line_Project"></div>
      <div id="projects">
        <div class="project_card">
          <a href="/projects" class="project_card">
            <div class="project_img">
              <div id="project_img_display1"></div>
            </div>
          </a>
          <div class="project_title">Lorem Ipsum</div>
          <div class="project_desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
        <div class="project_card">
          <a href="/projects" class="project_card">
            <div class="project_img">
              <div id="project_img_display2"></div>
            </div>
          </a>
          <div class="project_title">Lorem Ipsum</div>
          <div class="project_desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </div>
        </div>
                
      </div>
      
      </div>


      <section class="landing-scroll-branding">
        <div class="scroll designers org">
          <div>
            <span class="filled">Designers</span> <span>Developers</span>
            <span>Programmers</span> <span>Creators</span>
            <span>Enthusiasts</span> <span class="filled">Designers</span>
            <span>Developers</span> <span>Programmers</span>
            <span>Creators</span> <span>Enthusiasts</span>
          </div>
          <div>
            <span class="filled">Designers</span> <span>Developers</span>
            <span>Programmers</span> <span>Creators</span>
            <span>Enthusiasts</span> <span class="filled">Designers</span>
            <span>Developers</span> <span>Programmers</span>
            <span>Creators</span> <span>Enthusiasts</span>
          </div>
        </div>
        <div class="scroll developers alt">
          <div>
            <span>Designers</span> <span class="filled">Developers</span>
            <span>Programmers</span> <span>Creators</span>
            <span>Enthusiasts</span> <span>Designers</span>
            <span class="filled">Developers</span> <span>Programmers</span>
            <span>Creators</span> <span>Enthusiasts</span>
          </div>
          <div>
            <span>Designers</span> <span class="filled">Developers</span>
            <span>Programmers</span> <span>Creators</span>
            <span>Enthusiasts</span> <span>Designers</span>
            <span class="filled">Developers</span> <span>Programmers</span>
            <span>Creators</span> <span>Enthusiasts</span>
          </div>
        </div>
        <div class="scroll programmers org">
          <div>
            <span>Designers</span> <span>Developers</span>
            <span class="filled">Programmers</span> <span>Creators</span>
            <span>Enthusiasts</span> <span>Designers</span>
            <span>Developers</span> <span class="filled">Programmers</span>
            <span>Creators</span> <span>Enthusiasts</span>
          </div>
          <div>
            <span>Designers</span> <span>Developers</span>
            <span class="filled">Programmers</span> <span>Creators</span>
            <span>Enthusiasts</span> <span>Designers</span>
            <span>Developers</span> <span class="filled">Programmers</span>
            <span>Creators</span> <span>Enthusiasts</span>
          </div>
        </div>
        <div class="scroll creators alt">
          <div>
            <span>Designers</span> <span>Developers</span>
            <span>Programmers</span> <span class="filled">Creators</span>
            <span>Enthusiasts</span> <span>Designers</span>
            <span>Developers</span> <span>Programmers</span>
            <span class="filled">Creators</span> <span>Enthusiasts</span>
          </div>
          <div>
            <span>Designers</span> <span>Developers</span>
            <span>Programmers</span> <span class="filled">Creators</span>
            <span>Enthusiasts</span> <span>Designers</span>
            <span>Developers</span> <span>Programmers</span>
            <span class="filled">Creators</span> <span>Enthusiasts</span>
          </div>
        </div>
        <div class="scroll enthusiasts org">
          <div>
            <span>Designers</span> <span>Developers</span>
            <span>Programmers</span> <span>Creators</span>
            <span class="filled">Enthusiasts</span> <span>Designers</span>
            <span>Developers</span> <span>Programmers</span>
            <span>Creators</span> <span class="filled">Enthusiasts</span>
          </div>
          <div>
            <span>Designers</span> <span>Developers</span>
            <span>Programmers</span> <span>Creators</span>
            <span class="filled">Enthusiasts</span> <span>Designers</span>
            <span>Developers</span> <span>Programmers</span>
            <span>Creators</span> <span class="filled">Enthusiasts</span>
          </div>
        </div>
      </section>
      <Footer bgColor="footer-landing"></Footer>
    </div>
  );
};

export default LandingBody;
