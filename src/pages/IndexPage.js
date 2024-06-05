import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  // Charger les posts depuis l'API
  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then(response => response.json())
      .then(posts => {
        console.log(posts); // Affiche les posts dans la console
        setPosts(posts); // Met à jour l'état avec les posts récupérés
      });
  }, []);

  // Afficher la liste des posts
  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
}
