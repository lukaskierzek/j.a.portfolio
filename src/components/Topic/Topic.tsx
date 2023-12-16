import {Typography} from "@mui/material";
import Card from "@mui/material/Card";
import {TopicCard} from "./TopicStyles";

export default function topic(topic: string, id: string) {
  return (
    <>
      <Card
        sx={TopicCard}
        id={id}
      >
        <Typography variant="h3">
          {topic.toUpperCase()}
        </Typography>
      </Card>
    </>
  );
}
