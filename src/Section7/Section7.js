import React from "react";
import './Section7.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pathmodels from '../Section7/Section7.jpg';
import { Alexa, ArrowRight, Fingerprint, Link, MenuDown, PieChart, UiRadiosGrid, Vinyl } from "react-bootstrap-icons";
function Section7(){
    return(
<div className="Section7-whole">
<Container className="Section7">
<Row ><Col sm={6}><img src={Pathmodels} alt="src" className="Section7-img"></img></Col>
        <Col sm={5}>
              <p className="Section7-content-parah">Maecenas dignissim justo eget nulla rutrum molestie.
               Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim.
                 Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, 
                 nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, 
                 quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
                  Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
                   Quisque vulputate odio neque, eget efficitur libero condimentum id. 
              Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              <h1 className="Color-bg" >Tim Smith</h1>
              <p>British Dragon Boat Racing Association</p>
</p>
<PieChart  className="Section7-icon"/>
<Alexa className="Section7-icon"/>
<MenuDown className="Section7-icon"/>
<UiRadiosGrid className="Section7-icon" />
<Fingerprint className="Section7-icon"/>
<Link className="Section7-icon"/>
<h6 className="Section7-icon-url">Meet All Customers  <ArrowRight /></h6>

</Col>

</Row>
</Container>
</div>
    );
}
export default Section7;