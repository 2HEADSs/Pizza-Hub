const baseUrl = 'http://localhost:3030';


export const getAll = async () => {

    try {
        const response = await fetch(`${baseUrl}/pizza`);
        const result = await response.json();
        return result
    } catch (error) {
        return [];
    }

}


export const getOnePizza = async (pizzaId) => {
    const response = await fetch(`${baseUrl}/pizza/${pizzaId}`);
    const result = await response.json();
    return result
}

export const create = async (pizza, _ownerId) => {
    const data = { ...pizza, _ownerId }
    const response = await fetch(`${baseUrl}/pizza`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result
}