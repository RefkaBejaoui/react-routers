import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'
import {Link} from 'react-router-dom'
const MovieCard = ({title,description,posterURL,rating, id}) => {
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
  return (
    <Link to={`/trailer/${id}`}>
    <Card style={{ width: '18rem', display:'inline-block', border:'solid black 3px', margin:5}}>
      <Card.Img variant="top" src={posterURL} style={{width:280 , height:150 , margin:2 }} />
      <Card.Body>
        <Card.Title>Movie Title : {title} </Card.Title>
        <Card.Text>
            {description}
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} 
  half= {false}
  edit ={false}
  value={rating}/>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default MovieCard;


