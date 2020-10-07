import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import {
	WiThunderstorm,
	WiHail,
	WiRaindrops,
	WiSnow,
	WiNa,
	WiDaySunny,
	WiCloud,
	WiDayHaze,
	WiDust,
} from "react-icons/wi";
import styled from "styled-components";
import { mainColor } from "./Colors";
import { weatherName } from "./AllDatas";

const WeatherContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 80%;
`;
const WeatherIconContainer = styled.div``;
const WeatherTitle = styled.span`
	color: ${mainColor};
	font-size: 30px;
`;
const WeatherArea = styled.span`
	color: ${mainColor};
	font-size: 30px;
`;
const WeatherTemp = styled.span`
	color: ${mainColor};
	font-size: 30px;
`;
export const Weathers = () => {
	const [loading, setLoading] = useState({
		isLoading: true,
		condition: "",
		temp: "",
		cityName: "",
		icon: "",
		title: "",
	});

	useLayoutEffect(() => {
		const getWeather = async (latitude, longitude) => {
			const API_KEY = "b922fac946daa22f1555aecca1721781";
			const {
				data: {
					main: { temp },
					weather,
					name,
				},
			} = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
			);

			setLoading({
				isLoading: false,
				condition: weather[0].main,
				temp,
				cityName: name,
				icon: weatherName[weather[0].main].iconName,
				title: weatherName[weather[0].main].title,
			});
		};
		const getLocation = () => {
			const handleGeoPosition = async (position) => {
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;
				await getWeather(latitude, longitude);
			};
			navigator.geolocation.getCurrentPosition(handleGeoPosition);
		};
		getLocation();
	}, []);

	return (
		<WeatherContainer>
			<WeatherArea>{loading.cityName}</WeatherArea>
			<WeatherIconContainer>
				{loading.icon === "WiThunderstorm" ? (
					<WiThunderstorm style={{ color: mainColor }} size={200} />
				) : loading.icon === "WiHail" ? (
					<WiHail style={{ color: mainColor }} size={200} />
				) : loading.icon === "WiRaindrops" ? (
					<WiRaindrops style={{ color: mainColor }} size={200} />
				) : loading.icon === "WiSnow" ? (
					<WiSnow style={{ color: mainColor }} size={200} />
				) : loading.icon === "WiNa" ? (
					<WiNa style={{ color: mainColor }} size={200} />
				) : loading.icon === "WiDaySunny" ? (
					<WiDaySunny style={{ color: mainColor }} size={200} />
				) : loading.icon === "WiCloud" ? (
					<WiCloud style={{ color: mainColor }} size={200} />
				) : loading.icon === "WiDayHaze" ? (
					<WiDayHaze style={{ color: mainColor }} size={200} />
				) : loading.icon === "WiDust" ? (
					<WiDust style={{ color: mainColor }} size={200} />
				) : null}
			</WeatherIconContainer>
			<WeatherTitle>{loading.title}</WeatherTitle>
			<WeatherTemp>{Math.floor(loading.temp)}℃</WeatherTemp>
		</WeatherContainer>
	);
};
