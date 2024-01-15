import styled from "styled-components";
import bg from '../assets/banner-bg.jpg'

export const PagesHeader = styled.div`
    height:440px;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;

    h1{
    font-family:poppins;
    font-size: 40px;
    color: white !important;
    font-weight: 600;
    text-transform: uppercase
    }

span{
    font-family: Poppins;
    color: #ee626b;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase
}
@media (max-width: 768px) {
    height: 300px;
    h1{
        font-size: 20px;
    }
    span{
        font-size: 12px;
    }
}

`;