



import { CardFooter } from 'reactstrap';
import styled from "styled-components";
import logo from "../img/WorthyOrigin.png"
import React, { useState } from 'react';

const FooterWrapper = styled.div`
#footer{
    background-color: rgb(18, 61, 61);
    font-size: 16px;
    text-align: center;
    
}
ul{
    list-style-type: none
}

img{
    max-width: 100px;
    max-height: 100px;
    align-content: center;
}

#logo{
    justify-content: left
    
}
`


const Footer = () => {





    return (

        <FooterWrapper>
            <CardFooter className="text-muted" id="footer">


                <div>
                    <h5 id="one">Our Fearless Leader Kimberly Owens | Styling Master Jessica Edens | The All Knowing Nikki Castle | Paul Ijames the Data Wizard</h5>
                    <h5 id="three">John Dusang The Sundance Kid</h5>
                </div>
                <a href={"/home"}><img id="logo" src={logo} alt="Worthy Origin Logo" /></a>
            </CardFooter>
        </FooterWrapper>
    )
}

export default Footer;

