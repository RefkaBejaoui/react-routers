//Filter ( title, rate)
import ReactStars from 'react-stars'
function Filter ({setTitle, setRating}) {
    const ratingChanged = (newRating) => {
       setRating(newRating)
      }

  return(
    <>
    <h4>what are you searching for</h4>
  <label>name of movie</label>
  <input type="text" onChange={(element)=>{setTitle(element.target.value)}}/> 
  <div style={{display:"flex", justifyContent:"center"}}>
  <label>rate of the movie</label>
 
  <ReactStars 
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} 
  half= {false}
  />
  </div>
      
  </>)

    
}
export default Filter