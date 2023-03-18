const baseUrl = 'http://localhost:3030';


export const getAll = async () => {
    const response = await fetch(`${baseUrl}/pizza`);
    const result = await response.json();

    return result
}


// export const getOnePizza = async (pizzaId) => {
//     const response = await fetch(`${baseUrl}/pizza/${pizzaId}`);
//     const result = await response.json();

//     return result.pizza
// }

export const create = async (pizza) => {
    console.log(pizza);
    const response = await fetch(`${baseUrl}/pizza`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(pizza)
    });
    const result = await response.json();

    return result
}