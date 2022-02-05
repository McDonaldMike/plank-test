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
        margin: 37px auto;
        width: 100%;
    }
`

const ImageContainer = styled.div`
    height: 291px;
    width: 217px;
    background-image: url(${placeholder});
    background-size: contain;
`
const Image = styled.img`
    height:100%;
    width: auto;
`

const Content = styled.section`
    font-family: 'Roboto', sans-serif;
    width: 350px;
    position: relative;
    margin-left: 33.8px;

    @media (max-width: 640px) {
      margin: 20px auto;
      height: 280px;
      width: 90%;
    }
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
    line-height: 22px;
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

    @media (max-width: 500px) {
       left: 0;
       bottom: 0;
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
            <ImageContainer>
                <Image src={image || placeholder} alt={`${title} thumbnail`} />
            </ImageContainer>
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