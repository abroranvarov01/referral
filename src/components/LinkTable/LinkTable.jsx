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
  Box,
  Typography,
  Button,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";

const rows = [
  { id: 1, link: "http://example.com/1" },
  { id: 2, link: "http://example.com/2" },
  { id: 3, link: "http://example.com/3" },
];

const LinkTable = () => {
  const [viewDetails, setViewDetails] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const handleShowDetails = (link) => {
    setSelectedLink(link);
    setViewDetails(true);
  };

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link);
    alert(`Copied to clipboard: ${link}`);
  };

  const handleBack = () => {
    setViewDetails(false);
    setSelectedLink("");
  };

  return (
    <>
      {!viewDetails ? (
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "#222222", borderRadius: 2, boxShadow: 3 }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333333" }}>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#EAB308",
                    fontSize: "1rem",
                  }}
                >
                  ID
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#EAB308",
                    fontSize: "1rem",
                  }}
                >
                  Link
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: "bold",
                    color: "#EAB308",
                    fontSize: "1rem",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    backgroundColor: "#222222",
                    "&:hover": { backgroundColor: "#333333" },
                  }}
                >
                  <TableCell sx={{ color: "#ffffff", fontSize: "0.9rem" }}>
                    {row.id}
                  </TableCell>
                  <TableCell sx={{ color: "#ffffff", fontSize: "0.9rem" }}>
                    {row.link}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleShowDetails(row.link)}
                      aria-label="Show Details"
                    >
                      <VisibilityIcon
                        sx={{ color: "#EAB308", fontSize: "1.2rem" }}
                      />
                    </IconButton>
                    <IconButton
                      onClick={() => handleCopy(row.link)}
                      aria-label="Copy Link"
                    >
                      <ContentCopyIcon
                        sx={{ color: "#EAB308", fontSize: "1.2rem" }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box
          sx={{
            backgroundColor: "#222222",
            color: "#ffffff",
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: "#EAB308" }}>
            Link Details
          </Typography>
          <Typography sx={{ mb: 2, fontSize: "1rem" }}>
            {selectedLink}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#EAB308",
              color: "#222222",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#d9a30e" },
            }}
            onClick={handleBack}
          >
            Back to Table
          </Button>
        </Box>
      )}
    </>
  );
};

export default LinkTable;
