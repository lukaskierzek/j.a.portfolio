import header_image from './Images/header_image.jpg';
import Box from "@mui/material/Box";

export default function Header() {
    return (
        <>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <img src={header_image} alt="information_about_justyna_adamus"/>
            </Box>
        </>
    );
}