import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

import Dimensions from 'react-dimensions';
import MediaQuery from 'react-responsive';
import Chip from '@material-ui/core/Chip';
import ontrack from '../../../resources/ontrack.png'
import habipets from '../../../resources/habipets.png'
import aic from '../../../resources/aic.png'

import Title from '../../component/TitleTypography'
import Normal from '../../component/TextTypography'
import Button from '../../component/Button'

class Eport extends React.Component {
    render() {
        return(
            <section style={{ width: this.props.containerWidth, height: this.props.containerHeight, padding: '2%', overflow: 'scroll' }}>
                <Title width={this.props.containerWidth} scale={1.5} darkMode={this.props.darkMode}>Goals and Action Plan</Title>
                <Normal width={this.props.containerWidth} darkMode={this.props.darkMode}>
                    For this Co-op work-term, I would really like to focus on critical thinking skills, interpersonal skills, and organizations.
                </Normal>
                <Title width={this.props.containerWidth} darkMode={this.props.darkMode}>1. Critical Thinking Skills</Title>
                <Normal width={this.props.containerWidth} weight={700} darkMode={this.props.darkMode}>
                    S: When encountering difficult tasks, I aim to be able to not only solve the problem, but also be able to explain to others the solution, and why it should be the best solutions, alternatives and pros and cons. My goal is to be able to, using experience and creativity, give better evaluations and analysis for a given situation, and explain my evaluations and ideas to others in the clearest way possible.
                    <br/>
                    M: In a new task, I will be able to exlain to other coworkers, developers or not, the identified problem, the posted solution, and why it is a suitable solution clearer.
                    <br/>
                    A: By practicing and talking to coworkers throughout the workterm, I believe that this is achievable through practicing. And by developing better habits of planning and creating mindmaps while solving a problem. I believe that the first steps of being able to explain clearer to others a certain analysis and evalution, is to be able to clearer formulate the idea in my head and also vocalize my idea to myself.
                    <br/>
                    R: My further goal is to be someone who can offer training to developers by using my experience of being in development and also communicating with people. With better critical skills, not only can it help me in my short term goal of being a better developer, it also helps me in my long term goal of having to be better at understanding and explaining a problem to people that are possible developers or not developers.
                    <br/>
                    T: By the end of my workterm, I should be able to develope a better method and attack plans when I receive a problem that needs to be solved, whether it is software development related or not.
                    <br/>
                    E: I can improve on my critical thinking skills by actively particiatping in problem solving with other developers and do my best to explain my own ideas and approaches.
                    <br/>
                    R: During the first 4 months of my coop, not only was I able to improve on my explanation and organization of ideas, but I was also able to learn a lot more strategies and ideas from other developers when approaching the same problem. With new insights, I was also be able to apply it back to other tasks and with other coworkers. 
                </Normal>
                <Title width={this.props.containerWidth} darkMode={this.props.darkMode}>2. Interpsonal Skills</Title>
                <Normal width={this.props.containerWidth} weight={700} darkMode={this.props.darkMode}>
                    S: When encountering difficult tasks, I aim to be able to not only solve the problem, but also be able to explain to others the solution, and why it should be the best solutions, alternatives and pros and cons. My goal is to be able to, using experience and creativity, give better evaluations and analysis for a given situation, and explain my evaluations and ideas to others in the clearest way possible.
                    <br/>
                    M: In a new task, I will be able to exlain to other coworkers, developers or not, the identified problem, the posted solution, and why it is a suitable solution clearer.
                    <br/>
                    A: By practicing and talking to coworkers throughout the workterm, I believe that this is achievable through practicing. And by developing better habits of planning and creating mindmaps while solving a problem. I believe that the first steps of being able to explain clearer to others a certain analysis and evalution, is to be able to clearer formulate the idea in my head and also vocalize my idea to myself.
                    <br/>
                    R: My further goal is to be someone who can offer training to developers by using my experience of being in development and also communicating with people. With better critical skills, not only can it help me in my short term goal of being a better developer, it also helps me in my long term goal of having to be better at understanding and explaining a problem to people that are possible developers or not developers.
                    <br/>
                    T: By the end of my workterm, I should be able to develope a better method and attack plans when I receive a problem that needs to be solved, whether it is software development related or not.
                    <br/>
                    E: I can improve on my critical thinking skills by actively particiatping in problem solving with other developers and do my best to explain my own ideas and approaches.
                    <br/>
                    R: During the first 4 months of my coop, not only was I able to improve on my explanation and organization of ideas, but I was also able to learn a lot more strategies and ideas from other developers when approaching the same problem. With new insights, I was also be able to apply it back to other tasks and with other coworkers. 
                </Normal>
                <Title width={this.props.containerWidth} darkMode={this.props.darkMode}>3. Organizations</Title>
                <Normal width={this.props.containerWidth} weight={700} darkMode={this.props.darkMode}>
                    S: When encountering difficult tasks, I aim to be able to not only solve the problem, but also be able to explain to others the solution, and why it should be the best solutions, alternatives and pros and cons. My goal is to be able to, using experience and creativity, give better evaluations and analysis for a given situation, and explain my evaluations and ideas to others in the clearest way possible.
                    <br/>
                    M: In a new task, I will be able to exlain to other coworkers, developers or not, the identified problem, the posted solution, and why it is a suitable solution clearer.
                    <br/>
                    A: By practicing and talking to coworkers throughout the workterm, I believe that this is achievable through practicing. And by developing better habits of planning and creating mindmaps while solving a problem. I believe that the first steps of being able to explain clearer to others a certain analysis and evalution, is to be able to clearer formulate the idea in my head and also vocalize my idea to myself.
                    <br/>
                    R: My further goal is to be someone who can offer training to developers by using my experience of being in development and also communicating with people. With better critical skills, not only can it help me in my short term goal of being a better developer, it also helps me in my long term goal of having to be better at understanding and explaining a problem to people that are possible developers or not developers.
                    <br/>
                    T: By the end of my workterm, I should be able to develope a better method and attack plans when I receive a problem that needs to be solved, whether it is software development related or not.
                    <br/>
                    E: I can improve on my critical thinking skills by actively particiatping in problem solving with other developers and do my best to explain my own ideas and approaches.
                    <br/>
                    R: During the first 4 months of my coop, not only was I able to improve on my explanation and organization of ideas, but I was also able to learn a lot more strategies and ideas from other developers when approaching the same problem. With new insights, I was also be able to apply it back to other tasks and with other coworkers. 
                </Normal>
            </section>
        )
    }
}

export default Dimensions()(Eport)