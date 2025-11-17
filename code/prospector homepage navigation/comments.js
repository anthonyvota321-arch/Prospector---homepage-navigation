// Top thread content
const mainPost = {
  avatar: "https://c.animaapp.com/mi32g2vfSADAlL/img/shape-3.png",
  username: "@Name",
  date: "Apr 1, 2025",
  time: "9:41 AM",
  title: "Document Title",
  comments: "##",
  likes: "##",
  dislikes: "##"
};

// Sample comment section
const comments = [
  { username: "@Name", date: "Apr 1, 2025", time: "9:41 AM", text: "Description of Comment/Question" },
  { username: "@Name", date: "Apr 1, 2025", time: "9:41 AM", text: "Description of Comment/Question" },
  { username: "@Name", date: "Apr 1, 2025", time: "9:41 AM", text: "Description of Comment/Question" },
  { username: "@Name", date: "Apr 1, 2025", time: "9:41 AM", text: "Description of Comment/Question" },
  { username: "@Name", date: "Apr 1, 2025", time: "9:41 AM", text: "Description of Comment/Question" },
];

// Render main post block
const topThread = document.getElementById("top-thread");

topThread.innerHTML = `
  <div class="top-row">
    <div class="row">
      <div class="avatar" style="background-image:url('${mainPost.avatar}')"></div>
      <span class="username">${mainPost.username}</span>
    </div>

    <div class="row">
      <span class="badge">${mainPost.date}</span>
      <span class="badge">${mainPost.time}</span>
    </div>
  </div>

  <h2 class="title">${mainPost.title}</h2>

  <div class="action-row">
    <div class="row">
      <svg width="35" height="35" stroke="currentColor" fill="none" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      <span>${mainPost.comments}</span>
    </div>

    <div class="row">
  <span id="like-btn" class="emoji-btn">👍</span>
  <span id="like-count" class="like-count">${mainPost.likes}</span>

  <span id="dislike-btn" class="emoji-btn" style="margin-left: 20px;">👎</span>
  <span id="dislike-count" class="dislike-count">${mainPost.dislikes}</span>
</div>



  <input class="comment-box" placeholder="Comment">

  <div class="row" style="justify-content: flex-end; margin-top: 8px;">
    <svg width="32" height="32" stroke="currentColor" fill="none" stroke-width="2">
      <path d="M4 17v2a2 2 0 0 0 2 2h12" />
      <polyline points="16 7 21 12 16 17" />
      <line x1="21" y1="12" x2="3" y2="12" />
    </svg>
  </div>
`;

// Render all comments
const commentsSection = document.getElementById("comments-section");

comments.forEach(c => {
  const card = document.createElement("div");
  card.className = "comment-card";

  card.innerHTML = `
    <div class="top-row">
      <div class="row">
        <div class="avatar" style="background-color:#eae6ff"></div>
        <span class="username">${c.username}</span>
      </div>

      <div class="row">
        <span class="badge">${c.date}</span>
        <span class="badge">${c.time}</span>
      </div>
    </div>

    <p class="comment-text">${c.text}</p>
  `;

  commentsSection.appendChild(card);
});

// Back → Threads
document.getElementById("back-button").onclick = () => {
  window.location.href = "threads.html";
};
// LIKE + DISLIKE INTERACTION
let liked = false;
let disliked = false;

const likeBtn = document.getElementById("like-btn");
const dislikeBtn = document.getElementById("dislike-btn");

const likeCount = document.getElementById("like-count");
const dislikeCount = document.getElementById("dislike-count");

likeBtn.addEventListener("click", () => {
  if (!liked) {
    liked = true;
    likeBtn.classList.add("active");
    likeCount.textContent = Number(likeCount.textContent) + 1;

    // If user had disliked before, undo it
    if (disliked) {
      disliked = false;
      dislikeBtn.classList.remove("active");
      dislikeCount.textContent = Number(dislikeCount.textContent) - 1;
    }
  } else {
    liked = false;
    likeBtn.classList.remove("active");
    likeCount.textContent = Number(likeCount.textContent) - 1;
  }
});

dislikeBtn.addEventListener("click", () => {
  if (!disliked) {
    disliked = true;
    dislikeBtn.classList.add("active");
    dislikeCount.textContent = Number(dislikeCount.textContent) + 1;

    // Undo like if active
    if (liked) {
      liked = false;
      likeBtn.classList.remove("active");
      likeCount.textContent = Number(likeCount.textContent) - 1;
    }
  } else {
    disliked = false;
    dislikeBtn.classList.remove("active");
    dislikeCount.textContent = Number(dislikeCount.textContent) - 1;
  }
});
