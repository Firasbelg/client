import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({ _id, title, summary, cover, content, createdAt, author }) {
  return (
    <div className="card">
      <Link to={`/post/${_id}`} className="card-link">
        <div className="card-image">
          <img src={`http://localhost:4000/${cover}`} alt="cover" />
        </div>
        <div className="card-content">
          <h2>{title}</h2>
          <p className="summary">{summary}</p>
          <div className="info">
            <span className="author">{author.username}</span>
            <br />
            <time>{formatISO9075(new Date(createdAt))}</time>
          </div>
        </div>
      </Link>
    </div>
  );
}
