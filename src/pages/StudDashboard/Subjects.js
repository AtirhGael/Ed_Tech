import { Container, Grid, Paper,CardMedia,Button, Typography, CardActions,  } from '@mui/material'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './index.css'
import { Card, CardContent } from '@mui/material';
import axios from 'axios';
import { makeStyles } from '@mui/styles';
import { studCources } from '../../data';
import IZNavBar from '../../components/Header/IZNavBar';
import Footer from '../../components/Footer/Footer';
// import FormControl from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

   const useStyles = makeStyles({
     card: {
       transition: 'transform 0.3s, box-shadow 0.3s',
       '&:hover': {
         transform: 'scale(1.1)',
         boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',
       },
     },
   });
function Subjects() {
    const classes = useStyles();
    const [data,setData] = React.useState([])
    const [category, setCategory] = React.useState('');
    const categories = ['Science'];


  React.useEffect(()=>{
    const fetchData = async () => {
      await axios.get('http://edtech.eu-north-1.elasticbeanstalk.com/ed-tech/api/v1/course',{
        headers:{
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res=>{
        // console.log(res.data.content);
        setData(res.data.content)
        // console.log('addd');
      }).catch(error=>{
        console.log("axios aaa",error);
      })
    }
    fetchData()
  },[])


    
  return (
    <div>
    <IZNavBar/>
     <div className='content'>
       <div style={{textAlign:'center',fontSize:35,}}>
         Welcome
       </div>
     </div>
     <div style={{marginBottom:20}}>
       <Container style={{marginTop:15}} maxWidth='lg'>
         <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:30,marginBottom:30,paddingBottom:15,paddingTop:40,}}>
         <div style={{
           color:'black',fontWeight:'400',fontSize:25
         }}> {data.length} Subjects Registered </div>
         <div>
         <FormControl sx={{ width: 340,marginTop:3 }} variant="standard">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
         </div>
         </div>
        
         <Grid container spacing={5} rowSpacing={10}>
 
           {data.map((item,id)=>(
             <Grid item xs={12} md={6} lg={4} >
             <Card className={classes.card} sx={{ maxWidth: 400 }}>
             {/* <CardMedia
                    component="img"
                    alt="green iguana"
                    height="150"
                     style={{objectFit:'fill'}}
                    image={item.image}
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{
                     textTransform:'capitalize'
                    }}>
                    {item.description}
                    </Typography>
                    <Typography style={{
                     textTransform:'capitalize'
                    }}>
                     By : {item.teacher.firstName}
                     {' '}{item.teacher.lastName}
                    </Typography>
                    <Typography style={{
                     textTransform:'capitalize'
                    }}>
                     Start Date: {item.schedule.startDateTime.slice(0,10)}
                    </Typography>
                    <Typography style={{
                     textTransform:'capitalize'
                    }}>
                     
                     End Date: {item.schedule.startDateTime.slice(0,10)}
                    </Typography>
                    <Typography style={{
                     textTransform:'capitalize'
                    }}>
                     {item.carte}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions> 
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
             </Card>
             </Grid>
           ))}
           
         </Grid>
       </Container>
     </div>
     <Footer/>
   </div>
  )
}

export default Subjects
