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
import {style, fReturnGridModal_Grid, fReturnGridModal_Avatar, fReturnGridModalReturn_Grid} from "./ModalContactStyles";

export default function ModalContact() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function ReturnGridModal(stackIcon: React.ReactElement, stackContent: React.ReactElement) {
    return (
      <>
        <Grid item lg={12} sx={fReturnGridModal_Grid}>
          <Stack spacing={2} direction="row" alignItems="center">
            <Stack>
              <Avatar sx={fReturnGridModal_Avatar}>
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
          <Grid container sx={fReturnGridModalReturn_Grid}>
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
