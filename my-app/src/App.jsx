import { useState } from 'react';
import LoginPage from './components/Login';

function App() {
  const [count, setCount] = useState(0);
  // const incrementCount = () => setCount(count + 1);

  return (
    <main>
      <LoginPage />
      {/* <FlipCardSwitch /> */}
    </main>
  );
}

export default App;
