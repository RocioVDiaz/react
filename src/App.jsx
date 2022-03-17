import Titulo from './components/titulo/Titulo';
import NavBar from './components/NavBar/NavBar';
import logo from './logo.svg';
import './App.css';


function App() {

  const style = { backgroundColor: 'blue'}

  return (
    <div className="App" style={ style }>

      <NavBar/>
      
        <img src={logo} className="App-logo" alt="logo" />
       
    <input />

    <div>
      <Titulo/>
    </div>

    </div>
  );
}

export default App;
