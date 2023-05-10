import {
  Dialog,
  Box,
  Grid,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  confirmClick: () => void;
};

export function Modal(props: ModalProps) {
  return (
    <Dialog
      open={props.open}
      keepMounted
      onClose={props.onClose}
      aria-describedby="dialog-confirmation"
      
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        padding={3}
        direction={"column"}
        sx={{
          width: 320,
        }}
      >
        <Typography variant="body1" fontWeight={800} marginBottom={1}>
          {props.title}
        </Typography>

        <IconButton
          aria-label="close"
          onClick={props.onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 13,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <ReportGmailerrorredIcon sx={{ marginBottom: 2}} color="warning" />

        <Typography variant="subtitle2" marginBottom={2} textAlign={"center"}>
          {props.subtitle}
        </Typography>

        <Grid container justifyContent={"space-around"}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={props.onClose}
          >
            Cancelar{" "}
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
            onClick={() => props.confirmClick()}
          >
            Confimar
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}
