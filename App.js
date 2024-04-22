import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = ['Click me', 'Click me please', 'Hit me', 'Click me again'];

function App() {
  const [count, setCount] = useState(0);
  const icrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={icrementCount} text={text} key={index} />;
      })}

      {/* {[
        <Button onClick={icrementCount} text={texts[0]} />,
        <Button onClick={icrementCount} text={texts[1]} />,
        <Button onClick={icrementCount} text={texts[2]} />,
        <Button onClick={icrementCount} text={texts[3]} />,
      ]} */}
    </div>
  );
}

export default App;
