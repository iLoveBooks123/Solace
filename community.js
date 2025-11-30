// community.js
document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");
    const loadingSpinner = document.getElementById("loading-spinner");
    const postForm = document.getElementById("post-form");

    // Example posts
    let posts = [
        {
            id: 1,
            title: "Dealing with Exam Stress",
            content: "Exams can be overwhelming. Here's how I cope...",
            video: "https://www.youtube.com/embed/5qap5aO4i9A", // example video
            links: [
                {text: "Read More on Our Blog", href: "blogs.html#exam-stress"},
                {text: "Helpful Resource", href: "resources.html#stress"}
            ]
        },
        {
            id: 2,
            title: "Building a Positive Morning Routine",
            content: "Starting the day right sets the tone...",
            video: "https://www.youtube.com/embed/ScMzIvxBSi4",
            links: [
                {text: "Morning Routine Tips", href: "blogs.html#morning-routine"},
                {text: "Daily Mindfulness Exercise", href: "blogs.html#mindfulness"}
            ]
        },
        {
            id: 3,
            title: "Managing Anxiety Through Journaling",
            content: "Journaling helps me identify triggers and relieve tension...",
            video: "https://www.youtube.com/embed/Oo0hXJ1xzjs",
            links: [
                {text: "Journaling Tips", href: "blogs.html#journaling"},
                {text: "More About Anxiety", href: "resources.html#anxiety"}
            ]
        }
    ];

    // Simulate auth delay
    setTimeout(() => {
        loadingSpinner.style.display = "none";
        postForm.classList.remove("hidden");
        renderPosts();
    }, 1000);

    // Function to render posts
    function renderPosts() {
        postsContainer.innerHTML = "";
        posts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.className = "bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition";
            postDiv.innerHTML = `
                <h3 class="font-serif text-xl font-semibold text-gray-800 mb-2">${post.title}</h3>
                <p class="text-gray-600 text-sm line-clamp-3">${post.content}</p>
            `;
            postDiv.addEventListener("click", () => openModal(post));
            postsContainer.appendChild(postDiv);
        });
    }

    // Handle new post submission
    postForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("post-title").value.trim();
        const content = document.getElementById("post-content").value.trim();

        if (!title || !content) return;

        const newPost = {
            id: posts.length + 1,
            title,
            content,
            video: "https://www.youtube.com/embed/5qap5aO4i9A", // default video
            links: [
                {text: "Check Our Blog", href: "blogs.html"}
            ]
        };

        posts.unshift(newPost);
        renderPosts();
        postForm.reset();
    });

    // Create modal container
    const modal = document.createElement("div");
    modal.id = "post-modal";
    modal.className = "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden z-50";
    modal.innerHTML = `
        <div class="bg-white rounded-xl max-w-3xl w-full p-6 relative">
            <button id="modal-close" class="absolute top-4 right-4 text-gray-500 hover:text-accent-blue font-bold text-xl">&times;</button>
            <h3 id="modal-title" class="font-serif text-2xl font-bold text-gray-800 mb-4"></h3>
            <p id="modal-content" class="text-gray-700 mb-4"></p>
            <div id="modal-video" class="mb-4"></div>
            <ul id="modal-links" class="list-disc list-inside text-accent-blue space-y-1"></ul>
        </div>
    `;
    document.body.appendChild(modal);

    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    const modalVideo = document.getElementById("modal-video");
    const modalLinks = document.getElementById("modal-links");
    const modalClose = document.getElementById("modal-close");

    function openModal(post) {
        modalTitle.textContent = post.title;
        modalContent.textContent = post.content;
        modalVideo.innerHTML = `<iframe class="w-full h-64 rounded-lg" src="${post.video}" frameborder="0" allowfullscreen></iframe>`;
        modalLinks.innerHTML = "";
        post.links.forEach(link => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${link.href}" class="text-accent-blue hover:underline">${link.text}</a>`;
            modalLinks.appendChild(li);
        });
        modal.classList.remove("hidden");
    }

    modalClose.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
    });
});
