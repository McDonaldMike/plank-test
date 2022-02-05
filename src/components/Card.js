import React from 'react'
import styled from 'styled-components'
import placeholder from "../assets/placeholder-image.jpg"
import { theme } from "../styles/theme"
import { ReactComponent as Arrow } from "../assets/arrow-icon.svg"

const Container = styled.article`
    display: flex;
    margin: 37px 0;

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 475px;
        margin: 37px auto;
    }
`

const Image = styled.img`
    height: 291px;
`

const Content = styled.section`
    font-family: 'Roboto', sans-serif;
    width: 350px;
    position: relative;
    margin-left: 33.8px;
`

const CategoryLabel = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    padding: 6px 0;
    border-bottom: 2px solid;
`

const Title = styled.h2`
    font-size: 30px;
    font-weight: 900;
    margin: 37px 0 17px 0;
`

const Description = styled.p`
    font-size: 16px;
    font-weight: 500;
`

const Link = styled.a`
    position: absolute;
    right: 0;
    bottom: 10px;
    padding: 8px 12px;
    border: 2px solid;
    text-decoration: none;
    color: ${theme.colors.white};
    font-size: 12px;
    font-weight: 700;

    :hover {
        color: ${theme.colors.green};
    }
`

const StyledArrow = styled(Arrow)`
    width: 22px;
    margin-left: 8px;

    ${Link}:hover & {
        path {
        fill: ${theme.colors.green};
        }
    }
`

function Card(props) {
    const { image, title, description, category, link } = props;
    return (
        <Container>
            <Image src={image || placeholder} alt={`${title} thumbnail`} />
            <Content>
                <CategoryLabel>{category}</CategoryLabel>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Link href={link}>VIEW CASE STUDY<StyledArrow /></Link>
            </Content>
        </Container>
    );
}

export default Card;