import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 30px 0 0 0;
    display: grid;
    padding: 30px 0 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`

function Viewers() {

    const viewerItems = [
       {
           id: 1,
           img: './images/dashboard/viewers-disney.png',
           title: 'Disney'
       },
       {
        id: 2,
        img: './images/dashboard/viewers-pixar.png',
        title: "Pixar"
       },
       {
        id: 3,
        img: './images/dashboard/viewers-marvel.png',
        title: 'Marvel'
       },
       {
        id: 4,
        img: './images/dashboard/viewers-starwars.png',
        title: 'Starwars'
       },
       {
        id: 5,
        img: './images/dashboard/viewers-national.png',
        title: 'National geographic'
       }   
    ]


    return (
        <Container>
             {viewerItems.map((item) => {
                    return (
                    <Wrap key={item.id}>
                        <img alt={item.title} src={item.img}/>
                    </Wrap>)
                })}
        </Container>
    )
}

export default Viewers
