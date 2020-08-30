import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const SearchBar = ({ searchTerm, handleFormSubmit, handleInputChange }) => {
    return (
        <Form inline onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label for="location" hidden>Zip Code</Label>
            <Input 
              type="text" 
              name="location" 
              id="location" 
              placeholder="Zip Code" 
              value={searchTerm}
              onChange={handleInputChange}
              />
        </FormGroup>
          <Button>Search</Button>
      </Form>
    )
};

export default SearchBar;