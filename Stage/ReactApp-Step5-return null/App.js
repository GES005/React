import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting';
function App() { 
  let url="https://reactjs.org";
   return (
    <div className="App">
      <header className="App-header">
    
      <Greeting person={{name:"Geetha",country:"India"}} ToDo="Java"/>
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World !!!
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
