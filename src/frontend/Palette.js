import { createTheme } from '@material-ui/core/styles';

class PaletteSet {
    static getSheet(prefersDarkMode) {
        return theme(prefersDarkMode)
    }
}

const theme = (prefersDarkMode) => createTheme({
    palette: {
        type: prefersDarkMode ? 'dark' : 'light',
        primary: {
            main:'#7E685A',
            dark: '#FFFFFF'
        },
        secondary: {
            main :'#162e38',
        },
        background: {
            main: '#FFFFFF',
            dark: '#303030'
        },
        logo: {
            main: "#002A5C",
            dark: '#FFFFFF',
        },
        greyText: {
            main: '#373737',
            dark: '#E4E4E4',
        }
    }
})

export default PaletteSet