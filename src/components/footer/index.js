import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <center>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
            &copy; 2023 Scarlett School / Erik Hollensbe &mdash; All Rights
            Reserved.
          </Typography>
        </center>
      </AppBar>
    </Box>
  );
}
