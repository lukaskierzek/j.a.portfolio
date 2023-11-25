import {Grid, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";
import {styleBGI, styleNavbarButton} from "../Data/Styles";
import ModalContact from "./ModalContact";
import {ChapterENG, ChapterPL} from "../Data/Chapters";

export default function Navbar() {
    function linkToChapter(href: any, name: string) {
        return (
            <>
                <Button>
                    <Typography
                        href={`#${href}`}
                        sx={styleNavbarButton}
                        component="a"
                    >
                        {name}
                    </Typography>
                </Button>
            </>
        );
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12} sx={{
                    margin: "20px 0 20px 0",
                    backgroundColor: "#22A39F",
                    ...styleBGI,
                }}>
                    <Stack direction="row">
                        {linkToChapter(ChapterENG.BOOKS, ChapterPL.BOOKS)}
                        {linkToChapter(ChapterENG.OTHER, ChapterPL.OTHER)}
                        {ModalContact()}
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

