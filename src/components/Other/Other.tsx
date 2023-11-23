import Topic from "../Topic/Topic";
import {ChapterENG, ChapterPL} from "../Data/Chapters";
import {CardContent, CardMedia, Typography} from "@mui/material";
import OtherList from "./OtherList";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import {styleCardBO} from "../Data/Styles";


export default function Other() {

    const OtherItems = OtherList.map(other =>
        <>
            <Card sx={styleCardBO} key={other.title}>
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
                            align="center"
                        >
                            {other.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.primary"
                        >
                            {other.about}
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    image={other.img}
                    sx={{
                        width: "40%",
                        height: "40%",
                    }}
                    alt={`Ikona ${other.title}`}
                    loading="lazy"
                />
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