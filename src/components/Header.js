import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import { textColor, mainColor } from "../components/Colors";

const Header = styled.header`
	width: 100%;
	height: 70px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${textColor};
`;

const Logo = styled.h1`
	width: 120px;
	height: 50px;
	margin-left: 10%;
`;

const List = styled.ul`
	display: flex;
	width: 40%;
	height: 100%;
	margin-right: 10%;
`;

const ListLi = styled.li`
	width: 25%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: ${(props) => (props.now ? "bold" : "normal")};
	transition: 0.1s linear;
	color: ${mainColor};
	border-bottom: ${(props) => (props.now ? `2px solid ${mainColor}` : "none")};
`;

const GoLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
	<Header>
		<Logo>
			<GoLink to='/' />
			<img src={require("../assets/logo.png")} alt={"portfolio's logo"} />
		</Logo>
		<List>
			<ListLi now={pathname === "/"}>
				<GoLink to='/'>Home</GoLink>
			</ListLi>
			<ListLi now={pathname === "/intro"}>
				<GoLink to='/intro'>Introduce</GoLink>
			</ListLi>
			<ListLi now={pathname === "/skills"}>
				<GoLink to='/skills'>Skills</GoLink>
			</ListLi>
			<ListLi now={pathname === "/work"}>
				<GoLink to='/work'>Work</GoLink>
			</ListLi>
		</List>
	</Header>
));
