import './SinglePizza.css'
export const SinglePiza = ({ pizza }) => {
    return (
        <article className="single-pizza">
            <img src={pizza.img} alt={pizza.name} />
            <div className='info-pizza-container'>
                <p>Type: <span>{pizza.type}</span> </p>
                <p>Name: <span>{pizza.name}</span> </p>
            </div>
        </article>

    )
}