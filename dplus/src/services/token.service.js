const TOKEN_KEY = 'accessToken'


const TokenService = {

    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },

    setToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },

    hasToken() {
        return !!this.getToken()
    },

    getClaims() {
        let token = this.getToken()
        let claims = {}

        if (token) {

            try {
                // encodedHeader, encodedSignature
                let [encodedPayload] = token.split('.')
                let buffer = new Buffer(encodedPayload, 'base64')
                claims = JSON.parse(buffer.toString('utf-8'))

            } catch (err) {
                console.log(err)
            }
        }
        return claims
    },


}

export default TokenService
