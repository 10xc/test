import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import React from "react";



const Flex = styled.div`
display: flex;
justify-content: center;
`

const Wrap = styled.div`
width:50%;
height:200px;
/* border: 2px solid #000000; */
box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.22);
margin: 10px;
display: flex;
 img{
  margin-right: 10px;
  padding: 10px;
 }
`;



function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <>
      <Flex>
        <Wrap>
          <img src={coverImg} alt={title} />
          <div>
            <h2>
              <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            {genres.map(g => (
              <div key={g}>{g}</div>
            ))}
          </div>
        </Wrap >
      </Flex>
    </>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;