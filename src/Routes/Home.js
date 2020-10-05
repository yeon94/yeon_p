import React from "react";
import styled from "styled-components";
import Clock from "../components/Clock";
import { textColor, mainColor } from "../components/Colors";
import { Weathers } from "../components/Weather";

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
`;

const Illust = styled.div`
	background-color: ${textColor};
	color: ${mainColor};
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
	font-size: 20px;
`;

export default () => {
	return (
		<Content>
			<WeatherContainer>
				<Clock />
				<Weathers />
			</WeatherContainer>
			<Illust>Welcome to JYEON's portfolio!</Illust>
			<MyInfo>
				<MyInfoLi>허 지연</MyInfoLi>
				<MyInfoLi>010 - 2571 - 1345</MyInfoLi>
				<MyInfoLi>hjy9946@gmail.com</MyInfoLi>
			</MyInfo>
		</Content>
	);
};
