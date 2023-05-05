import { Grid, Container } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Footer } from "../../components/Footer/Footer";
import { Overview } from "./components/Overview/Overview";
import { fakeUsers } from "./components/Overview/mockUsers";

export function AccountSettings() {
  return (
    <>
      <Header />
      <Container>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Sidebar />
          {fakeUsers.map((user) => (
            <Overview {...user} key={user.id} />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
