import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event) {
    setSubmitted(false);
    setPlayerName(event.target.value);
  }

  function handleSubmitClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>
        Welcome {submitted && playerName !== "" ? playerName : "unknown entity"}
      </h2>
      <p>
        <input type="text" onChange={handleNameChange} value={playerName} />
        <button onClick={handleSubmitClick}>Set Name</button>
      </p>
    </section>
  );
}
