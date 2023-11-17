import {Avatar, Grid, Modal, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import React, {useState} from "react";
import Box from "@mui/material/Box";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

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

export default function Navbar() {
    function linkToChapter(href: any, name: string) {
        return (
            <>
                <Button>
                    <Typography
                        href={`#${href}`}
                        style={{padding: '10px'}}
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

function ModalContact() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        backgroundColor: '#F3EFE0',
        border: '2px solid #000',
        boxShadow: 24,
        p: 5,
    };

    return (
        <>
            <Button onClick={handleOpen} sx={{color: "black"}}>{ChapterPL.CONTACT}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
            >
                <Box sx={style}>
                    <Grid container sx={{color: 'text.primary'}}>
                        <Grid  sx={{mb: 1}}>
                            <Stack spacing={2} direction="row" alignItems="center">
                                <Stack>
                                    <Avatar sx={{bgcolor: "black"}}><EmailIcon/></Avatar>
                                </Stack>
                                <Stack>
                                    <Typography component="address">
                                        <Typography
                                            component="a"
                                            href="mailto:justyna.adamus9@gmail.com"
                                        >
                                            justyna.adamus9@gmail.com</Typography>
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid  sx={{mb: 1}}>
                            <Stack spacing={2} direction="row" alignItems="center">
                                <Stack>
                                    <Avatar sx={{bgcolor: "black"}}><LinkedInIcon/></Avatar>
                                </Stack>
                                <Stack>
                                    <Typography
                                        component="a"
                                        href="https://www.linkedin.com/in/justyna-adamus-93a421286/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        https://www.linkedin.com/in/justyna-adamus-93a421286/</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid  sx={{mb: 1}}>
                            <Stack spacing={2} direction="row" alignItems="center">
                                <Stack>
                                    <Avatar sx={{bgcolor: "black"}}><PhoneAndroidIcon/></Avatar>
                                </Stack>
                                <Stack>
                                    <Typography>+48 535 384 840</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
}