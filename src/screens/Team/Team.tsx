import { Grid } from "@mui/material";
import { InfoCard } from "./components/InfoCard/InfoCard";
import { fakeCards } from "../../services/Mock";
import { Searchbar } from "./components/Searchbar/Searchbar";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export function Team() {
  return (
    <>
      <Header />
      <Grid>
        <Searchbar></Searchbar>
        <Grid container justifyContent="center" alignItems={"center"}>
          {fakeCards.map((cards) => (
            <InfoCard {...cards} key={cards.id} />
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
