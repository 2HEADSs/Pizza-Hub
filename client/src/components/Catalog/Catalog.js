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
                // setPizza(data.splice(0, 5));
                setPizza([])
                if (allPizas.length <= 0) {
                    console.log(allPizas.length);
                    setLoaded(false)
                    setIsEmpty(true)
                } else {
                    setLoaded(false)
                    setHasItems(true)
                    setIsEmpty(false)
                }
            });
    }, []);
    console.log(allPizas);
    console.log(loaded);
    console.log(hasItems);
    console.log(isEmpty);
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