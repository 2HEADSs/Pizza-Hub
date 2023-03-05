import './SinglePizza.css'
export const SinglePiza = ({ pizza }) => {
    return (
        <article className="single-pizza">
            <img src={pizza.img} alt={pizza.name} />
            <p> {pizza.type}</p>
            <p> {pizza.name}</p>
        </article>

    )
}