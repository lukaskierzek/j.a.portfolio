import Topic from "../Topic/Topic";
import {ChapterENG, ChapterPL} from "../Data/Chapters";
import {CardContent, CardMedia, Typography} from "@mui/material";
import OtherList from "./OtherList";
import Card from "@mui/material/Card";
import {styleCardBO} from "../Data/Styles";
import Grid from "@mui/material/Grid";

export default function Other() {

  const OtherItems = OtherList.map(other =>
    <>
      <Card sx={styleCardBO} key={other.title}>
        <Grid container>
          <Grid lg={8}>
            <CardContent>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  padding: '0 0 10px 0'
                }}
                align="center"
              >
                {other.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                component="article"
                sx={{paddingTop: "15px"}}
              >
                {other.about}
              </Typography>
            </CardContent>
          </Grid>
          <Grid lg={4}>
            <CardMedia
              component="img"
              image={other.img}
              alt={`Ikona ${other.title}`}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Card>
    </>
  )

  return (
    <>
      {Topic(ChapterPL.OTHER, ChapterENG.OTHER)}
      {OtherItems}
    </>
  );
}
