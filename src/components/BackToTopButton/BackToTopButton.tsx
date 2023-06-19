import { Grid, Typography, Button } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export function BackToTopButton() {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Button
        onClick={() => scroll.scrollToTop()}
        size="small"
        variant="contained"
        sx={{
          display: "flex",
          flexDirection: "column",
          textTransform: "none",
          position: "fixed",
          zIndex: 1,
          backgroundColor: "var(--main-color)"
        }}
      >
        <ArrowCircleUpIcon sx={{ width: 30, height: 30 }} />
        <Typography fontSize={8} variant="overline">
          Voltar ao topo
        </Typography>
      </Button>
    </Grid>
  );
}
