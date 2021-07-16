import Settings from './components/Settings';
import Question from './components/Question';

import './App.css';
import FetchButton from './components/FetchButton';
import FinalScreen from './components/Finalscreen';

function App() {
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <Settings />
      <Question />
      <FetchButton />
      <FinalScreen />
    </div>
  );
}

export default App;
