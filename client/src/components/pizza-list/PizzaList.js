import { useEffect, useState } from "react";
import * as pizzaService from '../../pizza-services'
export const PizzaList = () => {
    const [allPizas, setPizza] = useState([]);
    useEffect(() => {
        pizzaService.getAll()
            .then(pizzas => setPizza(pizzas))
        console.log(allPizas);
    }, [])
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}