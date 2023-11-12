import {Grid, Stack} from "@mui/material";
import Button from '@mui/material/Button';

export enum ChapterPL {
    BOOKS = 'Książki',
    OTHER = 'Inne',
    CONTACT = 'Kontakt',
}

export enum ChapterENG {
    BOOKS = 'Books',
    OTHER = 'Other',
    CONTACT = 'Contact',
}

function Navbar() {
    function linkToChapter(href: any, name: string) {
        return (
            <Button>
                <a
                    href={'#' + href}
                    style={{
                        padding: '10px'
                    }}
                >
                    {name}
                </a>
            </Button>
        );
    }

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Stack direction="row">
                        {linkToChapter(ChapterENG.BOOKS, ChapterPL.BOOKS)}
                        {linkToChapter(ChapterENG.OTHER, ChapterPL.OTHER)}
                        {linkToChapter(ChapterENG.CONTACT, ChapterPL.CONTACT)}
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

export default Navbar;