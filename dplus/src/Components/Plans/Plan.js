import React from 'react'
import { PlanBlock, RichText, Button } from './plans.styled'

function Plan(props) {

    const plans = props.plans;

    return (
        <>
            {plans.map(plan => (
                <PlanBlock key={plan.id} type={plan.type}>
                    <RichText>
                        <h3>€ {plan.title}/{plan.creditType}</h3>
                        <p>{plan.content}</p>
                    </RichText>
                    <Button>
                        {plan.btnText}
                    </Button>
                </PlanBlock>
            ))}
        </>
    )
}

export default Plan