import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Ajuste conforme sua configuração
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('authToken');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config; // Retorna o config diretamente, sem envolver em uma nova Promise
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.log('Unauthorized. Redirecting to login...');
      // Aqui você pode gerenciar a navegação para a tela de login
    }
    return Promise.reject(error);
  }
);

export default api;




