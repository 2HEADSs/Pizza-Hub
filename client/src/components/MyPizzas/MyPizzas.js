import { useEffect, useState } from "react";

import './MyPizzas.css'
import * as pizzaService from '../../services/pizzaService'
import { SinglePiza } from '../SinglePizza/SinglePizza';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export const MyPizzas = () => {
    const [myPizzas, setMyPizzas] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        pizzaService.getMyPizza(user.accessToken)
            .then(pizzas => setMyPizzas(pizzas))
    }, []);

    return (
        <section className="catalog">
            <h2>{user.username} pizzas</h2>
            <article className='card-wrapper'>
                {myPizzas.map(pizza =>
                    <SinglePiza {...pizza} key={pizza._id} />
                )}
            </article>
            {myPizzas.length === 0 && (
                <h3>You don't have own pizzas!!!</h3>
            )}
        </section>
    );
}