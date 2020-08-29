import React from 'react';
// import "./Table.css";
// import { Card, CardHeader, CardBody } from 'reactstrap';
import "./MarketsTable.css"

import { Table, Card, CardHeader } from 'reactstrap';



const MarketsTable = (props) => {
    return (

        <Card>
            <CardHeader id="results">RESULTS</CardHeader>
            <Table>

                <thead>
                    <tr>

                        <th>MARKET NAME</th>
                        <th>DESCRIPTION</th>
                        <th>MILES FROM ZIP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>

                </tbody>
            </Table>
        </Card>
    );
}

export default MarketsTable;



// export default Table;

// <Card>
//             <CardHeader>RESULTS</CardHeader>
//             <CardBody>

//                 <p><strong>MARKET NAME: </strong>°</p>
//                 <p><strong>DESCRIPTION:</strong></p>
//                 <p><strong>MILES FROM ZIP:</strong></p>

//             </CardBody>

//         </Card>