import {BookList} from "./Data/BookList";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import {CardContent, CardMedia, Typography} from "@mui/material";
import Topic from "./Topic";
import {ChapterENG, ChapterPL} from "./Navbar";
import {styleCardBO} from "./Data/Styles";

export default function Books() {

    const BooksItems = BookList.map(book =>
        <>
            <Card sx={styleCardBO} key={book.title}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
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
                </Box>
                <CardMedia
                    component="img"
                    image={book.imgUrl}
                    sx={{
                        width: "40%",
                        height: "40%",
                    }}
                    alt={`Okładka książki ${book.title}`}
                    loading="lazy"
                />
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