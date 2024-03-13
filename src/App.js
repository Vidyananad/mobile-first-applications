import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.js'
import Jokes from './Jokes.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <center>
    <Router>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path="/jokes" Component={Jokes}/>
      </Routes>
     </Router>
     </center>
    </div>
  );
}

export default App;
