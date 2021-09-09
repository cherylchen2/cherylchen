import React from 'react';
import Dimensions from 'react-dimensions';
import { Entity, Scene } from 'aframe-react';
import 'aframe';
import '../../../styles.css'
import sky from '../../../resources/assets/sky.jpg'
import model from "./scene.glb"

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
                <a-scene embedded style={{
                    height: this.props.containerHeight,
                    width: this.props.containerWidth,
                }}>
                    <Entity geometry={{primitive: 'box', width: 5}} position="0 0 -5"/>
                    <Entity gltf-model={{src: './scene.gltf'}}/>
                </a-scene>
                
            </div>
            
        );
    }
}

export default Dimensions()(AboutMe)