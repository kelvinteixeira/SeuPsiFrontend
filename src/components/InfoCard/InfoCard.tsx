import {
  Avatar,
  Box,
  Card,
  Grid,
  Rating,
  Typography,
  Tooltip,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import {
  StyledCardHeader,
  StyledIconButton,
  StyledButton,
} from "./InfoCard.styles";

type CardInfoProps = {
  nome: string;
  imagem: string;
  profissao: string;
  CRP?: string;
  cidade: string;
  estado: string;
  notaAvaliacao: number;
  idiomas: string[];
  especialidades: string[];
  valor: number;
  resumo: string;
  redesSocias: {
    instagram: string;
    linkedIn: string;
    email: string;
  };
};

export function InfoCard(props: CardInfoProps) {
  return (
    <Card variant="elevation" sx={{ width: 600, height: 570, margin: 3 }}>
      <StyledCardHeader></StyledCardHeader>
      <Grid container alignContent={"center"} justifyContent={"center"}>
        <Avatar
          alt={props.nome}
          src={props.imagem}
          sx={{ width: 220, height: 220, margin: 2 }}
        />

        <Grid sx={{ width: 300 }}>
          <Typography variant="body1" marginTop={3} fontSize={25}>
            {props.nome}
          </Typography>
          {props.CRP ? (
            <Grid container>
              <Typography variant="body2" fontWeight={"bold"}>
                {props.profissao}
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
                {props.profissao}
              </Typography>
            </Grid>
          )}
          <Typography variant="body2">
            {props.cidade}, {props.estado}
          </Typography>
          <Grid container alignItems={"center"}>
            <Rating name="read-only" value={props.notaAvaliacao} readOnly />
            <Typography variant="body2" fontWeight={600}>
              <a href="">(Avaliações)</a>
            </Typography>
          </Grid>
          <Typography variant="body1">Principais especialidades</Typography>
          {props.especialidades.map((items) => (
            <Box marginLeft={4} key={items}>
              <ul>
                <li>
                  <Typography variant="subtitle2">{items}</Typography>
                </li>
              </ul>
            </Box>
          ))}
          <Typography variant="overline" fontSize={18}>
            Valor: R$ {props.valor.toFixed(2)}/hr
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
              {props.resumo.substring(0, 220)}
            </Typography>
          </Grid>

          <Typography variant="body1" fontSize={20}>
            Gostou de mim? Entre em contato!
          </Typography>

          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Tooltip arrow title="Me segue!">
              <StyledIconButton
                onClick={() => window.open(props.redesSocias.instagram)}
              >
                <InstagramIcon />
              </StyledIconButton>
            </Tooltip>
            <Tooltip arrow title="Postagens profissionais">
              <StyledIconButton
                onClick={() => window.open(props.redesSocias.linkedIn)}
              >
                <LinkedInIcon />
              </StyledIconButton>
            </Tooltip>
            <Tooltip arrow title="Ou pelo email">
              <StyledIconButton
                onClick={() => window.open(props.redesSocias.email)}
              >
                <AttachEmailIcon />
              </StyledIconButton>
            </Tooltip>
          </Grid>

          <Typography variant="subtitle2">Ou</Typography>

          <Tooltip arrow title="Em desenvolvimento">
            <StyledButton
              sx={{ margin: 1 }}
              variant="contained"
              startIcon={<ChatBubbleOutlineIcon />}
            >
              Manda mensagem!
            </StyledButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Card>
  );
}
