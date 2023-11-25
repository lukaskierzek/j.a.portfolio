import React, {useState} from "react";
import {Avatar, Grid, Modal, Stack, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import PersonalData from "../Data/PersonalData";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Links from "../Data/Links";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import {ChapterPL} from "../Data/Chapters";
import {styleNavbarButton} from "../Data/Styles";

export default function ModalContact() {
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

    function ReturnGridModal(stackIcon: React.ReactElement, stackContent: React.ReactElement) {
        return (
            <>
                <Grid lg={12} sx={{mb: 1}}>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Stack>
                            <Avatar sx={{bgcolor: "black"}}>
                                {stackIcon}
                            </Avatar>
                        </Stack>
                        <Stack>
                            {stackContent}
                        </Stack>
                    </Stack>
                </Grid>
            </>
        );
    }

    return (
        <>
            <Button onClick={handleOpen}>
                <Typography sx={styleNavbarButton}>
                    {ChapterPL.CONTACT}
                </Typography>
            </Button>
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