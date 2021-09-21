import React from 'react'
import { Button } from '@material-ui/core'
import PaletteSet from '../Palette'
import '../../styles.css'

const ButtonCustom = (props) => {
    const theme = PaletteSet.getSheet(props.darkMode)
    return(
        <Button style={{
            width: props.anchor * 0.2,
            backgroundColor: props.darkMode ? theme.palette.logo.dark : theme.palette.logo.main,
            color: props.darkMode ? theme.palette.greyText.main : theme.palette.greyText.dark,
            borderRadius: 15,
            padding: 10,
            textTransform: 'none',
        }}
        href={props.link}>
            {props.text}
        </Button>
    )
}

export default ButtonCustom