/****** VARIABLES ******/

const navMenu =  document.getElementById('nav-menu');
const navBtn = document.getElementById('nav-btn');
const viewBtn = document.getElementById('view-btn');


/****** FUNCTIONS ******/


function showNavMenu() {
    navMenu.classList.toggle('hidden');
    navBtn.classList.toggle('active-btn');
    console.log('button clicked')    
};

function showMorePosts() {
    const posts = document.querySelectorAll('article');
    posts.forEach(post => {
        post.classList.remove('hidden-post')
    })

    viewBtn.classList.add('hidden-btn')
};


/****** EVENT LISTENERS ******/

navBtn.addEventListener('click', showNavMenu);
viewBtn.addEventListener('click', showMorePosts)
    

