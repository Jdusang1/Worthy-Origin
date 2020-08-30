

import React from 'react';

import { CardFooter } from 'reactstrap';
import styled from "styled-components";

const FooterWrapper = styled.div`
#footer{
    background-color: rgb(18, 61, 61);
    font-size: 16px;
    text-align: center;
    
}

ol{
    list-style-type: none;
}

svg{
    color: white;
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

                <svg width="44" height="44" viewBox="0 0 1024 1024">
                    <path d="../img/WorthyOrigin.png"></path>
                </svg>

            </CardFooter>
        </FooterWrapper>
    )
}

export default Footer;