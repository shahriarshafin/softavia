import '@lottiefiles/lottie-player';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Hero.css';
const Hero = () => {
	return (
		<>
			<section class='hero'>
				<Container>
					<Row>
						<Col xs={12} lg={6}>
							<div class='hero-wrapper'>
								<h1 class='hero-heading'>
									Make Your Business
									<span class='main-gradient'> More Powerfull</span>
								</h1>
								<h2 class='hero-description'>
									We have been on this journey for the last 3 years reaching the
									satisfaction level of our clients through developing equitable
									software as per requirements.
								</h2>
							</div>
							<button type='button' class='main-btn'>
								<a class='text-decoration-none text-light' href='#pricing'>
									ORDER NOW
								</a>
							</button>
						</Col>

						<Col xs={12} lg={6}>
							<lottie-player
								className='animPlayer'
								style={{ width: '100%', height: '100%' }}
								autoplay
								background='transparent'
								loop
								speed={1}
								mode='normal'
								src='https://assets4.lottiefiles.com/packages/lf20_wrylbcvp.json'
							></lottie-player>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Hero;
