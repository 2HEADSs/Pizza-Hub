import { Routes, Route } from 'react-router-dom'
import { Fragment } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Catalog } from './components/Catalog/Catalog';
import { Register } from './components/Register/Register';
import { CreatePizza } from './components/CreatePizza/CreatePizza';
import { HomeList } from './components/HomeList/HomeList';
import { PizzaDetails } from './components/PizzaDetails/PizzaDetails';
import { EditPizza } from './components/EditPizza/EditPizza';


function App() {



  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<HomeList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/create' element={<CreatePizza />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/details/:pizzaId' element={<PizzaDetails />} />
        <Route path='/catalog/edit/:pizzaId' element={<EditPizza />} />
      </Routes>
      <Footer />
    </Fragment>

  );
}

export default App;
