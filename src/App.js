import React from 'react';
import './App.css';
import LineChart from './components/LineChart';

function App() {
  let categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  return (
    <div className="App">
      <LineChart title="Product Trends by Month" categories = {categories}  name="Desktops" data={[10, 41, 35, 51, 49, 62, 69, 91, 148, 240]}/>
    </div>
  );
}

export default App;




// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>