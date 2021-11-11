import '@lottiefiles/lottie-player';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { MainButton, MainGradient, SectionArea } from '../../App.style';
const Hero = () => {
	return (
		<>
			<SectionArea>
				<Container>
					<Row>
						<Col xs={12} lg={6}>
							<HeroWrapper>
								<HeroHeading>
									Make Your Business
									<MainGradient> More Powerfull</MainGradient>
								</HeroHeading>
								<HeroDescription>
									We have been on this journey for the last 3 years reaching the
									satisfaction level of our clients through developing equitable
									software as per requirements.
								</HeroDescription>
							</HeroWrapper>
							<MainButton type='button'>
								<a className='text-decoration-none text-light' href='#pricing'>
									ORDER NOW
								</a>
							</MainButton>
						</Col>

						<Col xs={12} lg={6}>
							<lottie-player
								classNameName='animPlayer'
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
			</SectionArea>
		</>
	);
};

export default Hero;

const HeroWrapper = styled.div`
	margin-top: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const HeroHeading = styled.h1`
	color: #fff;
	font-size: 3rem;
	line-height: 1;
	font-weight: 600;
	letter-spacing: 0.025em;
`;
const HeroDescription = styled.h2`
	color: #9b9ea2;
	font-size: 1.25rem;
	line-height: 1.75rem;
	font-weight: 400;
	line-height: 2.5rem;
	letter-spacing: 0.025em;
	margin-top: 1rem;
	margin-bottom: 1rem;
`;
