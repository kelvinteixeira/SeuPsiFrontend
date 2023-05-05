import { Card, Typography, Grid, Box } from "@mui/material";
import { OverviewProps } from "./OverviewType";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CakeIcon from "@mui/icons-material/Cake";
import FlagIcon from "@mui/icons-material/Flag";
import ArticleIcon from "@mui/icons-material/Article";

export function Overview(props: OverviewProps) {
  return (
    <Box>
      <Card variant="outlined" sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}>
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
              <BadgeIcon sx={{ marginRight: 1, color: "var(--main-color)" }} />
              <Typography
                variant="body2"
                sx={{
                  width: 300,
                  color: "gray",
                }}
              >
                Nome do usuário:
              </Typography>
              <Typography variant="body2">{props.realName}</Typography>
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
              <Typography variant="body2">{props.socialName}</Typography>
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
              <Typography variant="body2">{props.email}</Typography>
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
              <Typography variant="body2">{props.birthday}</Typography>
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
                País ou região:
              </Typography>
              <Typography variant="body2">{props.locality}</Typography>
            </Grid>
            <Grid
              container
              alignItems={"end"}
              marginBottom={2}
              sx={{ borderBottom: 1, borderColor: "gray" }}
            >
              <ArticleIcon
                sx={{ marginRight: 1, color: "var(--main-color)" }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "gray",
                  width: 300,
                }}
              >
                Plano atual:
              </Typography>
              <Typography variant="body2">{props.plan}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
}
