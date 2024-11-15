const postsContainer = document.getElementById("postsContainer");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

const blogPosts = [
    {
        title: "CSS Grid Layout",
        author: "$AUTHOR_NAME",
        date: "2024-11-01",
        image: "https://picsum.photos/800/600",
        excerpt: "Master CSS Grid layout in a few easy steps.",
        content: "CSS Grid is a powerful layout system that allows for complex and responsive web designs..."
    },
    {
        title: "JavaScript Async/Await",
        author: "$AUTHOR_NAME",
        date: "2024-11-05",
        image: "https://picsum.photos/800/600",
        excerpt: "Learn about asynchronous programming in JavaScript using async/await.",
        content: "Async/await is a way to work with asynchronous code in JavaScript more comfortably..."
    }
];

function displayPosts(posts) {
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post-card");

        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="post-image">
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-meta">By ${post.author} | ${post.date}</p>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">Read More</a>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

function sortPosts(posts) {
    const sortedPosts = posts.sort((a, b) => {
        if (sortSelect.value === "newest") {
            return new Date(b.date) - new Date(a.date);
        }
        return new Date(a.date) - new Date(b.date);
    });
    displayPosts(sortedPosts);
}

searchInput.addEventListener("input", () => {
    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchInput.value.toLowerCase())
    );
    displayPosts(filteredPosts);
});

sortSelect.addEventListener("change", () => {
    sortPosts(blogPosts);
});

displayPosts(blogPosts);
