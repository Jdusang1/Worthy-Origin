import React from "react";
import { Card, CardTitle, CardBody, CardHeader, CardLink } from "reactstrap";
import styled from "styled-components";

const headerStyle = {
    fontSize: "40px",
    textDecoration: "underline",
    fontFamily: "Raleway"
}


const MarketDetails = ({address, products, schedule, link }) => {
    return(

        <Card>
            <CardHeader style={headerStyle}>The Details</CardHeader>
            <CardTitle>Address: {address}</CardTitle>
            <CardBody>
                <p><strong>Products Sold: </strong>{products}</p>
                <p><strong>Hours/Schedule: </strong>{schedule}</p>
            </CardBody>
            <CardLink href={link} target="blank">Find it on the map</CardLink>
        </Card>

    )
};

export default MarketDetails;