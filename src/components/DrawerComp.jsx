import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText
} from '@mui/material';
import React, { useState } from 'react';

import { HashLink } from 'react-router-hash-link';

export const PAGES = [
  { name: 'PROJECTS', link: '#projects' },
  { name: 'CERTIFICATES', link: '#certificates' },
  { name: 'ABOUT', link: '#about' }
];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="top"
        disableEnforceFocus
        ModalProps={{ disableScrollLock: true }}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <List sx={{ background: 'black' }}>
          {PAGES.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemText>
                <HashLink
                  style={{
                    textDecoration: 'none',
                    margin: 10,
                    fontSize: 18,
                    color: 'white'
                  }}
                  smooth
                  to={page.link}
                >
                  {page.name}
                </HashLink>
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: '#2196f3' }}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        {' '}
        <MenuIcon />{' '}
      </IconButton>
    </>
  );
};

export default DrawerComp;
