import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { AiOutlineCheck } from 'react-icons/ai';
import Volume1 from '../../assets/images/volume1.svg';
import Volume2 from '../../assets/images/volume2.svg';
import Volume3 from '../../assets/images/volume3.svg';
import './Pricing.css';

const Pricing = () => {
	return (
		<>
			<section className='pricing' id='pricing'>
				<div className='container'>
					<h2 className='feature-heading mt-5'>
						Choose your
						<span className='main-gradient'> comfortable plan</span>
					</h2>
					<p className='feture-description'>
						Choose your plan and make modern online conversation magic
					</p>

					<Row>
						<Col xs={12} md={6} lg={4}>
							<div className='price-box'>
								<div className='plan-type'>BASIC</div>

								<div className='price-status'>
									<h2 className='pricing-status-mid'>Free</h2>
								</div>

								<h6 className='short-info'>Forever</h6>

								<img className='user-select-none' src={Volume1} alt='' />

								<ul className='benefit-list-parent'>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Advance Sequirity
									</li>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Permissions & workflows
									</li>
									<li className='benefit-list text-scilent'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										3 prototypes
									</li>
									<li className='benefit-list text-scilent'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Up to 5 team members
									</li>
									<li className='benefit-list text-scilent'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Advance Sequirity
									</li>
								</ul>

								<div className='current-plan-btn'>Current Plan</div>
							</div>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<div className='price-box'>
								<span className='popular-parchase'>POPULAR</span>
								<div className='plan-type'>STARTER</div>

								<div className='price-status'>
									<h6 className='pricing-status-left'>$</h6>
									<h2 className='pricing-status-mid'>4.99</h2>
									<span className='pricing-status-right'>/mo</span>
								</div>

								<h6 className='short-info'>Saving $24 A Year</h6>

								<img className='user-select-none' src={Volume2} alt='' />

								<ul className='benefit-list-parent'>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Advance Sequirity
									</li>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Permissions & workflows
									</li>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										3 prototypes
									</li>
									<li className='benefit-list text-scilent'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Up to 5 team members
									</li>
									<li className='benefit-list text-scilent'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Advance Sequirity
									</li>
								</ul>

								<div className='purchase-btn main-btn'>Choose Strater</div>
							</div>
						</Col>

						<Col xs={12} md={6} lg={4}>
							<div className='price-box'>
								<div className='plan-type'>PREMIUM</div>

								<div className='price-status'>
									<h6 className='pricing-status-left'>$</h6>
									<h2 className='pricing-status-mid'>9.99</h2>
									<span className='pricing-status-right'>/mo</span>
								</div>

								<h6 className='short-info'>Saving $35 A Year</h6>

								<img className='user-select-none' src={Volume3} alt='' />

								<ul className='benefit-list-parent'>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Advance Sequirity
									</li>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Permissions & workflows
									</li>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										3 prototypes
									</li>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Up to 5 team members
									</li>
									<li className='benefit-list'>
										<IconContext.Provider value={{ className: 'icon-tick' }}>
											<div>
												<AiOutlineCheck />
											</div>
										</IconContext.Provider>
										Advance Sequirity
									</li>
								</ul>

								<div className='purchase-btn main-btn'>Choose Premium</div>
							</div>
						</Col>
					</Row>
				</div>
			</section>
		</>
	);
};

export default Pricing;
