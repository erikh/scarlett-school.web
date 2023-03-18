import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Lessons() {
  return (
    <Typography sx={{ p: "2em" }}>
      <p>
        Here are the basic lessons we teach, provided to you for reference. Each
        lesson is given by an instructor who will help "fill in the blanks" and
        answer your questions.
      </p>
      <ul>
        <li>
          <Link href="/lessons/unix">Unix</Link>
        </li>
      </ul>
    </Typography>
  );
}
