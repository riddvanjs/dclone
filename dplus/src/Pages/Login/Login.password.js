import React from 'react'
import { Container } from '../../Components/Style/Layout'
import AppHeader from '../../Components/OnBoarding/AppHeader/AppHeader'
import AppScene from '../../Components/OnBoarding/AppScene/AppScene'

function LoginPassword(props) {
    
    const { state } = props.location;

    return (
        <Container>
            <AppHeader/>
            <AppScene
            title="Voer je wachtwoord in"
            newAccountTitle="Wachtwoord vergeten?"
            signUpTitle="Registreren"
            placeholder="Wachtwoord"
            typeInput="password"
            userEmail={state.props}
            />
        </Container>
    )
}

export default LoginPassword
