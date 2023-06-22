import {
  Card,
  Grid,
  Box,
  Paper,
  Typography,
  Switch,
  Button,
} from "@mui/material";

export function Preferences() {
  return (
    <Card
      component={Paper}
      variant="outlined"
      sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Box padding={3}>
        <Typography variant="h5" textAlign={"center"} marginBottom={4}>
          Configurações
        </Typography>

        <Grid
          container
          direction={"column"}
          marginBottom={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            alignItems={"end"}
            marginBottom={2}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <Typography
              variant="body2"
              sx={{
                width: 300,
                color: "gray",
              }}
            >
              Modo escuro:
            </Typography>
            <Switch />
          </Grid>
          <Grid
            container
            alignItems={"end"}
            marginBottom={2}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <Typography
              variant="body2"
              sx={{
                width: 300,
                color: "gray",
              }}
            >
              Modo para daltônicos:
            </Typography>
            <Switch />
          </Grid>
          <Grid container justifyContent={"end"}>
            <Button sx={{textTransform: 'none'}} variant="contained">Sair da conta</Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
