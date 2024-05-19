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
import SearchAutocomplete from '../SearchAutocomplete/SearchAutocomplete';
import MobileMenu from './mobile-menu';
import { Search } from '@mui/icons-material';
import MobileSearchAutocomplete from '../SearchAutocomplete/MobileSearchAutocomplete';
import useIsMobile from '../../hooks/useIsMobile';
const AppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleShowMobileSearch = () => {
    setShowSearch(true);
  };

  const handleCloseMobileSearch = () => {
    setShowSearch(false);
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
            <MobileMenu onClose={handleCloseNavMenu} />
          </Menu>
          <IconButton onClick={handleShowMobileSearch} sx={{ color: 'white' }}>
            <Search />
          </IconButton>
          <MobileSearchAutocomplete open={showSearch} onClose={handleCloseMobileSearch} />
        </Box>

        <Box sx={{ padding: '0px 16px' }} width="100%">
          <Typography
            onClick={() => navigate('/')}
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Stack
              width="100%"
              spacing={isMobile ? 2 : 0}
              justifyContent={isMobile ? 'space-between' : 'center'}
              alignItems={isMobile ? 'center' : 'flex-start'}
              direction={isMobile ? 'row' : 'column'}
              textAlign={isMobile ? 'right' : 'left'}
            >
              {!isMobile && <Typography variant="h5">СЖБК</Typography>}
              <Typography variant="caption" width={isMobile ? '100%' : 'auto'}>
                Справочник Железобетонных Конструкций
              </Typography>
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
          <SearchAutocomplete />
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
