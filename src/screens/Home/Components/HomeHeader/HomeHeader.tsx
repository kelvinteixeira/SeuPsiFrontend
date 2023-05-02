import { useState, MouseEvent, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  AppBar,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { BackToTopButton } from "../../../../components/BackToTopButton/BackToTopButton";

export function HomeHeader() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [showButton, setShowButton] = useState(false);
  const [value, setValue] = useState(0);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    function handleScroll() {
      const scrollValue = window.scrollY;
      setShowButton(scrollValue > 300);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar position="static" color="inherit">
        <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                flexFlow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Grid container>
                    <GroupsIcon sx={{ color: "var(--main-color)" }} />
                    <Typography marginLeft={1}>Especialistas</Typography>
                  </Grid>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Grid container>
                    <ApartmentIcon sx={{ color: "var(--main-color)" }} />
                    <Typography marginLeft={1}>Empresas</Typography>
                  </Grid>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "left",
                },
              }}
            >
              <BottomNavigation
                showLabels
                sx={{ color: "var(--main-color" }}
                value={value}
                onChange={(_, newValue) => {
                  setValue(newValue);
                }}
              >
                <Tooltip title="Em Desenvolvimento">
                  <BottomNavigationAction
                    label="Especialistas"
                    icon={<GroupsIcon />}
                  />
                </Tooltip>
                <Tooltip title="Em Desenvolvimento">
                  <BottomNavigationAction
                    label="Empresas"
                    icon={<ApartmentIcon />}
                  />
                </Tooltip>
              </BottomNavigation>
            </Box>

            <Box>
              <Button sx={{ marginRight: 3 }} variant="contained">
                Criar conta
              </Button>
              <Button variant="outlined">Entrar</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {showButton && <BackToTopButton />}
    </>
  );
}
