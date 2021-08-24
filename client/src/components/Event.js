import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import ModalExample from './Modal';

const Event = (props) => {
    console.log(props.venue)
return (
    <>
    <Container >
        <div className="card">
        <ModalExample location={props.venue}/>
                <div className="date"> {props.start}</div>
                {props.end}
                <div className="title">
                <Col>
                    {props.title}
                </Col>
                <Col>
                        <img className="images" alt="img" src={props.image} />
                </Col> 
                </div>

        </div>

    </Container>
        
    </>
)

}

export default Event;