export const SinglePiza = ({ pizza }) => {
    return (
        <article>
            <img src={pizza.img} alt="" />
            <p> {pizza.type}</p>
            <p> {pizza.name}</p>
        </article>

    )
}