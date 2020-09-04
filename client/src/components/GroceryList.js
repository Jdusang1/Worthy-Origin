import React from 'react';
import Converter from "../utils/Conversion";
import { Button } from "reactstrap";
import styled from "styled-components";
import { Table, Card, CardHeader } from 'reactstrap';

const TableWrapper = styled.div`
margin: 0 auto;
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


function GroceryList({ list, removeFromGroceryList }) {

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(item => (
                            <tr key={item._id}>
                                <td>{item.reference}</td>
                                <td>{item.ghgEmission}</td>
                                <td><Converter ghg={item.ghgEmission} /></td>
                                <td
                                    onClick={(event) => removeFromGroceryList(event, item._id)}
                                >
                                    X
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </Table>
            </Card>
        </TableWrapper>


    )
}

export default GroceryList