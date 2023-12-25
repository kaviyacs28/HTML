import React from "react";
import './Section10.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ArrowRepeat, ArrowRight, Instagram, Send, Twitter, Whatsapp, Youtube } from "react-bootstrap-icons";
function Section10(){
    return(

<Container className="Section10">

      <Row>
        <Col sm><h2>Nexcent</h2>
        <p>Copyright © 2023 Nexcent</p>
        <p>All rights reserved</p>
        <Instagram className="ICONS"/>
        <Twitter className="ICONS"/>
        <Whatsapp className="ICONS" />
        <Youtube className="ICONS"/></Col>
        <Col sm><h2>Company</h2>
        <p>About us</p>
        <p>Blog</p>
        <p>Contact Us</p>
        <p>Pricing</p>
        <p>Testimonsial</p>
        </Col>
        <Col sm><h2>Support</h2>
        <p>Help center</p>
        <p>Terms of services</p>
        <p>Legal</p>
        <p>Privacy policy</p>
        <p>Status</p>
        </Col>
        <Col sm><h2>Stay Up to date</h2>
        <div className="Border">
        <input type="Textbox" text="Enter your email" className="Border1"></input><Send className="Border2"/>
        
        </div></Col>

      </Row>
    </Container>
    );
}
export default Section10;