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
import Converter from "../utils/Conversion";
import CarIcon from "../components/CarIcon";

const grey = "#f9f9f9";
const white = "ffffff";

const Div = styled.div`
  div {
    text-align: center;
    background-color: ${props => props.color === "grey" ? grey : white};
    padding: 15px;
    margin: 0 auto;
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
  }
  .rounded-circle {
    max-width: 200px;
  }
  h4{
    color: rgb(18, 61, 61);
  }
  #equivalency{
    color: rgb(18, 61, 61);
  }
  h5{
    justify-content: center;
  }
  }
`

const User = () => {

  const { user, isAuthenticated } = useAuth0();
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [groceryList, setGroceryList] = useState([]);
  const [totalGHG, setTotalGHG] = useState(0)
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
              calculateGHG(res.data.groceryList);
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
      .then((data) => setSearchResults(data.data))
      .catch(err => console.log(err))

    setSearchTerm("");
  }

  const addToGroceryList = (event, id) => {
    event.preventDefault();
    API.addItem(id, currentUser)
      .then(res => {
        API.populateList(currentUser)
          .then(res => {
            console.log(res)
            setGroceryList(res.data.groceryList);
            calculateGHG(res.data.groceryList);
          })
      })
      .catch(err => console.log(err))
  }


  const calculateGHG = (list) => {
    let totalG = list.reduce((a, b) => {
      return { ghgEmission: a.ghgEmission + b.ghgEmission }
    }, [])
    console.log("total", totalG)
    setTotalGHG(totalG.ghgEmission);
  }

  const removeFromGroceryList = (event, id) => {
    event.preventDefault();
    API.removeItem(id, currentUser)
      .then(res => {
        API.populateList(currentUser)
          .then(res => {
            setGroceryList(res.data.groceryList)
          })
          .catch(err => console.log(err))
      })
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
            </div>
          </Div>

          <Div>
            <div>
              {groceryList.length ? (
                <>
                  <Row>
                    <Grocerylist
                      list={groceryList}
                      removeFromGroceryList={removeFromGroceryList}
                    />
                  </Row>

                  <Row>
                    <Col>
                      <h4>YOUR TOTAL GROCERY CARBON FOOTPRINT</h4>
                      <p id="equivalency">
                        TOTAL: {totalGHG.toFixed(1)}
                      </p>
                      <p id="equivalency">
                        Equivalent to <Converter ghg={totalGHG} /> car miles driven!
                    </p>
                    </Col>
                    <Col>
                      <CarIcon ghg={totalGHG} />
                    </Col>
                  </Row>
                </>
              ) : <h6>Add to your list by searching for an item!</h6>}
            </div>
          </Div>

          <Div color="grey">
            <div>
              <h4>Search for grocery items to add to your list and see your total carbon footprint for food consumption.</h4>
              <SearchBar
                searchTerm={searchTerm}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit}
                placeholder={"Food Item"}
                name={"item"}
                button={"Search"}
              />
              <Row>
                {searchResults.length ? <h2> Search Results:</h2> : <div></div>}
              </Row>
              <Row>
                {searchResults.length ? (
                  searchResults.map(result => (
                    <Col md={3} key={result._id}>
                      <Card
                        id={result._id}
                        product={result.reference}
                        country={result.country}
                        ghgemission={result.ghgEmission}
                      >
                        <p>{result.reference}</p>
                        <p>Country Origin: {result.country}</p>
                        <p>Greenhouse Gas Emissions: {result.ghgEmission} kg CO2</p>
                        <Button
                          onClick={(event) => addToGroceryList(event, result._id)}
                        >
                          Add Product to List
                            </Button>
                      </Card>
                    </Col>
                  ))

                ) : <h5>No items found</h5>}
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