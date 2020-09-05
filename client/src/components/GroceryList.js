import React from 'react';
import Converter from "../utils/Conversion"
import styled from "styled-components";
import { Table, Card, CardHeader } from 'reactstrap';
import { FaTrash } from "react-icons/fa";


const TableWrapper = styled.div`
margin: 0 auto;

.card{
    border: none;
}

.table{
    table-layout: auto;
    width: 100%;
}
#results{
    text-align: center;
    font-size: 30px;
    font-family: "Raleway";
    color: white;
    background: rgb(18, 61, 61);
}

th{
    text-align: center;
    font-family: "Roboto";
   

    
}

td{
    text-align: center;
    font-family: "Roboto";
}
.Fa-Trash{
    color: rgb(18, 61, 61);
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
                            <th>Greenhouse Gas Emissions (kg C02)</th>
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
                                    <FaTrash style={{ color: "rgb(18, 61, 61)" }} style={{ cursor: 'pointer' }}
                                    />
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