import Link from 'next/link';
import { Card } from 'react-bootstrap';
import MovieDetails from '@/src/components/MovieDetails';
import PageHeader from '@/src/components/PageHeader';

const movieId = '573a139bf29313caabcf3d23';

export async function getStaticProps() {
  const res = await fetch(
    `https://zany-wig-toad.cyclic.app/api/movies/${movieId}`
  );
  const data = await res.json();
  return { props: { movie: data } };
}

export default function About(props) {
  return (
    <>
      <PageHeader text="About the Developer: Vinh Nhan" />
      <Card>
        <Card.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A aut
            deserunt tempore similique ipsum. Laudantium, ad dolorum dolore
            similique voluptates rerum doloribus tempora, sunt commodi fuga at
            magni reprehenderit temporibus?
          </p>
          <p>
            My current favourite movie is{' '}
            <Link href="/movies/The%20Matrix">The Matrix</Link>
          </p>
        </Card.Body>
        <MovieDetails movie={props.movie} />
      </Card>
    </>
  );
}
