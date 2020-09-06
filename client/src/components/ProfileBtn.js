import React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";

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
            <Button className="button"> <Link to "/user">Go to your list</Button>
        </Wrapper>
    );
};

export default ProfileButton;