import React from 'react'
import { Container } from '../../Components/Style/Layout'
import AppHeader from '../../Components/OnBoarding/AppHeader/AppHeader'
import AppScene from '../../Components/OnBoarding/AppScene/AppScene'

function Login() {
    return (
        <Container>
            <AppHeader/>
            <AppScene
            title="Log in met je emailadres"
            newAccountTitle="Nieuw bij Disney+?"
            signUpTitle="Registreren"
            placeholder="Email"
            typeInput="email"/>
        </Container>
    )
}

export default Login
