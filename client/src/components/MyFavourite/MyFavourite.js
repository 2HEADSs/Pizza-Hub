import { useEffect, useState } from "react";

import './MyFavourite.css'
import * as pizzaService from '../../services/pizzaService'
import { SinglePiza } from '../SinglePizza/SinglePizza';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


export const MyFavourite = () => {
    const [myLikedPizzas, setmyLikedPizzas] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        pizzaService.getMyLikes(user.accessToken)
            .then(pizzas => setmyLikedPizzas(pizzas))
    }, []);

    return (
        <section className="my-favourite">
            <h2>Your favourites</h2>
            <article className='card-wrapper'>
                {myLikedPizzas.map(pizza =>
                    <SinglePiza pizza={pizza} key={pizza._id} />
                )}
            </article>
            {myLikedPizzas.length === 0 && (
                <h3>Maybe you don't like pizza!</h3>
            )}
        </section>
    );
}