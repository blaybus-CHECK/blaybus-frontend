import api from '../axios.ts';

export const getHello = () => api.get('/hello');