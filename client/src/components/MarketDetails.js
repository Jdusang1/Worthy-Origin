import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter  } from "reactstrap";
import styled from "styled-components";

//Styling
const StyleModal = styled(Modal)`
    border: 5px solid #bf5a41;
    border-radius: 10px;

    .modal-header {
        text-decoration: underline;
        font-family: "Raleway"
    }

    .disclaimer {
        font-size: 15px;
    }
`

const MarketDetails = ({address, products, schedule, link, modal, toggle }) => {
    return(
   
        <StyleModal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} className="modal-header">The Details</ModalHeader>
            <ModalBody>
                <p>{address}</p>
                <p><strong>Products Sold: </strong>{products}</p>
                <p><strong>Hours/Schedule: </strong>{schedule.replace(/<br ?\/?>/g, "")}*</p>
                <a href={link} target="blank">Find it on the map</a>
            </ModalBody>
            <ModalFooter>
            <p className="disclaimer">*Some hours and/or schedules may be out of date. Please check with your local markets before attending!</p>
            </ModalFooter>
        </StyleModal>
    

    )
};

export default MarketDetails;
