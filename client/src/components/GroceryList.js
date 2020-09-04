import React from 'react';
import Converter from "../utils/Conversion"

import styled from "styled-components";

import { Table, Card, CardHeader } from 'reactstrap';
const TableWrapper = styled.div`
margin: 0 auto;
#results{
    text-align: center;
    font-size: 30px;
    font-family: "Raleway";
    background: transparent;
}

th{
    text-align: center;
    font-family: "Roboto";
    
}

td{
    text-align: center;
    font-family: "Roboto";
}
`


function GroceryList({ list }) {
    return (

        <TableWrapper>
            <Card>
                <CardHeader id="results">Grocery List</CardHeader>
                <Table>

                    <thead>
                        <tr>
                            <th>Food Item</th>
                            <th>Greenhouse Gas Emissions kg C02</th>
                            <th>Miles Driven</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(item => (
                        <tr key={item._id}>
                            <td>{item.reference}</td>
                            <td>{item.ghgEmission}</td>
                            <td><Converter ghg={item.ghgEmission} /></td>
                            <td>X</td>
                        </tr>

                        ))}

                    </tbody>
                </Table>
            </Card>
        </TableWrapper>


    )
}

export default GroceryList