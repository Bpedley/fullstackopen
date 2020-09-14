import React from "react";
import Part from "./Part";
import TotalExercises from "./TotalExercises";

const Content = ({ data }) => {
  const total = data.reduce((a, b) => a + b.exercises, 0);

  return (
    <div>
      {data.map(el => (
        <Part key={el.id} name={el.name} exercises={el.exercises} />
      ))}
      <TotalExercises total={total} />
    </div>
  );
};

export default Content;
