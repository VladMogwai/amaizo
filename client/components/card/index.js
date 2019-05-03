import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import vampireImg from '../../static/images/vampire.jpg';
import nosferatuImg from '../../static/images/nosferatu.jpg';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="nosferatu"
            className={classes.media}
            height="140"
            image={nosferatuImg}
            title="nosferatu"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Sabbat
            </Typography>
            <Typography component="p">
              The most visibly cursed of all Kindred, the Embrace warps each
              Nosferatu into a hideously deformed creature; the archetypal
              Nosferatu resembles Max Shreck's Count Orlok, though the curse has
              any number of variations. The Nosferatu are the spymasters of the
              dead, collecting information and selling it for a dear price. They
              are also the masters of the underground, living in the sewers for
              protection.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="vampire"
            className={classes.media}
            height="140"
            image={vampireImg}
            title="vampire"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Sabbat
            </Typography>
            <Typography component="p">
              The Sabbat is a loose organization of Cainites who reject the
              Traditions. Unlike the Camarilla, the Sabbat believes in the
              Antediluvians and Caine. Also known as the Sword of Caine, as they
              believe they will be the army Caine will use to destroy the
              Antediluvians once Gehenna arrives.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
