import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Tabs, Tab, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll'; 
import './header.css';
import Drawer from './Drawer';

const Head = () => {
  const [value, setValue] = useState(0);
  const Theme = useTheme();
  const isMatch = useMediaQuery(Theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/':
        setValue(null);
        break;
      case '/course':
        setValue(1);
        break;
      case '/contact':
        setValue(2);
        break;
      case '/about':
        setValue(3);
        break;
      default:
        setValue(null);
    }
  }, [location.pathname]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar className='color'>
          <Typography className='Row'>
            <Link to="/" onClick={scrollToTop}>
              <img className='wakanda' src={process.env.PUBLIC_URL + "/image/logop1.jpg"} alt="" />
            </Link>
            {isMatch ? (
              <>
                <Drawer />
                <Typography className='QC'> QUANTOM CODE</Typography>
              </>
            ) : (
              <>
                <h1 className='logo'> QUANTUM CODE</h1>
                <Tabs className='Tabs' value={value} onChange={(event, newValue) => setValue(newValue)} indicatorColor='primary'>
                   <Tab label="Home" to="/" onClick={() => scroll.scrollToTop({ duration: 10 })} component={Link} />
                  <Tab label="Course" to="/course" onClick={() => scroll.scrollToTop({ duration: 10 })} component={Link} />
                  <Tab label="Contact" to="/contact" onClick={() => scroll.scrollToTop({ duration: 10 })} component={Link} />
                  <Tab label="About Us" to="/about" onClick={() => scroll.scrollToTop({ duration: 10 })} component={Link} />
                </Tabs>

                <Link to="/ChoicesLogin">
                  <div className='but'>
                    <Button variant="contained">Login</Button>
                  </div>
                </Link>

                <Link to="/Choices">
                  <div className='but1'>
                    <Button variant="contained">Signup</Button>
                  </div>
                </Link>
              </>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Head;
