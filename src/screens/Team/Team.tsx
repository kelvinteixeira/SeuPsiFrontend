import { Grid } from "@mui/material";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { fakeCards } from "../../services/Mock";
import { Searchbar } from "../../components/Searchbar/Searchbar";

export function Team() {
  return (
    <Grid>
      <Searchbar></Searchbar>
      <Grid container justifyContent="center" alignItems={"center"}>
        {fakeCards.map((cards) => (
          <InfoCard {...cards} key={cards.id} />
        ))}
      </Grid>
    </Grid>
  );
}
