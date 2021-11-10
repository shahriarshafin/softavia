import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';
import StripImg from '../../assets/images/newsletter-strip.png';

const Newsletter = () => {
	return (
		<>
			<section id='newsletter'>
				<Container>
					<NewsletterWrapper>
						<Row className='d-flex align-items-center justify-content-center'>
							<Col xs={12} lg={5}>
								<NewsletterLeft>
									<IconWrapper>
										<FaPaperPlane />
									</IconWrapper>

									<div className='ms-3'>
										<h2>
											Get in<span className='main-gradient'> touch</span>
										</h2>
										<p>Features, releases, showcase… stay in the loop!</p>
									</div>
								</NewsletterLeft>
							</Col>

							<Col xs={12} lg={7}>
								<Form className='row'>
									<Col sm={12} md={7}>
										<div className='input-group mb-3'>
											<RightIcon id='basic-addon1'>
												<IconContext.Provider value={{ className: 'icon' }}>
													<div>
														<FaEnvelope />
													</div>
												</IconContext.Provider>
											</RightIcon>
											<input
												type='email'
												className='form-control'
												placeholder='email address'
												aria-label='email address'
											/>
										</div>
									</Col>
									<Col sm={12} md={4}>
										<SubBtn type='submit' className='main-btn'>
											Subscribe
										</SubBtn>
									</Col>
								</Form>
							</Col>
						</Row>
					</NewsletterWrapper>
				</Container>
			</section>
		</>
	);
};

export default Newsletter;

const NewsletterWrapper = styled.div`
	background-color: #182432;
	background-image: url(${StripImg});
	background-repeat: repeat-x;
	background-size: 96px 16px;
	padding: 60px;
	border-radius: 1.5em;
	box-shadow: 0 1em 2em rgb(0 0 0 / 5%);
`;
const NewsletterLeft = styled.div`
	display: flex;
	text-align: left;
	padding: 18px 20px;
	h2 {
		font-size: 2rem;
		font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol';
		font-weight: 600;
		line-height: 1.25;
		color: #fff;
		margin: 0px;
		padding: 0px;
	}
	p {
		color: #7a7a7a;
		display: block;
		font-size: 1.25rem;
	}
`;
const IconWrapper = styled.div`
	font-size: 2.5rem;
	color: #0288f6;
`;
const RightIcon = styled.span`
	display: flex;
	align-items: center;
	border: 1px solid #ced4da;
	border-radius: 8px;
	padding-left: 1rem;
	line-height: 1.5;
	color: #dbdbdb;
	font-size: 1.25rem;
	text-align: center;
	white-space: nowrap;
`;
const Form = styled.form`
	input {
		color: #fff;
		height: 50px;
		border-radius: 8px;
		font-size: 1.25rem;
		border-left: 0px;
		background-color: #182432;
		&:focus {
			color: #fff;
			border-color: #54afe6;
			background-color: #182432;
			box-shadow: 0 0 0 0.125em rgb(0 209 178 / 25%);
		}
		&::placeholder {
			color: #7a7a75;
		}
	}
`;
const SubBtn = styled.button`
	height: 48px;
	padding: 7px 21px;
	font-size: 20px;
	font-weight: 600;
	border-radius: 8px;
	border: 1px solid rgba(145, 158, 171, 0.32);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
