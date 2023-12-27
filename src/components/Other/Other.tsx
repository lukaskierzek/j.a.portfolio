import Topic from "../Topic/Topic";
import {ChapterENG, ChapterPL} from "../Data/Chapters";
import {CardContent, CardMedia, Typography} from "@mui/material";
import OtherList from "./OtherList";
import Card from "@mui/material/Card";
import {styleCardBO} from "../Data/Styles";
import Grid from "@mui/material/Grid";
import {GridImg, TypographyAbout, TypographyTitle} from "./OtherStyles";

export default function Other() {

  const OtherItems = OtherList.map(other =>
    <>
      <Card sx={styleCardBO} key={other.title}>
        <Grid container>
          <Grid item lg={8}>
            <CardContent>
              <Typography
                variant="h5"
                sx={TypographyTitle}
                align="center"
              >
                {other.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                component="article"
                sx={TypographyAbout}
              >
                {other.about}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item lg={4} sx={GridImg}>
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
