import React from "react";
import { Modal, ModalHeader, ModalBody} from "reactstrap";
import styled from "styled-components";

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


const NoDetails = ({ modal, toggle }) => {
    return(
   
            <StyleModal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className="modal-header">The Details</ModalHeader>
                <ModalBody>
                    <p>Sorry it looks like we don't have details for that market!</p>
                </ModalBody>
            </StyleModal>
     

    )
};

export default NoDetails;