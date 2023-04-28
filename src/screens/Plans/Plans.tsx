import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { StyledTapeHeaderCard } from "./Plans.styles";
import DoneIcon from "@mui/icons-material/Done";
import { fakePlans } from "./mockPlans";

export function Plans() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <Typography variant="h5" margin={2}>
        Conheça nossos planos
      </Typography>

      <Grid
        container
        alignContent={"center"}
        justifyContent={"space-evenly"}
        marginBottom={3}
      >
        {fakePlans.map((plans) => (
          <Card
            variant="elevation"
            sx={{ width: 350, height: 450 }}
            {...plans}
            key={plans.title}
          >
            <Box bgcolor={plans.headertapecolor} sx={{ height: 15 }}></Box>

            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              padding={2}
            >
              <Typography
                variant="body1"
                textAlign={"center"}
                fontWeight={"bold"}
                marginBottom={1}
              >
                {plans.title}
              </Typography>
              <Divider />

              <Grid
                container
                sx={{ height: 250, marginBottom: 1 }}
                justifyContent={"center"}
              >
                {plans.benefits.map((benefit) => (
                  <List key={benefit}>
                    <ListItem sx={{ padding: 0 }}>
                      <DoneIcon sx={{ color: "var(--main-color)" }} />
                      <Typography variant="body2">{benefit}</Typography>
                    </ListItem>
                  </List>
                ))}
              </Grid>

              <Typography variant="overline" fontWeight={"bold"} textAlign={"center"}>
               Valor: {plans.valor} 
              </Typography>
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
              >
                <Button
                  variant="contained"
                  sx={{ marginBottom: 2, width: 200, textTransform: "none" }}
                >
                  {plans.buttontitle}
                </Button>
                <Typography variant="body2" fontSize={10}>
                  Renovação automática
                </Typography>
                <Typography variant="overline" fontSize={10}>
                  Cancele a qualquer momento
                </Typography>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
