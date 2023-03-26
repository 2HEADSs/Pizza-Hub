import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as pizzaService from '../../services/pizzaService';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import './CreatePizza.css'
export const CreatePizza = () => {
    const [pizzaData, setPizzaData] = useState({
        name: '',
        type: '',
        ingrediants: '',
        prepTime: '',
        cookTime: '',
        img: '',
        recipe: ''
    });
    const navigate = useNavigate();

    const createPizzaHandler = async (e) => {
        e.preventDefault()
        const response = await pizzaService.create(pizzaData, user._id);
        //TODO check if status = 200/ok
        navigate(`/catalog/details/${response._id}`)
    };

    const addPizzaData = (e) => {
        setPizzaData({ ...pizzaData, [e.target.name]: e.target.value });
        console.log(pizzaData);
    };
    const { user } = useContext(AuthContext);

    return (
        <div className="create-form-wrap">
            <h2>Create your precious </h2>
            <form className="create-form" onSubmit={createPizzaHandler}>
                <input
                    type="text"
                    className="name"
                    name="name"
                    placeholder="Name of your pizza"
                    value={pizzaData.name}
                    onChange={addPizzaData}
                />
                <select className="type"
                    name="type" value={pizzaData.type}
                    onChange={addPizzaData}>
                    <option value="Tasty">Tasty</option>
                    <option value="Whole grain">Whole grain</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Gluten free">Gluten free</option>

                </select>
                <input
                    type="text"
                    className="ingrediants"
                    name="ingrediants"
                    placeholder="Write your ingrediants separete with comma: ','"
                    value={pizzaData.ingrediants}
                    onChange={addPizzaData}
                />
                <input
                    type="number"
                    className="prepTime"
                    name="prepTime"
                    placeholder="Preptime"
                    value={pizzaData.prepTime}
                    onChange={addPizzaData}
                />
                <input
                    type="number"
                    className="cookTime"
                    name="cookTime"
                    placeholder="Cooktime"
                    value={pizzaData.cookTime}
                    onChange={addPizzaData}
                />
                <input
                    type="text"
                    className="img"
                    name="img"
                    placeholder="Add link with image"
                    value={pizzaData.img}
                    onChange={addPizzaData}
                />
                <textarea
                    className="recipe"
                    name="recipe"
                    placeholder="Describe preparation..."
                    value={pizzaData.recipe}
                    onChange={addPizzaData}
                ></textarea>

                <input type="submit" className="login" value="Push in main branch" />
            </form>
        </div>
    )
}