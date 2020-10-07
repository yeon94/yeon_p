import React from "react";
import styled from "styled-components";
import { textColor, mainColor } from "../components/Colors";
import {
	FaHotjar,
	FaRegSmile,
	FaChalkboard,
	FaSearch,
	FaGamepad,
	FaBook,
	FaBlender,
	FaHeadphones,
} from "react-icons/fa";

const screen_size = window.innerHeight;

const IntroContainer = styled.ul`
	padding-top: 100px;
	width: 70%;
	height: ${screen_size - 80}px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 15px;
`;

const IntroList = styled.li`
	background-color: ${textColor};
	color: ${mainColor};
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	:nth-child(1) {
		grid-column: span 3;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		align-items: center;
		padding-left: 50px;
	}
`;

const Resume = styled.button`
	width: 180px;
	height: 180px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${mainColor};
	border-radius: 50%;
	color: ${textColor};
	font-weight: bold;
	font-size: 20px;
	border: none;
	cursor: pointer;
`;
const CertiList = styled.ul`
	height: 100%;
	grid-column: span 2;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 20px 0;
	text-align: center;
`;
const SubiTitle = styled.h4`
	font-size: 20px;
	font-weight: bold;
`;
const CertiLi = styled.li`
	font-size: 16px;
	line-height: 20px;
`;
const IconContainer = styled.div`
	width: 100%;
	height: 30%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
`;

const IntroText = styled.p`
	color: ${mainColor};
	height: 20%;
	font-size: 16px;
	line-height: 25px;
`;

const styles = {
	width: "100%",

	"color ": "mainColor",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

export default () => (
	<IntroContainer>
		<IntroList>
			<Resume>이력서</Resume>
			<Resume>자기소개서</Resume>
			<CertiList>
				<SubiTitle>자격증</SubiTitle>
				<CertiLi>컴퓨터활용능력 1급 / 취득일 : 2019.12.20</CertiLi>
				<CertiLi>정보처리기사 / 취득일 : 2019.11.22</CertiLi>
				<CertiLi>웹디자인 기능사 / 취득일 : 2019.06.22</CertiLi>
				<CertiLi>컴퓨터 그래픽스 기능사 / 취득일 : 2018.06.29</CertiLi>
			</CertiList>
		</IntroList>
		<IntroList>
			<SubiTitle>성격</SubiTitle>
			<IconContainer>
				<FaHotjar style={styles} size={50} />
				<FaRegSmile style={styles} size={50} />
				<FaChalkboard style={styles} size={50} />
				<FaSearch style={styles} size={50} />
			</IconContainer>
			<IntroText>
				긍정적이고 진취적입니다.
				<br />
				새로운 배움을 좋아합니다.
			</IntroText>
		</IntroList>
		<IntroList>
			<SubiTitle>취미</SubiTitle>
			<IconContainer>
				<FaBook style={styles} size={50} />
				<FaBlender style={styles} size={50} />
				<FaGamepad style={styles} size={50} />
				<FaHeadphones style={styles} size={50} />
			</IconContainer>
			<IntroText>독서, 요리, 게임, 음악감상</IntroText>
		</IntroList>
		<IntroList>
			<CertiList>
				<SubiTitle>학력 / 수료</SubiTitle>
				<CertiLi>
					2011.03 ~ 2013.02
					<br /> 인성 여자고등학교 졸업
				</CertiLi>
				<CertiLi>
					2018.03 - 2018.09 <br /> 그린컴퓨터아카데미 <br />
					하이브리드웹디자인 과정 수료
				</CertiLi>
				<CertiLi>
					2013.03 - 2019.02 <br /> 성결대학교 지역사회학전공
				</CertiLi>
			</CertiList>
		</IntroList>
	</IntroContainer>
);
