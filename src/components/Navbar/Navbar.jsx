import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineBars } from 'react-icons/ai';
import Logo from '../../assets/images/logo.svg';
import './Navbar.css';

const BootNavbar = () => {
	return (
		<>
			<Navbar expand='lg' className='sticky-top bg-nav-dark'>
				<Container>
					<Navbar.Brand href='/'>
						<img className='brand-logo' src={Logo} alt='' />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls='basic-navbar-nav'>
						<AiOutlineBars style={{ color: '#fff', fontSize: '28px' }} />
					</Navbar.Toggle>

					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='navbar-nav mx-auto mb-2 mb-lg-0'>
							<Nav.Link href='/' className='nav-link is-white-hov-blue'>
								Home
							</Nav.Link>
							<Nav.Link href='#services' className='nav-link is-white-hov-blue'>
								Services
							</Nav.Link>
							<Nav.Link href='#pricing' className='nav-link is-white-hov-blue'>
								Pricing
							</Nav.Link>
						</Nav>
						<Nav.Link className='p-0' href='#pricing'>
							<Button className='main-btn'>CONTACT US</Button>
						</Nav.Link>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default BootNavbar;
