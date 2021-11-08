import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './Newsletter.css';

const Newsletter = () => {
	return (
		<>
			<section id='newsletter'>
				<Container>
					<div className='newsletter-wrapper'>
						<Row className='d-flex align-items-center justify-content-center'>
							<Col xs={12} lg={5}>
								<div className='newsletter-left'>
									<IconContext.Provider value={{ className: 'icon' }}>
										<div>
											<FaPaperPlane />
										</div>
									</IconContext.Provider>

									<div className='ms-3'>
										<span className='heading'>
											Get in<span className='main-gradient'> touch</span>
										</span>
										<p className='description'>
											Features, releases, showcase… stay in the loop!
										</p>
									</div>
								</div>
							</Col>

							<Col xs={12} lg={7}>
								<form className='row'>
									<Col sm={12} md={7}>
										<div className='input-group mb-3'>
											<span className='newsletter-right-icon' id='basic-addon1'>
												{/* <i className='fas fa-envelope'></i> */}

												<IconContext.Provider value={{ className: 'icon' }}>
													<div>
														<FaEnvelope />
													</div>
												</IconContext.Provider>
											</span>
											<input
												type='email'
												className='form-control newsletter-input'
												placeholder='email address'
												aria-label='email address'
											/>
										</div>
									</Col>
									<Col sm={12} md={4}>
										<Button type='submit' className='subscribe-btn main-btn'>
											Subscribe
										</Button>
									</Col>
								</form>
							</Col>
						</Row>
					</div>
				</Container>
			</section>
		</>
	);
};

export default Newsletter;
