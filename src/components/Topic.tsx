import {Typography} from "@mui/material";
import Card from "@mui/material/Card";

function topic(topic: string, id: string) {
    return (
        <Card sx={{display: 'flex', marginBottom: '25px', padding: '10px', justifyContent: 'center'}} id={id}>
            <Typography variant="h3">
                {topic.toUpperCase()}
            </Typography>
        </Card>
    );
}

export default topic;