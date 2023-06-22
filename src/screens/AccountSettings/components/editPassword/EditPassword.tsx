import {
  Card,
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Button,
  Paper
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Modal } from "../../../../components/Modal/Modal";
import { SnackbarMessage } from "../../../../components/Snackbar/Snackbar";

export function EditPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Card
    component={Paper}
      variant="outlined"
      sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Box padding={5}>
        <Typography variant="h5" textAlign={"center"} marginBottom={4}>
          Editar informações de segurança
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

          <FormControl
            variant="outlined"
            
          >
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
              {showPassword ? "Ocultar senhas" : "Mostar senhas"}
            </Typography>
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOff sx={{ color: "var(--main-color)" }} />
              ) : (
                <Visibility sx={{ color: "var(--main-color)" }} />
              )}
            </IconButton>
          </Grid>
          <Button
            onClick={() => setOpenModal(true)}
            variant="contained"
            sx={{ textTransform: "none", backgroundColor: "var(--main-color)" }}
          >
            Salvar alterações
          </Button>
        </Grid>
      </Box>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={"Atenção"}
        subtitle={"Tem certeza que deseja fazer as alteração anteriores?"}
        confirmClick={() => {
          setOpenModal(false);
          setOpenSnackbar(true);
        }}
      />

      <SnackbarMessage
        open={openSnackbar}
        message={"Alterações feitas com sucesso"}
        onClose={() => setOpenSnackbar(false)}
        severity={"success"}
      />
    </Card>
  );
}
