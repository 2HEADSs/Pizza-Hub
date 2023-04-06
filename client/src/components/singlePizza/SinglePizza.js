import { Link } from 'react-router-dom'
import './SinglePizza.css'

const SinglePizza = ({ _id, name, img, type }) => {
    return (
        <article className="single-pizza">
            <img src={img} alt={name} />
            <div className='info-pizza-container'>
                <p>Type: <span>{type}</span> </p>
                <p>Name: <span>{name}</span> </p>
                <button> <Link to={`/catalog/details/${_id}`} className="details-link">Details</Link> </button>
            </div>
        </article>

    )
}

export default SinglePizza
    