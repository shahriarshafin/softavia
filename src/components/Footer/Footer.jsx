import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { FaBasketballBall, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.svg';

const Footer = () => {
	const curYear = new Date().getFullYear();
	return (
		<>
			<FooterSection>
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
									<IconWrap>
										<FaGithub />
									</IconWrap>
								</Nav.Link>

								<Nav.Link
									className='p-0'
									href='https://www.linkedin.com/in/shahriarshafin/'
									target='_blank'
								>
									<IconWrap>
										<FaLinkedin />
									</IconWrap>
								</Nav.Link>

								<Nav.Link
									className='p-0'
									href='https://dribbble.com/shahriarshafin'
									target='_blank'
								>
									<IconWrap>
										<FaBasketballBall />
									</IconWrap>
								</Nav.Link>
							</Col>

							<Col
								xs={12}
								lg={4}
								className='mt-4 d-flex align-items-center justify-content-center'
							>
								<Nav.Link href='/'>
									<BrandLogo src={Logo} alt='' />
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
			</FooterSection>
		</>
	);
};

export default Footer;

const FooterSection = styled.section`
	padding-top: 40px;
	padding-bottom: 0px;
	footer {
		background-color: #182432;
		color: #fff;
		padding: 35px 0px;
	}
`;
const IconWrap = styled.div`
	svg {
		font-size: 1.6rem;
		margin-right: 0.5rem;
		margin-left: 0.5rem;
		color: #fff;
	}
`;
const BrandLogo = styled.img`
	height: 2.25rem;
	-webkit-user-drag: none;
	user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
`;
