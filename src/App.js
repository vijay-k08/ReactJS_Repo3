import React,{ useState } from 'react';
import WordCounter from './WordCounter';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const textchanger = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="8"
        placeholder="Enter text here"
        value={text}
        onChange={textchanger}
      ></textarea>
      <WordCounter text={text} />
    </div>
  );
}

export default App;