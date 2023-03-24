const baseUrl = 'http://localhost:3030/auth';


export const login = async (data) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}
