import './HomeList.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService'
import { SinglePiza } from "../SinglePizza/SinglePizza";

export const HomeList = () => {
    const [allPizas, setPizza] = useState([]);
    useEffect(() => {
        pizzaService.getAll()
            .then(pizzas => setPizza(pizzas))
    }, [])
    const hasPizzas = allPizas.length > 0;

    return (
        < section className="last-added" >
            {hasPizzas && (
                <>
                    <h2>Last added</h2>
                    <article className='card-wrapper'>
                        {allPizas.slice(-5).map(pizza =>
                            <SinglePiza pizza={pizza} key={pizza._id} />
                        )}
                    </article>
                </>
            )}
            {!hasPizzas && (
                <h2>No Pizzas</h2>
            )}
        </section >
    )
}

