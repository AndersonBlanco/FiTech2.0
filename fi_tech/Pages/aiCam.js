import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Platform, TouchableOpacity } from 'react-native';

//import { Camera } from 'expo-camera';

/*
import * as tf from '@tensorflow/tfjs';
import * as posedetection from '@tensorflow-models/pose-detection';
import * as ScreenOrientation from 'expo-screen-orientation';
import {
  bundleResourceIO,
  cameraWithTensors,
} from '@tensorflow/tfjs-react-native';
 */ 

import Svg, { Circle } from 'react-native-svg';
import { ExpoWebGLRenderingContext } from 'expo-gl';
import { CameraType } from 'expo-camera/build/Camera.types';
import {Camera, useCameraDevice} from "react-native-vision-camera";

export default function AICam(){
    

    return(
        <View>
 
            <TouchableOpacity onPress={()=> {}}><Text>Switch</Text></TouchableOpacity>
        </View>
    )
}