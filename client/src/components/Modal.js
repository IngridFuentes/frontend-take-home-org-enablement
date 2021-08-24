import React from 'react';
import {useState} from 'react';
import {Button, Modal, ModalBody, ModalTitle, ModalFooter, ModalHeader} from 'react-bootstrap';

const ModalExample = (props) => {
    // console.log(props.location)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Show me more
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Location</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              
             {props.location !== null ?
             <ul> 
             <li> 
                 {props.location.name} |
                 {props.location.city} |
                 {props.location.country} |
                 {props.location.region}

             </li>
             </ul> : 
             "Not venue information"}
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default ModalExample;