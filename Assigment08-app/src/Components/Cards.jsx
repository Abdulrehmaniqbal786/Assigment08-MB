import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function Cards(props) {
  const {img_url,title,text} = props.card_data;
  return (
    <Card sx={{ maxWidth: 200 , margin:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={img_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export {Cards};