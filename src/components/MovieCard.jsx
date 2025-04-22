import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <Link to={`/movies/${title}`}>
          <img src={`https://via.placeholder.com/150?text=${title}`} alt={title} />
        </Link>
        
    </article>
  );
};

export default MovieCard;