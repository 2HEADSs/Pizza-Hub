import { useEffect, useState } from "react";

import './MyPizzas.css'
import * as pizzaService from '../../services/pizzaService'
import { SinglePiza } from '../SinglePizza/SinglePizza';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export const MyPizzas = () => {
    const [myPizzas, setMyPizzas] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        pizzaService.getMyPizza(user._id)
            .then(pizzas => setMyPizzas(pizzas))
    }, []);

    return (
        <section className="catalog">
            <h2>All Pizzas</h2>
            <article className='card-wrapper'>
                {myPizzas.map(pizza =>
                    <SinglePiza pizza={pizza} key={pizza._id} />
                )}
            </article>
            {myPizzas.length === 0 && (
                <h3>No Pizzas</h3>
            )}
        </section>
    );
}