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
  Avatar,
  Tooltip,
  MenuItem,
  AppBar,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import { StyledBackToTopButton } from "./Header.styles";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { animateScroll as scroll } from "react-scroll";
import GroupIcon from "@mui/icons-material/Group";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ChatIcon from "@mui/icons-material/Chat";
import WebIcon from "@mui/icons-material/Web";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [showButton, setShowButton] = useState(false);
  const [value, setValue] = useState(0);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
                    <GroupIcon sx={{ color: "var(--main-color)" }} />
                    <Typography marginLeft={1}>Equipe</Typography>
                  </Grid>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Grid container>
                    <AutoAwesomeMotionIcon
                      sx={{ color: "var(--main-color)" }}
                    />
                    <Typography marginLeft={1}>Planos</Typography>
                  </Grid>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Grid container>
                    <GroupIcon sx={{ color: "var(--main-color)" }} />
                    <Typography marginLeft={1}>Blog</Typography>
                  </Grid>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Grid container>
                    <GroupIcon sx={{ color: "var(--main-color)" }} />
                    <Typography marginLeft={1}>Contato</Typography>
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
                  justifyContent: "center",
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
                <BottomNavigationAction label="Equipe" icon={<GroupIcon />} />
                <BottomNavigationAction
                  label="Planos"
                  icon={<AutoAwesomeMotionIcon />}
                />
                <Tooltip title="Em Desenvolvimento">
                  <BottomNavigationAction label="Blog" icon={<WebIcon />} />
                </Tooltip>
                <Tooltip title="Em Desenvolvimento">
                  <BottomNavigationAction label="Chat" icon={<ChatIcon />} />
                </Tooltip>
              </BottomNavigation>
            </Box>

            <Typography fontWeight={800} marginRight={1}>
              Bem vindo usuário
            </Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Abrir configurações">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="login picture"
                    src="https://i0.wp.com/viciados.net/wp-content/uploads/2022/11/Naruto-Shippuden-Boruto-2023.webp?resize=1000%2C600&ssl=1"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Grid container>
                    <AccountCircleIcon sx={{ color: "var(--main-color)" }} />
                    <Typography marginLeft={1}>Perfil</Typography>
                  </Grid>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Grid container>
                    <AutoAwesomeMosaicIcon
                      sx={{ color: "var(--main-color)" }}
                    />
                    <Typography marginLeft={1}>Meu plano</Typography>
                  </Grid>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Grid container>
                    <SettingsIcon sx={{ color: "var(--main-color)" }} />
                    <Typography marginLeft={1}>Preferências</Typography>
                  </Grid>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Grid container>
                    <LogoutIcon sx={{ color: "var(--main-color)" }} />
                    <Typography marginLeft={1}>Sair</Typography>
                  </Grid>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {showButton && (
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <StyledBackToTopButton
            onClick={() => scroll.scrollToTop()}
            size="small"
            variant="contained"
          >
            <ArrowCircleUpIcon sx={{ width: 30, height: 30 }} />
            <Typography fontSize={8} variant="overline">
              Voltar ao topo
            </Typography>
          </StyledBackToTopButton>
        </Grid>
      )}
    </>
  );
}
