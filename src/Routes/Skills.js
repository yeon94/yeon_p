import React, { useState } from "react";
import styled from "styled-components";
import { skillData } from "../components/AllDatas";
import { textColor, mainColor } from "../components/Colors";

const screen_size = window.innerHeight;

const SkillContainer = styled.div`
	padding-top: 100px;
	width: 70%;
	height: ${screen_size - 80}px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 20% 80%;
`;

const LeftSideContainer = styled.div`
	display: grid;
`;

const Skill = styled.button`
	border: 1px solid ${mainColor};
	background-color: ${textColor};
	color: ${mainColor};
	cursor: pointer;
`;

const SkillInner = styled.span``;

const RightSideContainer = styled.div`
	background-color: ${textColor};
	border: 1px solid ${mainColor};
`;

const TextList = styled.ul`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 50px;
`;

const TextLi = styled.li`
	color: ${mainColor};
	font-size: 16px;
`;

export default () => {
	const [text, setText] = useState(
		{indexs : "0"}
	);
	const getIndex = (target) => {
		setText({indexs : target});
	};
	return (
		<SkillContainer>
			<LeftSideContainer>
				{skillData.map((skill) => (
					<Skill key={skill.index} onClick={() => getIndex(skill.index)} >
						<SkillInner>{skill.skillName}</SkillInner>
					</Skill>
				))}
			</LeftSideContainer>
			<RightSideContainer>
				<TextList>
					{skillData[text.indexs].skillExplan.map((ex) => (
						<TextLi>- {ex}</TextLi>
					))}
				</TextList>
			</RightSideContainer>
		</SkillContainer>
	);
};
