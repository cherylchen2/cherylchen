import React from 'react'
import PaletteSet from '../Palette'
import { Typography } from '@material-ui/core';
import '../../styles.css'

const TitleTypography = (props) => {
    const theme = PaletteSet.getSheet(props.darkMode)
    return(
        <h1 class="title fonts" style={{
            fontSize: props.width/35 * (props.scale ? props.scale : 1),
            color: props.darkMode ? theme.palette.logo.dark : theme.palette.logo.main
        }}>
            {props.children}
        </h1>
    )
}

export default TitleTypography