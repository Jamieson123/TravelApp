import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/');
    if (newValue === 1) navigate('/search');
    if (newValue === 2) navigate('/bookings');
    if (newValue === 3) navigate('/profile');
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Bookings" icon={<BookmarksIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default NavigationBar;
