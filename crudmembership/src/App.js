import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <router>
      <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
      
        <div>
            <Route exact path='/create' component={Create} />
         </div>
          <div>
            <Route exact path='/read' component={Read} />
          </div>
        <div>
            <Route path='/update' component={Update} />
        </div>
        
      </div>
  </router>
  );
}

export default App;
