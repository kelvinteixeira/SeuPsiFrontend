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
import DoneIcon from "@mui/icons-material/Done";

type CardPlansProps = {
  title: string;
  benefits: string[];
  buttonTitle: string;
  headerTapeColor: string;
  valor: string;
};

export function CardPlans(props: CardPlansProps) {
  return (
    <Card variant="elevation" sx={{ width: 350, height: 450 }}>
      <Box bgcolor={props.headerTapeColor} sx={{ height: 15 }}></Box>

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
          {props.title}
        </Typography>
        <Divider />

        <Grid
          container
          sx={{ height: 250, marginBottom: 1 }}
          justifyContent={"center"}
        >
          {props.benefits.map((benefit) => (
            <List key={benefit}>
              <ListItem sx={{ padding: 0 }}>
                <DoneIcon sx={{ color: "var(--main-color)" }} />
                <Typography variant="body2">{benefit}</Typography>
              </ListItem>
            </List>
          ))}
        </Grid>

        <Typography variant="overline" fontWeight={"bold"} textAlign={"center"}>
          Valor: {props.valor}
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
            {props.buttonTitle}
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
  );
}
