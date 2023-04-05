import './Search.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService'
import { SinglePizza } from '../SinglePizza/SinglePizza';
import { Loading } from '../Loading/Loading';


export const Search = () => {
    const [searchedPizza, setsearchedPizza] = useState({});
    const [loaded, setLoaded] = useState(true);
    const [hasItems, setHasItems] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [searchData, setsearchData] = useState({
        name: '',
        type: 'Tasty',
        ingrediants: '',
        prepTime: '',
        cookTime: '',
        img: '',
        recipe: ''
    });
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
                setsearchedPizza(data);
            });
    }, []);

    const searchHandler = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section className='serch-section'>
                <h2 className='serch-section_header'>Find your next meal...</h2>
                <article className='search-article'>
                    <form className='search-form' onSubmit={searchHandler}>

                        <div className='search-name-wrapper'>
                            <label htmlFor="name">Search by name:</label>
                            <input type="text" />
                        </div>

                        <div className='search-type-wrapper'>
                            <label htmlFor="type">Search by type:</label>
                            <select className="search-type"
                                name="type">
                                <option value="no-value"></option>
                                <option value="Tasty">Tasty</option>
                                <option value="Whole grain">Whole grain</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Gluten free">Gluten free</option>
                            </select>
                        </div>

                        <input type="submit" className="search-submit" value="SEARCH" />
                    </form>
                </article>
            </section>
            <section className='search-result'>
                {
                    hasItems && (
                        <article className='card-wrapper'>
                            {searchedPizza.map(pizza =>
                                <SinglePizza key={pizza._id} {...pizza} />
                            )}
                        </article>

                    )
                }
                {
                    loaded && (
                        <Loading />
                    )
                }
                {
                    isEmpty && (
                        <h1 className='no-server-content-header'>There is nothing to show!!!</h1>
                    )
                }
            </section>
        </>
    )
}