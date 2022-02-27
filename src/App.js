import './App.css';
import { useState } from 'react';

function App() {

  const answerArray = ['Ask a question, then click me!', 'It is certain', 'Without a doubt', 'You may rely on it', 'Yes definitely', 'It is decidedly so', 'As I see it, yes', 'Most likely', 'Yes', 'Outlook good', 'Signs point to yes', 'Reply hazy try again', 'Better not tell you now', 'Ask again later', 'Cannot predict now', 'Concentrate and ask again', 'Don’t count on it', 'Outlook not so good', 'My sources say no', 'Very doubtful', 'My reply is no'];

  const [display, setDisplay] = useState(0);

  const changeState = (() => {
  });



  return (
      <section className="centered">
        <div className="outer-ball centered">

          <button className="inner-ball centered" onClick={changeState}>
            {answerArray[display]}
          </button>
        </div>
      </section>
  );
}

export default App;
