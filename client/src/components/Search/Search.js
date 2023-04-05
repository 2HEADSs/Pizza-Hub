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
    const [searchResult, setSearchResult] = useState({});
    const [searchData, setsearchData] = useState({
        name: '',
        type: '',
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
                setSearchResult(data)
            });
    }, []);

    const searchHandler = (e) => {
        e.preventDefault();
        // if (searchData.type !== "") {
        //     setSearchResult(searchedPizza.filter(pizza => pizza.type === searchData.type));
        //     if (searchData.name !== "") {
        //         console.log(searchData.name);
        //         // setSearchResult(searchResult.some(pizza => pizza.name.includes(searchData.name)));
        //     }
        // }
        console.log(searchData);

    }

    const addSearchData = (e) => {
        setsearchData({ ...searchData, [e.target.name]: e.target.value });
        console.log(e.target.name);
        console.log(e.target.value);
    }

    return (
        <>
            <section className='serch-section'>
                <h2 className='serch-section_header'>Find your next meal...</h2>
                <article className='search-article'>
                    <form className='search-form' onSubmit={searchHandler}>

                        <div className='search-name-wrapper'>
                            <label htmlFor="name">Search by name:</label>
                            <input type="text"
                                name='name'
                                value={searchData.name}
                                onChange={addSearchData} />
                        </div>

                        <div className='search-type-wrapper'>
                            <label htmlFor="type">Search by type:</label>
                            <select className="search-type"
                                name="type" value={searchData.type}
                                onChange={addSearchData}
                            >
                                <option onChange={addSearchData} value="">No prefer</option>
                                <option onChange={addSearchData} value="Tasty">Tasty</option>
                                <option onChange={addSearchData} value="Whole grain">Whole grain</option>
                                <option onChange={addSearchData} value="Vegan">Vegan</option>
                                <option onChange={addSearchData} value="Gluten free">Gluten free</option>
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
                            {searchResult.map(pizza =>
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