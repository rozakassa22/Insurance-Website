import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/home';
import { User } from './pages/users';
import { Agent } from './pages/agents';
import { Form } from './pages/forms';
import { Policy } from './pages/policy';


function App() {

  return (
    <div>
      
        <Router>
          <Routes>
            <Route path ="/" element = {<Home/>} />
            <Route path ="/users" element = {<User/>} />
            <Route path ="/agents" element = {<Agent/>} />
            <Route path ="/forms" element = {<Form/> } />
            <Route path ="/policy" element = {<Policy/>} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
