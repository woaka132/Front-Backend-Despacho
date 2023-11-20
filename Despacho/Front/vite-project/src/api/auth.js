import axios from './axios.js'

export const registerRequest = (user) => axios.post(`/register`, user)

export const loginRequest = (user) => axios.post(`/login`, user)

export const profileRequest = (user) => axios.get(`/profile`,user)

export const verityTokenRequest = () => axios.get(`/verify`)
