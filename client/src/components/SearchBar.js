import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";

const FormWrapper = styled.form`
  padding: 10px 20px;

  .button {
    background-color: #cb5744;
    border: none;
    font-size: 16px;
  }

  .button:hover {
  background-color: #ec9a59;
  }

  `

const SearchBar = ({ searchTerm, handleFormSubmit, handleInputChange, placeholder, name, button }) => {
  return (
    <FormWrapper>

      <Form inline onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for={name} hidden>Zip Code</Label>
          <Input
            type="text"
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleInputChange}
            value={searchTerm}
          />
        </FormGroup>
        <Button className="button">{button}</Button>
      </Form>
    </FormWrapper>
  )
};

export default SearchBar;