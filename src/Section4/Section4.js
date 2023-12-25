import React from "react";
import './Section4.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pathmodels from '../Section1/Frame 35.svg'
function Section4(){
    return(
<div className="Section4-whole">
<Container className="Section4">
<Row ><Col sm={6}><img src={Pathmodels} alt="src" className="Section4-img"></img></Col>
        <Col sm={5}>
        <h1 className="Section4-content">The unseen of spending three years at Pixelgrade</h1>
      <p className="Section4-content-parah">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio
.</p>
<button className="Section4-button">Lear more</button></Col>

</Row>
</Container>
</div>
    );
}
export default Section4;