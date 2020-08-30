import React from "react";
import { Card, CardTitle } from "reactstrap";
import styled from "styled-components";

const MarketCard = ({ marketName }) => {
    return(
        <Card>
            <CardTitle>{marketName}</CardTitle>
        </Card>
    )
};

export default MarketCard;