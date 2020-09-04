import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
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
      color: black;
  }
`

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
      <Wrapper>
          <button className="button" onClick={() => loginWithRedirect()}>Log In</button>
      </Wrapper>
  );
};

export default LoginButton;