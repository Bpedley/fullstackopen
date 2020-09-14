import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course: { name, parts } }) => {
  return (
    <section>
      <Header name={name} />
      <Content data={parts} />
    </section>
  );
};

export default Course;
