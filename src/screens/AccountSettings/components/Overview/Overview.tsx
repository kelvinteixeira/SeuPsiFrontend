import { Card, Typography, Grid, Box, Paper } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CakeIcon from "@mui/icons-material/Cake";
import FlagIcon from "@mui/icons-material/Flag";
import ArticleIcon from "@mui/icons-material/Article";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { CustomerProps } from "../../../../Global/types";
import { formatedDate } from "../../../../utils/date";
import { formatedCpf } from "../../../../utils/cpf";

export function Overview(props: CustomerProps) {
  return (
    <Card
      component={Paper}
      variant="outlined"
      sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Box padding={5}>
        <Typography variant="h5" textAlign={"center"} marginBottom={4}>
          Visão geral da conta
        </Typography>
        <Grid container direction={"column"} marginBottom={2}>
          <Grid
            container
            alignItems={"end"}
            marginBottom={2}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <HowToRegIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                width: 300,
                color: "gray",
              }}
            >
              Nome do usuário:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 800 }}>
              {props.userName}
            </Typography>
          </Grid>
          <Grid
            container
            alignItems={"end"}
            marginBottom={2}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <AccountCircleIcon
              sx={{ marginRight: 1, color: "var(--main-color)" }}
            />
            <Typography
              variant="body2"
              sx={{
                width: 300,
                color: "gray",
              }}
            >
              Nome preferencial:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 800 }}>
              {props.socialName}
            </Typography>
          </Grid>
          <Grid
            container
            alignItems={"end"}
            marginBottom={2}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <AlternateEmailIcon
              sx={{ marginRight: 1, color: "var(--main-color)" }}
            />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                width: 300,
              }}
            >
              Email cadastrado:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 800 }}>
              {props.email}
            </Typography>
          </Grid>
          <Grid
            container
            alignItems={"end"}
            marginBottom={2}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <CakeIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                width: 300,
              }}
            >
              Data de nascimento:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 800 }}>
              {formatedDate(props.birthdayDate)}
            </Typography>
          </Grid>
          <Grid
            container
            alignItems={"end"}
            marginBottom={2}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <BadgeIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                width: 300,
              }}
            >
              CPF:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 800 }}>
              {formatedCpf(props.CPF)}
            </Typography>
          </Grid>
          <Grid
            container
            alignItems={"end"}
            marginBottom={2}
            sx={{ borderBottom: 1, borderColor: "gray" }}
          >
            <FlagIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                width: 300,
              }}
            >
              Localidade:
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 800 }}>
              {props.city} - {props.state}, {props.country}
            </Typography>
          </Grid>
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
              {props.plan}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}
