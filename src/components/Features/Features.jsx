import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {
	AiOutlineAppstore,
	AiOutlineBarChart,
	AiOutlineDashboard,
	AiOutlineNodeExpand,
	AiOutlineRadarChart,
	AiOutlineRocket,
} from 'react-icons/ai';
import MobileMoc from '../../assets/images/mobile.png';
import './Features.css';

const Features = () => {
	return (
		<>
			<section className='feature' id='services'>
				<Container>
					<h2 className='feature-heading mt-5'>
						Why our product is <span className='main-gradient'>the best</span>
					</h2>
					<p className='feture-description'>
						This is the paragraph where you can write more details about your
						product.
					</p>

					<Row className='feature-item-wrapper'>
						<Col xs={12} lg={4}>
							<Row>
								<Col xs={12}>
									<div className='feature-item'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<div>
												<AiOutlineNodeExpand />
											</div>
										</IconContext.Provider>
										<div className='ms-4'>
											<h6 className='heading'>Built for Developers</h6>
											<p className='feature-item-description'>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400+ comp.
											</p>
										</div>
									</div>
								</Col>

								<Col xs={12}>
									<div className='feature-item'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<div>
												<AiOutlineAppstore />
											</div>
										</IconContext.Provider>
										<div className='ms-4'>
											<h6 className='heading'>Fast Prototyping</h6>
											<p className='feature-item-description'>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400+ comp.
											</p>
										</div>
									</div>
								</Col>

								<Col xs={12}>
									<div className='feature-item'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<div>
												<AiOutlineRocket />
											</div>
										</IconContext.Provider>
										<div className='ms-4'>
											<h6 className='heading'>Verified Users</h6>
											<p className='feature-item-description'>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400.
											</p>
										</div>
									</div>
								</Col>
							</Row>
						</Col>

						<Col xs={12} lg={4} className='d-flex justify-content-center'>
							<div className='img-wrapper'>
								<img src={MobileMoc} height='' alt='' />
							</div>
						</Col>

						<Col xs={12} lg={4}>
							<Row>
								<Col xs={12}>
									<div className='feature-item'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<div>
												<AiOutlineBarChart />
											</div>
										</IconContext.Provider>
										<div className='ms-4'>
											<h6 className='heading'>Collaborate</h6>
											<p className='feature-item-description'>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400.
											</p>
										</div>
									</div>
								</Col>

								<Col xs={12}>
									<div className='feature-item'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<div>
												<AiOutlineDashboard />
											</div>
										</IconContext.Provider>
										<div className='ms-4'>
											<h6 className='heading'>Location Integrated</h6>
											<p className='feature-item-description'>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400+ comp.
											</p>
										</div>
									</div>
								</Col>

								<Col xs={12}>
									<div className='feature-item'>
										<IconContext.Provider value={{ className: 'icon' }}>
											<div>
												<AiOutlineRadarChart />
											</div>
										</IconContext.Provider>
										<div className='ms-4'>
											<h6 className='heading'>Easy to Use</h6>
											<p className='feature-item-description'>
												Material App is built to make your life easier. Theme
												provider, build tooling, documentation, and 400.
											</p>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Features;
