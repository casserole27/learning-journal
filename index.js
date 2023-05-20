/****** VARIABLES ******/

const navMenu =  document.getElementById('nav-menu');
const navBtn = document.getElementById('nav-btn');


/****** FUNCTIONS ******/


function showNavMenu() {
    // if (e.target.id === 'BUTTON') {
    navMenu.classList.toggle('hidden');
    navBtn.classList.toggle('active-btn');
    console.log('button clicked')    
// };
};

const navMenuToggle = () => {
    console.log("nav menu clicked!")

}


/****** EVENT LISTENERS ******/

navBtn.addEventListener('click', showNavMenu);
// document.addEventListener('click', showNavMenu);