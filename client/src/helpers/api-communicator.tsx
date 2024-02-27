import axios from 'axios';
import toast from 'react-hot-toast';
import { useChat } from '../contexts/ChatContext';
import { generateUniqueID } from './uuid';

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
export const sendOTP = async (otp: string) => {
  const res = await axios.post(`/verifyOTP/${otp}`, {otp: otp})
  console.log(res);
}
export const uploadUserDocument = async (file, chatID: string) => {
    const formData = new FormData()
    formData.append('document', file);
    console.log(chatID);
    const res = await axios.post(`/upload/${chatID}`, formData, {
        withCredentials: true,
    })
    console.log(res);
    window.location.href = `http://localhost:5173/chat/${chatID}`;
}
export const sendUserMessage = async (message: string, chatID: string) => {
    const data = {
        message: message
    };
    console.log(chatID);
    const res = await axios.post(`/chat/${chatID}`, data);
    console.log('sendUserMessage response:', res);
    return res.data.userChat;
}
export const fetchUserMessage = async (chatID: string) => {
    const res = await axios.get(`/chat/${chatID}`);
    return res;
}
export const fetchAllChats = async () => {
    const res = await axios.get('/chat')
    console.log('from api-communicator',res);
    return res;
}