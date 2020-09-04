import React, { useState, useEffect } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Container, Col, Row, Button, Card } from "reactstrap"
import NavBar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import API from "../utils/API";
import Grocerylist from "../components/GroceryList";




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
          API.populateList(dbUser.data.id)
            .then(res => {
              console.log(res)
              setGroceryList(res.data.groceryList);
            })
        }
      })

      .catch(err => console.log(err));
  }, [])

  const handleInputChange = event => {

    setSearchTerm(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    let word = searchTerm;
    word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    API.getFood(word)
      .then((data) => setSearchResults(data.data));

  }

  const addToGroceryList = (event, id) => {
    event.preventDefault();
    API.addItem(id, currentUser)
      .then(res => {
        API.populateList(currentUser)
          .then(res => {
            console.log(res)
            setGroceryList(res.data.groceryList);
          })
      })
      .catch(err => console.log(err))
  }

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
              <h1>Welcome back, {user.given_name}!</h1>
              <h2>BUILD YOUR GROCERY LIST</h2>
              <p>Search for grocery items to add to your list and see your total carbon footprint for food consumption.</p>
              <SearchBar
                searchTerm={searchTerm}
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
                {groceryList.length ? (

                  <Grocerylist
                    list={groceryList}
                  />

                ) : ""}
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

          </Div>

          <Footer />

        </Container>
      </>
    )
  )
}

export default withAuthenticationRequired(User);