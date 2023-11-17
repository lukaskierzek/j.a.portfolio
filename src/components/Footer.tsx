import {Grid, Typography} from "@mui/material";

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
            <Grid container>
                <Grid item lg={12}>
                    <footer>
                        <Typography
                            align="center"
                            variant="body2"
                        >
                            Autorzy: {FooterAHTMLTag("Łukasz Kierzek", "https://www.linkedin.com/in/lukasz-kierzek-a4a977152/")}, {FooterAHTMLTag("Justyna Adamus", "https://www.linkedin.com/in/justyna-adamus-93a421286/")}.
                            Wszelkie prawa
                            zastrzeżone. {FooterAHTMLTag("Kod źródłowy / Source code", "https://github.com/lukaskierzek/j.a.portfolio")}
                        </Typography>
                    </footer>
                </Grid>
            </Grid>
        </>
    );
}