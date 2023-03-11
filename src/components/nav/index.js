import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button
            sx={{ justifyContent: "flex-start", flexGrow: 1 }}
            href="/"
            color="inherit"
          >
            <Typography variant="h6">Scarlett School</Typography>
          </Button>
          <Button
            sx={{ justifyContent: "flex-end" }}
            href="/about"
            color="inherit"
          >
            <Typography variant="h6">About</Typography>
          </Button>
          <Button
            sx={{ justifyContent: "flex-end" }}
            href="/lessons"
            color="inherit"
          >
            <Typography variant="h6">Lessons</Typography>
          </Button>
          <Button
            sx={{ justifyContent: "flex-end" }}
            href="/contact"
            color="inherit"
          >
            <Typography variant="h6">Contact</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
