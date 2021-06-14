import React from 'react'
import { PlansWrapper } from './plans.styled'
import Plan from './Plan'

function Plans() {

    const plans = [
        {
            id: 1,
            type: 'normal',
            title: '8,99',
            creditType: 'maand',
            content: 'Maandelijks opzegbaar.*',
            btnText: 'Abonneer nu'
        },
        {
            id: 2,
            type: 'annual',
            title: '89,90',
            creditType: 'jaar',
            content: 'Bespaar meer dan 15%.*',
            btnText: 'Bespaar op 12 maanden'
        },
    ]

    return (
        <PlansWrapper>
            <Plan plans={plans}/>
        </PlansWrapper>
    )
}

export default Plans
