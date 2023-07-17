import {
  Grid,
  IconButton,
  Typography,
  InputLabel,
  FormControl,
  Card,
  Box,
  Link,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import {
  StyledFirstBox,
  StyledOutlinedInput,
  StyledButton,
  StyledSecondBox,
} from "./Singup.styles";

export function Singup() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                        placeholder="Digite sua senha"
                      />
                    </FormControl>
                    <FormControl variant="outlined">
                      <InputLabel
                        sx={{
                          margin: -1,
                        }}
                        htmlFor="password-confirm-input"
                      >
                        Confirmar senha
                      </InputLabel>
                      <StyledOutlinedInput
                        id="password-confirm-input"
                        size="small"
                        type={showPassword ? "text" : "password"}
                        label="confirmar-senha"
                        placeholder="Digite sua senha novamente"
                      />
                    </FormControl>
                  </Grid>
                  <Grid
                    container
                    alignItems={"center"}
                    justifyContent={"end"}
                    sx={{ color: "gray" }}
                  >
                    <Typography variant="subtitle2" fontSize={10}>
                      {showPassword ? "Ocultar senhas" : "Mostar senhas"}
                    </Typography>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff color="primary" />
                      ) : (
                        <Visibility color="primary" />
                      )}
                    </IconButton>
                  </Grid>
                </Grid>

                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <StyledButton variant="contained">Cadastrar</StyledButton>
                  <Typography>ou</Typography>
                  <StyledButton
                    sx={{ color: "var(--main-color)" }}
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                  >
                    Cadastrar com o google
                  </StyledButton>
                </Grid>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                  <Typography alignSelf={"center"}>
                    Já faz parte do SeuPsi? &nbsp;
                  </Typography>
                  <Link textAlign={"center"} href="/entrar" variant="overline">
                    Clique aqui para Entrar
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </StyledFirstBox>
    </Grid>
  );
}
