import axios from 'axios'
import TokenService from './token.service'
import EnvService from './env.service'

axios.defaults.baseURL = EnvService.apiBaseURL

axios.interceptors.request.use(function (config) {

    let accessToken = TokenService.getToken()

    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    config.headers['Content-Type'] = 'application/json';

    return config

}, function (error) {
    return Promise.reject(error)
})


axios.interceptors.response.use(function (response) {
    return response
}, function (error) {

    if (error.response.status === 401) {
        TokenService.removeToken()
    }
    return Promise.reject(error)
})

const ApiService = {
    async loginUser(data) {
        const loggedIn = await axios.post('/login', data);
        return loggedIn;
    },

    async me () {
        const me = await axios.get('/me');
        return me;
    },

    async movies () {
        const allMovies = await axios.get('/movies')
        return allMovies;
    }
}

export default ApiService