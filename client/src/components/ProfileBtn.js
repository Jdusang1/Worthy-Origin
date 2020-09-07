import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import { NavLink as RouterNavLink, Link } from "react-router-dom";

//Styling
const Wrapper = styled.article`
    .button {
        background-color: #cb5744;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        padding: 20px;
        font-size: 20px;
  }
  .button:hover {
      color: white;
  }
`

const ProfileButton = () => {

    return (
        <Wrapper>
            <Button className="button"> <Link to="./User">Go to your list</Link></Button>
        </Wrapper>
    );
};

export default ProfileButton;