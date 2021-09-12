import React from 'react';
import Dimensions from 'react-dimensions';
import { Entity, Scene } from 'aframe-react';
import 'aframe';
import '../../../styles.css'
import sky from '../../../resources/assets/sky.jpg'

class AboutMe extends React.Component {
    
    render(){
        /*
        <a-scene embedded style={{
            height: this.props.containerHeight,
            width: this.props.containerWidth,
        }}>
            <a-assets>
                <img id="sky" src={sky}/>
                <a-box></a-box>
                <a-asset-item id="room" src={model}></a-asset-item>
            </a-assets>
            <a-sky src="#sky"></a-sky>

            <a-gltf-model position="0 -10 -3" rotation="0 0 0" src="#room"></a-gltf-model>
            <a-box geometry="depth:  0.23;  height:  14.16;  width:  22.17"
                material="color:  #ffe97a;" depth="0.42" height="10.98" width="10.98" position="6.972 -10 2.649"></a-box>
            

        </a-scene>
    */
         console.log(typeof model)
        return(
            <div
                    containerWidth={this.props.containerWidth}
                    containerHeight={this.props.containerHeight}>
                <a-scene
                    embedded style={{
                        height: this.props.containerHeight,
                        width: this.props.containerWidth,
                    }}
                    light="defaultLightsEnabled: false">
                        <a-entity light="type: ambient; color: #3b3b3b"></a-entity>
                    <a-gltf-model
                        src="https://cdn.glitch.com/bbbda2ec-7aa5-4442-94df-c042086de86f%2Froom_kb1.glb?v=1631461270044"
                        scale="1 1 1"
                        position="0 -1 0"
                        gltf-model="https://cdn.glitch.com/bbbda2ec-7aa5-4442-94df-c042086de86f%2Froom_kb1.glb?v=1631461270044"
                    ></a-gltf-model>
                </a-scene>
                
            </div>
            
        );
    }
}

export default Dimensions()(AboutMe)