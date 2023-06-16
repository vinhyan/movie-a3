/*********************************************************************************
 *  WEB422 – Assignment 3
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Vinh Nhan | Student ID: 171452212 | Date: June 16, 2023
 *  Live site: https://movie-a3.vercel.app/
 ********************************************************************************/

import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Pagination, Accordion } from 'react-bootstrap';
import MovieDetails from '@/src/components/MovieDetails';
import PageHeader from '@/src/components/PageHeader';

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  //fetch movies data:
  const { data, error } = useSWR(
    `https://zany-wig-toad.cyclic.app/api/movies?page=${page}&perPage=10`
  );

  //To ensure when "data" is updated (i.e., new page being requested), use useEffect to set pageData:
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  //Helper functions:
  function previous() {
    return setPage(page > 1 ? page - 1 : page);
  }

  function next() {
    return setPage(page + 1);
  }

  return (
    <>
      <PageHeader text="Film Collection: Sorted by Date" />
      <Accordion defaultActiveKey="0">
        {pageData.map((movie) => {
          return (
            <Accordion.Item eventKey={movie._id} key={movie._id}>
              <Accordion.Header>
                <strong>
                  {movie.title} ({movie.year}, {movie.directors.join(', ')})
                </strong>
              </Accordion.Header>
              <Accordion.Body>
                <MovieDetails movie={movie} />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
