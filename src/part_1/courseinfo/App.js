import React from "react";

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ parts }) => {
  return (
    <>
      <Part content={parts[0]} />
      <Part content={parts[1]} />
      <Part content={parts[2]} />
    </>
  );
};

const Part = ({ content }) => {
  return (
    <p>
      {content.name} {content.exercises}
    </p>
  );
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises {parts.reduce((acc, curr) => acc + curr.exercises, 0)}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
