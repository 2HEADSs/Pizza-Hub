import './Catalog.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService'
import { SinglePiza } from '../SinglePizza/SinglePizza';
import { Loading } from '../Loading/Loading';


export const Catalog = () => {
    const [allPizas, setPizza] = useState([]);
    useEffect(() => {
        pizzaService.getAll()
            .then(pizzas => setPizza(pizzas))
    }, []);
    return (
        <section className="catalog">
            <h2>All Pizzas</h2>
            <article className='card-wrapper'>
                {allPizas.map(pizza =>
                    <SinglePiza pizza={pizza} key={pizza._id} />
                )}
            </article>
            {allPizas.length === 0 && (
                <Loading />
            )
            }
        </section >
    );
}