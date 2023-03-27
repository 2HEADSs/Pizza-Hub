import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './PizzaDetails.css'
import * as pizzaService from '../../services/pizzaService'

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const PizzaDetails = () => {
    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({})
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        pizzaService.getOnePizza(pizzaId)
            .then(result => {
                setPizza(result)

            })
    }, [pizzaId]);

    const { user } = useContext(AuthContext);
    const isOwner = user?._id === pizza?._ownerId?._id;
    const hasUser = user._id ? true : false;
    const alreadyLiked = !!pizza?.likes?.includes(user?._id);

    const likeHandler = async (e) => {
        const response = await pizzaService.likePizza(pizza._id, user.accessToken);
        if (response._id) {
            console.log(response);
            setPizza({ ...response })
        }
    }

    // TODO remove from my likes
    return (
        < section className="details-wrapper" >
            <img src={pizza.img} alt={pizza.name} className="details-img" />
            <article className="details-info">

                <h2>Name: <span>{pizza.name}</span></h2>
                <h3>Made by: <span>{pizza?._ownerId?.username}</span></h3>
                <p>Type: <span>{pizza.type}</span></p>
                <p>Ingrediants: <span>{pizza.ingrediants}</span></p>
                <div className="times">
                    <i className="fa-regular fa-clock"></i>
                    <p>Prep: <span>{pizza.prepTime} minutes</span></p>
                    <i className="fa-regular fa-clock"></i>
                    <p>Cook: <span>{pizza.cookTime} minutes</span></p>
                </div>
                <p>How to prepare: <span>{pizza.recipe}</span></p>

                {isOwner && (
                    <Link to={`/catalog/edit/${pizza._id}`} className="edit-link">Edit</Link>
                )}
                {alreadyLiked && (
                    <h3 className="allready-liked">Already liked! </h3>

                )}
                {(!isOwner && hasUser && !alreadyLiked) && (
                    <>
                        <a className="add-to-favourite-heart" onClick={likeHandler} onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}><i className="fa-solid fa-heart"></i></a>

                        {isShown && (
                            <h3 className="add-to-favourite-info">Click on heart add in your favourite list! </h3>
                        )}
                    </>
                )}

            </article>
        </section >
    )
}