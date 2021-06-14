import styled from 'styled-components'

export const PlansWrapper = styled.div`
    display: flex;
    align-items: stretch;
    margin: 0 -16px 20px;
    @media (max-width: 768px) {
        margin: 0 auto 20px;
        max-width: 340px;
        flex-direction: column;
        text-align: center;
    }
`

export const PlanBlock = styled.div`
    width: 100%;
    max-width: 360px;
    padding: 0 16px;
    vertical-align: top;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px) {
        position: relative;
        max-width: none;
        display: block;
        padding: 15px 0;
        ${({ type }) => type === 'normal' && `
            border-bottom: 2px solid hsla(0,0%,100%,.2);
        `}
    }
`

export const RichText = styled.div`
    font-family: Lato, sans-serif;
    h3 {
        margin-bottom: 8px;
        font-size: 30px;
        line-height: 1.2;
        margin: 0 0 24px;
    }

    span {
        display: inline;
        opacity: .7;
        font-size: 14px;
        font-weight: 300;
    }

    p {
        opacity: .7;
        margin: 0 0 24px;
        font-weight: 300;
    }
`
export const Button = styled.button`
    letter-spacing: 20px;
    font-family: Lato, sans-serif;
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    vertical-align: middle;
    text-decoration: none;
    font-weight: 400;
    text-align: center;
    letter-spacing: .8px;
    width: 100%;
    max-width: 340px;
    min-width: auto;
    margin-bottom: 0;
    padding: 16.5px 14px;
    color: #f9f9f9;
    background-color: #0063e5;
    border: 1px solid transparent;
    text-transform: uppercase;
    transition: all .25s ease 0s;
    &:hover {
        background-color: #0483ee;
        text-decoration: none;
    }
`