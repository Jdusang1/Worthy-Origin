import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SearchBar = ({ searchTerm, handleFormSubmit, handleInputChange, placeholder, name, button }) => {
    return (
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
    )
};

export default SearchBar;