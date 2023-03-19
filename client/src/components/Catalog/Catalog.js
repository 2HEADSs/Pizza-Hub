import './Catalog.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizza-services'
import { SinglePiza } from "../singlePizza/SinglePizza";

export const Catalog = () => {
    const [allPizas, setPizza] = useState([]);
    useEffect(() => {
        pizzaService.getAll()
            .then(pizzas => setPizza(pizzas))
        }, []);
    return (
        <section className="catalog">
            <h2>All Pizzas</h2>
            <article className='card-wrapper'>
                {allPizas.map(pizza =>
                    <SinglePiza pizza={pizza} key={pizza._id} />
                )}
            </article>
        </section>
    )
                }