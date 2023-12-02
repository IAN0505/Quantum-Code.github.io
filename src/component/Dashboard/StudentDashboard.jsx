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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




  



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
  const Submit = () => {
    $.ajax({
      url: "https://api.apispreadsheets.com/data/7R7b2GPQ1WgRHhT3/",
      type: "post",
      data: $("#myForm").serializeArray(),
      success: function () {
        alert("Assignment Sent");
        $("#myForm :input").val('');
        setAnswer('');
        setType('');
      },
      error: function (error) {
        console.error(" error:", error);
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



/*----Quiz 1----*/
  const [showFinalResults, setShowFinalResults] = useState(false); 
    

const [score, setScore] = useState(0);

const [currentQuestion, setCurrentQuestion] = useState(0);

const questions = [
  {
    text: "WHAT IS THE MEANING OF HTML?",
    options: [
      { id: 0, text: "How To Make Lumpia", isCorrect: false },
      { id: 1, text: "Home Theater Markup Language", isCorrect: false },
      { id: 2, text: "Highly Toxic Material List ", isCorrect: false },
      { id: 3, text: "Hypertext Markup Language", isCorrect: true },
    ],
  },
  {
    text: "WHAT IS THE MEANING OF CSS?",
    options: [
      { id: 0, text: "Cascading Style Sheets", isCorrect: true },
      { id: 1, text: "Code Sparkle Service", isCorrect: false },
      { id: 2, text: "Canvas Sculpting Styles", isCorrect: false },
      { id: 3, text: "Chic Styling Script", isCorrect: false },
    ],
  },
  {
    text: "WHAT YEAR IS JAVASCRIP INVENTED?",
    options: [
      { id: 0, text: "1995", isCorrect: true },
      { id: 1, text: "2020", isCorrect: false },
      { id: 2, text: "2024", isCorrect: false },
      { id: 3, text: "1500", isCorrect: false },
    ],
  },
  {
    text: "WHAT IS THE PURPOSE OF THE GIR CLONE COMMAND IN GIT?",
    options: [
      { id: 0, text: "To create a new Git repository.", isCorrect: false },
      { id: 1, text: "To copy a repository from a remote source to your local machine.", isCorrect: true },
      { id: 2, text: "To delete a Git repository", isCorrect: false },
      { id: 3, text: "To rename a Git repository", isCorrect: false },
    ],
  },
  {
    text: "WHAT IS THE PURPOSE OF THE npm install COMMAND IN A node.js PROJECT?",
    options: [
      { id: 0, text: "To uninstall Node.js from the project", isCorrect: false },
      { id: 1, text: "To install dependencies specified in the package.json file", isCorrect: true },
      { id: 2, text: "To uninstall Node.js from the project", isCorrect: false },
      { id: 3, text: "To update the Node.js version", isCorrect: false },
    ],
  },
];

const optionClicked = (isCorrect) => {
  if (isCorrect) {
    setScore(score + 1);
  }

  if (currentQuestion + 1 < questions.length) {
    setCurrentQuestion(currentQuestion + 1);
  } else {
    setShowFinalResults(true);
  }
};


const Retake = () => {
  setScore(0);
  setCurrentQuestion(0);
  setShowFinalResults(false);
};

/*----Quiz 2----*/

const [showFinalResults2, setShowFinalResults2] = useState(false); 
    

const [score2, setScore2] = useState(0);

const [currentQuestion2, setCurrentQuestion2] = useState(0);

const questions2 = [
  {
    text: "WHAT IS THE MEANING OF HTML?",
    options2: [
      { id: 0, text: "How To Make Lumpia", isCorrect: false },
      { id: 1, text: "Home Theater Markup Language", isCorrect2: false },
      { id: 2, text: "Highly Toxic Material List ", isCorrect2: false },
      { id: 3, text: "Hypertext Markup Language", isCorrect2: true },
    ],
  },
  {
    text: "WHAT IS THE MEANING OF CSS?",
    options2: [
      { id: 0, text: "Cascading Style Sheets", isCorrect2: true },
      { id: 1, text: "Code Sparkle Service", isCorrect2: false },
      { id: 2, text: "Canvas Sculpting Styles", isCorrect2: false },
      { id: 3, text: "Chic Styling Script", isCorrect2: false },
    ],
  },
  {
    text: "WHAT YEAR IS JAVASCRIP INVENTED?",
    options2: [
      { id: 0, text: "1995", isCorrect2: true },
      { id: 1, text: "2020", isCorrect2: false },
      { id: 2, text: "2024", isCorrect2: false },
      { id: 3, text: "1500", isCorrect2: false },
    ],
  },
  {
    text: "WHAT IS THE PURPOSE OF THE GIR CLONE COMMAND IN GIT?",
    options2: [
      { id: 0, text: "To create a new Git repository.", isCorrect2: false },
      { id: 1, text: "To copy a repository from a remote source to your local machine.", isCorrect2: true },
      { id: 2, text: "To delete a Git repository", isCorrect2: false },
      { id: 3, text: "To rename a Git repository", isCorrect2: false },
    ],
  },
  {
    text: "WHAT IS THE PURPOSE OF THE npm install COMMAND IN A node.js PROJECT?",
    options2: [
      { id: 0, text: "To uninstall Node.js from the project", isCorrect2: false },
      { id: 1, text: "To install dependencies specified in the package.json file", isCorrect2: true },
      { id: 2, text: "To uninstall Node.js from the project", isCorrect2: false },
      { id: 3, text: "To update the Node.js version", isCorrect2: false },
    ],
  },
];

const optionClicked2 = (isCorrect2) => {
  if (isCorrect2) {
    setScore2(score2 + 1);
  }

  if (currentQuestion2 + 1 < questions2.length) {
    setCurrentQuestion2(currentQuestion2 + 1);
  } else {
    setShowFinalResults2(true);
  }
};


const Retake2 = () => {
  setScore2(0);
  setCurrentQuestion2(0);
  setShowFinalResults2(false);
};

/*----Quiz 3----*/

const [showFinalResults3, setShowFinalResults3] = useState(false); 
    

const [score3, setScore3] = useState(0);

const [currentQuestion3, setCurrentQuestion3] = useState(0);

const questions3 = [
  {
    text: "WHAT IS THE MEANING OF HTML?",
    options3: [
      { id: 0, text: "How To Make Lumpia", isCorrect3: false },
      { id: 1, text: "Home Theater Markup Language", isCorrect3: false },
      { id: 2, text: "Highly Toxic Material List ", isCorrect3: false },
      { id: 3, text: "Hypertext Markup Language", isCorrect3: true },
    ],
  },
  {
    text: "WHAT IS THE MEANING OF CSS?",
    options3: [
      { id: 0, text: "Cascading Style Sheets", isCorrect3: true },
      { id: 1, text: "Code Sparkle Service", isCorrect3: false },
      { id: 2, text: "Canvas Sculpting Styles", isCorrect3: false },
      { id: 3, text: "Chic Styling Script", isCorrect3: false },
    ],
  },
  {
    text: "WHAT YEAR IS JAVASCRIP INVENTED?",
    options3: [
      { id: 0, text: "1995", isCorrect3: true },
      { id: 1, text: "2020", isCorrect3: false },
      { id: 2, text: "2024", isCorrect3: false },
      { id: 3, text: "1500", isCorrect3: false },
    ],
  },
  {
    text: "WHAT IS THE PURPOSE OF THE GIR CLONE COMMAND IN GIT?",
    options3: [
      { id: 0, text: "To create a new Git repository.", isCorrect3: false },
      { id: 1, text: "To copy a repository from a remote source to your local machine.", isCorrect3: true },
      { id: 2, text: "To delete a Git repository", isCorrect3: false },
      { id: 3, text: "To rename a Git repository", isCorrect3: false },
    ],
  },
  {
    text: "WHAT IS THE PURPOSE OF THE npm install COMMAND IN A node.js PROJECT?",
    options3: [
      { id: 0, text: "To uninstall Node.js from the project", isCorrect3: false },
      { id: 1, text: "To install dependencies specified in the package.json file", isCorrect3: true },
      { id: 2, text: "To uninstall Node.js from the project", isCorrect3: false },
      { id: 3, text: "To update the Node.js version", isCorrect3: false },
    ],
  },
];

const optionClicked3 = (isCorrect3) => {
  if (isCorrect3) {
    setScore3(score3 + 1);
  }

  if (currentQuestion3 + 1 < questions3.length) {
    setCurrentQuestion3(currentQuestion3 + 1);
  } else {
    setShowFinalResults3(true);
  }
};


const Retake3 = () => {
  setScore3(0);
  setCurrentQuestion3(0);
  setShowFinalResults3(false);
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

                
              <div><Link to="/Signup">Logout</Link></div>

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
          
          {['Join Class', 'Answer Assingment', 'Answer Activities', 'View all Subjects', 'Take Quiz Online', 'Submit Project' ].map((text) => (
            <ListItem key={text} disablePadding onClick={() => handleItemClick(text)}>
              <ListItemButton>
                <ListItemIcon>
                  {text === 'Join Class' ? <SchoolIcon />
                  : text === 'Answer Assingment' ? <AssignmentIcon /> 
                  : text === 'Answer Activities' ? <TaskIcon /> 
                  : text === 'View all Subjects' ? <PageviewIcon /> 
                  : text === 'Take Quiz Online' ? <QuizIcon /> 
                  : text === 'Submit Project' ? <BackupIcon /> 
                  
                  
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
        {selectedItem === 'Join Class' && (

          <div>
             <Typography>
              <div className='JCS'>

                <h1>Join class</h1>
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
        {selectedItem === 'Answer Assingment' && (

          <div>
            <Typography paragraph>

            <div className='ACS'>
              <div className='BOTH1'>
                <h1 className='SHS'>Assignment</h1>

                <h3 className='SH'>View Assignment</h3>

                <div className='AS'>
                  <h4>Click  For Assignment</h4>
                  <a href="https://docs.google.com/spreadsheets/d/1fTXHV6wHSJS2ghfb9W4K3_5wNny8t-Qw5wb6vB0gW_Q/edit#gid=0">Assignment 1</a>
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
      <button className='ABABA' onClick={Submit}>Submit</button>
     </div>
</div>




            </Typography>
          </div>
        )}

        {selectedItem === 'Answer Activities' && (
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
      <button className='ABABA' onClick={Submit}>Submit</button>
     </div>
</div>
            </Typography>
          </div>
        )}
        {selectedItem === 'View all Subjects' && (
          <div>
            <Typography paragraph>
            <div>
              <div className='AS1'>
                <h4 className='AS2'>ADD SUBJECT <AddRoundedIcon /> </h4>
                
              </div>
            </div>
            </Typography>
          </div>
        )}
        {selectedItem === 'Take Quiz Online' && (
  <div>
    <Typography paragraph>
      <div className='bpp'>

      <h1>Online Quiz</h1>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" >
          <Typography>Quiz number 1 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {showFinalResults ? (
          /*Final-result*/
          <div className='Final-result'>
            <h1>Final Result</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button className='FSB' onClick={() => Retake()}>
              Retake
            </button>
          </div>
        ) : (
          <div className='question-card'>
            <h2>
              Question {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className='question-text'>{questions[currentQuestion].text}</h3>

                <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    className='ian'
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                      </li>
                );
              })}
                    </ul>
                </div>
              )}
                   
          </Typography>
        </AccordionDetails>
      </Accordion>
                

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" >
          <Typography>Quiz number 2 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {showFinalResults2 ? (
          /*Final-result*/
          <div className='Final-result'>
            <h1>Final Result</h1>
            <h2>
              {score2} out of {questions2.length} correct - (
              {(score2 / questions2.length) * 100}%)
            </h2>
            <button className='FSB' onClick={() => Retake2()}>
              Retake
            </button>
          </div>
        ) : (
          <div className='question-card'>
            <h2>
              Question {currentQuestion2 + 1} out of {questions2.length}
            </h2>
            <h3 className='question-text'>{questions2[currentQuestion2].text}</h3>

                <ul>
              {questions2[currentQuestion2].options2.map((option2) => {
                return (
                  <li
                    className='ian'
                    key={option2.id}
                    onClick={() => optionClicked2(option2.isCorrect2)}
                  >
                    {option2.text}
                      </li>
                );
              })}
                    </ul>
                </div>
              )}
                   
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header" >
          <Typography>Quiz number 3 </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {showFinalResults3 ? (
          /*Final-result*/
          <div className='Final-result'>
            <h1>Final Result</h1>
            <h2>
              {score3} out of {questions3.length} correct - (
              {(score3 / questions3.length) * 100}%)
            </h2>
            <button className='FSB' onClick={() => Retake3()}>
              Retake
            </button>
          </div>
        ) : (
          <div className='question-card'>
            <h2>
              Question {currentQuestion3 + 1} out of {questions3.length}
            </h2>
            <h3 className='question-text'>{questions3[currentQuestion3].text}</h3>

                <ul>
              {questions3[currentQuestion3].options3.map((option3) => {
                return (
                  <li
                    className='ian'
                    key={option3.id}
                    onClick={() => optionClicked3(option3.isCorrect3)}
                  >
                    {option3.text}
                      </li>
                );
              })}
                    </ul>
                </div>
              )}
                   
          </Typography>
        </AccordionDetails>
      </Accordion>
 
 
      </div>
    </Typography>
  </div>
)}


        {selectedItem === 'Submit Project' && (
          <div>
            <Typography paragraph>
            <div className='ACS'>
              <div className='BOTH1'>
                <h1 className='SHS'>Project</h1>

                <h3 className='SH'>View Project</h3>

                <div className='AS'>
                  <h4>Click  For Project</h4>
                  <a href="https://zoom.us/">Project 1</a>
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

           <div className='UploadFile'>
          <div className='#'>
        <label>Type Of File:</label>
        <input className='uploadI'   placeholder="Place Here" />
        <label>Upload File To:</label>
        <input className='uploadI'   placeholder="Place Here" />
        <button className='uploadB' >Choose File</button>
        </div>
      <button className='uploadB' >Submit</button>
       </div>
</div>

            </Typography>
          </div>
        )}
      </Box>
    </Box>
    
  );
}

