import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import './CreatePizza.css';
import { AuthContext } from '../../context/AuthContext';
import * as pizzaService from '../../services/pizzaService';

export const CreatePizza = () => {
    const [pizzaData, setPizzaData] = useState({
        name: '',
        type: 'Tasty',
        ingrediants: '',
        prepTime: '',
        cookTime: '',
        img: '',
        recipe: ''
    });
    const [errors, setErrors] = useState({
        name: false,
        type: false,
        ingrediants: false,
        prepTime: false,
        cookTime: false,
        img: false,
        recipe: false,
        serverError: false
    });

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const createPizzaHandler = async (e) => {
        e.preventDefault();
        if (Object.values(pizzaData).some(x => x === " ") || Object.values(errors).some(x => x === true)) {
            setErrors(state => ({ ...state, ["serverError"]: 'Fill all fields!' }));
            return;
        };
        const response = await pizzaService.create(pizzaData, user.accessToken);

        if (response?.message) {
            return setErrors(state => ({ ...state, ["serverError"]: "All fields must be fulfilled!!!" }));

            // return setErrors(state => ({ ...state, ["serverError"]: response.message.split(": ")[2].split(", ")[0] }));
        };

        if (response?._id) {
            navigate(`/catalog/details/${response._id}`)
        }

    };
    const addPizzaData = (e) => {
        setPizzaData({ ...pizzaData, [e.target.name]: e.target.value });
        setErrors(state => ({ ...state, [e.target.name]: false, ["serverError"]: false }));
    };

    const onBlurHandler = (e) => {
        if (e.target.name === 'name' &&
            (e.target.value.length < 2 || e.target.value.length > 30)) {
            setErrors(state => ({ ...state, [e.target.name]: true }))

        } else if (e.target.name === 'ingrediants' &&
            (e.target.value.length < 10 || e.target.value.length > 150)) {
            setErrors(state => ({ ...state, [e.target.name]: true }))
        } else if (e.target.name === 'prepTime' &&
            (Number(e.target.value) < 0 || Number(e.target.value) || e.target.value !== '' > 60)) {
            setErrors(state => ({ ...state, [e.target.name]: true }))
        } else if (e.target.name === 'cookTime' &&
            (Number(e.target.value) < 0 || Number(e.target.value) || e.target.value !== '' > 60)) {
            setErrors(state => ({ ...state, [e.target.name]: true }))
        } else if (e.target.name === 'img') {
            const URL_PATTERN = /https?:\/\/./i;
            if (!e.target.value.match(URL_PATTERN)) {
                setErrors(state => ({ ...state, [e.target.name]: true }));
            }
        } else if (e.target.name === 'recipe' &&
            (e.target.value.length < 10 || e.target.value.length > 500)) {
            setErrors(state => ({ ...state, [e.target.name]: true }))
        }
    };

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
                    onBlur={onBlurHandler}
                />
                {errors.name && (
                    <p className='create-error'>Name must be between 2 and 30 characters.</p>
                )}
                <select className="type"
                    name="type" value={pizzaData.type}
                    onChange={addPizzaData}>
                    <option onChange={addPizzaData} value="Tasty">Tasty</option>
                    <option onChange={addPizzaData} value="Whole grain">Whole grain</option>
                    <option onChange={addPizzaData} value="Vegan">Vegan</option>
                    <option onChange={addPizzaData} value="Gluten free">Gluten free</option>
                </select>
                <input
                    type="text"
                    className="ingrediants"
                    name="ingrediants"
                    placeholder="Write your ingrediants separete with comma: ','"
                    value={pizzaData.ingrediants}
                    onChange={addPizzaData}
                    onBlur={onBlurHandler}
                />
                {errors.ingrediants && (
                    <p className='create-error'>Ingrediants must be between 10 and 150 characters.</p>
                )}
                <input
                    type="number"
                    className="prepTime"
                    name="prepTime"
                    placeholder="Preptime"
                    value={pizzaData.prepTime}
                    onChange={addPizzaData}
                    onBlur={onBlurHandler}
                />
                {errors.prepTime && (
                    <p className='create-error'>Preparation Time must be between 0 and 60 minutes.</p>
                )}
                <input
                    type="number"
                    className="cookTime"
                    name="cookTime"
                    placeholder="Cooktime"
                    value={pizzaData.cookTime}
                    onChange={addPizzaData}
                    onBlur={onBlurHandler}
                />
                {errors.cookTime && (
                    <p className='create-error'>Cooking Time must be between 0 and 60 minutes.</p>
                )}
                <input
                    type="text"
                    className="img"
                    name="img"
                    placeholder="Add link with image"
                    value={pizzaData.img}
                    onChange={addPizzaData}
                    onBlur={onBlurHandler}
                />
                {errors.img && (
                    <p className='create-error'>Invalid URL, must start with HTTP/HTTPS</p>
                )}
                <textarea
                    className="recipe"
                    name="recipe"
                    placeholder="Describe preparation..."
                    value={pizzaData.recipe}
                    onChange={addPizzaData}
                    onBlur={onBlurHandler}
                ></textarea>
                {errors.recipe && (
                    <p className='create-error'>Recipe must be between 10 and 500 minutes.</p>
                )}
                {errors.serverError && (
                    <>
                        <h2 className='create-error'>{errors.serverError}</h2>
                    </>
                )}
                <input type="submit" className="login" value="Push in main branch" />
            </form>
        </div>
    )
}