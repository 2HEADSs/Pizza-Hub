import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import './PizzaDetails.css'
import * as pizzaService from '../../services/pizzaService'

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Loading } from '../Loading/Loading';


export const PizzaDetails = () => {
    const [alreadyLiked, setAlreadyLiked] = useState(undefined);
    const [pizza, setPizza] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [isShown, setIsShown] = useState(false);
    const [loaded, setLoaded] = useState(true);


    const navigate = useNavigate();
    const { pizzaId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        pizzaService.getOnePizza(pizzaId)
            .then(result => {
                if (result?._id) {
                    setLoaded(false)
                    setAlreadyLiked(result?.likes?.includes(user?._id));
                } else {
                    setLoaded(false);
                    navigate(`*`);

                }
                setPizza(result)
            })
            .catch(err => console.log(err))
    }, []);


    const isOwner = user?._id === pizza?._ownerId?._id;
    const hasUser = user._id ? true : false;

    const likeHandler = async (e) => {
        const response = await pizzaService.likePizza(pizza._id, user.accessToken);
        if (response._id) {
            setAlreadyLiked(true)
        }
    };

    const confirmHandler = () => {
        setShowConfirm(state => !state);

    };

    const deleteHandler = async (e) => {
        const result = await pizzaService.deletePizza(pizza._id, user.accessToken);
        setShowConfirm(state => !state);
        if (result?.message) {
            navigate(`/my-pizza`);
        }
    };

    const deleteFromFavourite = async (e) => {
        try {
            await pizzaService.removeFromFavourite(pizza._id, user.accessToken);
            navigate(`/my-favourite`);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {loaded && (
                <Loading />
            )}
            {!loaded > 0 && (
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
                            <>
                                <Link to={`/catalog/edit/${pizza._id}`} className="edit-link">Edit</Link>
                            </>
                        )}
                        {alreadyLiked && (
                            <h3 className="allready-liked">Already liked! </h3>

                        )}
                        {(!alreadyLiked && hasUser && !isOwner) && (
                            <>

                                <a className="add-to-favourite-heart" onClick={likeHandler} onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}><i className="fa-solid fa-heart"></i></a>

                                {isShown && (
                                    <h3 className="add-to-favourite-info">Click on heart add in your favourite list! </h3>
                                )}
                            </>
                        )}
                        {(alreadyLiked && hasUser && !isOwner) && (
                            <>
                                <button onClick={deleteFromFavourite} className="deleteFromFavourite">Delete from favourite</button>

                            </>
                        )}
                        {isOwner && !showConfirm && (
                            <button onClick={confirmHandler} className="delete-btn">Delete</button>

                        )}
                        {showConfirm && (
                            <>
                                <p className="confirm-question">Are you sure?</p>
                                <button onClick={deleteHandler} className="delete-confirm">YES</button>
                                <button onClick={confirmHandler} className="delete-not-consfirm">NO</button>
                            </>
                        )}
                    </article>
                </section >
            )}

        </>
    )
}