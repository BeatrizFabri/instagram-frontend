import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-instagram-node.herokuapp.com'
})

export default api 