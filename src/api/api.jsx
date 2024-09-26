import axios from 'axios';

const API_URL = 'https://url-backend-lx3r.onrender.com/api'; // For local development

export const register = (userData) => axios.post(`${API_URL}/auth/register`, userData);

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data; // This should contain the token or success message
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : error.message);
    }
};

export const activateAccount = (token) => axios.post(`${API_URL}/auth/activate`, { token });

export const forgetPassword = async (email) => {
    try {
        await axios.post(`${API_URL}/auth/forget-password`, { email });
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : error.message);
    }
};

export const resetPassword = async (data) => {
    try {
        await axios.post(`${API_URL}/auth/reset-password`, data);
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : error.message);
    }
};

export const createShortUrl = (urlData, token) =>
  axios.post(`${API_URL}/shorturl`, urlData, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getUrls = (token) =>
  axios.get(`${API_URL}/urls`, {
    headers: { Authorization: `Bearer ${token}` },
  });