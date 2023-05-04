import { Grid, Container } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Footer } from "../../components/Footer/Footer";

export function Profile() {
  return (
    <>
      <Header />
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Container>
          <Sidebar />
        </Container>
      </Grid>
      <Footer />
    </>
  );
}
