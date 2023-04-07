import './Search.css'
import { useEffect, useState } from "react";
import * as pizzaService from '../../services/pizzaService'
import { Loading } from '../Loading/Loading';
import SinglePizza from '../SinglePizza/SinglePizza';


export const Search = () => {
    const [searchedPizza, setsearchedPizza] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [hasNoSearchedResult, sethasNoSearchedResult] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [searchData, setsearchData] = useState({
        name: '',
        type: '',
    });
    useEffect(() => {
        pizzaService.getAll()
            .then(data => {
                if (data.length > 0) {
                    setLoaded(false)
                    setIsEmpty(false)
                } else {
                    setLoaded(false)
                    setIsEmpty(true)
                }
                setsearchedPizza(data);
                setSearchResult(data)
            })
            .catch(err => console.log(err));
}, []);


const searchHandler = (e) => {
    e.preventDefault();
    sethasNoSearchedResult(true)
    if (searchData.type === "" && searchData.name === "") {
        setSearchResult(searchedPizza);
    }

    if (searchData.type !== "" && searchData.name === "") {
        setSearchResult(searchedPizza
            .filter(pizza => pizza.type === searchData.type));
    }

    if (searchData.type !== "" && searchData.name !== "") {
        setSearchResult(searchedPizza
            .filter(pizza => pizza.type === searchData.type &&
                pizza.name.toLowerCase()
                    .includes(searchData.name.toLowerCase())));
    }

    if (searchData.type === "" && searchData.name !== "") {
        setSearchResult(searchedPizza
            .filter(pizza => pizza.name.toLowerCase().includes(searchData.name.toLowerCase())));
    }

}

const addSearchData = (e) => {
    setsearchData({ ...searchData, [e.target.name]: e.target.value });
};



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

            <article className='card-wrapper'>
                {searchResult.map(pizza =>
                    <SinglePizza key={pizza._id} {...pizza} />
                )}
            </article>
            {searchResult.length === 0 && hasNoSearchedResult && (
                <h2 className='search-result_no-result'>No result</h2>
            )}
            {
                loaded && (
                    <section className='search-result_search-loader'>
                        <Loading />
                    </section>
                )
            }
            {
                isEmpty && (
                    <h2 className='no-server-content-header'>There is nothing to show!!!</h2>
                )
            }
        </section>
    </>
)
}