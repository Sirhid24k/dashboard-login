import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <main>
      <p className="text-3xl font-bold underline">Hello React</p>
      <button onClick={incrementCount}>Click me!</button>
      <div>
        <p>Count: {count}</p>
      </div>
    </main>
  );
}

export default App;
