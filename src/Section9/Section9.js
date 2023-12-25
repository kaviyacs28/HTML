import React from "react";
import './Section9.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRepeat, ArrowRight } from "react-bootstrap-icons";
function Section9(){
    return(
<Container className="Section4">
<Row >
        <Col sm={8}>
        <h1 className="Section9-content">Pellentesque suscipit fringilla libero eu.</h1>
     <button className="Section9-button">Get a Demo<ArrowRight /></button></Col>

</Row>
</Container>

    );
}
export default Section9;