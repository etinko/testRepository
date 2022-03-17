import './App.css';
import {Nav, Navbar, Container} from 'react-bootstrap';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <>
      <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">CRUD APP</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Create</Nav.Link>
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/update">Update</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
      </>
      
      <Routes>
        
          <Route exact path='/' element = {<Create/>}></Route>
          
          <Route exact path='/update' element = {<Update/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
