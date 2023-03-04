export const SinglePiza = ({ pizza }) => {
    console.log(pizza);
    return (
        <div>
            <p> {pizza._id}</p>
            <p> {pizza.name}</p>
            <p> {pizza.type}</p>
            <p> {pizza.recipe}</p>
            <p> {pizza._id}</p>
            <p> {pizza._id}</p>
            <p>{pizza._id}</p>
        </div>
    )
}