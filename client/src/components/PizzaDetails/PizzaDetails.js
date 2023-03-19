import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './PizzaDetails.css'
import * as pizzaService from '../../services/pizza-services'


export const PizzaDetails = () => {
    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({})
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        pizzaService.getOnePizza(pizzaId)
            .then(result => {
                setPizza(result)
            })
    }, [pizzaId])


    return (
        < section className="details-wrapper" >
            <img src={pizza.img} alt={pizza.name} className="details-img" />
            <article className="details-info">

                <h2>Name: <span>{pizza.name}</span></h2>
                <h3>Made by: </h3>
                <p>Type: <span>{pizza.type}</span></p>
                <p>Ingrediants: <span>{pizza.ingrediants}</span></p>
                <div className="times">
                    <i className="fa-regular fa-clock"></i>
                    <p>Prep: <span>{pizza.prepTime} minutes</span></p>
                    <i className="fa-regular fa-clock"></i>
                    <p>Cook: <span>{pizza.cookTime} minutes</span></p>
                </div>
                <p>How to prepare: <span>{pizza.recipe}</span></p>

                 <Link to={`/catalog/edit/${pizza._id}`} className="edit-link">Edit</Link>
                <a className="add-to-favourite-heart" onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}><i className="fa-solid fa-heart"></i></a>

                {isShown && (
                    <h3 className="add-to-favourite-info">Click on heart add in your favourite list! </h3>
                )}
            </article>
        </section >
    )
}