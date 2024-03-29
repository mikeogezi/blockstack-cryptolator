import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import { APP_NAME } from '../constants/appInfo';
import { 
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia
} from '@material-ui/core';
import { 
  OpenInNew, 
  Message, 
} from '@material-ui/icons';
import Header from './Header';
import { 
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';

class Landing extends React.Component {
  _renderSlideshow () {
    return (
      <Box>
      </Box>
    )
  }

  render () {
    const { classes } = this.props;

    return (
      <Box>
        <Header>Welcome to {APP_NAME}</Header>

        <Box className={classes.firstBox}>
          <Card className={classes.card}>
            <CardContent>
              <CardMedia
                className={classes.media}
                image={'/favicon.png'}
                title={APP_NAME}
              />
              <Typography className={classes.description} variant="body1" align="center">
                The {APP_NAME} allows you to convert between all major cryptocurrencies and traditional currencies. We will be supporting 4,061 cryptocurrencies soon.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" align="center">
                Go Ahead, Try it!
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button size="large" variant="contained" color="primary" align="center" className={classes.ctaButton}>
                  <Link className={classes.iconLink} to="/app/">
                    Start Converting
                  </Link>
                  <Link className={classes.iconLink} to="/app/">
                    <OpenInNew className={classes.buttonIcon} />
                  </Link>
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    )
  }
};

const styles = theme => ({
  ctaButton: {
    margin: theme.spacing(1)
  },
  firstBox: {
    marginBottom: theme.spacing(4)
  },
  description: {
    textDecoration: 'underline',
    fontWeight: 500
  },
  card: {
    backgroundColor: '#EEE'
  },
  media: {
    height: '250px',
  },
  buttonIcon: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0.75)
  },
  titleIcon: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  cardActions: {
    justifyContent: 'center'
  },
  iconLink: {
    marginBottom: theme.spacing(0),
    textDecoration: 'none',
    color: 'white'
  }
});

export default withStyles(styles)(Landing);