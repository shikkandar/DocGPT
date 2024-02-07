import axios from 'axios';
import toast from 'react-hot-toast';

export const loginUser = async (email: string, password: string) => {
    const res = await axios.post('/login', { email, password });
    if (res.status !== 200) {
        throw new Error("User unavailable");
    }

    const data = await res.data;
    console.log(res.data);
    return data;
}

export const signUpUser = async (username: string, email: string, password: string) => {
    console.log(username);
    const res = await axios.post('/signup', { username, email, password });

    if (res.status !== 201) {
        toast.error('Email already exists!!!');
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

export const uploadUserDocument = async (file) => {
    const formData = new FormData()
    formData.append('document', file);
    const res = await axios.post('/upload', formData, {
        withCredentials: true,
    })
    console.log(res);
}

export const sendUserMessage = async (message: string) => {
    const formData = new FormData();
    formData.append('message', message);
    const res = await axios.post('/chat', formData);
    console.log(res);

}