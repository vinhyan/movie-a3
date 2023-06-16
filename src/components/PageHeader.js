import { Card } from 'react-bootstrap';

export default function PageHeader(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <h3>{props.text}</h3>
          

        </Card.Body>
      </Card>
      <br />
    </>
  );
}
