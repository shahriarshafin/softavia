import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineCheck } from 'react-icons/ai';
import styled from 'styled-components';
import Volume1 from '../../assets/images/volume1.svg';
import Volume2 from '../../assets/images/volume2.svg';
import Volume3 from '../../assets/images/volume3.svg';

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
							<PriceBox>
								<PlanType>BASIC</PlanType>

								<PriceStatus>
									<h2>Free</h2>
								</PriceStatus>

								<h6>Forever</h6>

								<img className='user-select-none' src={Volume1} alt='' />

								<BenefitListParent>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Advance Sequirity
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Permissions & workflows
									</li>
									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										3 prototypes
									</li>
									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Up to 5 team members
									</li>
									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Advance Sequirity
									</li>
								</BenefitListParent>

								<CurrentPlanButton>Current Plan</CurrentPlanButton>
							</PriceBox>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<PriceBox>
								<PopularPurchase>POPULAR</PopularPurchase>
								<PlanType>STARTER</PlanType>

								<PriceStatus>
									<h6>$</h6>
									<h2>4.99</h2>
									<span>/mo</span>
								</PriceStatus>

								<h6>Saving $24 A Year</h6>

								<img className='user-select-none' src={Volume2} alt='' />

								<BenefitListParent>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Advance Sequirity
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Permissions & workflows
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										3 prototypes
									</li>
									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Up to 5 team members
									</li>
									<li className='benefit-list text-scilent'>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Advance Sequirity
									</li>
								</BenefitListParent>

								<PurchaseButton className='main-btn'>
									Choose Strater
								</PurchaseButton>
							</PriceBox>
						</Col>

						<Col xs={12} md={6} lg={4}>
							<PriceBox>
								<PlanType>PREMIUM</PlanType>

								<PriceStatus>
									<h6>$</h6>
									<h2>9.99</h2>
									<span>/mo</span>
								</PriceStatus>

								<h6>Saving $35 A Year</h6>

								<img className='user-select-none' src={Volume3} alt='' />

								<BenefitListParent>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Advance Sequirity
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Permissions & workflows
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										3 prototypes
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Up to 5 team members
									</li>
									<li>
										<IconTick>
											<AiOutlineCheck />
										</IconTick>
										Advance Sequirity
									</li>
								</BenefitListParent>

								<PurchaseButton className='main-btn'>
									Choose Premium
								</PurchaseButton>
							</PriceBox>
						</Col>
					</Row>
				</div>
			</section>
		</>
	);
};

export default Pricing;

const PriceBox = styled.div`
	margin-bottom: 1.5rem;
	padding: 40px;
	background-color: #182432;
	color: rgb(33, 43, 54);
	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	box-shadow: rgb(0 0 0 / 24%) 0px 0px 2px 0px,
		rgb(0 0 0 / 24%) 0px 16px 32px -4px;
	border-radius: 16px;
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	h6 {
		font-size: 0.75rem;
		font-weight: 400;

		color: rgb(4, 177, 252);
	}
`;
const PopularPurchase = styled.span`
	height: 22px;
	min-width: 22px;
	line-height: 0;
	border-radius: 8px;
	cursor: default;
	align-items: center;
	white-space: nowrap;
	display: inline-flex;
	justify-content: center;
	padding: 0px 8px;
	color: #74caff;
	font-size: 0.75rem;
	background-color: #203b56;
	font-weight: 600;
	top: 16px;
	right: 16px;
	position: absolute;
`;
const PlanType = styled.div`
	font-weight: 700;
	font-size: 0.75rem;
	letter-spacing: 1.1px;
	color: rgb(99, 115, 129);
`;
const PriceStatus = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 16px;
	margin-bottom: 16px;
	h6 {
		margin: 0px;
		font-weight: 600;
		line-height: 1.5;
		font-size: 1rem;
		color: rgb(99, 115, 129);
	}
	h2 {
		margin: 0px 8px;
		font-size: 3rem;
		font-weight: 700;
		color: #fff;
	}
	span {
		margin: 0px 0px 8px;
		font-weight: 600;
		line-height: 1.57143;
		font-size: 0.875rem;

		color: rgb(99, 115, 129);

		align-self: flex-end;
	}
`;
const BenefitListParent = styled.ul`
	margin-top: 40px;
	margin-bottom: 40px;
	width: 100%;
	color: #fff;
	li {
		display: flex;
		flex-direction: row;
		align-items: center;
		line-height: 2.5;
		font-size: 0.875rem;

		font-weight: 400;
	}
`;
const IconTick = styled.div`
	font-size: 15px;
	font-weight: 500;
	margin-right: 10px;
`;
const PurchaseButton = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	padding: 8px 22px;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	font-size: 0.9375rem;
	height: 48px;
	width: 100%;
	min-width: 64px;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	&:hover {
		background-color: rgb(0, 123, 85);
	}
`;
const CurrentPlanButton = styled.div`
	color: rgba(145, 158, 171, 0.8);
	box-shadow: none;
	background-color: rgba(145, 158, 171, 0.24);
	display: inline-flex;
	align-items: center;
	justify-content: center;
	position: relative;
	padding: 8px 22px;
	border-radius: 8px;
	cursor: pointer;
	font-weight: 600;
	font-size: 0.9375rem;
	height: 48px;
	width: 100%;
	min-width: 64px;
`;
