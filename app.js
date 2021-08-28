const toggle = document.querySelector('.toggle');
const navBarLinks = document.querySelector('.navbar-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  navBarLinks.classList.toggle('active');
});
