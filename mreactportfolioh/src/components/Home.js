import React from "react";
import Typed from "react-typed";


const Home = () => {
  return (
    <div class="home">
      <div class="main-info">
          <h1>Full-Stack Developer</h1>
          <Typed
              class="typed-text"
              strings={["HTML", "CSS", "JavaScript", "MongoDB", "mySQL", "NodeJs","ReactJS", "Full Stack", "MERN"]}
              typeSpeed={40}
              backSpeed={60}
              loop
              /> 
          </div>
        </div>
  )
}

export default Home;