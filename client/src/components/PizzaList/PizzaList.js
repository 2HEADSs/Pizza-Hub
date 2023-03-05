import { useEffect, useState } from "react";
import * as pizzaService from '../../pizza-services'
import { SinglePiza } from "../singlePizza/SinglePizza";

export const PizzaList = () => {
    const [allPizas, setPizza] = useState([]);
    useEffect(() => {
        pizzaService.getAll()
            .then(pizzas => setPizza(pizzas))
    }, [])
    console.log(allPizas);

    return (
        <section className="las-added">
            {allPizas.map(pizza => 
                <SinglePiza pizza={pizza} key={pizza._id}/>
            )}
        </section>
    )
}