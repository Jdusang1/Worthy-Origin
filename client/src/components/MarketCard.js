import React from "react";
import { Card, CardTitle, CardFooter} from "reactstrap";
import styled from "styled-components";

//Styling
const StyleWrapper = styled.article `
    .card {
        border: 1px solid #bf5a41;
    }
    .card:hover {
        border: 4px solid #11343e;
        box-shadow: 0px 0px 10px #11343e;
    }
    .card-title {
     cursor: pointer;
     font-family: "Roboto";
     font-size: 20px;
     font-weight: bold
 }
`

const MarketCard = ({ marketName, getMarketDetails, id }) => {
    return(
        <StyleWrapper>
            <Card onClick={() => getMarketDetails(id)}>
                {/* If there are no details for chosen market, don't slice the marketname returned */}
                <CardTitle>{id === "Error" ? marketName : marketName.slice(4)}</CardTitle>
                {id !== "Error" && <CardFooter>Distance: {marketName.slice(0, 4)} miles</CardFooter>}
            </Card>
        </StyleWrapper>
    )
};

export default MarketCard;
