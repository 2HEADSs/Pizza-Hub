import { Routes, Route } from 'react-router-dom'
import { Fragment } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { PizzaList } from './components/PizzaList/PizzaList';
import { Login } from './components/Login/Login';
import { Catalog } from './components/Catalog/Catalog';
import { Register } from './components/Register/Register';
import { CreatePizza } from './components/CreatePizza/CreatePizza';


function App() {



  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<PizzaList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<CreatePizza />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      <Footer />
    </Fragment>

  );
}

export default App;
