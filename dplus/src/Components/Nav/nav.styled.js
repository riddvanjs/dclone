import styled from 'styled-components'

export const Navbar = styled.nav`
    z-index: 3;
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    box-pack: justify;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    background-color: transparent;
    flex-direction: row-reverse;
    text-align: center;
    letter-spacing: 16px;
    transition: opacity .5s ease-out;
`

export const UserNavbar = styled.nav`
    z-index: 10;
    -webkit-box-align: center;
    align-items: center;
    background-color: transparent;
    display: flex;
    flex-flow: row nowrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    left: 0px;
    padding: 0px 20px;
    position: absolute;
    right: 0px;
    top: 0px;
    transition: all 0.2s ease-in-out 0s;
    will-change: background-color, height;
    height: 72px;
`