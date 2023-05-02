import { Grid, Typography } from "@mui/material";
import { StyledBackToTopButton } from "../Header/Header.styles";
import { animateScroll as scroll } from "react-scroll";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export function BackToTopButton() {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <StyledBackToTopButton
        onClick={() => scroll.scrollToTop()}
        size="small"
        variant="contained"
      >
        <ArrowCircleUpIcon sx={{ width: 30, height: 30 }} />
        <Typography fontSize={8} variant="overline">
          Voltar ao topo
        </Typography>
      </StyledBackToTopButton>
    </Grid>
  );
}
