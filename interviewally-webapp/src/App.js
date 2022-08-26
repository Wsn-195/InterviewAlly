
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home  from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} ></Route>
        <Route path="/signin" element={<SigninPage/>} ></Route>
        </Routes>
      
      </Router> 
    </div>
  );
}

export default App;
