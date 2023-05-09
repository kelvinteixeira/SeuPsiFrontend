import { Card, Grid, Box } from "@mui/material";

export function EditPlan() {
  return (
    <Card
      variant="outlined"
      sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <h1>Editar Plano</h1>
      </Grid>
    </Card>
  );
}
