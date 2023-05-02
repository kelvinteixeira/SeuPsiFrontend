import {
  Card,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  InputLabel,
  FormControl,
  Box,
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

export function SingIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <StyledFirstBox container justifyContent={"center"} alignItems={"center"}>
        <Grid>
          <Card
            variant="elevation"
            sx={{ width: 450, height: 550}}
          >
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
                <Typography variant="subtitle2" marginBottom={5}>
                  <a href="">Esqueci minha senha!</a>
                </Typography>
                <StyledButton variant="contained">Entrar</StyledButton>
                <Typography marginBottom={2} alignSelf={"center"}>
                  Não faz parte do SeuPsi?
                </Typography>
                <Typography
                  variant="overline"
                  fontWeight={600}
                  fontSize={13}
                  alignSelf={"center"}
                  letterSpacing={3}
                >
                  <a href="">Crie sua conta grátis</a>
                </Typography>
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
