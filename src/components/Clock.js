import React, { useState } from "react";
import styled from "styled-components";
import { mainColor } from "./Colors";

const Clocks = styled.span`
	color: ${mainColor};
	font-size: 40px;
`;

export default () => {
	const [time, setTime] = useState({
		hour: "",
		minutes: "",
		seconds: "",
	});
	const getTime = () => {
		const time = new Date();
		const hour = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();
		setTime({
			hour,
			minutes,
			seconds,
		});
	};
	setInterval(getTime, 1000);
	return (
		<Clocks>
			{time.hour > 10 ? time.hour : `0${time.hour}`} :{" "}
			{time.minutes > 10 ? time.minutes : `0${time.minutes}`} :{" "}
			{time.seconds > 10 ? time.seconds : `0${time.seconds}`}
		</Clocks>
	);
};
