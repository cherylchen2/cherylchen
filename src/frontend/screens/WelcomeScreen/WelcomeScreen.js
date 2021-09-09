import bgVid from '../../../resources/wb.mp4';
import MediaQuery from 'react-responsive';
import '../../../styles.css'
import Dimensions from 'react-dimensions'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

class WelcomeScreen extends React.Component {
    render() {
        return (
                <div>
                        <BackgroundVideo height={this.props.containerHeight} width={this.props.containerWidth}/>
                </div>
            )
    }
}

const IntroTitle = ({height, width, fontSize}) => {
    return(
        <div style={{
            paddingLeft: 0.1*width,
            paddingTop: 0.15*height,
        }}>
            <h1 
                className="video-title"
            style={{
                fontSize: fontSize,
            }}>
                I am{' '}
                <Typewriter
                    words={['a programmer.', 'a photographer.', 'Cheryl.']} 
                    loop={1}
                    cursor
                    cursorStyle='_'
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={2000}   
                />

            </h1>
        </div>
    )
}

const WelcomeVideo = ({ inlineStyle, classes, height, width }) => {
    return (
        <div>
            <video
                loop autoPlay muted
                class={classes}
                style={inlineStyle}
                height={height}
                width={width}
                class="video-background"
                >
                <source src={bgVid} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
        </div>
        
    )
}

const BackgroundVideo = ({ height, width }) => {
    const screenRatio = width/height;
    const videoRatio = height / 1394;
    const videoWidth = 2480 * (videoRatio);
    const videoCroppedWidth = 1760/2480 * videoWidth;
    // 1760
    return(
        <div>
            <div>
                <MediaQuery query='(orientation: portrait)'>
                    <div>
                        <IntroTitle height={height} width={width} fontSize={height/18}/>
                        {
                            screenRatio < (300/626) ?
                            <div id="videoPortrait" class="video-portrait">
                                <video autoPlay muted loop
                                    height={height}
                                    width={width}
                                    className="video-background video-portrait"
                                    style={{
                                        marginLeft: 0,
                                        overFlow: 'hidden',
                                        objectFit: 'cover',
                                        objectPosition: '95% 100%',
                                    }}>
                                    <source src={bgVid} type="video/mp4"/>
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                            :
                            <div id="videoPortrait" class="video-portrait">
                                <video autoPlay muted loop
                                    height={height}
                                    width={width}
                                    className="video-background video-portrait tall"
                                    style={{
                                        marginLeft: 0,
                                        overFlow: 'hidden',
                                        objectFit: 'cover',
                                    }}>
                                    <source src={bgVid} type="video/mp4"/>
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                        }
                    </div>
                </MediaQuery>
                <MediaQuery query='(orientation: landscape)'>
                    <div>
                    <IntroTitle height={height} width={width} fontSize={width/15}/>
                        {
                            screenRatio > 2480/1394 ?
                            <div>
                                <video autoPlay muted loop
                                    width={width}
                                    height={height}
                                    className="video-landscape long video-background"
                                    >
                                    <source src={bgVid} type="video/mp4"/>
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>
                            :
                            <div>
                                <video autoPlay muted loop
                                        width={width}
                                        height={height}
                                        class="video-landscape tall video-background">
                                    <source src={bgVid} type="video/mp4"/>
                                    Your browser does not support HTML5 video.
                                </video>
                            </div>   
                        }
                    </div>
                </MediaQuery>
            </div>
        </div>
    )
}

export default Dimensions()(WelcomeScreen)