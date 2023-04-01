import './Catalog.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService'
import { SinglePiza } from '../SinglePizza/SinglePizza';
import { Loading } from '../Loading/Loading';


export const Catalog = () => {
    const [allPizas, setPizza] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [hasItems, setHasItems] = useState(true)
    useEffect(() => {
        pizzaService.getAll()
            .then(pizzas => {
                // setPizza(pizzas.splice(0, 5))
                setPizza([])
                if (pizzas.length > 0) {
                    setLoaded(false)
                } else {
                    setLoaded(false)
                    setHasItems(false)
                }
            });
    }, []);
    return (
        <section className="catalog">
            <h2>All Pizzas</h2>
            <article className='card-wrapper'>
                {hasItems && (
                    allPizas.map(pizza =>
                        <SinglePiza pizza={pizza} key={pizza._id} />
                    )
                )}
            </article>
            {loaded && (
                <Loading />
            )}
            {!hasItems && (
                <h1>no content</h1>
            )}
        </section >
    );
}