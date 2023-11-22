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
                    backgroundColor: "#434242",
                }}
                id={id}
            >
                <Typography variant="h3" sx={{color: 'white'}}>
                    {topic.toUpperCase()}
                </Typography>
            </Card>
        </>
    );
}