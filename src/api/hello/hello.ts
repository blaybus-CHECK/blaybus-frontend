import api from '../axios.ts';

export const getHello = () => api.get('/hello');

export const signUp = () => api.post('/member/signUp', {
    email: "sehyeon@naver.com",
    password: "12341234",
})

export const login = () => api.post('/member/issueToken', {
     email: "sehyeon@naver.com",
    password: "12341234",
})