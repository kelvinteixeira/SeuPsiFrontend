import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { CardPlans } from "./components/CardPlans";
import { fakePlans } from "./mockPlans";
import { Grid, Typography } from "@mui/material";

export function Plans() {
  return (
    <>
      <Header />
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Typography variant="h5" margin={2}>
          Conheça nossos planos
        </Typography>
        <Grid
          container
          alignContent={"center"}
          justifyContent={"space-evenly"}
          marginBottom={3}
          direction={"row"}
        >
          {fakePlans.map((plans) => (
            <CardPlans {...plans} key={plans.title} />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
