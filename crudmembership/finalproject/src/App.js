import './App.css';
import Create from './components/Create';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Update from './components/Update';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import MainNavbar from './components/MainNavbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import ContactUs from './components/ContactUS';
import ReadOnly from './components/ReadOnly';


function App() {
  return (
    <Router>
      <>
  <MainNavbar/>
  
      </>
      
      <Routes>
        
          <Route exact path='/' element = {<Home/>}></Route>
          <Route exact path='/login' element = {<Login/>}></Route>
          <Route exact path='/register' element = {<Register/>}></Route>
          <Route exact path='/Home' element = {<Home/>}></Route>
          <Route exact path='/slider' element = {<ImageSlider slides={SliderData}/>}></Route>
          <Route exact path='/ContactUs' element = {<ContactUs/>}></Route>
          <Route exact path='/about' element = {<About/>}></Route>
          <Route exact path='/create' element = {<Create/>}></Route>
          <Route exact path='/update' element = {<Update/>}></Route>
          <Route exact path='/readOnly' element = {<ReadOnly/>}></Route>
      </Routes>
      <>
      <Footer/>
      </>
    </Router>

  );
}

export default App;
