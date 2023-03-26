import { Routes, Route } from 'react-router-dom'

import './App.css';
import { AuthContext } from './context/AuthContext';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Login } from './components/Login/Login';
import { Catalog } from './components/Catalog/Catalog';
import { Register } from './components/Register/Register';
import { CreatePizza } from './components/CreatePizza/CreatePizza';
import { HomeList } from './components/HomeList/HomeList';
import { PizzaDetails } from './components/PizzaDetails/PizzaDetails';
import { EditPizza } from './components/EditPizza/EditPizza';
import { useLocalStorage } from './hooks/localStorage';
import { MyPizzas } from './components/MyPizzas/MyPizzas';


function App() {
  const [user, setUser] = useLocalStorage('auth', {})

  const setUserSession = (data) => {
    setUser({ ...data })
  }

  return (
    <>
      <AuthContext.Provider value={{ setUserSession, user }}>
        <Header />
        <Routes>
          <Route path='/' element={<HomeList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/my-pizza' element={<MyPizzas />} />
          <Route path='/create' element={<CreatePizza />} />
          <Route path='/catalog/details/:pizzaId' element={<PizzaDetails />} />
          <Route path='/catalog/edit/:pizzaId' element={<EditPizza />} />
        </Routes>
      </AuthContext.Provider>
      <Footer />
    </>

  );
}

export default App;
