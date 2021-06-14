import styled from 'styled-components'

export const Container = styled.div`
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 100vw;
    background-color: #1A1D29;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Logo = styled.img`
    height: 48px;
    margin-right: auto;
    width: auto;
`

export const ProfileEditButton = styled.button`
    background: rgb(75, 78, 90);
    border: none;
    border-radius: 4px;
    color: rgb(249, 249, 249);
    font-size: 15px;
    padding: 0px 24px;
    text-transform: uppercase;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    font-family: Lato, sans-serif;
    font-stretch: normal;
    font-style: normal;
    font-weight: 700;
    height: 48px;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: 1.5px;
    line-height: 1.5;
    margin: 0px;
    overflow: hidden;
    text-align: center;
    transition: all 0.2s ease-in-out 0s;
    width: auto;
    -webkit-font-smoothing: antialiased;
    opacity: 1;
    visibility: visible;
    &:hover,
    &:focus {
        filter: none;
        background: rgb(98, 102, 118);
    }
`

export const ProfileAvatar = styled.div`
    display: block;
    cursor: pointer;
    position: relative;
    height: 120px;
    width: 120px;
    background: url(${({ avatar }) => avatar}) 0% 0% / contain no-repeat;
    border-radius: 50%;
    margin: auto;
    transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
    &:hover {
        transform: scale(1.05, 1.05);;
        &:after {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }

    &:after {
        border-radius: 50%;
        border: 4px solid rgba(0, 0, 0, 0);
        inset: 0px;
        content: "";
        position: absolute;
        transition: border 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
    }

`

export const AddProfileButton = styled.div`
-webkit-box-align: center;
align-items: center;
background-color: rgba(249, 249, 249, 0.1);
border: none;
border-radius: 120px;
color: rgb(249, 249, 249);
display: flex;
font-size: 65px;
height: 120px;
-webkit-box-pack: center;
justify-content: center;
transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
width: 120px;
&:hover,
&:focus {
    background-color: rgba(249, 249, 249, 0.4);
    transform: scale(1.05, 1.05);
    &:after {
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
}
&:after {
    border-radius: 50%;
    border: 4px solid rgba(0, 0, 0, 0);
    inset: 0px;
    content: "";
    position: absolute;
    transition: border 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
    pointer-events: none;
}

`