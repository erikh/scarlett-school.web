import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function App() {
  return (
    <React.Fragment>
      <Typography sx={{ p: "2em" }}>
        <p>
          The Scarlett School is a school designed to educate lower-income
          individuals about computing and computer programming. Lower income
          individuals tend to work much harder, longer hours, for less pay due
          to their lack of education on skill sets that are higher in demand.
          The express goal of this institution, is to give those who would be
          unable to pay for school, or attend a school full-time while working
          their normal jobs, to learn a new skill set that pays a much higher
          salary.
        </p>
        <p>
          We feel that our education program, which gives a "splash" of
          educational materials and strongly encourages learners to finish the
          education on their own, is more flexible and encouraging than
          traditional education. We also feel that the industry benefits as a
          whole, as these people are more willing to work harder for the same
          pay as those who come from wealthier economic backgrounds.
        </p>
        <p>
          We also feel that our education style produces better learners. By
          giving them the tools to learn and encouraging them to fill the gaps,
          we are creating a culture of self-motivated learners, the gift that
          keeps on giving in an ever-changing technology landscape.
        </p>
        <p>
          You do not need to be interested in a technology job to attend
          Scarlett School, you only need to fulfill our financial and asset
          requirements, and be interested in teaching yourself. You do not need
          to learn at a high rate of speed, the goal of this school is to
          educate at your pace, not ours. Please click the{" "}
          <Link href="/about">about</Link> link at the top for more information.
        </p>
      </Typography>
    </React.Fragment>
  );
}

export default App;
