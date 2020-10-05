import React from "react";
import styled from "styled-components";
import { works } from "../components/AllDatas";
import { textColor, mainColor } from "../components/Colors";

const screen_size = window.innerHeight;

const stlyles = {
	width: "80%",
	height: "100px",
	"background-color": mainColor,
	display: "flex",
	"align-items": "center",
	"justify-content": "center",
	"font-size": "16px",
};

const WorkContainer = styled.div`
	padding-top: 100px;
	width: 70%;
	height: ${screen_size - 80}px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
`;

const SubconTainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${textColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const Title = styled.h5`
	color: ${mainColor};
	font-size: 20px;
`;

const WorkImage = styled.image`
	width: 80%;
	height: 100px;
	background-color: ${mainColor};
`;

const SiteLocation = styled.span`
	${stlyles};
	cursor: pointer;
`;

const UsedTools = styled.span`
	${stlyles};
	flex-direction: column;
`;

const ToolTitle = styled.h4`
	color: ${textColor};
	font-weight: bold;
`;

export default () => {
	const windowOpen = (url) => {
		window.open(url);
	};
	return (
		<WorkContainer>
			{works.map((work) => (
				<SubconTainer key={work.title}>
					<Title>{work.title}</Title>
					<WorkImage />
					<SiteLocation onClick={() => windowOpen(work.site)}>
						{work.title} SITE
					</SiteLocation>
					<SiteLocation onClick={() => windowOpen(work.git)}>
						{work.title} Git Repository
					</SiteLocation>

					<UsedTools>
						<ToolTitle>Used Tools</ToolTitle>
						{work.tool}
					</UsedTools>
				</SubconTainer>
			))}
		</WorkContainer>
	);
};
