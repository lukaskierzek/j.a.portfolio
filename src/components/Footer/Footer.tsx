import {Grid, Typography} from "@mui/material";
import Links from "../Data/Links";
import PersonalData from "../Data/PersonalData";

export default function Footer() {
  function FooterAHTMLTag(text: string, href: string) {
    return (
      <>
        <Typography
          href={href}
          target="_blank"
          rel="noreferrer"
          component="a"
          variant="body2"
        >
          {text}
        </Typography>
      </>
    );
  }

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <footer>
          <Typography variant="body2">
            Autorzy: {FooterAHTMLTag(PersonalData.LK_FULL_NAME, Links.LINKEDIN_LUKAS_KIERZEK)}, {FooterAHTMLTag(PersonalData.JA_FULL_NAME, Links.LINKEDIN_JUSTYNA_ADAMUS)}.
            Wszelkie prawa
            zastrzeżone. {FooterAHTMLTag("Kod źródłowy / Source code", Links.GITHUB_SOURCE_CODE)}
          </Typography>
        </footer>
      </Grid>
    </>
  );
}
