import './App.css';
import BsState from './Context/BsState';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BsState>
      <Home/>
      </BsState>
    </div>
  );
}

export default App;
