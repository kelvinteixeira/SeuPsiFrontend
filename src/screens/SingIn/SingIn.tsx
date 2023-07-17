import {
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  InputLabel,
  FormControl,
  Box,
  Link,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useState, MouseEvent } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  StyledFirstBox,
  StyledOutlinedInput,
  StyledButton,
  StyledSecondBox,
} from "./SingIn.styles";
import GoogleIcon from "@mui/icons-material/Google";

export function SingIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Grid
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ height: 100 }}
    >
      <StyledFirstBox container justifyContent={"center"} alignItems={"center"}>
        <Grid>
          <Card variant="elevation" sx={{ width: 450, height: 550 }}>
            <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
            <Grid sx={{ margin: 3, padding: 2 }}>
              <Grid container direction={"column"} justifyContent={"center"}>
                <Typography
                  variant="body1"
                  fontWeight={600}
                  fontSize={20}
                  sx={{ marginBottom: 4 }}
                  alignSelf={"center"}
                >
                  Bem vindo de volta!
                </Typography>
                <Typography sx={{ marginBottom: 4 }}>
                  No SeuPsi você encontra o melhor time de psicoterapeutas do
                  Brasil!
                </Typography>
                <Grid container direction={"column"} justifyContent={"center"}>
                  <FormControl variant="outlined">
                    <InputLabel
                      sx={{
                        margin: -1,
                      }}
                      htmlFor="email-input"
                    >
                      Email
                    </InputLabel>
                    <StyledOutlinedInput
                      autoFocus
                      id="email-input"
                      label="Email"
                      sx={{ marginBottom: 3 }}
                      size="small"
                      placeholder="Digite seu endereço de email"
                    />
                  </FormControl>

                  <FormControl variant="outlined">
                    <InputLabel
                      sx={{
                        margin: -1,
                      }}
                      htmlFor="password-input"
                    >
                      Senha
                    </InputLabel>
                    <StyledOutlinedInput
                      id="password-input"
                      size="small"
                      type={showPassword ? "text" : "password"}
                      label="Senha"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="Digite sua senha"
                    />
                  </FormControl>
                </Grid>
                <Typography variant="subtitle2" marginBottom={1}>
                  <Link  textAlign={"center"} variant="overline" href="/">Esqueci minha senha!</Link>
                </Typography>

                <StyledButton sx={{ margin: 0 }} variant="contained">
                  Entrar
                </StyledButton>
                <Typography alignSelf={"center"} sx={{margin:1}}>ou </Typography>
                <StyledButton sx={{color: "var(--main-color)"}} variant="outlined"  startIcon={<GoogleIcon />}>
                  Entrar com o google
                </StyledButton>

                <Typography marginBottom={1} alignSelf={"center"}>
                  Não faz parte do SeuPsi?
                </Typography>

                <Link href="/cadastrar" textAlign={"center"} variant="overline">
                  Crie sua conta grátis
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </StyledFirstBox>

      <StyledSecondBox
        container
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Grid container justifyContent={"center"}>
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
        </Grid>
        <Typography variant="overline" color={"white"}>
          Alguma coisa vai ficar rolando aqui!
        </Typography>
      </StyledSecondBox>
    </Grid>
  );
}
