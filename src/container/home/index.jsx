import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './style.css';
import profileImg from '../../assets/images/WhatsApp Image 2025-07-28 at 23.06.10_c2a1374c.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMepage = () => {
    navigate('/contact');
  };
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/LaibaSaeed.pdf';
    link.download = 'LaibaSaeed.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="home" className="home">
      <div className="home_container">
        
        {/* Left Side - Text */}
       <div className="home_text-wrapper">
  <h1>
    Hello, I'm Laiba.
    <br />
    Frontend Developer
  </h1>

  <Animate
    play
    duration={1.5}
    delay={1}
    start={{ transform: "translateY(550px)" }}
    end={{ transform: "translateY(0px)" }}
  >
    <div className="home_button-group">
      <button onClick={handleNavigateToContactMepage}>Hire Me</button>
       <button onClick={handleDownloadResume}>Download Resume</button>
    </div>
  </Animate>
</div>


        {/* Right Side - Image */}
        <div className="home_image-wrapper">
          <img src={profileImg} alt="Laiba Profile" />
        </div>
         

      </div>
    </section>
  );
};

export default Home;
