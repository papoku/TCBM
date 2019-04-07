import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  }
};

function Header(props) {
    //console.log(props);
    const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {props.content}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
};

export default withStyles(styles)(Header);