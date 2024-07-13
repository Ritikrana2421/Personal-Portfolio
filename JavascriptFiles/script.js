const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container .left-section');
const sidebarItems = document.querySelectorAll('.cointainer .left-section .sidebar .items');

menuOpen.addEventListener('click',()=>{
    sideBar.style.top ='0';
});

menuClose.addEventListener('click', () => {
    sideBar.style.top = '-60vh';
});

