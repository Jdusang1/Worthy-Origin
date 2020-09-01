import React from "react";
import { Card, CardTitle, CardBody, CardHeader, CardLink } from "reactstrap";
import styled from "styled-components";

const StyleWrapper = styled.article `
    border: 5px solid #11343e;

    .card-header {
        font-size: 40px;
        text-decoration: underline;
        font-family: "Raleway"
    }

    .disclaimer {
        font-size: 15px;
    }
`


const MarketDetails = ({address, products, schedule, link }) => {
    return(
        <StyleWrapper>
            <Card>
                <CardHeader>The Details</CardHeader>
                <CardTitle>Address: {address}</CardTitle>
                <CardBody>
                    <p><strong>Products Sold: </strong>{products}</p>
                    <p><strong>Hours/Schedule: </strong>{schedule.replace(/<br ?\/?>/g, "")}</p>
                </CardBody>
                <CardLink href={link} target="blank">Find it on the map</CardLink>
                    <p className="disclaimer">Some hours and/or schedules may be out of date. Please check with your local markets before attending!</p>
            </Card>
        </StyleWrapper>

    )
};

export default MarketDetails;
