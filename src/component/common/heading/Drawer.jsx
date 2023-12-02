import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Link } from 'react-router-dom';


const PAGES = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Course", path: "/course" },
  { label: "Login", path: "/ChoicesLogin" },
  { label: "Signup", path: "/Choices" }
];

const MyDrawer = () => {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <List>
                    {PAGES.map((page, index) => (
                        <ListItemButton component={Link} to={page.path} onClick={() => setOpen(false)} key={index}>
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText>
                  {page.label} 
                  </ListItemText>   
                        </ListItemButton>
                    ))}
              </List>
            </Drawer>
            <IconButton sx={{ color: "white", marginLeft: "auto" }} onClick={() => setOpen(!open)}>
                <MenuOutlinedIcon />
            </IconButton>
        </React.Fragment>
    );
};

export default MyDrawer;
