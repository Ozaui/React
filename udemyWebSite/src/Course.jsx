import React from "react";

function Course({ course }) {
  const { id, title, desc, price, link, image } = course;
  return (
    <>
      <div className="course">
        <img src={image} className="course-image"></img>
        <h4 className="course-title">{title}</h4>
        <h5 className="course-desc">{desc}</h5>
        <h3>{price}TL</h3>
        <h6>
          <a href={link}>Click to go to link</a>
        </h6>
      </div>
    </>
  );
}

export default Course;
