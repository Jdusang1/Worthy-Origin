import React from "react";
import { Button, Card, CardTitle, CardFooter, Modal, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";

const StyleWrapper = styled.article `
    .card {
        border: 1px solid #bf5a41;
    }
    .card:hover {
        border: 2px solid #11343e;
        
        box-shadow: 0 4px 8px 0 #b5875e, 0 6px 20px 0 rgba(0, 0, 0, 0.19);

   
   
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
                <CardTitle>{marketName.slice(4)}</CardTitle>
                <CardFooter>Distance: {marketName.slice(0, 4)} miles</CardFooter>
            </Card>
        </StyleWrapper>
    )
};

export default MarketCard;







// const titleStyle = {
//     cursor: "pointer",
//     fontFamily: "Roboto",
//     fontSize: "20px",
//     fontWeight: "bold",
// }

// const cardStyle = {
//     border: "3px solid #bf5a41"
// }