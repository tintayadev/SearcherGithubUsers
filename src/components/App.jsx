import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Search } from "./Search";
import { getGithubUsers } from "../services/user";
import { UserCard } from "../Contenedores/UserCard/UserCard";
import './App.css';

export const App = () => {
	const [inputUser, setInputUser] = useState("octocat");
	const [userState, setUserState] = useState("inputUser");
	const [notFound, setNotFound] = useState(false);

	const getUser = async (user) => {
		const userResponse = await getGithubUsers(user);

		if (userState === "octocat") {
			localStorage.setItem("octocat", userResponse);
		}
		if (userResponse.message === "Not Found") {
			const { octocat } = localStorage;
			setInputUser(octocat);
			setNotFound(true);
		} else {
			setUserState(userResponse);
		}
	};

	useEffect(() => {
		getUser(inputUser);
	}, [inputUser]);

	return (
		<Container
			sx={{
				background: "whitesmoke",
				width: "80vw",
				height: "500px",
				borderRadius: "16px",
				marginTop: "40px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Search inputUser={inputUser} setInputUser={setInputUser}></Search>
			<UserCard userState={userState} />
		</Container>
	);
};