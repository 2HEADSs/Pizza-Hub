const baseUrl = 'http://localhost:3030/auth';


export const login = async () => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        })
    } catch (error) {
        console.log(error);
    }
}
