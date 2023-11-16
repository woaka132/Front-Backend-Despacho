import axios from './axios.js'

export const getComments = () => axios.get(`/comments`)

export const createComments = (user) => axios.post(`/comment`,user)