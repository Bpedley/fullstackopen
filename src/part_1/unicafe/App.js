import React, { useState, useEffect } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositive(total ? ((good / total) * 100).toFixed(1) : 0);
    setAverage(total ? ((good - bad) / total).toFixed(1) : 0);
  }, [good, neutral, bad, total]);

  return (
    <>
      {/* <Feedback /> */}
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)}>good</Button>
      <Button handleClick={() => setNeutral(neutral + 1)}>neutral</Button>
      <Button handleClick={() => setBad(bad + 1)}>bad</Button>
      <h1>statistics</h1>
      <Statistics data={{ good, neutral, bad, total, average, positive }} />
    </>
  );
};

export default App;
