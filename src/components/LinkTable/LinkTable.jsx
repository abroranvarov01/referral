import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";

const rows = [
  { id: 1, link: "http://example.com/1" },
  { id: 2, link: "http://example.com/2" },
  { id: 3, link: "http://example.com/3" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LinkTable = () => {
  const [open, setOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const handleOpen = (link) => {
    setSelectedLink(link);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLink("");
  };

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    alert(`Copied to clipboard: ${link}`);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Link</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.link}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleOpen(row.link)}
                    aria-label="Show Details"
                  >
                    <VisibilityIcon color="primary" />
                  </IconButton>
                  <IconButton
                    onClick={() => handleCopy(row.link)}
                    aria-label="Copy Link"
                  >
                    <ContentCopyIcon color="secondary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Link Details
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {selectedLink}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default LinkTable;
