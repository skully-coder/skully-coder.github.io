/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Cupidity",
    description:
      "Cupidity is a dating app that helps you find your perfect match based on your music choices. It uses Spotify's API to fetch your top artists and tracks and then matches you with people who have similar music taste.",
    url: "https://play.google.com/store/apps/details?id=in.co.cupidity&hl=en_IN&gl=US",
  },
  {
    title: "CollegeScape",
    description: "An app to connect students of a college (a tenant) for academic & social needs. ",
    url: "https://github.com/skully-coder/CollegeScape",
  },
  {
    title: "PrideStore",
    description:
      "An application to tackle the discrimination faced by people in the LGBTQ+ community, in the business sector. ",
    url: "https://devpost.com/software/pride-store",
  },
  {
    title: "Sian",
    description:
      "Sian is a travel app that gamifies the travel experience. Users can take pictures of the places they visit, score points, and redeem them for discounts at local businesses. The app also provides travel recommendations and helps users discover new places.",
    url: "https://devpost.com/software/sian",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="box"
                style={{
                  marginBottom: "1rem",
                  padding: "1rem",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  height: "200px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                <p className="small" style={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis" }}>
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
