import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-happy-deploy.herokuapp.com'
})

export default api