import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineBars } from 'react-icons/ai';
import styled from 'styled-components';
import { MainButton } from '../../App.style';
import Logo from '../../assets/images/logo.svg';

const BootNavbar = () => {
	const [navScrolled, setnavScrolled] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setnavScrolled(true);
		} else {
			setnavScrolled(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);

	return (
		<>
			<NavWrapper className={navScrolled ? 'navScrolled' : ''}>
				<Navbar expand='lg'>
					<Container>
						<Navbar.Brand href='/'>
							<BrandLogo src={Logo} alt='' />
						</Navbar.Brand>

						<Navbar.Toggle aria-controls='basic-navbar-nav'>
							<AiOutlineBars style={{ color: '#fff', fontSize: '28px' }} />
						</Navbar.Toggle>

						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='navbar-nav mx-auto mb-2 mb-lg-0'>
								<NavLink href='/' className='nav-link'>
									Home
								</NavLink>
								<NavLink href='#services' className='nav-link'>
									Services
								</NavLink>
								<NavLink href='#pricing' className='nav-link'>
									Pricing
								</NavLink>
							</Nav>

							<Nav.Link className='p-0' href='#newsletter'>
								<MainButton>CONTACT US</MainButton>
							</Nav.Link>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</NavWrapper>
		</>
	);
};

export default BootNavbar;

const NavWrapper = styled.div`
	background-color: #182432;
	position: sticky;
	top: 0;
	z-index: 1020;
`;
const BrandLogo = styled.img`
	height: 2.25rem;
	-webkit-user-drag: none;
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;
const NavLink = styled.a`
	font-size: 16px;
	color: #fff !important;
	&:hover {
		color: rgb(4, 177, 252) !important;
	}
`;
