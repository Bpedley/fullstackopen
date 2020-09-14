import React, { useEffect, useState } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(6).fill(0));
  const [maxVotes, setMaxVotes] = useState(null);

  useEffect(() => {
    const getMaxVotes = () => {
      const max = Math.max(...votes);
      return max
        ? votes[maxVotes] === max
          ? null
          : setMaxVotes(votes.indexOf(max))
        : null;
    };
    getMaxVotes(); // eslint-disable-next-line
  }, [votes]);

  const handleNextAnecdote = () => {
    const random = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(random);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      {votes[maxVotes] ? (
        <>
          <h1>Anecdote with most votes</h1>
          <p>{anecdotes[maxVotes]}</p>
        </>
      ) : null}
    </>
  );
};

export default App;
