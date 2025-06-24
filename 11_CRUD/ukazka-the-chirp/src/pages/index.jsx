import { render } from '@czechitas/render';
import { Post } from '../components/Post';
import '../global.css';
import './index.css';

const userID = 4;
const originalPostID = null;

const fetchPosts = async () => {
  const response = await fetch(`http://localhost:4000/api/posts`);
  const json = await response.json();
  return json.data;
};

const fetchUser = async (userID) => {
  const response = await fetch(`http://localhost:4000/api/users/${userID}`);
  const json = await response.json();
  return json.data;
};

const posts = await fetchPosts();
const user = await fetchUser(userID);

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>The Chirp</h1>
    <form className="post-form">
      <p>Co máte na srdci?</p>
      <textarea placeholder="Napište něco..." className="post-input"></textarea>
      <button type="submit">Publikovat</button>
    </form>
    
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  </div>
);

const formElement = document.querySelector('.post-form');
const deleteButtons = document.querySelectorAll('.delete-btn');
const editButtons = document.querySelectorAll('.edit-btn');

const onSubmit = async (event) => {
  event.preventDefault();

const textElement = document.querySelector('.post-input');
const message = textElement.value;

if (postID === null) {

const response = await fetch(`http://localhost:4000/api/posts`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userName: user.name,
    userID: userID,
    userHandle: user.handle,
    userAvatar: user.avatar,
    text: message,
    likes: 0
  }),
});

if (!response.ok) {
  console.error('Chyba při publikování příspěvku:', response.statusText);
  return;
}
window.location.reload();
return;
}

const response = await fetch(`http://localhost:4000/api/posts/${originalPostID}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userName: user.name,
    userID: userID,
    userHandle: user.handle,
    userAvatar: user.avatar,
    text: message,
    likes: 0
  }),
}
)};

const onDelete = async (event) => {
  const postID = Number(event.target.dataset.id);
  const response = await fetch(`http://localhost:4000/api/posts/${postID}`,{
    method: 'DELETE',
  });

  if (!response.ok) {
    console.error('Chyba při mazání příspěvku:', response.statusText);
    return;
  }
  window.location.reload();
}

const onEdit = async (event) => {
  const postID = Number(event.target.dataset.id);
  const originalPost = posts.find((post) => post.id === postID);
  originalPostID = postID;

  const textareaElement = document.querySelector('.post-input');
  textareaElement.value = originalPost.text;
  textareaElement.focus();

  const button = document.querySelector('.post-form button');
  button.textContent = 'Upravit';
};

formElement.addEventListener('submit', onSubmit);

deleteButtons.forEach((button) => {
  button.addEventListener('click', onDelete);
});

editButtons.forEach((button) => {
  button.addEventListener('click', onEdit);
});
