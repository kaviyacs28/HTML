import React from "react";
import './Section8.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Pathmodels from '../Section8/home1.jpg';
import Path from '../Section8/home2.jpg';
import Paths from '../Section8/home3.jpg';
import { ArrowRight } from "react-bootstrap-icons";
function Section8(){
    return(
<div className="Section8-whole">
<Container className="Section8">
        <div>
         <Row> <h2 className="clients-heading">Caring is the new marketing</h2>
         <Col ><h5 className="client" >The Nextcent blog is the best place to read about
           the latest  membership insights, trends and more.
            See who's joining the community,read about how our community are 
            increasing their membership income and lot's more.​</h5></Col></Row>
         </div>
       <Row>
        <Col xs={6} md={4}><img src={Pathmodels} alt="src" className="Section8-img"></img>
        <Col sm={12} md={6} lg={4}>
   
          <Card className="mb-3">
             <Card.Body>
            <Card.Text>
              Creating Streamlined Safeguarding Processes with OneRen
              </Card.Text>
              <Card.Text  className="Arrow">Readmore <ArrowRight /></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Col>
        <Col xs={6} md={4}><img src={Path} alt="src" className="Section8-img"></img>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
             <Card.Body>
            <Card.Text>
              Creating Streamlined Safeguarding Processes with OneRen
              </Card.Text>
              <Card.Text  className="Arrow">Readmore <ArrowRight /></Card.Text>
            </Card.Body>
          </Card>
        </Col></Col>
        <Col xs={6} md={4}><img src={Paths} alt="src" className="Section8-img"></img>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
             <Card.Body>
            <Card.Text>
              Creating Streamlined Safeguarding Processes with OneRen
              </Card.Text>
              <Card.Text  className="Arrow">Readmore <ArrowRight /></Card.Text>
            </Card.Body>
          </Card>
        </Col></Col>
        
        </Row>
        
    {/* <Row className="justify-content-md-center">
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
             <Card.Body>
            <Card.Text>
              Creating Streamlined Safeguarding Processes with OneRen
              </Card.Text>
              <Card.Text>Readmore  <ArrowRight /></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
             <Card.Body>
            <Card.Text>
              Creating Streamlined Safeguarding Processes with OneRen
              </Card.Text>
              <Card.Text>Readmore  <ArrowRight /></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card className="mb-3">
             <Card.Body>
            <Card.Text>
              Creating Streamlined Safeguarding Processes with OneRen
              </Card.Text>
              <Card.Text>Readmore  <ArrowRight /></Card.Text>
            </Card.Body>
          </Card>
        </Col>          
     </Row> */}
     
</Container>
</div>
    );
}
export default Section8;