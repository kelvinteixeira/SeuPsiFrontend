import { useState } from "react";
import {
  Grid,
  Avatar,
  Divider,
  MenuItem,
  MenuList,
  Typography,
  Container,
} from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Overview } from "./components/Overview/Overview";
import { fakeUsers } from "./components/Overview/mockUsers";
import { EditProfile } from "./components/EditProfile/EditProfile";
import { EditPlan } from "./components/EditPlan/EditPlan";
import { MyAgenda } from "./components/MyAgenda/MyAgenda";
import { Preferences } from "./components/Preferences/Preferences";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import ArticleIcon from "@mui/icons-material/Article";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyIcon from "@mui/icons-material/Key";
import { EditPassword } from "./components/EditPassword/EditPassword";

enum ProfileItems {
  overview = "OVERVIEW",
  editProfile = "EDITPROFILE",
  editPLan = "EDITPLAN",
  editPassword = "EDITPASSWORD",
  myAgenda = "MYAGENDA",
  settings = "SETTINGS",
}

export function AccountSettings() {
  const [profileItemValue, setProfileItemValue] = useState(
    ProfileItems.overview
  );

  const handleClick = (value: ProfileItems) => {
    setProfileItemValue(value);
  };

  function renderProfileItem() {
    switch (profileItemValue) {
      case ProfileItems.editProfile:
        return <EditProfile />;
      case ProfileItems.editPassword:
        return <EditPassword />;
      case ProfileItems.editPLan:
        return <EditPlan />;
      case ProfileItems.myAgenda:
        return <MyAgenda />;
      case ProfileItems.settings:
        return <Preferences />;
      default:
        return fakeUsers.map((user) => <Overview {...user} key={user.id} />);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid
            container
            direction={"column"}
            sx={{
              width: 300,
              background: "var(--main-color-40)",
              minHeight: 550,
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              alignContent={"center"}
              sx={{ height: 150 }}
            >
              <Avatar
                src="https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp?resize=1000%2C600&ssl=1"
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Divider />
            <MenuList>
              <MenuItem
                onClick={() => handleClick(ProfileItems.overview)}
                className={
                  profileItemValue == ProfileItems.overview ? "link-active" : ""
                }
              >
                <HomeIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
                <Typography variant="overline">visão geral da conta</Typography>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => handleClick(ProfileItems.editProfile)}
                className={
                  profileItemValue == ProfileItems.editProfile
                    ? "link-active"
                    : ""
                }
              >
                <EditIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
                <Typography variant="overline">Editar perfil</Typography>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => handleClick(ProfileItems.editPassword)}
                className={
                  profileItemValue == ProfileItems.editPassword
                    ? "link-active"
                    : ""
                }
              >
                <KeyIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
                <Typography variant="overline">Mudar Senha</Typography>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => handleClick(ProfileItems.editPLan)}
                className={
                  profileItemValue == ProfileItems.editPLan ? "link-active" : ""
                }
              >
                <ArticleIcon
                  sx={{ color: "var(--main-color)", marginRight: 1 }}
                />
                <Typography variant="overline">Editar plano</Typography>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => handleClick(ProfileItems.myAgenda)}
                className={
                  profileItemValue == ProfileItems.myAgenda ? "link-active" : ""
                }
              >
                <DateRangeIcon
                  sx={{ color: "var(--main-color)", marginRight: 1 }}
                />
                <Typography variant="overline">Minha agenda</Typography>
              </MenuItem>
              <Divider />
              <MenuItem
                onClick={() => handleClick(ProfileItems.settings)}
                className={
                  profileItemValue == ProfileItems.settings ? "link-active" : ""
                }
              >
                <SettingsIcon
                  sx={{ color: "var(--main-color)", marginRight: 1 }}
                />
                <Typography variant="overline">Preferências</Typography>
              </MenuItem>
            </MenuList>
          </Grid>
          {renderProfileItem()}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
