import {BookList} from "./Data/BookList";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import {CardContent, CardMedia, Typography} from "@mui/material";
import Topic from "./Topic";
import {ChapterENG, ChapterPL} from "./Navbar";

function Books() {

    const BooksItems = BookList.map(book =>
        <>
            <Card sx={{display: 'flex', marginBottom: '25px', padding: '10px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
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
                                color: 'blue'
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
                            color="text.primary">
                            {book.about}
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    image={book.imgUrl}
                    sx={{
                        width: "512px",
                    }}
                    alt={'Okładka książki' + book.title}
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

export default Books;