document.getElementById('currentYear').innerHTML = new Date().getFullYear();

//--------------------------- Navbar Scroll ----------------------------
const navbar = document.querySelector('.navbar');
window.onscroll = () => {
	navScroll();
};

const navScroll = () => {
	if (window.scrollY > 100) {
		navbar.classList.add('nav-scrolled');
	} else {
		navbar.classList.remove('nav-scrolled');
	}
};
//--------------------------- Navbar Scroll ----------------------------
