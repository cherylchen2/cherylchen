import React from 'react'
import Dimensions from 'react-dimensions'
import PaletteSet from '../../Palette'
import MediaQuery from 'react-responsive';
import '../../../styles.css'

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, Card, CardContent, CardMedia, List, ListItem, ListItemText } from '@material-ui/core';
import logo from '../../../resources/uoft.png';
import logo_s from '../../../resources/uoft_small.png';
import capture from '../../../resources/capture.jpg';
import climbing from '../../../resources/climbing.png';

import Chip from '@material-ui/core/Chip';
import Title from '../../component/TitleTypography'
import Normal from '../../component/TextTypography'
import ProgressBar from '../../component/ProgressBar'
import ButtonMenu from '../../component/ButtonMenu'
import Lists from '../../component/Lists'

const currentList = [
    {
        name: 'CSCC37/Numerical Algorithms',
        url: 'https://utsc.calendar.utoronto.ca/course/cscc37h3'
    },
    {
        name: 'CSCC43/Introduction to Databases',
        url: 'https://utsc.calendar.utoronto.ca/course/cscc43h3'
    },
    {
        name: 'CSCC73/Algorithm Design and Analysis',
        url: 'https://utsc.calendar.utoronto.ca/course/cscc73h3'
    }
]

const finishedList = [
    {
        name: 'MATA22/Lin. Alg. I',
        url: ''
    },
    {
        name: 'CSCA67/Discrete Mathematics',
        url: ''
    },
    {
        name: 'CSCB07/Software Design',
        url: ''
    },
    {
        name: 'MATB24/Lin. Alg. II',
        url: ''
    },
    {
        name: 'CSC236/Theory Comp.',
        url: ''
    },
    {
        name: 'CSCC10/HMI',
        url: ''
    },
    {
        name: 'CSCC24/Principles of Programming lang.',
        url: ''
    },
    {
        name: 'MATB41/Multicalc I',
        url: ''
    },
    {
        name: 'STAB52/Probability',
        url: ''
    },
    {
        name: 'CSCB63/Data structures',
        url: ''
    },
    {
        name: 'CSC320/Visual computation',
        url: ''
    },
    {
        name: 'CSC369/Operating system',
        url: ''
    },
    {
        name: 'CSCC63/Comp. & Compt. Complexity',
        url: ''
    },
    {
        name: 'CSCD84/AI',
        url: ''
    },
    {
        name: 'CSCC01/Software Eng. Intro',
        url:''
    },
]

const planList = [
    {
        name: 'CSC419/Geometry Processing',
        url:'https://utsc.calendar.utoronto.ca/course/cscd18h3'
    },
    {
        name: 'CSC420/Image Understanding',
        url:'https://utsc.calendar.utoronto.ca/course/cscd18h3'
    },
    {
        name: 'CSCD01/Large Software Systems',
        url:'https://utsc.calendar.utoronto.ca/course/cscd01h3'
    },
]

const menu = ['Current', 'Finished', 'To take']

const ClubCard = (props) => {
    return(
        <Card style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: props.width/5,
            margin: '2%',
            marginTop: 0,
        }}>
            <CardContent>
                <Normal width={props.width} weight={500} darkMode={props.darkMode}>{props.clubName}</Normal>
                <Normal width={props.width} scale={0.7} darkMode={props.darkMode}>{props.position}</Normal>
            </CardContent>
            <CardMedia>
                <div style={{
                    width: props.width/11,
                    height: props.width/11,
                }}>
                  <img 
                    src={props.logo}
                    width='100%'></img>  
                </div>
            </CardMedia>
        </Card>
    )
}

class EducationPage extends React.Component {
    
    state = {
        selectedBtn: 'Current'
    }

    constructor(props) {
        super(props);
        this.state = this.handleStateChange.bind(this)
    }

    componentDidMount() {
        this.setState({ selectedBtn: 'Current' })
    }

    handleStateChange = (selected) => {
        console.log(selected)
        this.setState({ selectedBtn: selected})
    }

    render() {
        const styles = PaletteSet.getSheet(this.props.darkMode)
        return(
            <div style={{
                padding:'2%'
            }}>
             <ThemeProvider theme={styles}>
                    <CssBaseline/>
                    <MediaQuery query='(orientation: landscape)'>
                    <div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingBottom: '2%'
                    }}>
                    <Title width={this.props.containerWidth} darkMode={this.props.darkMode}>Education</Title>
                    <div>
                        <img src={logo} style={{
                            maxHeight: '80%',
                            maxWidth: '40%',
                            position: 'absolute',
                            marginLeft: '3%',
                            right: 0,
                            top: this.props.containerHeight,
                        }}/>    
                    </div>
                        
                        <ProgressBar progress={92} anchor={this.props.containerWidth}/> 
                    </div>
                    
                    <Normal width={this.props.containerWidth} darkMode={this.props.darkMode} weight={500}>Software Engeering Co-op Specialist, 4th year</Normal>
                    <div style={{
                        display: 'flex',
                        alignItems: 'stretch',
                        marginTop: '1%',
                    }}>
                        <Normal width={this.props.containerWidth} darkMode={this.props.darkMode}>Current courses:</Normal>
                        <div style={{
                            width: this.props.containerWidth * 0.5
                        }}>
                           {currentList.map(item => <Chip style={{
                                marginLeft: '1%',
                                marginBottom: '1%'
                            }}
                            label={item.name}
                            href={item.url}
                            clickable />)} 
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'stretch',
                        marginTop: '2%',
                    }}>
                        <Normal width={this.props.containerWidth} darkMode={this.props.darkMode}>Finished courses:</Normal>
                        <div style={{
                            width: this.props.containerWidth * 0.5
                        }}>
                        {finishedList.map(item => <Chip style={{
                                marginLeft: '1%',
                                marginBottom: '1%'
                            }}
                            label={item.name}
                            href={item.url}
                            clickable />)} 
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'stretch',
                        marginTop: '2%',
                    }}>
                        <Normal width={this.props.containerWidth} darkMode={this.props.darkMode}>To take courses:</Normal>
                        <div style={{
                            width: this.props.containerWidth * 0.5
                        }}>
                        {planList.map(item => <Chip style={{
                                marginLeft: '1%',
                                marginBottom: '1%'
                            }}
                            label={item.name}
                            href={item.url}
                            clickable />)} 
                        </div>
                    </div>
                    <br/>
                    <Normal width={this.props.containerWidth} darkMode={this.props.darkMode} weight={500}>Clubs:</Normal>
                    <div style={{
                        display: 'flex',
                        marginLeft: '2%',
                    }}>
                        <ClubCard
                            clubName="UTSC CAPTURE"
                            position="Creative director"
                            logo={capture}
                            width={this.props.containerWidth}
                            height={this.props.contianerHeight}
                            darkMode={this.props.darkMode}/>
                        <ClubCard
                            clubName="Climbing"
                            position="Member"
                            logo={climbing}
                            width={this.props.containerWidth}
                            height={this.props.contianerHeight}
                            darkMode={this.props.darkMode}/>
                    </div>
                    </div>
                </MediaQuery>
                <MediaQuery query='(orientation: portrait)'>
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingBottom: '2%'
                        }}>
                            <Title width={this.props.containerHeight} darkMode={this.props.darkMode}
                                scale={1.5}>Education</Title>
                                <div style={{ marginLeft: "1%" }}>
                                    <ProgressBar progress={92} anchor={this.props.containerWidth}/> 
                                </div>
                        </div>
                        <Normal width={this.props.containerHeight} darkMode={this.props.darkMode} scale={1.5} weight={700}>Software Engeering Co-op Specialist, 4th year</Normal>
                        <br/>
                        <ButtonMenu
                            list={menu}
                            darkMode={this.props.darkMode}
                            handleSelect={this.handleStateChange}
                            selected={this.state.selectedBtn}/>
                        { this.state.selectedBtn === 'Current' ?
                            <Lists
                                list={currentList}
                                height={this.props.contianerHeight}/>
                            : (
                                this.state.selectedBtn === 'Finished' ?
                                    <Lists
                                        list={finishedList}
                                        height={this.props.contianerHeight}/>
                                    :
                                    <Lists
                                        list={planList}
                                        height={this.props.contianerHeight}/>
                            )
                        }
                        <Normal width={this.props.containerHeight} darkMode={this.props.darkMode} scale={1.5} weight={700}>Clubs:</Normal>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: '2%',
                        }}>
                            <ClubCard
                                clubName="UTSC CAPTURE"
                                position="Creative director"
                                logo={capture}
                                width={this.props.containerHeight*2}
                                height={this.props.contianerWeight}
                                darkMode={this.props.darkMode}/>
                            <ClubCard
                                clubName="Climbing"
                                position="Member"
                                logo={climbing}
                                width={this.props.containerHeight*2}
                                height={this.props.contianerWeight}
                                darkMode={this.props.darkMode}/>
                        </div>
                        <div>
                            <img src={logo_s} style={{
                                maxHeight: '15%',
                                position: 'absolute',
                                marginLeft: '3%',
                                right: 0,
                                bottom: -this.props.containerHeight + 20,
                            }}/>    
                        </div>
                    </div>
                </MediaQuery>
                </ThemeProvider> 
            </div>
            
            
        )
    }
}

export default Dimensions()(EducationPage)