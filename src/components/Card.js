import React from 'react'
import styled from 'styled-components'
import placeholder from "../assets/placeholder-image.jpg"
import { theme } from "../styles/theme"
import { ReactComponent as Arrow } from "../assets/arrow-icon.svg"

const Link = styled.a`
    text-decoration: none;
    color: ${theme.colors.white};

    @media (max-width: 640px) {
        width: 100%;
    }
    
`

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
    position: relative;
`

const Image = styled.img`
    height:100%;
    width: auto;
    

`
const ImageFilter = styled.div`
    height: 0;
    width: 217px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, rgba(225,97,43,1) 0%, rgba(225,97,43,0) 100%);
    opacity: 0.6;
    z-index: 99;
    transition: height 0.3s;

    
    ${Link}:hover & {
        height: 160px;
    }
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

    text-decoration: underline 0.1em;
    text-decoration-color: ${theme.colors.black};
    text-underline-offset: -0.2em;
    transition: text-decoration-color 300ms, text-underline-offset 300ms;
  
  
  ${Link}:hover & {
    text-decoration-color: ${theme.colors.green};
    text-underline-offset: 0.2em;
  }
`

const Description = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
`

const Button = styled.button`
    position: absolute;
    right: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 700;
    background: transparent;
    color: ${theme.colors.white};
    bottom: 10px;
    padding: 8px 12px;
    border: 2px solid;
    cursor: pointer;

    transition: color 0.3s;
    ${Link}:hover & {
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
    path {
        transition: fill 0.3s;
     }
    ${Link}:hover & {
            path {
            fill: ${theme.colors.green};
            }
    }
`

function Card(props) {
    const { image, title, description, category, link } = props;
    return (
        <Link rel="noopener noreferrer" target="_blank" href={link}>
            <Container>

                <ImageContainer>

                    <ImageFilter />
                    <Image src={image || placeholder} alt={`${title} thumbnail`} />

                </ImageContainer>
                <Content>
                    <CategoryLabel>{category}</CategoryLabel>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <Button>VIEW CASE STUDY<StyledArrow /></Button>
                </Content>
            </Container>
        </Link>
    );
}

export default Card;