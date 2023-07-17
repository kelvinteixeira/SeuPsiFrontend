import { Typography, Grid } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export function PageNotFound() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh", backgroundColor: " var(--main-color-20)" }}
    >
      <Grid container justifyContent={"center"}>
        <SentimentDissatisfiedIcon />
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Typography variant="h2" align="center">
            Erro 404
          </Typography>
          <Typography> &nbsp; página não encontrada</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
