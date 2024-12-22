import * as React from "react";
import { styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { Outlet, Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
    path: "/orders",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    path: "/reports",
  },
  {
    segment: "documents",
    title: "Documents",
    icon: <DescriptionIcon />,
    path: "/documents",
  },
  {
    segment: "settings",
    title: "Settings",
    icon: <LayersIcon />,
    path: "/settings",
  },
];

const NavigationContainer = styled(Box)(({ isCollapsed }) => ({
  width: isCollapsed ? "70px" : "250px",
  backgroundColor: "#252525",
  color: "#F5F5F5",
  padding: isCollapsed ? "16px 8px" : "16px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  transition: "width 0.3s ease, padding 0.3s ease",
  borderRight: "2px solid #EAB308",
}));

const NavItem = styled(Link)(({ isCollapsed, isActive }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: isActive ? "#EAB308" : "#F5F5F5",
  padding: "8px 16px",
  borderRadius: "4px",
  backgroundColor: isActive ? "#333333" : "transparent",
  transition: "background-color 0.2s, padding 0.3s, color 0.2s",

  "&:hover": {
    backgroundColor: "#EAB308",
    color: "#1E1E1E",
  },

  "& .icon": {
    marginRight: isCollapsed ? 0 : "16px",
    transition: "margin-right 0.3s",
  },

  "& .title": {
    display: isCollapsed ? "none" : "block",
    transition: "display 0.3s",
  },
}));

export default function SideBar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const location = useLocation();

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <NavigationContainer isCollapsed={isCollapsed}>
        <IconButton
          onClick={toggleCollapse}
          sx={{
            color: "#F5F5F5",
            marginBottom: "16px",
            alignSelf: "flex-start",
          }}
        >
          <MenuIcon />
        </IconButton>
        {NAVIGATION.map((item) => (
          <NavItem
            key={item.segment}
            to={item.path || "#"}
            isCollapsed={isCollapsed}
            isActive={location.pathname === item.path}
          >
            <Box className="icon">{item.icon}</Box>
            <Box className="title">{item.title}</Box>
          </NavItem>
        ))}
      </NavigationContainer>
      <Box
        sx={{
          flexGrow: 1,
          padding: isCollapsed ? "24px 16px" : "24px",
          backgroundColor: "#1E1E1E",
          color: "#F5F5F5",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
