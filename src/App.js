
import Home from '../src/Pages/Home';
import CustomizeImage from './Pages/CustomizeImage';
import Temperature from './Pages/Temperature';
import './App.css';
import Nav from '../src/Component/Nav';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

     

    <Nav> </Nav>

    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/temperature" component={Temperature}> 
      </Route>
      <Route exact path="/customize-image" component={CustomizeImage}></Route>
    </Switch>
       
      </header>
    </div>
  );
}

export default App;
