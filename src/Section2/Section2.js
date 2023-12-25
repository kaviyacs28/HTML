import React from "react";
import './Section2.css';
import Php from "../Section2/images/php.svg";
import Cloudf from "../Section2/images/cloudflare.svg";
import Ngin from "../Section2/images/nginx.svg";
import Cloudl from "../Section2/images/cloudlinux.svg";
import Word from "../Section2/images/wordpress.svg";
import Mysql from "../Section2/images/mysql.svg";
import { Container } from "react-bootstrap";
function Logos(){
    return(
        <Container>
          <h2 className="client">Our Clients</h2>
          <h5 className="client1">We have been working with some Fortune 500+ clients</h5>
 <div className="row">
  <div className="Php col-md-2 col-sm-12">
  <img src={Php} alt="php"></img></div>
  <div className="Cloud col-md-2 col-sm-12">
  <img src={Cloudf} alt="cloudflare"></img></div>
  <div className="Ngin col-md-2 col-sm-12">
  <img src={Ngin} alt="ngin"></img></div>
  <div className="Cloudlinux col-md-2 col-sm-12">
  <img src={Cloudl} alt="cloudlinux"></img></div>
  <div className="Wordpress col-md-1 col-sm-12">
  <img src={Word} alt="wordpress"></img></div>
  <div className="Mysql col-md-1 col-sm-12">
  <img src={Mysql} alt="mysql"></img></div>
  </div>
  <h2 className="client">Manage your entire community<br></br> in a single system</h2>
  <h5 className="client1">Who is Nextcent suitable for? </h5>
  </Container>
    )
}
export default Logos;
