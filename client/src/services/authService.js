let baseUrl = ''
if (process.env.NODE_ENV === "production") {
    baseUrl = 'https://pizza-hub-express.onrender.com/auth';

} else {
    baseUrl = 'http://localhost:3030';
}



export const authLogin = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
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


export const authRegister = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
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
