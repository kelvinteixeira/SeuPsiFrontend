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

export function Sidebar() {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        width: 320,
        background: "var(--main-color-20)",
        minHeight: 700
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
        <MenuItem>
          <HomeIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">visão geral da conta</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <EditIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">Editar perfil</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ArticleIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">Meu plano</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <DateRangeIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">Minha agenda</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <SettingsIcon sx={{ color: "var(--main-color)", marginRight: 1 }} />
          <Typography variant="overline">Preferências</Typography>
        </MenuItem>
      </MenuList>
    </Grid>
  );
}
