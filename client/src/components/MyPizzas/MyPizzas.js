import { useEffect, useState } from "react";

import './MyPizzas.css'
import * as pizzaService from '../../services/pizzaService'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Loading } from "../Loading/Loading";
import SinglePizza from "../SinglePizza/SinglePizza";


export const MyPizzas = () => {
    const [myPizzas, setMyPizzas] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [hasItem, setHasItems] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const { user } = useContext(AuthContext);

    useEffect(() => {
        pizzaService.getMyPizza(user.accessToken)
            .then(data => {
                if (data.length > 0) {
                    setLoaded(false)
                    setHasItems(true)
                    setIsEmpty(false)
                } else {
                    setLoaded(false)
                    setIsEmpty(true)
                }
                setMyPizzas(data)
            })
    }, []);

    return (
        <section className="catalog">
            <h2 className="my-pizzas-header" data-testid="precious">Your precious</h2>
            {hasItem && (
                <article className='card-wrapper'>
                    {myPizzas.map(pizza =>
                        <SinglePizza {...pizza} key={pizza._id} />
                    )}
                </article>
            )}
            {loaded && (
                <Loading />
            )}
            {isEmpty && (
                <h3>You don't have own pizzas!!!</h3>
            )}
        </section>
    );
}