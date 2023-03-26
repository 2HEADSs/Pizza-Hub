const baseUrl = 'http://localhost:3030';


export const getAll = async () => {
    try {
        const response = await fetch(`${baseUrl}/pizza`);
        const result = await response.json();
        return result
    } catch (error) {
        return [];
    }
};


export const getOnePizza = async (pizzaId) => {
    const response = await fetch(`${baseUrl}/pizza/${pizzaId}`);
    const result = await response.json();
    return result
};

export const getMyPizza = async (userId) => {
    const response = await fetch(`${baseUrl}/pizza/my-pizzas`, { headers: { 'x-authorization': userId } });
    const result = await response.json();
    console.log(result);
    return result
}




export const create = async (pizza, token) => {

    try {
        const response = await fetch(`${baseUrl}/pizza`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            },
            body: JSON.stringify(pizza)
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {

            throw new Error(result.error);
        }
    } catch (error) {
        return error
    }
};

export const editPizza = async (pizza, _ownerId) => {
    const data = { ...pizza, _ownerId };
    try {
        const response = await fetch(`${baseUrl}/pizza/${pizza._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            return result
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        return error
    }
}