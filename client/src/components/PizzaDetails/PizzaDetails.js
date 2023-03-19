import { useParams } from "react-router-dom";

import * as pizzaService from '../../services/pizza-services'
import { useEffect, useState } from "react";


export const PizzaDetails = () => {
    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({})

    useEffect(() => {
        pizzaService.getOnePizza(pizzaId)
            .then(result => {
                setPizza(result)
            })
    }, [pizzaId])

    return (
        /* <h1>Pizza Details {pizza._id}</h1>
            <h1>Pizza Details {pizza.name}</h1> */
        < section className="details-wrapper" >
            <img src={pizza.img} alt={pizza.name} className="details-img" />
            <article className="details-info">
                <h2>Name: {pizza.name}</h2>
                <p>Type: {pizza.type}</p>
                <p>Ingrediants:{pizza.ingrediants}</p>
                <p>Preparation time: {pizza.prepTime} minutes</p>
                <p>Cooking time: {pizza.cookTime} minutes</p>
                <p>How to prepare: {pizza.recipe}</p>
            </article>
        </section >
    )
}