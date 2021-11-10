import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
	AiOutlineAppstore,
	AiOutlineBarChart,
	AiOutlineDashboard,
	AiOutlineNodeExpand,
	AiOutlineRadarChart,
	AiOutlineRocket,
} from 'react-icons/ai';
import styled from 'styled-components';
import MobileMoc from '../../assets/images/mobile.png';

const Features = () => {
	return (
		<>
			<section id='services'>
				<Container>
					<h2 className='feature-heading mt-5'>
						Why our product is <span className='main-gradient'>the best</span>
					</h2>
					<p className='feture-description'>
						This is the paragraph where you can write more details about your
						product.
					</p>

					<FeatureItemWrap className='row'>
						<Col xs={12} lg={4}>
							<Row>
								<Col xs={12}>
									<FeatureItem>
										<Icons>
											<AiOutlineNodeExpand />
										</Icons>

										<div className='ms-4'>
											<h6>Built for Developers</h6>
											<p>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400.
											</p>
										</div>
									</FeatureItem>
								</Col>

								<Col xs={12}>
									<FeatureItem>
										<Icons>
											<AiOutlineAppstore />
										</Icons>

										<div className='ms-4'>
											<h6>Fast Prototyping</h6>
											<p>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400.
											</p>
										</div>
									</FeatureItem>
								</Col>

								<Col xs={12}>
									<FeatureItem>
										<Icons>
											<AiOutlineRocket />
										</Icons>

										<div className='ms-4'>
											<h6>Verified Users</h6>
											<p>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400.
											</p>
										</div>
									</FeatureItem>
								</Col>
							</Row>
						</Col>

						<Col xs={12} lg={4} className='d-flex justify-content-center'>
							<ImageWrap>
								<img src={MobileMoc} height='' alt='' />
							</ImageWrap>
						</Col>

						<Col xs={12} lg={4}>
							<Row>
								<Col xs={12}>
									<FeatureItem>
										<Icons>
											<AiOutlineBarChart />
										</Icons>

										<div className='ms-4'>
											<h6>Collaborate</h6>
											<p>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400.
											</p>
										</div>
									</FeatureItem>
								</Col>

								<Col xs={12}>
									<FeatureItem>
										<Icons>
											<AiOutlineDashboard />
										</Icons>

										<div className='ms-4'>
											<h6>Location Integrated</h6>
											<p>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400.
											</p>
										</div>
									</FeatureItem>
								</Col>

								<Col xs={12}>
									<FeatureItem>
										<Icons>
											<AiOutlineRadarChart />
										</Icons>

										<div className='ms-4'>
											<h6>Easy to Use</h6>
											<p>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400.
											</p>
										</div>
									</FeatureItem>
								</Col>
							</Row>
						</Col>
					</FeatureItemWrap>
				</Container>
			</section>
		</>
	);
};

export default Features;

const ImageWrap = styled.div`
	max-width: 260px;
	img {
		-webkit-user-drag: none;
		user-select: none;
		max-width: 100%;
		height: auto;
	}
`;
const FeatureItemWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const FeatureItem = styled.div`
	display: flex;
	text-align: left;
	padding: 18px 20px;

	h6 {
		color: #fff;
		font-size: 1.125rem;
		font-weight: 500;
		line-height: 1.25;
	}
	p {
		color: #9b9ea2;
		font-size: 0.9rem;
		font-weight: 400;
		line-height: 1.75;
	}
`;
const Icons = styled.div`
	svg {
		font-size: 35px;
		color: #54afe6;
	}
`;
