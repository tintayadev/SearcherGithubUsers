import { Stack, Typography } from "@mui/material";
import React from "react";
import { PaperInformation } from "../../../components/PaperInformation";
import { LocationInformation } from "../../../components/LocationInformation";

export const Description = (props) => {
	const { userState } = props;
	const { bio } = userState;
	return (
		<>
			<Stack sx={{ justifyContent: "center" }}>
				{bio !== null ? (
					<Typography variant="body1">{bio}</Typography>
				) : (
					<Typography variant="body1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
						modi, molestiae voluptatum aspernatur quisquam similique odit
						pariatur officiis neque enim?
					</Typography>
				)}
				<PaperInformation userState={userState}></PaperInformation>
				<LocationInformation userState={userState}></LocationInformation>
			</Stack>
		</>
	);
};