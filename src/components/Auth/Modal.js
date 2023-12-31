import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '#000',
  boxShadow: 24,
  p: 4,
};

export default function TModalSignUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   const navigate = useNavigate()
  const Admin = () =>{
    navigate("/a-signUp")
  }
  const student = () =>{
    navigate("/s-signUp")
  }
  const Teacher = () =>{
    navigate("/t-signUp")
  }

  return (
    <div>
       <Stack spacing={2} ml={5} mr={5} >
                    <Button onClick={handleOpen} >Create an Account</Button>
                </Stack>
        
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" style={{textAlign:'center',fontSize:30,padding:10}} >
              Sign Up As
            </Typography>
            <Stack spacing={2} ml={5} mr={5} >
                    <Button onClick={Admin} variant="contained" To>Admin</Button>
                    <Button onClick={Teacher} variant="contained">Teacher</Button>
                    <Button onClick={student} variant="contained">Student</Button>
                </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}