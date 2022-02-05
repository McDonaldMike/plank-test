import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
    max-width: 1280px;
    margin: 0 auto;

`

function CardList(props) {
    return (
        <Container >
            <Card image={''} title={'placeholder'} description={'placeholder'} category={'Arts & Culture'} link={'www.google.com'} />
            <Card image={''} title={'placeholder'} description={'placeholder'} category={'Arts & Culture'} link={'www.google.com'} />
        </Container>
    );
}

export default CardList;