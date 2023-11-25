import {Typography} from "@mui/material";
import Card from "@mui/material/Card";

export default function topic(topic: string, id: string) {
	return (
		<>
			<Card
				sx={{
					display: 'flex',
					marginBottom: '25px',
					padding: '10px',
					justifyContent: 'center',
					backgroundImage: "linear-gradient(to right, #56BEB7, #E0EEEF)",
					border: "none",
					boxShadow: "none",
					color: "white"
				}}
				id={id}
			>
				<Typography variant="h3">
					{topic.toUpperCase()}
				</Typography>
			</Card>
		</>
	);
}
