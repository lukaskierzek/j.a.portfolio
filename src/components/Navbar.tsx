import {Avatar, Grid, Modal, Stack, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import React, {useState} from "react";
import Box from "@mui/material/Box";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import {styleBGI} from "./Data/Styles";
import Links from "./Data/Links";
import PersonalData from "./Data/PersonalData";

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

    function ReturnGridModal(stactIcon: React.ReactElement, stactContent: React.ReactElement) {
        return (
            <>
                <Grid lg={12} sx={{mb: 1}}>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Stack>
                            <Avatar sx={{bgcolor: "black"}}>
                                {stactIcon}
                            </Avatar>
                        </Stack>
                        <Stack>
                            {stactContent}
                        </Stack>
                    </Stack>
                </Grid>
            </>
        );
    }

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
                        {ReturnGridModal(
                            <EmailIcon/>,
                            <>
                                <Typography component="address">
                                    <Typography
                                        component="a"
                                        href={`mailto:${PersonalData.JA_EMAIL}`}
                                    >
                                        {PersonalData.JA_EMAIL}
                                    </Typography>
                                </Typography>
                            </>
                        )}
                        {ReturnGridModal(
                            <LinkedInIcon/>,
                            <>
                                <Typography
                                    component="a"
                                    href={Links.LINKEDIN_JUSTYNA_ADAMUS}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {Links.LINKEDIN_JUSTYNA_ADAMUS}
                                </Typography>
                            </>
                        )}
                        {ReturnGridModal(
                            <PhoneAndroidIcon/>,
                            <>
                                <Typography>
                                    {PersonalData.JA_PHONE_NUMBER}
                                </Typography>
                            </>
                        )}
                    </Grid>
                </Box>
            </Modal>
        </>
    );
}