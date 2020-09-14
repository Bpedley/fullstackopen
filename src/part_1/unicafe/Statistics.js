import React from "react";
import Statistic from "./Statistic";

const Statistics = ({
  data: { good, neutral, bad, total, average, positive }
}) => {
  if (!total) return <p>No feedback given</p>;

  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </tbody>
    </table>
  );
};

export default Statistics;
