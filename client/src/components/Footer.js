import React from 'react';
import "./Footer.css";
import { CardFooter } from 'reactstrap';



const Footer = () => {
    return (
        <CardFooter className="text-muted" id="footer">
            <ol>
                <li>Our Fearless Leader Kimberly Owens | Styling Master Jessica Owens</li>
                <li>The All Knowing Nikki Castle | Paul James the Data Wizard</li>
                <li>The guy who gets yelled at John Denver</li>

            </ol>

            <svg width="44" height="44" viewBox="0 0 1024 1024">
                <path d="../../public/WorthyOrigin.png"></path>
            </svg>

        </CardFooter>
    )
}

export default Footer;
