import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
width:80%;
height:200px;
border: 2px solid #000000;
margin: 10px;
display: flex;
`;



function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <Wrap>
      <img src={coverImg} alt={title} style={{marginRight:"10px"}} />
      <div>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        {/* <p>{summary}</p> */}
        <ul>
          {genres.map(g => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </Wrap>
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