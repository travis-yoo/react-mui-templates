import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;


