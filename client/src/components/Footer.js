

import React from 'react';

import { CardFooter } from 'reactstrap';
import styled from "styled-components";
import logo from "../img/WorthyOrigin.png"

const FooterWrapper = styled.div`
#footer{
    background-color: rgb(18, 61, 61);
    font-size: 16px;
    // text-align: center;
    
}

ol{
    list-style-type: none;
    text-align: center;
}

img{
    max-width: 100px;
    max-height: 100px;
    align-content: left;
}




`


const Footer = () => {
    return (

        <FooterWrapper>
            <CardFooter className="text-muted" id="footer">
                <ol>
                    <li>Our Fearless Leader Kimberly Owens | Styling Master Jessica Owens</li>
                    <li>The All Knowing Nikki Castle | Paul James the Data Wizard</li>
                    <li>John</li>

                </ol>

                <img src={logo} alt="Worthy Origin Logo" />

            </CardFooter>
        </FooterWrapper>
    )
}

export default Footer;