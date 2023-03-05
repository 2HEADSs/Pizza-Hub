import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { PizzaList } from './components/PizzaList/PizzaList';
import { Login } from './components/Login/Login';


function App() {



  return (
    <Fragment>
      <Header/>
      <Routes>
      <Route path='/' element= {<PizzaList/>}/>
      <Route path='/login' element= {<Login/>}/>
      </Routes>
      <Footer/>
    </Fragment>

  );
}

export default App;
