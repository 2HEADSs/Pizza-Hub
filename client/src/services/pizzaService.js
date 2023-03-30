
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

export const getMyPizza = async (token) => {
    const response = await fetch(`${baseUrl}/pizza/my-pizzas`, {
        headers: {
            'content-type': 'application/json',
            'x-authorization': token
        },
    });
    const result = await response.json();
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

export const editPizza = async (pizza, token) => {
    try {
        const response = await fetch(`${baseUrl}/pizza/${pizza._id}`, {
            method: 'PUT',
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

export const likePizza = async (pizzaId, token) => {
    try {
        const response = await fetch(`${baseUrl}/pizza/like/${pizzaId}`, {
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
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

export const getMyLikes = async (token) => {
    try {
        const response = await fetch(`${baseUrl}/pizza/my-likes`, {
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
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

export const deletePizza = async (pizzaId, token) => {
    try {
        const response = await fetch(`${baseUrl}/pizza/${pizzaId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
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


export const removeFromFavourite = async (pizzaId, token) => {
    try {
        const response = await fetch(`${baseUrl}/pizza/unlike/${pizzaId}`, {
            headers: {
                'content-type': 'application/json',
                'x-authorization': token
            }
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