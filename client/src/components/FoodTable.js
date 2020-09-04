import React from 'react';

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





const FoodTable = (props) => {
    return (
        <TableWrapper>
            <Card>
                <CardHeader id="results">RESULTS</CardHeader>
                <Table>

                    <thead>
                        <tr>

                            <th>Food Item</th>
                            <th>Emissions</th>
                            <th>Car Equivalency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            {/* <td>{result.product}</td>
                            <td>{result.country}</td>
                            <td>{result.ghgEmission}</td> */}
                        </tr>

                    </tbody>
                </Table>
            </Card>
        </TableWrapper>
    );
}

export default FoodTable;