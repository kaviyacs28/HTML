import React from "react";
import './Section5.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HandIndex, People, Wallet } from "react-bootstrap-icons";
function Section5(){
    return(
<div className="Section5-whole">
<Container className="Section5">
<Row >
<Col sm={5}>
        <h1 className="Section5-content">Helping a local</h1>
        <h1 className="Color-bg5" >business reinvents itself</h1>
<p className="Section5-content-parah">We reached here with our hard work and dedication</p>
</Col><Col>
{/* <Row >
        <Col xs={2} md={4} lg={6}><People className="Wallet" /> 2,245,341 <h6 className="IconName5">Members</h6></Col>
        <Col xs={2} md={4} lg={6}><HandIndex className="Wallet"/>46,328<h6 className="IconName5">Clubs</h6> </Col>
</Row>
<Row>
        <Col xs={2} md={4} lg={6}><HandIndex className="Wallet" />828,867 <h6 className="IconName5">Event Bookings</h6></Col>
        <Col xs={2} md={4} lg={6}><Wallet className="Wallet"/>1,926,436 <h6 className="IconName5">Payments</h6></Col>
</Row> */}
<Row>
<Col><div className="display-flex-vertical">
<People className="Wallet"/>
<h3 className="IconName-Score">2,245,341</h3>
<div className="IconName">Members</div>
</div></Col > <Col>
<div className="display-flex-vertical">
<HandIndex className="Wallet"/>
<h3 className="IconName-Score">2,245,341</h3>
<div className="IconName">Members</div>
</div></Col></Row>
<Row><Col>
<div className="display-flex-vertical">
<HandIndex className="Wallet" />
<h3 className="IconName-Score">2,245,341</h3>
<div className="IconName">Members</div>
</div></Col><Col>
<div className="display-flex-vertical">
<Wallet className="Wallet"/>
<h3 className="IconName-Score">2,245,341</h3>
<div className="IconName">Members</div>
</div></Col>
</Row>
</Col>

</Row>
    

</Container>
</div>
    );
}
export default Section5;