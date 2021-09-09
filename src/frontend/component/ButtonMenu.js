import React from 'react';
import PaletteSet from '../Palette';
import { ThemeProvider, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => ({
    selected: {
        color: styles.palette.primary
    },
    notSelected: {
        color: styles.palette.logo
    }
  }));

const ButtonMenu = (props) => {
    const styles = PaletteSet.getSheet(props.darkMode)
    const classes = useStyles(styles)
    const [selected, setSelected] = React.useState(props.selected)
    const handleSelect = (selected) => {
        setSelected(selected)
        props.handleSelect(selected)
    }
    return(
        <ThemeProvider theme={styles}>
            <ButtonGroup variant="text" aria-label="text button group">
                {props.list.map(item => (
                    <Button
                        color={ selected === item ? "primary" : "default" }
                        onClick={() => handleSelect(item)}>
                        {item}
                    </Button>
                ))}
            </ButtonGroup>
        </ThemeProvider>
        
    )
}

export default ButtonMenu