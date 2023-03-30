let posts = [];

const postForm = document.querySelector('#post-form');
const postsContainer = document.querySelector('#posts-container');

postForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const postContent = document.querySelector('#post-content').value;
  
  const newPost = {
    content: postContent
  };
  
  posts.push(newPost);
  
  postForm.reset();
  
  renderPosts();
});

function renderPosts() {
  postsContainer.innerHTML = '';
  
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    
    const postHTML = `
      <div class="post">
        <p>${post.content}</p>
      </div>
    `;
    
    postsContainer.innerHTML += postHTML;
  }
}

