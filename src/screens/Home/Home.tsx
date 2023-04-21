import { Grid } from "@mui/material";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { cardInfo } from "../../services/Mock";

export function Home() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems={"center"}
      >
        {cardInfo.map((info) => (
          <InfoCard {...info} key={info.id} />
        ))}
      </Grid>
    </>
  );
}
