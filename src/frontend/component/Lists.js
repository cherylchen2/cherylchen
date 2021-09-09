import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';
import { ThemeProvider, withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    listItemText: {
      fontSize: 'small',
      margin: 0,
      padding: 0,
    },
    root:{
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 170,
    },
  }));

const Lists = (props) => {
    console.log(props)
    const classes = useStyles(props.height)
    return(
        <List className={classes.root}>
            {props.list.map((item) =>  
                <ListItem>
                    <ListItemText primary={item.name} classes={{
                        primary: classes.listItemText
                    }}/>
                </ListItem>
            )}
        </List>
    )
}

export default Lists