import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
      marginLeft: '1%',
      marginTop: '1%',
      paddingTop: '2%'
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#002A5C',
    },
  }))(LinearProgress);

function LinearProgressWithLabel(props) {
  return (
      <div style={{
          display: 'flex',
          alignItems: 'center'
      }}>
          <BorderLinearProgress variant="determinate" style={{ width: props.anchor*0.3}} {...props} />
          <Typography variant="body2" color="textSecondary"  style={{ marginLeft: '1%' }}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </div>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const LinearWithValueLabel = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={props.progress} anchor={props.anchor}/>
    </div>
  );  
}

export default LinearWithValueLabel