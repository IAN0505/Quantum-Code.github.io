import * as React from 'react';
import './Student.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Filter1RoundedIcon from '@mui/icons-material/Filter1Rounded';
import Filter2RoundedIcon from '@mui/icons-material/Filter2Rounded';
import Filter3RoundedIcon from '@mui/icons-material/Filter3Rounded';
import Filter4RoundedIcon from '@mui/icons-material/Filter4Rounded';
import Filter5RoundedIcon from '@mui/icons-material/Filter5Rounded';
import Filter6RoundedIcon from '@mui/icons-material/Filter6Rounded';
import Filter7RoundedIcon from '@mui/icons-material/Filter7Rounded';
const drawerWidth = 280;

export default function PermanentDrawerLeft() {
  const [selectedItem, setSelectedItem] = React.useState();

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  return (
    <Box sx={{ display: 'flex', marginTop: '14px' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            zIndex: 1000,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <h1>Getting Started</h1>
          {['Sign up', 'Join Class', 'Answer Activities', 'Answer Assignment', ' View All Subject', 'Take Quiz Online', 'Submit Project'].map((text) => (
            <ListItem key={text} disablePadding onClick={() => handleItemClick(text)}>
              <ListItemButton>
                <ListItemIcon>
                  {text === 'Sign up' ? <Filter1RoundedIcon />
                  : text === 'Join Class' ? <Filter2RoundedIcon /> 
                  : text === 'Answer Activities' ? <Filter3RoundedIcon /> 
                  : text === 'Answer Assignment' ? <Filter4RoundedIcon /> 
                  : text === 'View All Subject' ? <Filter5RoundedIcon /> 
                  : text === 'Take Quiz Online' ? <Filter6RoundedIcon /> 
                  : text === 'Submit Project' ? <Filter7RoundedIcon />
                  
                  : <Filter5RoundedIcon />};
                  
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
        {selectedItem === 'Sign up' && (
          <div>
             <Typography>
              <div className='SUP1'>
            <h1>Sign up as Student</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>To create a Student account in Quantom Code, you have to go through the following steps:</p>
                      <p>1. Go to <a href="#">Link</a> and click Sign Up.</p>
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign1.png"} alt="" />
                      </div>
                      
                      <p>2. Click Student </p>
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/s1.png"} alt="" />

                      <p className='SUP1P3P'>3. Enter your working email address and a secure password. And click Submit</p>
                      <img className="SUP1P3" src={process.env.PUBLIC_URL + "/image/Sign3.png"} alt="" />

                      <p>3. Go  <a href="#">HERE</a> For Login</p>


                      <div className='hideT'>
                      <div className='SUP1'>
            <h1>Join Class</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Join Class follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign4.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>

            <div className='hideT'>
            <div className='SUP1'>
            <h1>Answer Activities</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Answer Activities follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign6.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>

            <div className='hideT'>
            <div className='SUP1'>
            <h1>Answer Assignment</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Answer Assignment follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign5.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>
            <div className='hideT'>
            <div className='SUP1'>
            <h1>View or Add Subject</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To View or Add Subject follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign7.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>

            <div className='hideT'>
            <div className='SUP1'>
            <h1>Take Quiz Online</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Take Quiz Online follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign8.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>
            
            <div className='hideT'>
            <div className='SUP1'>
            <h1>Submit Project</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Submit Project follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign9.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>
                      



            </div>
            </div>
             </Typography>
          </div>
         
        )}
        {selectedItem === 'Join Class' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Join Class</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Join Class follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign4.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
        {selectedItem === 'Answer Activities' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Answer Activities</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Answer Activities follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign6.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
        {selectedItem === 'Answer Assingment' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Answer Assignment</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Answer Assignment follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign5.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
         {selectedItem === ' View All Subject' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>View or Add Subject</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To View or Add Subject follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign7.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
        {selectedItem === 'Take Quiz Online' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Take Quiz Online</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Take Quiz Online follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign8.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
        {selectedItem === 'Submit Project' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Submit Project</h1>

            <div>
              <div className='SUP2'>
            <h4 >Introduction</h4>
            <p>Quantom Code functions best in a classroom setting, and because of this, there are two types of users that mainly use the app: Teachers and Students. 
                      Just like in a classroom, students enroll in a class handled by a teacher, answer activities,
                       and get grades a little while after. However, one good thing about
                       Quantom Code is that students don't have to wait for long before they can get the 
                      scores on their answers --Quantom Code automatically checks and grades it for them!</p>
                      </div>

                      <div className='SUP3'>
                      <h4 className='SUP5'>Steps</h4>
                      <p>1. To Submit Project follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/Sign9.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
      </Box>
    </Box>
  );
}
