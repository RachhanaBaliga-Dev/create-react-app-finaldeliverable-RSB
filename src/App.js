import logo from './logo.svg';
import './App.css';
import TestComponent from "./components/TestComponent";
import {useState} from "react";

const Comp = () => {
  return <p>How many turkeys did you have this thanksgiving??</p>
}

function App() {
    const [count, setCount] = useState(1);
  return (
    <div className="App" id='root'>
            <TestComponent />

      <header className="App-header">
        <p>
         <u>SI 579 Fall 2025</u>
        </p>
          <p>
              Created by: <strong>Rachhana Saish Baliga ( uniqname: rachhana )</strong>
          </p>
        <Comp />
          <button
              onClick={() => setCount(count + 1)}
          > More!!! </button>
          <div>
              {'🦃'.repeat(count)}
          </div>
      </header>
    </div>
  );
}

export default App;
