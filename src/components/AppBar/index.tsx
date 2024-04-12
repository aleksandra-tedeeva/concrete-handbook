import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import Searchbar from '../Search/searchbar';
const AppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar position="static">
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            padding: '0px 16px'
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
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            <Searchbar value={value} setValue={setValue} />
          </Menu>
        </Box>

        <Box sx={{ padding: '0px 16px' }}>
          <Typography
            onClick={() => navigate('/')}
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Stack justifyContent="center">
              <Typography variant="h5">СЖБК</Typography>
              <Typography variant="caption">Справочник Железобетонных Конструкций</Typography>
            </Stack>
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end',
            padding: '0px 16px'
          }}
        >
          <Searchbar value={value} setValue={setValue} sx={{ maxWidth: '300px', color: 'white' }} />
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
