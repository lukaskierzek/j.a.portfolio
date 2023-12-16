import {Grid, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import React from "react";
import {styleNavbarButton} from "../Data/Styles";
import ModalContact from "./ModalContact";
import {ChapterENG, ChapterPL} from "../Data/Chapters";
import {GridNav} from "./NavbarStyles";

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
      <nav>
        <Grid container>
          <Grid item xs={12} sx={GridNav}>
            <Stack direction="row">
              {linkToChapter(ChapterENG.BOOKS, ChapterPL.BOOKS)}
              {linkToChapter(ChapterENG.OTHER, ChapterPL.OTHER)}
              {ModalContact()}
            </Stack>
          </Grid>
        </Grid>
      </nav>
    </>
  );
}
