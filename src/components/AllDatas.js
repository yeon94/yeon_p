export const weatherName = {
	Thunderstorm: {
		iconName: "WiThunderstorm",
		title: "Thunderstorm",
	},
	Drizzle: {
		iconName: "WiHail",
		title: "Drizzle",
	},
	Rain: {
		iconName: "WiRaindrops",
		title: "Rain",
	},
	Snow: {
		iconName: "WiSnow",
		title: "Snow",
	},
	Atmosphere: {
		iconName: "WiNa",
		title: "Atmosphere",
	},
	Clear: {
		iconName: "WiDaySunny",
		title: "Sunny",
	},
	Clouds: {
		iconName: "WiCloud",
		title: "Clouds",
	},
	Haze: {
		iconName: "WiDayHaze",
		title: "Haze",
	},
	Mist: {
		iconName: "WiDust",
		title: "Mist",
	},
	Dust: {
		iconName: "WiDust",
		title: "Dusty",
	},
};
export const skillData = [
	{
		index: 0,
		skillName: "Node.js / ES6(Javascript)",
		skillExplan: [
			"Node.js의 Module 활용 가능.",
			"필요한 라이브러리를 능동적으로 찾을 수 있음.",
			"Express.js 웹 프레임워크를 활용하여 MVC형태의 구조로 코딩 할 수 있음.",
			"Axios를 사용하여 보다 쉽게 비동기식 자바스크립트(Ajax) 방식을 활용.",
			"gulp, Webpack를 활용하여 SCSS, ES6등을 사용할 수 있다. ",
			"기존 Javscript와 좀 더 활용하기 편해진 ES6를 활용하여 웹사이트 제작가능.",
			"문제 발생시 Error Log를 읽고 해결할 수 있음.",
		],
	},
	{
		index: 1,
		skillName: "React.js / React-Native.js",
		skillExplan: [
			"React, React-Native를 활용하여 웹사이트 및 어플 제작 가능.",
			"React-Native 활용시 Expo를 활용하여 편리하게 제작 가능.",
			"react-dom, react-router-dom 등 React 라이브러리 활용 가능.",
			"useState, useEffect, useContext 등 React-hook 사용 가능",
			"Proptypes를 활용하여 보다 안정성있는 코딩 가능.",
			"Component를 필요에 따라 분할하여 모듈화하고, 유지보수성을 높일 수 있도록 할 수 있음.",
			
		],
	},
	{
		index: 2,
		skillName: "HTML / CSS3 / Jquery",
		skillExplan: [
			"HTML을 활용 웹사이트의 골격 구성 가능",
			"CSS를 활용하여 웹사이트의 구성을 보다 효율적으로 제작 가능",
			"flex-box, gird등 다양한 CSS를 활용하여 보다 체계적인 제작 가능",
			"타 웹사이트에서 폰트, 이미지를 끌어와 깔끔하고 다채롭게 CSS를 구성 가능",
			"Jquery를 활용하여 간단한 슬라이드 및 탭과 효과를 줄 수 있음",
			"Jquery의 라이브러리를 활용하여 간단한 방식으로 웹사이트를 간편히 제작 가능",
		],
	},
	{
		index: 3,
		skillName: "Ps / Ai",
		skillExplan: [
			"포토샵을 활용하여 UI구성 가능.",
			"포토샵을 활용하여 UI디자인 가능.",
			"일러스트를 활용하여 아이콘 제작 가능.",
			"일러스트를 활용하여 간단한 캐릭터 제작 가능.",
			"포토샵과 일러스트를 활용하여 간단한 팝업창 제작 가능",
			"포토샵과 일러스트를 활용하여 간단한 슬라이드 제작 가능",
			"포토샵과 일러스트를 활용하여 간단한 팝업창 제작 가능",
		],
	},
	{
		index: 4,
		skillName: "Excel / PPT",
		skillExplan: [
			"Excel을 활용하여 문서작업가능",
			"Excel의 함수를 활용하여 빠르고 정확한 문서작성 가능 ",
			"Excel의 사용자정의함수를 제작하여 실정에 맞는 함수 제작 가능",
			"PPT를 활용하여 발표시 사용할 문서 제작 가능",
			"PPT를 활용하여 짧게는 5분에서 30분 이상의 발표 가능",
			"PPT 발표시 청중의 반응을 읽어 보다 세심한 설명 가능",
		],
	},
];
export const works = [
	{
		title: "Metube",
		site: "https://murmuring-castle-64725.herokuapp.com/",
		git: "https://github.com/yeon94/metube",
		tool: ["ES6, ", "Node.js, ", "Pug, ", "Mongo DB"],
	},
	{
		title: "Cinema_j",
		site: "https://yeon94.github.io/cinema_j/",
		git: "https://github.com/yeon94/cinema_j",
		tool: ["ES6, ", "React.js"],
	},
	{
		title: "Yeon_Movie",
		site: "https://expo.io/@jyeon/yeon_movie",
		git: "https://github.com/yeon94/yeon_movie.git",
		tool: ["ES6, ", "React-Native, ", "Expo"],
	},
];
