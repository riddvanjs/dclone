
const EnvService = {

    apiBaseURL: 'http://localhost:3001/api/v1',
    appEnv: process.env.NODE_ENV,

    isDev: function() {
        return this.appEnv === 'development'
    },

    // subDomain: () => {
    //     let matches = location.url.match(/^https?:\/\/([^.]+?)/)
    //     return matches ? matches[1] : null
    // },

}


export default EnvService
