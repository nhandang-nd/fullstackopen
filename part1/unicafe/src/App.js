import { useState } from "react";

const Header = ({ header }) => <h2>{header}</h2>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const StatisticLine = ({ name, value }) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total / 3;
  const positive = (good / total) * 100;
  if (total === 0) return <p>No feedback given</p>;
  return (
    <table>
      <tbody>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="all" value={total} />
        <StatisticLine name="average" value={average} />
        <StatisticLine name="positive" value={`${positive} %`} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header header={"give feedback"} />
      <Button text={"good"} onClick={() => setGood(good + 1)} />
      <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} onClick={() => setBad(bad + 1)} />
      <Header header={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
