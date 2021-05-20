import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Card.css';
import img from './card1.jpg'
import img2 from './card2.jpg'
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    // paddingTop:100,
    // marginLeft:30,
  },
  media: {
    height: 15,
    paddingTop: '55%', 
  },
  avatar: {
    backgroundColor: blue[400],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  const { ref } = useWebAnimations({
    keyframes: [{ transform: 'translate(0,0)' }, { transform: 'translate(1500px,0)' },{ transform: 'translate(0px,0)' }],
  timing: {
    duration: 3000,
    iterations: 1, 
    easing: "ease-in-out", 
  }
});

  return (
  
    <Card   className={classes.root}>
      
      <div ref={ref} className="Card1">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            C
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chorizo Paella"
        subheader="May 17, 2021"
      />
      <CardMedia
        className={classes.media}
        image={img}
        title="Paella dish"
      />
      <CardContent>
        
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
      </CardActions>
      </div>

      <div  className="Card2">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp Paella"
        subheader="May 17, 2021"
      />
      <CardMedia
        className={classes.media}
        image={img2}
        title="Paella dish"
      />
      <CardContent>
        
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
      </CardActions>
      </div>
    </Card>
  );
}