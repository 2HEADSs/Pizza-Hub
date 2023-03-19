import { useEffect, useState } from 'react'
import * as pizzaService from '../../services/pizza-services'
import { useParams } from 'react-router-dom';

import './EditPizza.css'

export const EditPizza = () => {
    const { pizzaId } = useParams();
    console.log(pizzaId);

    useEffect(() => {
        pizzaService.getOnePizza(pizzaId)
            .then(result => {
                setPizzaData(result)
            })
    }, [pizzaId])


    const [pizzaData, setPizzaData] = useState({});



    const createPizzaHandler = async (e) => {
        e.preventDefault()
        console.log(pizzaData);
        await pizzaService.create(pizzaData)
    };

    const addPizzaData = (e) => {
        setPizzaData({ ...pizzaData, [e.target.name]: e.target.value })
    };

    return (
        <div className="edit-form-wrap">
            <h2>Edit your precious... </h2>
            <form className="edit-form" onSubmit={createPizzaHandler}>
                <label for="name">Name:</label>
                <input
                    type="text"
                    className="name"
                    name="name"
                    placeholder="Name of your pizza"
                    value={pizzaData.name}
                    onChange={addPizzaData}
                />
                <label for="type">Type:</label>
                <input
                    type="text"
                    className="type"
                    name="type"
                    placeholder="MUST BE DROPDOWN"
                    value={`Pizza type:  ${pizzaData.type}`}
                    onChange={addPizzaData}
                />
                <label for="ingrediants">Ingrediants:</label>
                <input
                    type="text"
                    className="ingrediants"
                    name="ingrediants"
                    placeholder="Write your ingrediants separete with comma: ','"
                    value={pizzaData.ingrediants}
                    onChange={addPizzaData}
                />
                <label for="prepTime">Preparation time:</label>
                <input
                    type="number"
                    className="prepTime"
                    name="prepTime"
                    placeholder="Preptime"
                    value={pizzaData.prepTime}
                    onChange={addPizzaData}
                />
                <label for="cookTime">Cooking time:</label>
                <input
                    type="number"
                    className="cookTime"
                    name="cookTime"
                    placeholder="Cooktime"
                    value={pizzaData.cookTime}
                    onChange={addPizzaData}
                />
                <label for="img">Image Link</label>
                <input
                    type="text"
                    className="img"
                    name="img"
                    placeholder="Add link with image"
                    value={pizzaData.img}
                    onChange={addPizzaData}
                />
                <label for="recipe">Describe preparation...</label>

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