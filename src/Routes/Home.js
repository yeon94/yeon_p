import React from "react";
import styled from "styled-components";
import Clock from "../components/Clock";
import { textColor, mainColor } from "../components/Colors";
import { Weathers } from "../components/Weather";
import myPhoto from "../assets/myPhoto.png";

const screen_size = window.innerHeight;

const Content = styled.div`
	width: 70%;
	height: ${screen_size - 80}px;
	padding-top: 100px;
	margin: 0 auto;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
`;

const WeatherContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 30px;
	background-color: ${textColor};
	grid-row: span 2;
	text-align: center;
`;

const Illust = styled.span`
	background-color: ${textColor};
	color: ${mainColor};
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 5%;
`;

const InnerIllust = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${mainColor};
	background-image: url(${myPhoto});
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 100%;
	background-position: center center;
`;

const MyInfo = styled.ul`
	background-color: ${textColor};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 30px;
`;

const MyInfoLi = styled.li`
	width: 100%;
	color: ${mainColor};
	border-bottom: 2px solid ${mainColor};
	padding: 5px;
	text-align: center;
	font-size: 16px;
`;

const Welcome = styled.div`
	background-color: ${textColor};
	color: ${mainColor};
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 5%;
`;

const WelcomText = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	text-align: center;
	align-items: center;
	font-size: 16px;
	padding: 5%;
	line-height: 20px;
`;

const WelcomeGoP = styled.button`
	width: 100%;
	height: 100%;
	background-color: ${mainColor};
	color: ${textColor};
	border: none;
	border-radius: 100%;
	cursor: pointer;
`;

export default () => {
	return (
		<Content>
			<WeatherContainer>
				<Clock />
				<Weathers />
			</WeatherContainer>
			<Illust>
				<InnerIllust></InnerIllust>
				<MyInfo>
					<MyInfoLi>허 지연</MyInfoLi>
					<MyInfoLi>010 - 2571 - 1345</MyInfoLi>
					<MyInfoLi>hjy9946@gmail.com</MyInfoLi>
				</MyInfo>
			</Illust>
			<Welcome>
				<WelcomText>
					포트폴리오를 <br />
					열람해주셔서 감사합니다.
					<br />
					끊임없이 배우고 성장하는 <br />
					진취적인 개발자를 희망하는 <br />허 지연입니다.
					<br />잘 부탁드립니다.
				</WelcomText>
				<WelcomeGoP
					onClick={() => window.open("https://github.com/yeon94/yeon_p")}>
					Please Click!
					<br /> Go to Yeon_p's portfolio github
				</WelcomeGoP>
			</Welcome>
		</Content>
	);
};
