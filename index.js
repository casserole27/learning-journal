import { recentVideoData, videoData } from "./data.js";

/****** VARIABLES ******/

const navMenu =  document.getElementById('nav-menu');
const navBtn = document.getElementById('nav-btn');
const viewBtn = document.getElementById('view-btn');

/****** FUNCTIONS ******/

function renderRecentVideos() {
    let videoFeed = '';
    recentVideoData.forEach(video => {
        videoFeed +=`
        <article class="post">

            <video controls>
            <source src="${video.video}" type="video/mp4">
            </video>    
            <p class="post-date"${video.date}</p>
            <h3 class="post-title">${video.title}</h3>
            <p class="post-description">${video.description}</p>
        
        </article>
        `
    });
    document.getElementById('recent-posts-container').innerHTML = videoFeed;

};

renderRecentVideos();

function renderVideos() {
    let videoFeed = '';
    videoData.forEach(video => {
        videoFeed +=`
        <article class="post">

            <video controls>
            <source src="${video.video}" type="video/mp4">
            </video>    
            <p class="post-date"${video.date}</p>
            <h3 class="post-title">${video.title}</h3>
            <p class="post-description">${video.description}</p>
        
        </article>
        `
    });
    document.getElementById('posts-container').innerHTML = videoFeed;
}

function showNavMenu() {
    navMenu.classList.toggle('hidden');
    navBtn.classList.toggle('active-btn');
};

/****** EVENT LISTENERS ******/

navBtn.addEventListener('click', showNavMenu);
viewBtn.addEventListener('click', () => {
    renderVideos()
    viewBtn.classList.add('hidden-btn');
});
    

