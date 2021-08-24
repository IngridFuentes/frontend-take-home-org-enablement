import React from 'react';
import {useState} from 'react';
import {Button, Modal, ModalBody, ModalTitle, ModalFooter, ModalHeader} from 'react-bootstrap';
import ReactMapGL, { Marker } from 'react-map-gl';

const ModalExample = (props) => {
    // console.log(props.location)
    const [show, setShow] = useState(false);
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 40.416775,
        longitude: -73.935242,
        zoom: 4
      });
    
  
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
                 <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/ingridffm/ckspkp3db0emm17nx0qo298y6"
                onViewportChange={nextViewport => setViewport(nextViewport)}
                >
                <Marker latitude={props.location.lat} longitude={props.location.lon}>
                    <div>
                    <i className="fas fa-map-marker-alt"></i>
                    </div>
                </Marker>
                </ReactMapGL>

             </li>
             </ul>
             : 
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