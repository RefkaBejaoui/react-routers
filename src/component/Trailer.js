import { useParams , useNavigate} from "react-router";
import List from "../List";
const Trailer = () => {
  const params = useParams();
  const navigate = useNavigate()
  const T = List.find((elem) => elem.id == params.id);
  return (
    <>
      {T && (
        <>
          <iframe
            width="560"
            height="315"
            src={T.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p>{T.description}</p>
        </>
      )}
      <button onClick={()=>navigate('/')}> go back </button>
    </>
  );
};
export default Trailer;
