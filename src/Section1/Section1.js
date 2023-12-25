import React from "react";
import './Section1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pathmodel from '../Section1/comp.svg'
function Section1(){
    return(
<div className="Section1-whole">
<Container className="Section1">
<Row >
        <Col sm={5}>
        <h1 className="Section1-content">Lessons and insights</h1>
        <h1 className="Color-bg1">from 8 years</h1>
<p className="Section1-content-parah">Where to grow your business as a photographer: site or social media?.</p>
<button className="Section1-button">Register</button></Col>
<Col sm={6}><img src={Pathmodel} alt="src" className="Section1-img"></img></Col>
</Row>
</Container>
</div>
    );
}
export default Section1;
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './Frame 35.svg';

// function Section1() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Section1;
// import React, { useState } from 'react';
// import image1 from '../Section1/Frame 35.svg'; // Replace with your image paths
// import image2 from '../Section1/comp.svg';
// import image3 from '../Section1/nexcent-logo.png';

// const Slider = () => {
//   const images = [image1, image2, image3];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const goToPreviousSlide = () => {
//     const index = (currentImageIndex - 1 + images.length) % images.length;
//     setCurrentImageIndex(index);
//   };

//   const goToNextSlide = () => {
//     const index = (currentImageIndex + 1) % images.length;
//     setCurrentImageIndex(index);
//   };

//   return (
//     <div className="slider">
//       <button onClick={goToPreviousSlide}>Previous</button>
//       <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
//       <button onClick={goToNextSlide}>Next</button>
//     </div>
//   );
// };

// export default Slider;
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from './Frame 35.svg';

// function Section1() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Section1;