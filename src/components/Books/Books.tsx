import {BookList} from "./BookList";
import Card from '@mui/material/Card';
import {CardContent, CardMedia, Typography} from "@mui/material";
import Topic from "../Topic/Topic";
import {ChapterENG, ChapterPL} from "../Data/Chapters";
import {styleCardBO} from "../Data/Styles";
import React from "react";
import Grid from "@mui/material/Grid";

export default function Books() {

    const BooksItems = BookList.map(book =>
        <>
            <Card sx={styleCardBO} key={`${book.title}${book.id}`}>
                <Grid container>
                    <Grid lg={8}>
                        <CardContent>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    padding: '0 0 10px 0'
                                }}
                            >
                                {book.author}
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'green'
                                }}
                            >
                                {book.title}
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 'bold',
                                    padding: '20px 0 20px 0'
                                }}
                            >
                                {book.workType}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.primary"
                            >
                                {book.about}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid lg={4}>
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