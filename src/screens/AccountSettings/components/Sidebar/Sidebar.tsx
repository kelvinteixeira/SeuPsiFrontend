import {
  Grid,
  Avatar,
  Typography,
  Divider,
  MenuList,
  MenuItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import ArticleIcon from "@mui/icons-material/Article";
import DateRangeIcon from "@mui/icons-material/DateRange";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

enum ProfileItems {
  overview = "OVERVIEW",
  editProfile = "EDITPROFILE",
  editPLan = "EDITPLAN",
  myAgenda = "MYAGENDA",
  settings = "SETTINGS",
}

export function Sidebar() {
  const [isActive, setIsActive] = useState("");

  const handleClick = (value: ProfileItems) => {
    setIsActive(value);
  };

  return (
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
          className={isActive == ProfileItems.overview ? "link-active" : ""}
        >
          <HomeIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">visão geral da conta</Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => handleClick(ProfileItems.editProfile)}
          className={isActive == ProfileItems.editProfile ? "link-active" : ""}
        >
          <EditIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">Editar perfil</Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => handleClick(ProfileItems.editPLan)}
          className={isActive == ProfileItems.editPLan ? "link-active" : ""}
        >
          <ArticleIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">Editar plano</Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => handleClick(ProfileItems.myAgenda)}
          className={isActive == ProfileItems.myAgenda ? "link-active" : ""}
        >
          <DateRangeIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">Minha agenda</Typography>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => handleClick(ProfileItems.settings)}
          className={isActive == ProfileItems.settings ? "link-active" : ""}
        >
          <SettingsIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">Preferências</Typography>
        </MenuItem>
      </MenuList>
    </Grid>
  );
}
