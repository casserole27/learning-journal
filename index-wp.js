const viewBtn = document.getElementById('view-btn');

function showMorePosts() {
    const posts = document.querySelectorAll('article');
    posts.forEach(post => {
        post.classList.remove('hidden-post')
    });

    viewBtn.classList.add('hidden-btn');
};

viewBtn.addEventListener('click', showMorePosts);
