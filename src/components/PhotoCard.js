import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {CardHeader} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  card: {
    maxWidth: 1200,
  },
  media: {
    height: 800,
  },
});

export default function PhotoCard(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={props.url}
        caption={props.url}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{props.title}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{props.explanation}</Typography>
      </CardContent>

      <Divider variant="middle" component="p" />

      <CardContent>
        <Typography color="textSecondary" component="p">{'\u00A9'} {props.copyright} </Typography>
      </CardContent>
    </Card>
  );
}

