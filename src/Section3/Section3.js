import Card from 'react-bootstrap/Card';
import './Section3.css';
import { CardGroup } from 'react-bootstrap';
import { Building, HandThumbsUp, People } from 'react-bootstrap-icons';

function Section3() {
  return (
    <CardGroup className='Cards'>
    <Card className='Cardname'>
      <Card.Body><People  className='Icons'/>
        <Card.Title className='Card-Title'>Membership<br></br> Organisations</Card.Title>
        <Card.Text>
        Our membership management<br></br> 
        software providesfull automation of <br></br>
        membership renewals and payments
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='Cardname'>
      <Card.Body><Building className='Icons'/>
        <Card.Title  className='Card-Title'>National<br></br> Associations
</Card.Title>
        <Card.Text>
        Our membership management<br></br> 
        software providesfull automation of <br></br>
        membership renewals and payments
        </Card.Text>
      </Card.Body>
    </Card>
       <Card className='Cardname'>
      <Card.Body><HandThumbsUp className='Icons' />
        <Card.Title  className='Card-Title'>Clubs And<br></br>
Groups</Card.Title>
        <Card.Text>
        Our membership management<br></br> 
        software providesfull automation of <br></br>
        membership renewals and payments
        </Card.Text>
      </Card.Body>
    </Card>
    </CardGroup>
    
  );
}

export default Section3;