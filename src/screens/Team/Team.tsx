import { Grid } from "@mui/material";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { fakeApi } from "../../services/Mock";
import { Searchbar } from "../../components/Searchbar/Searchbar";

export function Team() {
  return (
    <Grid>
      <Searchbar></Searchbar>
      <Grid container justifyContent="center" alignItems={"center"}>
        {fakeApi.map((info) => (
          <InfoCard {...info} key={info.id} />
        ))}
      </Grid>
    </Grid>
  );
}
