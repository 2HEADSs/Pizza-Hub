import { useEffect, useState } from "react";

import './MyFavourite.css'
import * as pizzaService from '../../services/pizzaService'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Loading } from "../Loading/Loading";
import SinglePizza from "../SinglePizza/SinglePizza";


export const MyFavourite = () => {
    const [myLikedPizzas, setmyLikedPizzas] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [hasItem, setHasItems] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    const { user } = useContext(AuthContext);

    useEffect(() => {
        pizzaService.getMyLikes(user.accessToken)
            .then(data => {
                if (data.length > 0) {
                    setLoaded(false)
                    setHasItems(true)
                    setIsEmpty(false)
                } else {
                    setLoaded(false)
                    setIsEmpty(true)
                }
                setmyLikedPizzas(data)
            });
    }, []);

    return (
        <section className="my-favourite">
            <h2 className="my-favourite-header">Your favourites</h2>
            {hasItem && (
                <>
                    <article className='card-wrapper'>
                        {myLikedPizzas.map(pizza =>
                            <SinglePizza {...pizza} key={pizza._id} />
                        )}
                    </article>
                </>
            )}
            {loaded && (
                <Loading />
            )}
            {isEmpty && (
                <h3>Maybe you don't like pizza!</h3>
            )}
        </section>
    );
}