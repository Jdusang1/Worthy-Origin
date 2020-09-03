import React from 'react';
import Converter from "../utils/Conversion"
import styled from "styled-components";
import { Table, Card, CardHeader } from 'reactstrap';

const TableWrapper = styled.div`
#results{
    text-align: center;
}

th{
    text-align: center;
    
}

td{
    text-align: center;
}
`


function GroceryList({ product, ghgEmission, carEquivalency }) {
    return (

        <TableWrapper>
            <Card>
                <CardHeader id="results">Grocery List</CardHeader>
                <Table>

                    <thead>
                        <tr>

                            <th>Food Item</th>
                            <th>Emissions</th>
                            <th>Miles Driven</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>{product}</td>
                            <td>{ghgEmission}</td>
                            <td><Converter ghg={ghgEmission} /></td>

                        </tr>

                    </tbody>
                </Table>
            </Card>
        </TableWrapper>


    )
}

export default GroceryList