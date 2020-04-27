import axios from 'axios';

export const url = 'http://localhost:4000'

export const api = axios.create({
    baseURL: 'http://localhost:4000',
})

console.log(api)

export const auth_config = {
    headers: {
        Authorization: `Token ${localStorage.getItem('token')}`
    }
}