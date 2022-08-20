import logo from './logo.svg';
import './App.css';
import Greeting from './companents/pure/Greeting';
import GreetingF from './companents/pure/GreetingF';
import TaskListComponent from './companents/container/task_list';
import ContactoListComponent from './companents/container/contacto_list';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Greeting name={"Noa"}></Greeting>
        <GreetingF name={"Noita"}></GreetingF>
        <ContactoListComponent></ContactoListComponent>
        <TaskListComponent></TaskListComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
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
