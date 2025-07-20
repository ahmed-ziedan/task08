async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();
  displayPosts(posts);
}

function displayPosts(posts) {
  const container = document.getElementById("posts");

  container.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const post = posts[i];

    container.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
  }
}
