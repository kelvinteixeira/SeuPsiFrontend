import { useEffect, useState } from "react";
import { InfoCard } from "./components/InfoCard/InfoCard";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Grid } from "@mui/material";
import { api } from "../../api";
import { ProfessionalProps } from "../../Global/types";

export function Team() {
  const [professionals, setProfessionals] = useState<Array<ProfessionalProps>>([]);

  useEffect(() => {
    api
      .get("/professionals")
      .then((response) => setProfessionals(response.data));
  }, []);

  return (
    <>
      <Header />
      <Grid>
        <Searchbar></Searchbar>
        <Grid container justifyContent="center" alignItems={"center"}>
          {professionals.map((professional) => (
            <InfoCard {...professional} key={professional.id} />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
