import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { CardPlans } from "./components/CardPlans";
import { Grid, Typography } from "@mui/material";
import { PlansProps } from "../../Global/types";
import { api } from "../../services/api";

export function Plans() {
  const [plans, setPlans] = useState<Array<PlansProps>>([]);
  useEffect(() => {
    api.get('/plans').then(response => setPlans(response.data))
  }, []);
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
          {plans.map((plan) => (
            <CardPlans {...plan} key={plan.id} />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
