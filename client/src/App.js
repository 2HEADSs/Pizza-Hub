import {Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { PizzaList } from './components/PizzaList/PizzaList';


function App() {



  return (
    <Fragment>
      <Header/>
      <Routes>
      <Route path='/' element= {<PizzaList/>}/>
      </Routes>
      <Footer/>
    </Fragment>

  );
}

export default App;
