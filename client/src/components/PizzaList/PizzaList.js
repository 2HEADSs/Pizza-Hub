import './PizzaList.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../pizza-services'
import { SinglePiza } from "../singlePizza/SinglePizza";

export const PizzaList = () => {
    const [allPizas, setPizza] = useState([]);
    useEffect(() => {
        pizzaService.getAll()
            .then(pizzas => setPizza(pizzas))
    }, [])

    return (
        <section className="last-added">
            <h2>Last added</h2>
            <article className='card-wrapper'>
                {allPizas.slice(-5 ).map(pizza =>
                    <SinglePiza pizza={pizza} key={pizza._id} />
                )}
            </article>
        </section>
    )
}