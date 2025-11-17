const threadsData = [
  {
    id: 1,
    username: "@Name",
    date: "Apr 1,",
    year: "2025",
    time: "9:41 AM",
    title: "Document Title",
    commentCount: "10",
    likeCount: "05",
    dislikeCount: "03",
    isStarred: true,
    bgColor: "bg-light",
    avatarUrl: "https://c.animaapp.com/mi32g2vfSADAlL/img/shape-3.png",
  },
  {
    id: 2,
    username: "@Name",
    date: "Apr 1,",
    year: "2025",
    time: "9:41 AM",
    title: "Document Title",
    commentCount: "12",
    likeCount: "00",
    dislikeCount: "01",
    isStarred: false,
    bgColor: "bg-dark",
    avatarUrl: "https://c.animaapp.com/mi32g2vfSADAlL/img/shape-3.png",
  },
  {
    id: 3,
    username: "@Name",
    date: "Apr 1,",
    year: "2025",
    time: "9:41 AM",
    title: "Document Title",
    commentCount: "33",
    likeCount: "24",
    dislikeCount: "5",
    isStarred: false,
    bgColor: "bg-light",
    avatarUrl: "https://c.animaapp.com/mi32g2vfSADAlL/img/shape-3.png",
  },
  {
    id: 4,
    username: "@Name",
    date: "Apr 1,",
    year: "2025",
    time: "9:41 AM",
    title: "Document Title",
    commentCount: "##",
    likeCount: "##",
    dislikeCount: "##",
    isStarred: false,
    bgColor: "bg-dark",
    avatarUrl: "https://c.animaapp.com/mi32g2vfSADAlL/img/shape-3.png",
  },
];

const icons = {
  messageSquare: `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,

  thumbsUp: `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>`,

  thumbsDown: `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 14V2"/><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.12L12 22a3.13 3.13 0 0 1-3-3.88Z"/></svg>`,

  star: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,

  starFilled: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" stroke="black" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
};

function createThreadCard(thread, index) {
  const card = document.createElement("div");
  card.className = `thread-card ${thread.bgColor}`;
  card.style.animationDelay = `${index * 100}ms`;

  card.innerHTML = `
    <div class="card-content">
      <div class="card-header">
        <div class="user-info">
          <div class="avatar" style="background-image:url('${thread.avatarUrl}')"></div>
          <span class="username">${thread.username}</span>
        </div>

        <div class="metadata">
          <div class="badge"><span class="badge-text">${thread.date}</span><span class="badge-text">${thread.year}</span></div>
          <div class="badge"><span class="badge-text">${thread.time}</span></div>
        </div>
      </div>

      <div class="card-body">
        <h2 class="thread-title">${thread.title}</h2>

        <div class="card-footer">
          <div class="stat-group comment-button" data-thread-id="${thread.id}">
  ${icons.messageSquare}
  <span class="stat-text">${thread.commentCount}</span>
</div>


          <div class="actions-group">
            <div class="stat-group">
              ${icons.thumbsUp}
              <span class="stat-text">${thread.likeCount}</span>
            </div>
            <div class="stat-group">
              ${icons.thumbsDown}
              <span class="stat-text">${thread.dislikeCount}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <div class="pagination-dot"></div>
        <div class="pagination-dot inactive"></div>
      </div>
    </div>

    <button class="star-button" data-thread-id="${thread.id}">
      ${thread.isStarred ? icons.starFilled : icons.star}
    </button>
  `;

  return card;
}

function renderThreads() {
  const container = document.getElementById("threads-container");

  threadsData.forEach((thread, index) => {
    const card = createThreadCard(thread, index);
    container.appendChild(card);
  });

  document.querySelectorAll(".star-button").forEach((button) => {
    button.addEventListener("click", function () {
      const threadId = parseInt(this.getAttribute("data-thread-id"));
      const thread = threadsData.find((t) => t.id === threadId);
      thread.isStarred = !thread.isStarred;
      this.innerHTML = thread.isStarred ? icons.starFilled : icons.star;
    });
  });
}

document.getElementById('back-button').addEventListener('click', function () {
  window.location.href = "index.html";  // go back to homepage
});


document.getElementById("filter-button").addEventListener("click", () => {
  alert("Filters coming soon!");
});

document.addEventListener("DOMContentLoaded", renderThreads);
// Make comment icons open comments page
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".comment-button");
  if (!btn) return;

  const threadId = btn.getAttribute("data-thread-id");

  // For now we simply open the comments page
  window.location.href = "comments.html";
});
