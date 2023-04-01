import './Catalog.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService'
import { SinglePiza } from '../SinglePizza/SinglePizza';
import { Loading } from '../Loading/Loading';


export const Catalog = () => {
    const [allPizas, setPizza] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [hasItems, setHasItems] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)
    useEffect(() => {
        pizzaService.getAll()
            .then(data => {
                if (data.length > 0) {
                    setLoaded(false)
                    setHasItems(true)
                    setIsEmpty(false)
                } else {
                    setLoaded(false)
                    setIsEmpty(true)
                }
                setPizza(data.splice(0, 5));
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
            {isEmpty && (
                <h1>no content</h1>
            )}
        </section >
    );
}