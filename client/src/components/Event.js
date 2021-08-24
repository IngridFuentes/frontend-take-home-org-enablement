import React from 'react';
import {Col, Container} from 'react-bootstrap';
import ModalExample from './Modal';

const Event = (props) => {
    // console.log(props.venue)
return (
    <>
    <Container >
        <div className="card">
        <ModalExample location={props.venue}/>
                <div className="date"> Start: {props.start}</div>
                <div className="date"> End: {props.end} </div>
                <div className="title">
                <Col>
                    {props.title}
                </Col>
                <Col>
                        <img className="images" alt="img" src={props.image} />
                </Col> 
                </div>
                <Col className="join">
                    Join us!
                </Col>

        </div>

    </Container>
        
    </>
)

}

export default Event;