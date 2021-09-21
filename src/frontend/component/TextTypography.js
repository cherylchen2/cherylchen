import React from 'react'
import PaletteSet from '../Palette'
import '../../styles.css'

const TitleTypography = (props) => {
    const theme = PaletteSet.getSheet(props.darkMode)
    const { scale = 1 } = props
    return(
        <h1 class="normal fonts" style={{
            fontSize: (props.width/70) * scale,
            color: props.darkMode ? theme.palette.greyText.dark : theme.palette.greyText.main,
            fontWeight: props.weight
        }}>
            {props.children}
        </h1>
    )
}

export default TitleTypography