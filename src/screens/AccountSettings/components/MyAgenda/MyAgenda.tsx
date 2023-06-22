import {
  Card,
  Grid,
  Box,
  Typography,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { CustomerProps } from "../../../../Global/types";
import { Modal } from "../../../../components/Modal/Modal";
import { months, columns } from "./MyAgendaProps";
import { SnackbarMessage } from "../../../../components/Snackbar/Snackbar";

export function MyAgenda() {
  const [openModal, setOpenModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);
  const currentMonth = months[monthIndex];
  const [customers, setCustomers] = useState<Array<CustomerProps>>([]);

  useEffect(() => {
    api.get("/customers").then((response) => setCustomers(response.data));
  }, []);

  const handleNextMonth = () => {
    if (monthIndex < months.length - 1) {
      setMonthIndex(monthIndex + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (monthIndex > 0) {
      setMonthIndex(monthIndex - 1);
    }
  };

  return (
    <Card
    component={Paper}
      variant="outlined"
      sx={{ width: 700, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}
    >
      <Box bgcolor={"var(--main-color)"} sx={{ height: 15 }}></Box>
      <Box padding={3}>
        <Typography variant="h5" textAlign={"center"} marginBottom={4}>
          Meus agendamentos
        </Typography>
        <Grid
          container
          direction={"column"}
          marginBottom={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Paper sx={{ width: "100%" }}>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <IconButton onClick={handlePreviousMonth}>
                <ArrowBackIosNewIcon sx={{ color: "var(--main-color)" }} />
              </IconButton>
              <Typography variant="overline" fontSize={16}>
                {currentMonth}
              </Typography>
              <IconButton onClick={handleNextMonth}>
                <ArrowForwardIosIcon sx={{ color: "var(--main-color)" }} />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
        {customers.map((customer) => (
          <Grid
            sx={{ width: "100%" }}
            component={Paper}
            container
            justifyContent={"space-around"}
            marginTop={2}
            key={customer.id}
          >
            <TableContainer sx={{ maxWidth: 650, maxHeight: 300 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{column.label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customer.schedules.map((schedule) => {
                    const scheduleMonth = new Date(schedule.date).getMonth();
                    return monthIndex === scheduleMonth ? (
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        {columns.map((column) => {
                          const value = schedule[column.id];
                          return (
                            <TableCell
                              sx={{ cursor: "pointer", fontWeight: 'bold' }}
                              onClick={() => {
                                if (schedule.situation === "Pendente") {
                                  setOpenModal(true);
                                } else {
                                  setOpenSnackbar(true)
                                }
                              }}
                              variant="footer"
                              className={
                                schedule.situation !== "Pendente"
                                  ? "schedule-completed"
                                  : undefined
                              }
                              key={schedule.id}
                              align={column.align}
                            >
                              {column.format ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ) : null;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        ))}
      </Box>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={"Atenção"}
        subtitle={"Você realmente deseja cancelar essa consulta"}
        confirmClick={() => setOpenModal(false)}
      />
       <SnackbarMessage
        open={openSnackbar}
        message={"Esse atendimento já foi finalizado!"}
        onClose={() => setOpenSnackbar(false)}
        severity={"info"}
      />
    </Card>
  );
}
