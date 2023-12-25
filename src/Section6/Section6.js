import React from "react";
import './Section6.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pathmodels from '../Section6/64aa7729c09d97fe0492c3a3_pana.svg';
function Section6(){
    return(
<div className="Section6-whole">
<Container className="Section6">
<Row ><Col sm={6}><img src={Pathmodels} alt="src" className="Section6-img"></img></Col>
        <Col sm={5}>
        <h1 className="Section6-content">How to design your site footer like we did</h1>
      <p className="Section6-content-parah">Donec a eros justo. Fusce egestas tristique ultrices.
       Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit 
       erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.
        Vivamus vehicula leo dui, at porta nisi facilisis finibus. 
        In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. 
        Integer in nisi eget nulla commodo faucibus efficitur quis massa.
         Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
       Donec consectetur faucibus ipsum id gravida.
.</p>
<button className="Section6-button">Lear more</button></Col>

</Row>
</Container>
</div>
    );
}
export default Section6;