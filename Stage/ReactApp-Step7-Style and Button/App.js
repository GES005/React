 
import './App.css';
import {Greeting} from './Greeting';
import {PeopleList} from './PeopleList'; 

function App() { 
  let url="https://reactjs.org";
  const people_lst=[{name:"Geetha",Skill:"Java",org:"RBS"},
                    {name:"Josh Long",Skill:"Spring",org:"Pivotal"},
                    {name:"Ananth",Skill:"Linux",org:"RedHat"}]
   return (
    <div className="App">
      <header className="App-header">
    
        <Greeting person={{name:"Geetha",country:"India"}} ToDo="Java"/>
        <PeopleList people_lst={people_lst}/> 
        <button onClick={()=> (alert("Hello !!"))}>Click Me</button>
        <p style={{color: "blue",fontSize:'20px'}}>
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
