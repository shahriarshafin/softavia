import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SectionArea } from '../../App.style';
import MobileMoc from '../../assets/images/mobile.png';
import FeatureItems from '../FeatureItems';
import SectionTitle from '../SectionTitle';

const Features = () => {
	const Data = [
		{
			icon: 'https://raw.githubusercontent.com/shahriarshafin/softavia/master/src/assets/images/Vector-1.svg',
			title: 'Built for Developers',
			description:
				'Material App is built to make your life easier. Theme provider, build tooling, documentation, and 400.',
		},
		{
			icon: 'https://raw.githubusercontent.com/shahriarshafin/softavia/master/src/assets/images/Vector-2.svg',
			title: 'Fast Prototyping',
			description:
				'Material App is built to make your life easier. Theme provider, build tooling, documentation, and 400.',
		},
		{
			icon: 'https://raw.githubusercontent.com/shahriarshafin/softavia/master/src/assets/images/Vector-3.svg',
			title: 'Verified Users',
			description:
				'Material App is built to make your life easier. Theme provider, build tooling, documentation, and 400.',
		},
	];
	const Data2 = [
		{
			icon: 'https://raw.githubusercontent.com/shahriarshafin/softavia/master/src/assets/images/Vector-4.svg',
			title: 'Collaborate',
			description:
				'Material App is built to make your life easier. Theme provider, build tooling, documentation, and 400.',
		},
		{
			icon: 'https://raw.githubusercontent.com/shahriarshafin/softavia/master/src/assets/images/Vector-5.svg',
			title: 'Location Integrated',
			description:
				'Material App is built to make your life easier. Theme provider, build tooling, documentation, and 400.',
		},
		{
			icon: 'https://raw.githubusercontent.com/shahriarshafin/softavia/master/src/assets/images/Vector-6.svg',
			title: 'Easy to Use',
			description:
				'Material App is built to make your life easier. Theme provider, build tooling, documentation, and 400.',
		},
	];

	return (
		<>
			<SectionArea id='services'>
				<Container>
					<SectionTitle
						Heading={'Why our product is'}
						Highlight={'the best'}
						Description={
							'This is the paragraph where you can write more details about your product'
						}
					/>
					<FeatureItemWrap className='row'>
						<Col xs={12} lg={4}>
							<Row>
								{Data.map((i) => {
									return (
										<FeatureItems
											ItemIcon={i.icon}
											Heading={i.title}
											Description={i.description}
										/>
									);
								})}
							</Row>
						</Col>

						<Col xs={12} lg={4} className='d-flex justify-content-center'>
							<ImageWrap>
								<img src={MobileMoc} height='' alt='' />
							</ImageWrap>
						</Col>

						<Col xs={12} lg={4}>
							<Row>
								{Data2.map((i) => {
									return (
										<FeatureItems
											ItemIcon={i.icon}
											Heading={i.title}
											Description={i.description}
										/>
									);
								})}
							</Row>
						</Col>
					</FeatureItemWrap>
				</Container>
			</SectionArea>
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
