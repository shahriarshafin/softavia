import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
:root {
	scroll-behavior: smooth;
}
 body {
	background-color: #0e1620;
	font-family: 'Poppins', sans-serif;
}
.user-select-none {
	-webkit-user-drag: none;
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}
.text-scilent {
	color: #a6b0bb;
}
.nav-scrolled {
	border-bottom: 2px solid #cb1c5a;
}
.navbar-toggler:focus {
	text-decoration: none;
	outline: 0;
	box-shadow: 0 0 0 0rem;
	border-color: rgb(4, 177, 252);
}
`;

export default GlobalStyle;
