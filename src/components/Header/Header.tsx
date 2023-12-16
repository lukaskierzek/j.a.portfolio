import header_image from '../Images/header_image.jpg';
import Box from "@mui/material/Box";
import {BoxHeader} from "./HeaderStyle";

export default function Header() {
  return (
    <>
      <header>
        <Box sx={BoxHeader}>
          <img src={header_image} alt="informacje o Justynie Adamus"/>
        </Box>
      </header>
    </>
  );
}
