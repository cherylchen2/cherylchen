import React from 'react'
import PaletteSet from '../Palette'
import Switch from '@material-ui/core/Switch';
import { ThemeProvider, withStyles, makeStyles } from '@material-ui/core/styles';

const theme = PaletteSet.getSheet(false)

const useStyles = makeStyles(() => ({
    root: {
      width: 40,
      height: 23,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      color: '#ff9900'
    },
    track: {
      borderRadius: '40%',
      border: `1px solid #fff`,
      backgroundColor: '#ffb700',
      opacity: 1,

    },
    thumb: {
      width: 20,
      height: 20,
    }
  }));

const SwitchToggle = (props) => {
    return (
        <StyledSwitch onChange={props.onChange} style={props.style}/>
    )
}

const StyledSwitch = (props) => {
  const classes = useStyles()
  return (
      <Switch
        classes={{
          root: classes.root,
          thumb: classes.thumb,
          track: classes.track,
          switchBase: classes.switchBase,
        }}
        onChange={props.onChange}/>
  )
}

export default SwitchToggle