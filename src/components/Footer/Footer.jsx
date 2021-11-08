import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaBasketballBall, FaGithub, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/images/logo.svg';
import './Footer.css';

const Footer = () => {
	const curYear = new Date().getFullYear();
	return (
		<>
			<section className='footer-section'>
				<footer>
					<Container>
						<Row>
							<Col
								xs={12}
								lg={4}
								className='mt-4 d-flex align-items-center justify-content-center justify-content-lg-start'
							>
								<Nav.Link
									className='p-0'
									href='https://github.com/shahriarshafin'
									target='_blank'
								>
									<IconContext.Provider value={{ className: 'social-icon' }}>
										<div>
											<FaGithub />
										</div>
									</IconContext.Provider>
								</Nav.Link>

								<Nav.Link
									className='p-0'
									href='https://www.linkedin.com/in/shahriarshafin/'
									target='_blank'
								>
									<IconContext.Provider
										value={{ className: 'social-icon linkedin-icon' }}
									>
										<div>
											<FaLinkedin />
										</div>
									</IconContext.Provider>
								</Nav.Link>

								<Nav.Link
									className='p-0'
									href='https://dribbble.com/shahriarshafin'
									target='_blank'
								>
									<IconContext.Provider value={{ className: 'social-icon' }}>
										<div>
											<FaBasketballBall />
										</div>
									</IconContext.Provider>
								</Nav.Link>
							</Col>

							<Col
								xs={12}
								lg={4}
								className='mt-4 d-flex align-items-center justify-content-center'
							>
								<Nav.Link href='/'>
									<img className='brand-logo' src={Logo} alt='' />
								</Nav.Link>
							</Col>

							<Col
								xs={12}
								lg={4}
								className='d-flex align-items-center justify-content-center justify-content-lg-end'
							>
								<p className='m-0 mt-4'>
									© Softavia <span> {curYear} </span> | All rights reserved
								</p>
							</Col>
						</Row>
					</Container>
				</footer>
			</section>
		</>
	);
};

export default Footer;
