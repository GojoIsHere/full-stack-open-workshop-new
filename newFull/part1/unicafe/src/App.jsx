import { useState } from "react";
const Stastistic = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;
  const avrage = total / 3;
  const positive = (good / total) * 100;
  if (total === 0) {
    return <div>No Feedback Given yet !!! </div>;
  }
  return (
    <div>
      <StastisticLine
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avrage={avrage}
        positive={positive}
      ></StastisticLine>
    </div>
  );
};
const StastisticLine = ({ good, neutral, bad, total, avrage, positive }) => {
  return (
    <div>
      <span>Good {good}</span>
      <br />
      <span>Neutral {neutral}</span>
      <br />
      <span>Bad {bad}</span>
      <br />
      <span>Total {total}</span>
      <br />
      <span>Average {avrage}</span>
      <br />
      <span>Positive {positive}</span>
      <br />{" "}
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>{" "}
      </div>
      <div>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      <div>
        <h1>statistics</h1>
      </div>
      <div>
        <Stastistic good={good} neutral={neutral} bad={bad}></Stastistic>
      </div>
    </div>
  );
};

export default App;
