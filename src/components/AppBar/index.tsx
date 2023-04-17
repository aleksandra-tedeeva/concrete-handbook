import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
const menuItems = [
  { name: "Класс Бетона", link: "/class" },
  { name: "Марка Бетона", link: "/mark" },
  { name: "Арматура", link: "/reinforcement" },
  { name: "Коэф Условий Работы", link: "/service_factor" },
  { name: "Предельные Прогибы", link: "/deflection_limits" },
];
const AppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigateLink = (to: string) => {
    handleCloseNavMenu();
    if (to) {
      navigate(to);
    }
  };
  return (
    <MuiAppBar position="static">
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            padding: "0px 16px",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.name}
                onClick={() => handleNavigateLink(item.link)}
              >
                <Typography textAlign="center">{item.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ padding: "0px 16px" }}>
          <Typography
            onClick={() => navigate("/")}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon sx={{ marginRight: "4px" }}></SearchIcon>
            <span>ЖБ СПРАВОЧНИК</span>
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            padding: "0px 16px",
          }}
        >
          {menuItems.map((item) => (
            <Button
              key={item.name}
              onClick={() => handleNavigateLink(item.link)}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
