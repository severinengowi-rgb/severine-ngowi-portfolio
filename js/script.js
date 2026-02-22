// ================== DARK MODE ==================
const darkModeToggle = document.getElementById('darkModeToggle');
if(localStorage.getItem('darkMode') === 'enabled'){
    document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode','enabled');
    } else {
        localStorage.setItem('darkMode','disabled');
    }
});

// ================== SIDEBAR TOGGLE ==================
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
    if(sidebar.style.left === '0px'){
        sidebar.style.left = '-220px';
        menuToggle.classList.remove('hidden');
    } else {
        sidebar.style.left = '0px';
        menuToggle.classList.add('hidden');
    }
}

// ================== PORTFOLIO IMAGES ==================
function showImages(projectId){
    const allProjects = document.querySelectorAll('.project-images');
    allProjects.forEach(proj => proj.style.display = 'none');

    const current = document.getElementById(projectId);
    if(current) current.style.display = 'block';
}