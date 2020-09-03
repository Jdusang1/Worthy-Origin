import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";

const SearchBarWrapper = styled.div`


`

const SearchBar = ({ searchTerm, handleFormSubmit, handleInputChange, placeholder, name, button }) => {

  return (
    <SearchBarWrapper>
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
        <Button>{button}</Button>
      </Form>
    </SearchBarWrapper>
  )
};

export default SearchBar;