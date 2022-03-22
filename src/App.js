import "./App.css";
import { useState } from "react";

function App() {
  const answerArray = [
    "Ask a question, then click me!",
    "It is certain",
    "Without a doubt",
    "You may rely on it",
    "Yes definitely",
    "It is decidedly so",
    "As I see it, yes",
    "Most likely",
    "Yes",
    "Outlook good",
    "Signs point to yes",
    "Reply hazy try again",
    "Better not tell you now",
    "Ask again later",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don’t count on it",
    "Outlook not so good",
    "My sources say no",
    "Very doubtful",
    "My reply is no",
  ];

  const [displayIndex, setDisplayIndex] = useState(0); // Initialize state with 0

  return (
    <section className="centered">
      <div className="outer-ball centered">
        <button className="inner-ball centered">
          {answerArray[displayIndex]}
          {/* Access the value specified by displayIndex */}
        </button>
      </div>
    </section>
  );
}

export default App;
