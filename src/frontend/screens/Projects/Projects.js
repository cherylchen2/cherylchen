import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

import Dimensions from 'react-dimensions';
import ontrack from '../../../resources/ontrack.png'
import habipets from '../../../resources/habipets.png'
import aic from '../../../resources/aic.png'

import Title from '../../component/TitleTypography'
import Normal from '../../component/TextTypography'
import Button from '../../component/Button'

const projects = [
    {
        name: "OnTrack",
        background: ontrack,
        technologies: ["React.js", "JavaScript", "HTML/CSS", "MongoDB", "Express"],
        description: "As university students, we have all experienced large workloads, including MANY readings." + 
        "Upon further research, university and college students are frustrated with the number of readings they're assigned, " + 
        "negatively impacting their comprehension of course content and motivation to learn." + 
        " We wanted to create a solution that would help students complete their readings more effectively and efficiently.\n" + 
        " We present ONTRACK for these students.",
        link: "https://devpost.com/software/ontrack-nq0iv2"
    },
    {
        name: "HabiPets",
        background: habipets,
        technologies: ["React.js", "JavaScript", "HTML/CSS", "MongoDB", "Express", "Agile", "Visual Studio Code"],
        description: "We want to cater this application to students who may be suffering from the effects of the pandemic on motivation levels. " +
        "Techniques such as self-regulated learning, pomodoro, flowtime technique implemented into the features to encourage users to develop better" +
        " study habits. Gamification is also used to motivate users to stick with their goals.",
        link: ""
    },
    {
        name: "African Impact Challenge (AIC)",
        background: aic,
        technologies: ["React.js", "JavaScript", "HTML/CSS", "MongoDB", "Express", "Agile", "Visual Studio Code"],
        description: "African Impact Challenge is a web-app developed during the course CSCC01 in University of Toronto, its main objective, " +
        "is to bring entreprrenuers, start-ups, investors and companies all together in one platform to allow more networking opportunities while " +
        "also providing training for users from Africa who would like to learn more.",
        link: ""
    },
]

class Projects extends React.Component {
    
    render() {
        console.log(this.props.containerWidth)
        console.log(this.props.containerHeight)
        return(
            <Carousel
                interval={7000}
                animation="slide"
                navButtonsAlwaysVisible={true}
                indicators={false}
                timeout={1500}
                infiniteLoop={true}
                stopOnHover={true}>
                {
                    projects.map( (item, i) => <Item
                                                key={i}
                                                item={item}
                                                width={this.props.containerWidth}
                                                height={this.props.containerHeight}
                                                darkMode={this.props.darkMode}/>)
                }
            </Carousel>
        )
    }
}

const Item = (props) => {
    return( 
        <Paper style={{
            height: props.height,
            width: props.width,
            justifyContent: 'center'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: props.width*0.05
            }}>
                
                <div>
                    <Title width={props.width} darkMode={props.darkMode}>{props.item.name}</Title>
                    <Normal width={props.width} darkMode={props.darkMode}>
                        {props.item.description}
                    </Normal>
                    <div style={{ margin: 12, padding: 5 }}>
                        {props.item.link.length > 0 ? 
                        <Button text="More!" darkMode={props.darkMode} link={props.item.link}/> : null
                        }
                    </div> 
                    
                </div> 
                <div>
                    <img style={{
                        maxWidth: props.width*0.6,
                        padding: props.width*0.03
                    }} src={props.item.background}/>
                </div>
            </div>
        </Paper>
    )
}

export default Dimensions()(Projects)