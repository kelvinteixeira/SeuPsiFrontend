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
} from "@mui/material";
import { StyledLinksButton, StyledBackToTopButton } from "./Header.styles";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { animateScroll as scroll } from "react-scroll";

const pages = ["Profissionais", "Nossos Planos", "Fale conosco"];
const settings = ["Perfil", "Planos", "Preferências", "Sair"];

export function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [showButton, setShowButton] = useState(false);

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
      <AppBar position="static" color="primary">
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
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
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              {pages.map((page) => (
                <StyledLinksButton
                  size="small"
                  variant="text"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block", mx: 1 }}
                >
                  {page}
                </StyledLinksButton>
              ))}
            </Box>

            <Typography fontWeight={800} color={"white"} marginRight={1}>
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
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
