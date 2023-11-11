import {BookList} from "./Data/BookList";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import {CardContent, CardMedia, Typography} from "@mui/material";

function Books() {

    const BooksItems = BookList.map(book =>
        <>
            <Card sx={{display: 'flex', marginBottom: '25px', padding: '10px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent>
                        <Typography
                            variant="h5"
                            sx={{
                                fontStyle: 'italic',
                                fontWeight: 'bold'
                            }}
                        >
                            {book.title}
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            {book.author}
                        </Typography>
                        <Box component="div" sx={{
                            backgroundColor: "Blue",
                            height: "20px",
                            width: "130px"
                        }}></Box>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            {book.workType}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
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
                />
            </Card>
        </>
    )
    return (
        <>
            {BooksItems}
        </>
    );
}

export default Books;