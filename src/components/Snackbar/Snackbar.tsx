import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

type SnackbarProps = {
  open: boolean;
  message: string;
  onClose: () => void;
  severity: "success" | "error" | "warning" | "info";
};

export function SnackbarMessage(props: SnackbarProps) {
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <Snackbar open={props.open} autoHideDuration={4000} onClose={props.onClose}>
      <Alert severity={props.severity} sx={{ width: "100%" }} variant="filled">
        {props.message}
      </Alert>
    </Snackbar>
  );
}
