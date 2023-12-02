import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskIcon from '@mui/icons-material/Task';
import PageviewIcon from '@mui/icons-material/Pageview';
import QuizIcon from '@mui/icons-material/Quiz';
import BackupIcon from '@mui/icons-material/Backup';
import './Dashboard.css'
import $ from 'jquery';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';




  



const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {

  const SubForm = () => {
    $.ajax({
      url: "https://api.apispreadsheets.com/data/TzMq0PjG8RUcJ7zH/",
      type: "post",
      data: $("#myForm").serializeArray(),
      success: function () {
        alert("CREATING ASSINGMENT APPROVE!!!");

        setAnswer('');
        setType('');
      },
      error: function () {
        alert("ERROR SENDING");
        console.error("Not defined");
      },
    });
  };



  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedItem, setSelectedItem] = React.useState();

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [answer, setAnswer] = useState('');
  const [type, setType] = useState('');

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
  
    const handleText1Change = (event) => {
      setText1(event.target.value);
  };

    const handleText2Change = (event) => {
      setText2(event.target.value);
  };
  
    const handleCompare = () => {
      if (text1 === text2) {

        alert('Answer is Same');
        
    } else {
      
        alert('Different Answer'); 
    }
  };





  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Quantom Code
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <div >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              id="primary-search-account-menu"
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleMenuClose}
              style={{ marginTop: '30px', marginLeft: '-20px' }}
              >
                
              <div className='DSS'>
              <MenuItem onClick={handleMenuClose}>Grade</MenuItem>
              <MenuItem onClick={handleMenuClose}>Courses</MenuItem>
              <MenuItem onClick={handleMenuClose}>

                
              <div><Link to="/SignupTeacher">Logout</Link></div>

                </MenuItem> </div>

            </Menu>
            </div>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          
          {['Add Class', 'Add Assingment', 'Add Activities', 'Add Student', 'Add Quiz Online', 'Add Project', 'Compare Answer' ].map((text) => (
            <ListItem key={text} disablePadding onClick={() => handleItemClick(text)}>
              <ListItemButton>
                <ListItemIcon>
                  {text === 'Add Class' ? <SchoolIcon />
                  : text === 'Add Assingment' ? <AssignmentIcon /> 
                  : text === 'Add Activities' ? <TaskIcon /> 
                  : text === 'Add Student' ? <PageviewIcon /> 
                  : text === 'Add Quiz Online' ? <QuizIcon /> 
                  : text === 'Add Project' ? <BackupIcon />
                  : text === 'Compare Answer' ? <SpellcheckIcon /> 
                  
                  
                  : <MailIcon />};
                  
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {selectedItem === 'Add Class' && (

          <div>
             <Typography>
              <div className='JCS'>

                <h1>Create Class</h1>
                <div className='ZCS'>
                  <h4>Morning Classes</h4>
                  <a href="https://zoom.us/">Zoom Class: 9am-6pm </a>
                  <h4>Night Classes</h4>
                  <a href="https://zoom.us/" > Zoom Class: 6pm-9pm </a>
                </div>
              </div>
             </Typography>
          </div>
         
        )}
        {selectedItem === 'Add Assingment' && (

          <div>
            <Typography paragraph>

            <div className='ACS'>
              <div className='BOTH1'>
                <h1 className='SHS'>Assignment</h1>

                <h3 className='SHT'>View Student Assignment</h3>

                <div className='AS'>
                  <h4>Click  For Assignment</h4>
                  <a href="https://docs.google.com/spreadsheets/d/1B1hLqwA-qdi19Sq1ig4O89FWN-k7sOqt8LeGlvoESro/edit#gid=0">Assignment 1</a>
                </div>

                <div className='SCORESS'>
                <h3 className='SHSE'>Add Score</h3>
                <div className='AS'>
                  <h4>Click  To Add Score</h4>
                  <a href="https://zoom.us/">Score</a>
                </div>
                </div>
                </div>
                
                

                <h3 className='SH'>SUBMIT HERE</h3>

                <div className='ASSS'>
      <form id="myForm" className='ASAST'>

        <div className='LALAAIAI'>
          <label className='LALA'>Answer</label>
          <textarea className='AIAI' name="Assingment" value={answer} onChange={handleAnswerChange} placeholder="Input Code..."/>
          </div>

        <br />

          <div className='TYPE1'>
        <label>Type</label>
        <input className='TYPE2' name="Type" value={type} onChange={handleTypeChange} placeholder="Place Here" /></div>

      </form>
      <button className='ABABA' onClick={SubForm}>Submit</button>
     </div>
</div>

            </Typography>
          </div>
        )}

        {selectedItem === 'Add Activities' && (
          <div>
            <Typography paragraph>
             <div className='ACS'>
              <div className='BOTH1'>
                <h1 className='SHS'>Activities</h1>

                <h3 className='SHE'>View Activities</h3>
                
                <div className='AS'>
                  <h4>Click  For Activity</h4>
                  <a href="https://zoom.us/">Activity 1</a>
                </div>

                <div className='SCORESS'>
                <h3 className='SHSE'>View Score</h3>
                <div className='AS'>
                  <h4>Click  For Score</h4>
                  <a href="https://zoom.us/">Score</a>
                </div>
                </div>
                </div>
                
                

                <h3 className='SH'>SUBMIT HERE</h3>

                <div className='ASSS'>
      <form id="myForm" className='ASAST'>

        <div className='LALAAIAI'>
          <label className='LALA'>Answer</label>
          <textarea className='AIAI' name="Assingment" value={answer} onChange={handleAnswerChange} placeholder="Input Code..."/>
          </div>

        <br />

          <div className='TYPE1'>
        <label>Type</label>
        <input className='TYPE2' name="Type" value={type} onChange={handleTypeChange} placeholder="Place Here" /></div>

      </form>
      <button className='ABABA' onClick={SubForm}>Submit</button>
     </div>
</div>
            </Typography>
          </div>
        )}
        {selectedItem === 'Add Student' && (
          <div>
            <Typography paragraph>
            <div>
              <div className='AS1'>
                <h4 className='AS2'>ADD STUDENT <AddRoundedIcon /> </h4>
                
              </div>
            </div>
            </Typography>
          </div>
        )}
        {selectedItem === 'Add Quiz Online' && (
  <div>
                 <Typography paragraph>
                 <div>
              <div className='AS1'>
                <h4 className='AS2'>ADD QUIZ <AddRoundedIcon /> </h4>
                
              </div>
            </div>
                  </Typography>
             </div>
)}
        {selectedItem === 'Add Project' && (
          <div>
            <Typography paragraph>
            <div>
              <div className='AS1'>
                <h4 className='AS2'>ADD PROJECT <AddRoundedIcon /> </h4>
                
              </div>
            </div>
            </Typography>
          </div>
        )}
       {selectedItem === 'Compare Answer' && (
        <div>
          <Typography paragraph>

          <div>
  <h1 className='TDash0'>Compare Answer</h1>

  <div className='Tmain'>
    <div className='TDashContainer'>
      <div className='TDash1'>
        <label className='TDash2'>Student 1</label>
        <textarea className='TDash3' placeholder="Input Code..." value={text1} onChange={handleText1Change}/>
      </div>

      <div className='TDash1'>
        <label className='TDash2'>Student 2</label>
        <textarea className='TDash3' placeholder="Input Code..." value={text2} onChange={handleText2Change}/>
      </div>
    </div>

    <button className='TDashB' onClick={handleCompare}>Compare</button>
  </div>
</div>


          </Typography>
        </div>
      )}
      </Box>
    </Box>
    
  );
}

