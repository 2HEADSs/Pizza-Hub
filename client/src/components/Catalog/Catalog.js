import './Catalog.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService'

import { Loading } from '../Loading/Loading';
import { SinglePizza } from '../SinglePizza/SinglePizza';


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
                setPizza(data);
                console.log(allPizas);
            });
    }, []);
    return (
        <section className="catalog">

            {hasItems && (
                <>
                    <h2 className='catalog-header'>All Pizzas</h2>
                    <article className='card-wrapper'>
                        {allPizas.map(pizza =>
                            <SinglePizza key={pizza._id} {...pizza} />
                        )}
                    </article>
                </>
            )}
            {loaded && (
                <Loading />
            )}
            {isEmpty && (
                <h1 className='no-server-content-header'>There is nothing to show!!!</h1>
            )}
        </section >
    );
}