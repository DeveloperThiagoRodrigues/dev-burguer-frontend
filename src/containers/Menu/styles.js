import styled from 'styled-components';
import HamburguerBanner from '../../assets/banner-hamburguer.svg';
import Background from '../../assets/background.png';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #c7c7c7;

        background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url('${Background}');
       

`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${HamburguerBanner}') no-repeat;
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;

        right: 20%;
        top: 30%;

        span {
            display: block;
            color: #fff;
            font-size: 20px;
            
        }

    }
    
    
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ? '#9113b1' : '#818181'};
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${props => props.$isActiveCategory && '4px solid #9113b1'} ;
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;
`;