import api from '../axios';

export const getHello = () => api.get('/hello');