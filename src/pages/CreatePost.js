import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";

// Configuration des modules et formats pour ReactQuill
const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  // Fonction pour créer un nouveau post
  async function createNewPost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  // Redirection après la création du post
  if (redirect) {
    return <Navigate to={'/'} />;
  }

  // Affichage du formulaire de création de post
  return (
    <div className="create-post-container">
      <h2>Create a New Post</h2>
      <form onSubmit={createNewPost} className="create-post-form">
        <input type="text" placeholder="Title" value={title} onChange={ev => setTitle(ev.target.value)} />
        <input type="text" placeholder="Summary" value={summary} onChange={ev => setSummary(ev.target.value)} />
        <input type="file" onChange={ev => setFiles(ev.target.files)} />
        <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats} />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
