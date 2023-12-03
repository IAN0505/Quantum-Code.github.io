import * as React from 'react';
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
import MailIcon from '@mui/icons-material/Mail';
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
          {['Sign up', 'Create class', 'Create   Assignment',  'Create Activity', 'Compare Answer',  'Create  Project', 'Add Student'].map((text) => (
            <ListItem key={text} disablePadding onClick={() => handleItemClick(text)}>
              <ListItemButton>
                <ListItemIcon>
                  {text === 'Sign up' ? <Filter1RoundedIcon />
                  : text === 'Create   Assignment' ? <Filter3RoundedIcon /> 
                  : text === 'Create class' ? <Filter2RoundedIcon />
                  
                  : text === 'Add Student' ? <Filter7RoundedIcon /> 
                  : text === 'Create Activity' ? <Filter4RoundedIcon />
                  : text === 'Create  Project' ? <Filter6RoundedIcon /> 
                  : text === 'Compare Answer' ? <Filter5RoundedIcon /> 
                  
                  
                  : <MailIcon />
                  };
                  
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
            <h1>Sign up as Teacher</h1>

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
                      <p>To create a Teacher account in Quantom Code, you have to go through the following steps:</p>
                      <p>1. Go to <a href="#">Link</a> and click Sign Up.</p>
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T1.png"} alt="" />
                      </div>
                      
                      <p>2. Click Teacher </p>
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T2.png"} alt="" />

                      <p className='SUP1P3P'>3. Enter your working email address and a secure password. And click Submit</p>
                      <img className="SUP1P3" src={process.env.PUBLIC_URL + "/image/T3.png"} alt="" />

                      <p>3. Go  <a href="#">HERE</a> For Login</p>


                      <div className='hideT'>
                      <div className='SUP1'>
            <h1>Create a class</h1>

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
                      <p>1. To Creat Class follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T4.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>

            <div className='hideT'>
            <div className='SUP1'>
            <h1>Create  Assignment</h1>

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
                      <p>1. To Create a  Assignment follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T5.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>


            <div className='hideT'>
            <div className='SUP1'>
            <h1>Add  Student</h1>

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
                      <p>1. To add student follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T6.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>

            <div className='hideT'>
            <div className='SUP1'>
            <h1>Create  Activity</h1>

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
                      <p>1. To Create a  Activity follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T5.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>

            <div className='hideT'>
            <div className='SUP1'>
            <h1>Create  Project</h1>

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
                      <p>1. To Create a  Project follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T8.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>

            <div className='hideT'>

            <div className='SUP1'>
            <h1>Comparing Answer</h1>

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
                      <p>1. To Compare Answer:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T9.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </div>





            </div>
            </div>
             </Typography>
          </div>
         
        )}
        {selectedItem === 'Create class' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Create a class</h1>

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
                      <p>1. To Creat Class follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T4.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
         {selectedItem === 'Create   Assignment' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Create  Assignment</h1>

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
                      <p>1. To Create a  Assignment follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T5.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
        
        {selectedItem === 'Add Student' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Add  Student</h1>

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
                      <p>1. To add student step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T6.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
        {selectedItem === 'Create Activity' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Create  Activity</h1>

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
                      <p>1. To Create a  Activity follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T5.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
        {selectedItem === 'Create  Project' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Create  Project</h1>

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
                      <p>1. To Create a  Project follow step:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T8.png"} alt="" />
                      </div>
                      
                     
            </div>
            </div>
            </Typography>
          </div>
        )}
        
        {selectedItem === 'Compare Answer' && (
          <div>
            <Typography paragraph>
            <div className='SUP1'>
            <h1>Comparing Answer</h1>

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
                      <p>1. To Compare Answer:</p>
                      
                      <img className="SUP1P" src={process.env.PUBLIC_URL + "/image/T9.png"} alt="" />
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
