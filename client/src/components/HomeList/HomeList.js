import './HomeList.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService'
import { Loading } from '../Loading/Loading';
import SinglePizza from '../SinglePizza/SinglePizza';

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
                setPizza(data.splice(-5).reverse());
            })
    }, []);

    return (
        < section className="last-added" >
            {hasItems && (
                <>
                    <h2>Last five pizzas</h2>
                    <article className='card-wrapper'>
                        {allPizas.map(pizza =>
                            <SinglePizza {...pizza} key={pizza._id} />
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

