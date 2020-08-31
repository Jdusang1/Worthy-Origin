import React from "react";
import { Card, CardTitle, CardFooter } from "reactstrap";

const titleStyle = {
    cursor: "pointer",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: "bold"
}

const MarketCard = ({ marketName, getMarketDetails, id }) => {
    return(
        <Card onClick={() => getMarketDetails(id)}>
            <CardTitle style={titleStyle}>{marketName.slice(4)}</CardTitle>
            <CardFooter>Distance: {marketName.slice(0, 3)} miles</CardFooter>
        </Card>
    )
};

export default MarketCard;