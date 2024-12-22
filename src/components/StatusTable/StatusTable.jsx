import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const STATUS = {
  NEW: "Новый",
  IN_PROGRESS: "В процессе",
  DONE: "Завершено",
  TRASH: "Удалено",
  REJECTED: "Отклонено",
};

const rows = [
  { name: "Иван Иванов", number: "123-456-7890", status: "NEW" },
  { name: "Петр Петров", number: "987-654-3210", status: "IN_PROGRESS" },
  { name: "Сергей Сергеев", number: "555-555-5555", status: "DONE" },
  { name: "Алексей Алексеев", number: "444-444-4444", status: "TRASH" },
  { name: "Николай Николаев", number: "333-333-3333", status: "REJECTED" },
];

const getStatusChipStyle = (status) => {
  switch (status) {
    case "NEW":
      return { backgroundColor: "#4caf50", color: "#ffffff" }; // Green
    case "IN_PROGRESS":
      return { backgroundColor: "#ff9800", color: "#ffffff" }; // Orange
    case "DONE":
      return { backgroundColor: "#2196f3", color: "#ffffff" }; // Blue
    case "TRASH":
      return { backgroundColor: "#9e9e9e", color: "#ffffff" }; // Grey
    case "REJECTED":
      return { backgroundColor: "#f44336", color: "#ffffff" }; // Red
    default:
      return { backgroundColor: "#9e9e9e", color: "#ffffff" }; // Default Grey
  }
};

const StatusTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "#222222", borderRadius: 2, boxShadow: 3 }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "#333333" }}>
            <TableCell
              sx={{ fontWeight: "bold", color: "#EAB308", fontSize: "1rem" }}
            >
              Имя
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#EAB308", fontSize: "1rem" }}
            >
              Номер
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: "#EAB308", fontSize: "1rem" }}
            >
              Статус
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: "#222222",
                "&:hover": { backgroundColor: "#333333" },
              }}
            >
              <TableCell sx={{ color: "#ffffff", fontSize: "0.9rem" }}>
                {row.name}
              </TableCell>
              <TableCell sx={{ color: "#ffffff", fontSize: "0.9rem" }}>
                {row.number}
              </TableCell>
              <TableCell>
                <Chip
                  label={STATUS[row.status]}
                  sx={{
                    ...getStatusChipStyle(row.status),
                    fontWeight: "bold",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StatusTable;
