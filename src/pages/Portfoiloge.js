import React from "react";
import Skillspage from "../components/Skills/Skillspage";
import About from "../components/About/HeroSection";
import Experince from "../components/Experince/Experince";
import Projectdetails from "../components/Projectdetails/Projectdetails";
import Education from "../components/Education/Education";
import Form from "../components/Form/Form";

function Portfoiloge() {
  return (
    <>
      <About />
      <Skillspage />
      <Experince />
      <Projectdetails />
      <Education />
      <Form />
    </>
  );
}

export default Portfoiloge;
