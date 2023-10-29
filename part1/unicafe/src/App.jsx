import { useState } from "react";
import { Statistics } from "./Statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button
        onClick={() => {
          setGood((prev) => !prev);
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          setNeutral((prev) => !prev);
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          setBad((prev) => !prev);
        }}
      >
        Bad
      </button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
