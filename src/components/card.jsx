import "./card.css";
import { Link } from "react-router-dom";

function Card({ data }) {
  if (!data) return null;

  return (
    <div className="main">
      <img className="img" src={data.image} alt={data.title} />
      <p className="p">{data.title}</p>
      <Link to={`/book/${data.id}`} className="view-more">
        View More
      </Link>
    </div>
  );
}

export default Card;
