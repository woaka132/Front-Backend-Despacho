import axios from './axios.js'

export const getDays = () => axios.get(`/days`)

export const CreateDays = (user) => axios.post(`/createdays`,user)