import React, { useState, useEffect, useReducer } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
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

  const { user, isAuthenticated } = useAuth0();

  // const [listItem, setListItem] = useState({
  //   product: "",
  //   id: "",
  //   ghgEmission: "",
  //   carEquivalency: ""
  // })

  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const [groceryList, setGroceryList] = useState([]);
  const currentUser = user.sub;

  // => if user then populate else => create user
  useEffect(() => {

    API.getUser(currentUser)
      .then(dbUser => {
        if (!dbUser.data) {
          console.log("user not found")
          API.createUser({
            username: user.email,
            id: user.sub,
            groceries: []
          })
        } else {
          console.log("yay user found", dbUser)
          API.populateList(dbUser.data._id)
            .then(res => console.log(res))
        }
      })

      .catch(err => console.log(err));
  }, [])



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

  // const { product, id, ghgEmission, carEquivalency, } = listItem;

  // const productRef = useRef();
  // const ghgEmissionRef = useRef();
  // const carEquivalency = useRef();


  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();

    API.getFood(searchTerm)
      .then((data) => setSearchResults(data.data));


  }

  const addToGroceryList = (event, id) => {
    event.preventDefault();
    API.addItem(id, currentUser)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }



  // const item = {




  //   product: current.value,
  //   ghgEmission: current.value,
  //   carEquivalency: current.value,


  // dispatch({ type: "add", payload: item });
  // productRef.current.value = ghgEmissionRef.current.value = carEquivalencyRef.current.value = "";

  return (
    isAuthenticated && (
      <>
        <NavBar />
        <Jumbotron />

        <Container fluid={true} >
          <Div color="grey">
            <div>
              <img
                src={user.picture}
                alt={user.name}
                className="rounded-circle" />
              <h1>Welcome back, {user.name}!</h1>
              <h2>BUILD YOUR GROCERY LIST</h2>
              <p>paragraph</p>
              <SearchBar
                product={searchTerm}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                placeholder={"Food Item"}
                name={"item"}
                button={"Search"}
              />
            </div>
          </Div>

          <Div>

            <div>
              <Row>
                <h2>GROCERIES </h2>
              </Row>
              <Row>
                {/* {groceryList ? (
                <Grocerylist
                  product={searchTerm}
                  ghgEmission={ghgEmission}
                  carEquivalency={carEquivalency}
                />) : ""} */}
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
                          product={result.reference}
                          country={result.country}
                          ghgemission={result.ghgEmission}
                        >
                          <p>{result.reference}</p>
                          <p>Country Origin: {result.country}</p>
                          <p>Ghg Emissions: {result.ghgEmission}</p>
                          <Button
                            onClick={(event) => addToGroceryList(event, result._id)}
                          >
                            Add Product to List
                          </Button>
                        </Card>


                      </Col>

                    ))}
                  </Row>
                </div>

              </Div>
            </Row>

            <div>
              <Row>
                <h2>GROCERIES </h2>
              </Row>
              <Row>
                <FoodTable />

              </Row>
            </div>



          </Div>

          <Footer />

        </Container>
      </>
    )
  )
}

export default withAuthenticationRequired(User);