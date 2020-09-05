import { CardFooter } from "reactstrap";
import styled from "styled-components";
import logo from "../img/WorthyOrigin.png";
import React from "react";
import { Link } from "react-router-dom";

const FooterWrapper = styled.div`
  #footer {
    width: 100%;
    background-color: rgb(18, 61, 61);
    font-size: 16px;
    text-align: center;
  }
  ul {
    list-style-type: none;
  }

  img {
    max-width: 100px;
    max-height: 100px;
    align-content: center;
  }

  #logo {
    justify-content: left;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CardFooter className="text-muted" id="footer">
        <div>
          <h5 id="one">
            Our Fearless Leader-Kimberly Owens | Styling Master-Jessica Edens |
            The All Knowing-Nikki Castle
          </h5>
          <h5 id="three">
            John Dusang-The Sundance Kid | Paul Ijames-The Data Wizard
          </h5>
        </div>
        <a>
          <Link to="/home">
            <img id="logo" src={logo} alt="Worthy Origin Logo" />
          </Link>
        </a>
      </CardFooter>
    </FooterWrapper>
  );
};
export default Footer;
