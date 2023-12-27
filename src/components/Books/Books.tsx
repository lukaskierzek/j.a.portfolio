import {BookList} from "./BookList";
import Card from '@mui/material/Card';
import {CardContent, CardMedia, Typography} from "@mui/material";
import Topic from "../Topic/Topic";
import {ChapterENG, ChapterPL} from "../Data/Chapters";
import {styleCardBO} from "../Data/Styles";
import React from "react";
import Grid from "@mui/material/Grid";
import {GridImg, TypographyAbout, TypographyAuthor, TypographyTitle, TypographyWorkType} from "./BooksStyles";

export default function Books() {

  const BooksItems = BookList.map(book =>
    <>
      <Card sx={styleCardBO} key={`${book.title}${book.id}`}>
        <Grid container>
          <Grid item lg={8}>
            <CardContent>
              <Typography
                variant="h5"
                sx={TypographyAuthor}
              >
                {book.author}
              </Typography>
              <Typography
                variant="h4"
                sx={TypographyTitle}
              >
                {book.title}
              </Typography>
              <Typography
                variant="h5"
                sx={TypographyWorkType}
              >
                {book.workType}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                component="article"
                sx={TypographyAbout}
              >
                {book.about}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item lg={4} sx={GridImg}>
            <CardMedia
              component="img"
              image={book.imgUrl}
              alt={`Okładka książki ${book.title}`}
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Card>
    </>
  )

  return (
    <>
      {Topic(ChapterPL.BOOKS, ChapterENG.BOOKS)}
      {BooksItems}
    </>
  );
}
