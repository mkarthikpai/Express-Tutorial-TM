const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");
const form = document.querySelector("#add-post-form");

// Get and Show Posts
async function showPosts() {
  try {
    const res = await fetch("http://localhost:8000/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();
    output.innerHTML = "";

    posts.forEach((element) => {
      const postElement = document.createElement("div");
      postElement.textContent = element.title;
      output.appendChild(postElement);
    });
  } catch (error) {
    console.log(`Error fetching posts:`, error);
  }
}

// Submit new Post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");
  try {
    const res = await fetch("http://localhost:8000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) {
      throw new Error("Failed to add post");
    }

    const newPost = await res.json();

    const postEl = document.createElement("div");
    postEl.textContent = newPost.title;
    output.appendChild(postEl);
    showPosts();
  } catch (error) {
    console.error("Error adding post");
  }
}

// Event Listeners
button.addEventListener("click", showPosts);
form.addEventListener("submit", addPost);
