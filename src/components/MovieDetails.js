import { Container, Row, Col } from 'react-bootstrap';

export default function MovieDetails(props) {
  return (
    <>
      <Container>
        <Row>
          {props.movie?.poster ? (
            <Col md>
              <img
                src={props.movie?.poster}
                className="w-100"
                alt={props.movie?.title}
              />
            </Col>
          ) : (
            ''
          )}
          <Col>
            <p>
              <strong>Directed By:</strong> {props.movie?.directors.join(', ')}
            </p>
            <p>{props.movie?.fullplot}</p>

            <p>
              <strong>Cast:</strong>{' '}
              {props.movie?.cast ? props.movie?.cast.join(', ') : 'N/A'}
            </p>
            <p>
              <strong>Awards:</strong> {props.movie?.awards.text}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {props.movie?.imdb.rating} (
              {props.movie?.imdb.votes} votes)
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
