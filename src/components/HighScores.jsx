import { useState } from "react";

export default function HighScores() {
  const [highScores, setHighScores] = useState([]);

  const handleAddRandom = () => {
    const newScore = Math.floor(Math.random() * 101);
    return setHighScores([...highScores, newScore]);
  };

  const handleRemoveMin = () => {
    const minScore = Math.min(...highScores);
    const filteredScores = highScores.filter((score) => score != minScore);
    return setHighScores(filteredScores);
  };

  const handleMultiply10 = () => {
    const multipliedScore = highScores.map((score) => score * 10);
    return setHighScores(multipliedScore);
  };

  return (
    <>
      <div>
        [
        {highScores.map((score, index) => (
          <span key={`${index}-${score}`}>{score} </span>
        ))}
        ]
      </div>
      <button onClick={handleAddRandom}>Add a random Number</button>
      <button onClick={handleRemoveMin}>Remove minimal score</button>
      <button onClick={handleMultiply10}>x10 all scores</button>
    </>
  );
}
