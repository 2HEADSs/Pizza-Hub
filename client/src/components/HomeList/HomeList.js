import './HomeList.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService'
import { SinglePiza } from "../SinglePizza/SinglePizza";
import { Loading } from '../Loading/Loading';

export const HomeList = () => {
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
                setPizza(data)
            })
    }, []);

    return (
        < section className="last-added" >
            {hasItems && (
                <>
                    <h2>Last five pizzas</h2>
                    <article className='card-wrapper'>
                        {allPizas.slice(-5).map(pizza =>
                            <SinglePiza pizza={pizza} key={pizza._id} />
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
    )
}

