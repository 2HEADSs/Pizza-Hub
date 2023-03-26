import { useEffect, useState } from 'react'
import * as pizzaService from '../../services/pizzaService'
import { useParams, useNavigate } from 'react-router-dom';

import './EditPizza.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const EditPizza = () => {
    const [pizzaData, setPizzaData] = useState({
        name: '',
        type: '',
        ingrediants: '',
        prepTime: '',
        cookTime: '',
        img: '',
        recipe: ''
    });
    const [errors, setErrors] = useState("")
    const { pizzaId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        pizzaService.getOnePizza(pizzaId)
            .then(result => {
                setPizzaData(result)
            })
    }, [pizzaId])

    const { user } = useContext(AuthContext);


    const editPizzaHandler = async (e) => {
        e.preventDefault()
        const response = await pizzaService.editPizza(pizzaData, user.accessToken);
        if (response.message) {
            return setErrors(response.message.split(":")[2])
        }
        if (response?._id) {
            navigate(`/catalog/details/${response._id}`)

        }
    };

    const addPizzaData = (e) => {
        setPizzaData({ ...pizzaData, [e.target.name]: e.target.value })
    };

    return (
        <div className="edit-form-wrap">
            {errors && (
                <>
                    <h2 className='create-error'>{errors}</h2>
                </>
            )}
            <h2>Edit your precious... </h2>
            <form className="edit-form" onSubmit={editPizzaHandler}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    className="name"
                    name="name"
                    placeholder="Name of your pizza"
                    value={pizzaData.name}
                    onChange={addPizzaData}
                />
                <label htmlFor="type">Type:</label>
                <select className="type"
                    name="type" value={pizzaData.type}
                    onChange={addPizzaData}>
                    <option onChange={addPizzaData} value="Tasty">Tasty</option>
                    <option onChange={addPizzaData} value="Whole grain">Whole grain</option>
                    <option onChange={addPizzaData} value="Vegan">Vegan</option>
                    <option onChange={addPizzaData} value="Gluten free">Gluten free</option>

                </select>
                <label htmlFor="ingrediants">Ingrediants:</label>
                <input
                    type="text"
                    className="ingrediants"
                    name="ingrediants"
                    placeholder="Write your ingrediants separete with comma: ','"
                    value={pizzaData.ingrediants}
                    onChange={addPizzaData}
                />
                <label htmlFor="prepTime">Preparation time:</label>
                <input
                    type="number"
                    className="prepTime"
                    name="prepTime"
                    placeholder="Preptime"
                    value={pizzaData.prepTime}
                    onChange={addPizzaData}
                />
                <label htmlFor="cookTime">Cooking time:</label>
                <input
                    type="number"
                    className="cookTime"
                    name="cookTime"
                    placeholder="Cooktime"
                    value={pizzaData.cookTime}
                    onChange={addPizzaData}
                />
                <label htmlFor="img">Image Link</label>
                <input
                    type="text"
                    className="img"
                    name="img"
                    placeholder="Add link with image"
                    value={pizzaData.img}
                    onChange={addPizzaData}
                />
                <label htmlFor="recipe">Describe preparation...</label>

                <textarea
                    className="recipe"
                    name="recipe"
                    placeholder="Describe preparation..."
                    value={pizzaData.recipe}
                    onChange={addPizzaData}
                ></textarea>

                <input type="submit" className="login" value="Edit Pizza" />
            </form>
        </div>
    )
}