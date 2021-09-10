import React from 'react';
import PaletteSet from '../Palette';
import { ThemeProvider, Button, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import '../../styles.css'

const BounceArrow = (props) => {
    const styles = PaletteSet.getSheet(props.darkMode)
    return(
        <div class="arrow bounce">
           <ArrowDropDownCircleIcon/> 
        </div>
    )
}

export default BounceArrow