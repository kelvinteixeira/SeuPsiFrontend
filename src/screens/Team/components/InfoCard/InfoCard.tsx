import {
  Avatar,
  Box,
  Card,
  Grid,
  Rating,
  Typography,
  Tooltip,
  Button,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import SendIcon from "@mui/icons-material/Send";
import { ProfessionalProps } from "../../../../Global/types";

export function InfoCard(props: ProfessionalProps) {
  return (
    <Card variant="elevation" sx={{ width: 580, margin: 2 }}>
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Grid container alignContent={"center"} justifyContent={"center"}>
        <Avatar
          alt={props.name}
          src={props.profilePicture}
          sx={{ width: 220, height: 220, margin: 2 }}
        />

        <Grid sx={{ width: 300 }}>
          <Typography variant="body1" marginTop={3} fontSize={25}>
            {props.name}
          </Typography>
          {props.CRP ? (
            <Grid container>
              <Typography variant="body2" fontWeight={"bold"}>
                {props.profession}
              </Typography>
              &nbsp; | &nbsp;
              <Typography variant="body2">CRP: &nbsp; </Typography>
              <Typography
                color={"var(--main-color)"}
                variant="body2"
                fontWeight={800}
              >
                {props.CRP}
              </Typography>
            </Grid>
          ) : (
            <Grid container>
              <Typography variant="body2" fontWeight={"bold"}>
                {props.profession}
              </Typography>
            </Grid>
          )}
          <Typography variant="body2">
            {props.city}, {props.state}
          </Typography>
          <Grid container alignItems={"center"}>
            <Rating name="read-only" value={props.avaliation} readOnly />
            <Typography variant="body2" fontWeight={600}>
              <a href="">(Avaliações)</a>
            </Typography>
          </Grid>
          <Typography variant="body1">Principais especialidades</Typography>
          {props.skills.map((skill) => (
            <Box marginLeft={4} key={skill}>
              <ul>
                <li>
                  <Typography variant="subtitle2">{skill}</Typography>
                </li>
              </ul>
            </Box>
          ))}
          <Typography variant="body1">Idiomas</Typography>
          {props.languages.map((language) => (
            <Box marginLeft={4} key={language}>
              <ul>
                <li>
                  <Typography variant="subtitle2">{language}</Typography>
                </li>
              </ul>
            </Box>
          ))}
          <Typography variant="overline" fontSize={18}>
            Valor: R$ {props.price.toFixed(2)}/hr
          </Typography>
        </Grid>

        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
        >
          <Grid
            padding={2}
            container
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="body1" fontSize={20}>
              Um Pouco sobre mim:
            </Typography>
            <Typography variant="subtitle2">
              {props.description.substring(0, 220)}
            </Typography>
          </Grid>

          <Typography variant="body1" fontSize={20}>
            Gostou de mim? Entre em contato!
          </Typography>

          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Tooltip arrow title="Me segue!">
              <IconButton
                sx={{
                  color: "var(--main-color)",
                }}
                onClick={() => window.open(props.socialMedias.instagram)}
              >
                <InstagramIcon />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Postagens profissionais">
              <IconButton
                sx={{
                  color: "var(--main-color)",
                }}
                onClick={() => window.open(props.socialMedias.linkedIn)}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Ou pelo email">
              <IconButton
                sx={{
                  color: "var(--main-color)",
                }}
                onClick={() => window.open(props.socialMedias.email)}
              >
                <AttachEmailIcon />
              </IconButton>
            </Tooltip>
          </Grid>

          <Typography variant="subtitle2">Ou</Typography>

          <Tooltip arrow title="Em desenvolvimento">
            <Button
              sx={{
                margin: 1,
                marginBottom: 2,
                borderRadius: 16,
                textTransform: "none",
                backgroundColor: "var(--main-color)",
              }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Manda mensagem
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
  );
}
