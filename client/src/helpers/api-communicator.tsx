import axios from 'axios';

export const loginUser = async (email: string, password: string) => {
    const res = await axios.post('/login', { email, password });
    if (res.status !== 200) {
        throw new Error("User unavailable");
    }

    const data = await res.data;
    console.log(res.data);
    return data;

}
export const authenticateUser = async () => {
    const res = await axios.get('/check-auth');
    if (res.status !== 200) {
        throw new Error("User unavailable");
    }

    const data = await res.data;
    console.log(data);
    return data;

}