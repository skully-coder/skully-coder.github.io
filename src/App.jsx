/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";
import ContactForm from "./Components/ContactForm";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Abhinav Agrawal",
  title: "Application Developer",
  email: "abhinav.hfs@gmail.com",
  gitHub: "skully-coder",
  instagram: "abhi_1.7.0.9",
  linkedIn: "abhinav-agrawal-5baaa71a0",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education />
      <Portfolio />
      <ContactForm />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
