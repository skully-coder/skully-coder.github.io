import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      <h2>Education</h2>
      <div style={{ padding: "0 2rem" }}>
        <div style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h3 className="education">Manipal Institute of Technology</h3>
          <p>
            Bachelor&apos;s of Technology, Computer Science and Engineering
            <span style={{ float: "right" }}><b>2019-2023</b></span>
          </p>
        </div>
        <div style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
          <h3 className="education">Hiranandani Foundation School, Thane</h3>
          <p>
            Grade 12
            <span style={{ float: "right" }}><b>2017-2019</b></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
