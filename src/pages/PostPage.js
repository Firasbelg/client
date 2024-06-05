import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from 'react-router-dom';

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => response.json())
            .then(postInfo => setPostInfo(postInfo))
            .catch(error => console.error('Error fetching post:', error));
    }, [id]);

    const deletePost = () => {
        fetch(`http://localhost:4000/post/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(response => {
                if (response.ok) {
                    window.location.reload();
                } else {
                    console.error('Failed to delete post');
                }
            })
            .catch(error => {
                console.error('Error deleting post:', error);
            });
    };

    // Handle loading state
    if (!postInfo) return <div>Loading...</div>;

    return (
        <div className="card2">
            <div className="card-image2">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
                <div className="button-container">
                    {userInfo.id === postInfo.author._id && (
                        <div className="edit-row">
                            <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
                                Edit post
                            </Link>
                        </div>
                    )}
                    {userInfo.id === postInfo.author._id && (
                        <div className="delete-row">
                            <button className="delete-btn" onClick={deletePost}>
                                Delete post
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="card-content">
                <h1>{postInfo.title}</h1>
                <div className="author">by @{postInfo.author.username}</div>
                <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            </div>
        </div>
    );
}
