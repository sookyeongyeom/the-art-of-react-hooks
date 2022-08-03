import { useState } from 'react';
import './App.css';
import Average from './Average';
import AverageMemo from './AverageMemo';
import AverageCallback from './AverageCallback';
import Counter from './Counter';
import CounterReducer from './CounterReducer';
import Info from './Info';
import InfoReducer from './InfoReducer';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter />
      <hr />
      <button onClick={() => setVisible(!visible)}>
        {visible ? '숨기기' : '보이기'}
      </button>
      {visible && <Info />}
      <hr />
      <CounterReducer />
      <hr />
      <InfoReducer />
      <hr />
      <Average />
      <hr />
      <AverageMemo />
      <hr />
      <AverageCallback />
    </>
  );
}

export default App;
