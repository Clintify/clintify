import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p> */}
          <span><code>Thanks for visiting Clintify Cleaning Service.</code></span>
          <span><code>Stay tuned, we are coming soon!</code></span>
        {/* </p> */}
      </header>
    </div>
  );
}

export default App;
