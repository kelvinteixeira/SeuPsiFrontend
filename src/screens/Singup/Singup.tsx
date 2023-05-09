import {
  Grid,
  IconButton,
  InputAdornment,
  Typography,
  InputLabel,
  FormControl,
  Card,
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
} from "./Singup.styles";

export function Singup() {
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
      <StyledFirstBox container alignItems={"center"} justifyContent={"center"}>
        <Grid>
          <Card variant="elevation" sx={{ width: 750, height: 550 }}>
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
                  Feliz em conhecer você!
                </Typography>
                <Typography sx={{ marginBottom: 4 }}>
                  No SeuPsi nossos profissionais estão sempre dispostos a lhe
                  atender com humanidade, mas antes precisamos de algumas
                  informaçoes suas.
                </Typography>
                <Grid container direction={"column"} justifyContent={"center"}>
                  <Grid container justifyContent={"space-between"}>
                    <FormControl variant="outlined">
                      <InputLabel
                        sx={{
                          margin: -1,
                        }}
                        htmlFor="email-input"
                      >
                        Nome
                      </InputLabel>
                      <StyledOutlinedInput
                        autoFocus
                        id="nome-input"
                        label="nome"
                        size="small"
                        placeholder="Digite seu nome completo"
                      />
                    </FormControl>
                    <FormControl variant="outlined">
                      <InputLabel
                        sx={{
                          margin: -1,
                        }}
                        htmlFor="email-input"
                      >
                        Nome social
                      </InputLabel>
                      <StyledOutlinedInput
                        id="nome-social-input"
                        label="nome-social"
                        size="small"
                        placeholder="Como você prefere ser chamado(a)?"
                      />
                    </FormControl>
                  </Grid>

                  <Grid container justifyContent={"space-between"}>
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
                        id="email-input"
                        label="email"
                        size="small"
                        placeholder="Digite seu endereço de email"
                      />
                    </FormControl>
                    <FormControl variant="outlined">
                      <InputLabel
                        sx={{
                          margin: -1,
                        }}
                        htmlFor="email-input"
                      >
                        Telefone
                      </InputLabel>
                      <StyledOutlinedInput
                        id="telefone-input"
                        label="telefone"
                        size="small"
                        placeholder="Digite seu número para contato"
                      />
                    </FormControl>
                  </Grid>
                  <Grid container justifyContent={"space-between"}>
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
                        label="senha"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        placeholder="Digite sua senha"
                      />
                    </FormControl>
                    <FormControl variant="outlined">
                      <InputLabel
                        sx={{
                          margin: -1,
                        }}
                        htmlFor="password-input"
                      >
                        Confirmar senha
                      </InputLabel>
                      <StyledOutlinedInput
                        id="confirmar-senha-input"
                        size="small"
                        type={showPassword ? "text" : "password"}
                        label="confirmar-senha"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        placeholder="Digite sua senha novamente"
                      />
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid container justifyContent={"center"}>
                  <StyledButton variant="contained">Criar conta</StyledButton>
                </Grid>
                <Typography marginBottom={2} alignSelf={"center"}>
                  Já faz parte do SeuPsi?
                </Typography>
                <Link textAlign={"center"} href="/entrar" variant="overline">
                  Clique aqui para Entrar
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </StyledFirstBox>
    </Grid>
  );
}
