import axios from 'axios';

export const url = 'http://localhost:4000'

export const api = axios.create({
    baseURL: 'http://localhost:4000',
})

const token = localStorage.getItem('token')

console.log("client.token = " + token)

export const auth_config = {
    headers: {
        Authorization: `${token}`
    }
}

// export const auth_config = {
//     headers: {
//         Authorization: `Bearer ${token}`
//     }
// }
