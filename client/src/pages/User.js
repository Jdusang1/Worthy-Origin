import React, { useState, useEffect, useReducer } from "react";
import { Container, Col, Row, Button, Card } from "reactstrap"
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import FoodTable from "../components/FoodTable";
import API from "../utils/API";
import Grocerylist from "../components/GroceryList";
import Conversion from "../utils/Conversion";




const grey = "#f9f9f9";
const white = "ffffff";

const Div = styled.div`
  div {
    text-align: center;
    background-color: ${props => props.color === "grey" ? grey : white};
    padding: 15px;

  }

  p {
    width: 60%;
    margin: 15px auto;
    font-size: 20px;
    font-family: "Roboto";
  }

  h2 {
   margin: 10px auto;
   font-family: "Raleway";
   font-size: 52px;

  }

  .button {
    background-color: #cb5744;
    border: none;
  

  }

  .button:hover {
  background-color: #ec9a59;
`

const User = () => {


  const [listItem, setListItem] = useState({
    product: "",
    id: "",
    ghgEmission: "",
    carEquivalency: ""


  })

  const [searchResults, setSearchResults] = useState([])


  const [searchTerm, setSearchTerm] = useState("");

  // const [groceryList, setGroceryList] = useState([]);






  // const [groceries, dispatch] = useReducer((prevItem, action) => {
  //   switch (action.type) {
  //     case "add":
  //       return [action.payload, ...prevItem];
  //     case "remove":
  //       return prevItem.filter(listItem => listItem.listItemId !== action.id);
  //     default:
  //       return prevItem;
  //   }
  // }, []);

  const { product, id, ghgEmission, carEquivalency, } = listItem;

  // const productRef = useRef();
  // const ghgEmissionRef = useRef();
  // const carEquivalency = useRef();

  // const loadGroceries = event => {
  //   API.getGroceries()
  //     .then(res =>
  //       populateList(res.data)
  //     )
  //     .catch(err => console.log(err))
  // }


  const handleInputChange = event => {
    setSearchTerm(event.target.value);

  }

  const handleFormSubmit = event => {
    event.preventDefault();

    API.getFood(searchTerm)
      .then((data) => setSearchResults(data.data));


  }


  // const addToGroceryList = (event, id) => {
  //   eventPreventDefault({ grocerList: _id });
  //   API.addItem({

  //   })


  // }



  // const item = {




  //   product: current.value,
  //   ghgEmission: current.value,
  //   carEquivalency: current.value,


  // dispatch({ type: "add", payload: item });
  // productRef.current.value = ghgEmissionRef.current.value = carEquivalencyRef.current.value = "";






  return (
    <>
      <NavBar />
      <Jumbotron />

      <Container fluid={true} >
        <Div color="grey">
          <div>
            <h2>BUILD YOUR GROCERY LIST</h2>
            <p>paragraph</p>
            <SearchBar
              product={searchTerm}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        </Div>

        <Div>

          <div>
            <Row>
              <h2>GROCERIES </h2>
            </Row>
            <Row>
              {product ? (
                <Grocerylist
                  product={product}
                  ghgEmission={ghgEmission}
                  carEquivalency={carEquivalency}
                />) : ""}
            </Row>
          </div>


          <Row>
            <Div>
              <div>
                <Row>
                  <h2>Results For: {searchTerm}</h2>


                </Row>
                <Row>
                  {searchResults.map(result => (
                    <Col md={3} key={result._id}>
                      <Card
                        id={result._id}
                        product={result.product}
                        country={result.country}
                        ghgEmission={result.ghgEmission}
                      >
                        <p>{result.product}</p>
                        <p>Country Origin: {result.country}</p>
                        <p>Ghg Emissions: {result.ghgEmission}</p>
                        <Button>Add Product to List</Button>
                      </Card>


                    </Col>

                  ))}
                </Row>
              </div>

            </Div>
          </Row>
        </Div>


        <Footer />


      </Container>
    </>
  )


}

export default User;