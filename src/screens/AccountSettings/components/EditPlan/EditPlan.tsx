import { Card, Grid, Box, Typography, Button } from "@mui/material";
import ArticleIcon from "@mui/icons-material/Article";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../../components/Modal/Modal";
import { useState } from "react";
import { SnackbarMessage } from "../../../../components/Snackbar/Snackbar";

export function EditPlan() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  return (
    <Card
      variant="outlined"
      sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Box padding={3}>
        <Typography variant="h5" textAlign={"center"} marginBottom={4}>
          Editar informações de plano
        </Typography>
        <Grid
          container
          direction={"column"}
          marginBottom={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            alignItems={"end"}
            marginBottom={2}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <ArticleIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                width: 300,
              }}
            >
              Plano atual:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 800 }}>
              Premium
            </Typography>
          </Grid>

          <Typography variant="h6" textAlign={"center"} marginBottom={2}>
            Seus benefícios
          </Typography>

          <Grid
            container
            alignItems={"end"}
            marginBottom={1}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <DoneIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
              }}
            >
              Beneficio 1 da coisas boa pra caramba e tals
            </Typography>
          </Grid>
          <Grid
            container
            alignItems={"end"}
            marginBottom={1}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <DoneIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
              }}
            >
              Beneficio 2 da coisas boa pra caramba e tals tbm
            </Typography>
          </Grid>
          <Grid
            container
            alignItems={"end"}
            marginBottom={1}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <DoneIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
              }}
            >
              Beneficio 3 da coisas boa pra caramba e tals tbm que só
            </Typography>
          </Grid>
          <Grid
            container
            alignItems={"end"}
            marginBottom={3}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <DoneIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
              }}
            >
              Beneficio 4 é nada demais não
            </Typography>
          </Grid>
          <Grid container justifyContent="center">
            <Button
              onClick={() => navigate("/planos")}
              variant="contained"
              sx={{ textTransform: "none", marginRight: 3 }}
            >
              Assinar novo plano
            </Button>
            <Button
              onClick={() => setOpenModal(true)}
              variant="outlined"
              sx={{ textTransform: "none" }}
            >
              Cancelar plano
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={"Atenção"}
        subtitle={"Tem certeza que deseja cancelar seu plano atual?"}
        confirmClick={() => {
          setOpenModal(false)
          setOpenSnackbar(true)
        }}
      />

      <SnackbarMessage
        open={openSnackbar}
        message={"Plano cancelado com sucesso"}
        onClose={() => setOpenSnackbar(false)}
        severity={"success"}
      />
    </Card>
  );
}
