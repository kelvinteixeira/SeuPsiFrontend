import {
  Card,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export function EditPassword() {
  const [showPassword, setShowPassword] = useState(false);

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Card
      variant="outlined"
      sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Box padding={5}>
        <Typography variant="h5" textAlign={"center"} marginBottom={4}>
          Editar informações da conta
        </Typography>
        <Grid
          container
          direction={"column"}
          marginBottom={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <FormControl variant="outlined" sx={{ marginBottom: 3 }}>
            <InputLabel
              sx={{
                margin: -1,
              }}
              htmlFor="password"
            >
              Senha atual
            </InputLabel>
            <OutlinedInput
              autoFocus
              type="password"
              id="password"
              label="Senha atual"
              size="small"
              placeholder="Digite a sua senha atual"
              fullWidth
              sx={{
                backgroundColor: "var(--main-color-20)",
                borderRadius: 2,
                width: 620,
              }}
            />
          </FormControl>

          <FormControl variant="outlined" sx={{ marginBottom: 3 }}>
            <InputLabel
              sx={{
                margin: -1,
              }}
              htmlFor="new-password"
            >
              Nova senha
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              id="new-password"
              label="Nova senha"
              size="small"
              placeholder="Digite a sua nova senha"
              fullWidth
              sx={{
                backgroundColor: "var(--main-color-20)",
                borderRadius: 2,
                width: 620,
              }}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel
              sx={{
                margin: -1,
              }}
              htmlFor="password"
            >
              Confimar senha
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              id="password"
              label="Confirmar senha"
              size="small"
              placeholder="Confirme a sua nova senha"
              fullWidth
              sx={{
                backgroundColor: "var(--main-color-20)",
                borderRadius: 2,
                width: 620,
              }}
            />
          </FormControl>
          <Grid
            container
            alignItems={"center"}
            justifyContent={"end"}
            sx={{ color: "gray" }}
          >
            <Typography variant="subtitle2" fontSize={10}>
              Mostar senhas
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
          <Button variant="contained" sx={{ textTransform: "none" }}>
            Salvar alterações
          </Button>
        </Grid>
      </Box>
    </Card>
  );
}
