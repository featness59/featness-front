import { StyleSheet, SafeAreaView, Alert, Dimensions } from 'react-native';
import Camera, { RNCamera } from 'react-native-camera';
import { Pose } from '@mediapipe/pose';
import * as cam from '@mediapipe/camera_utils';
import {useRef, useEffect, useState} from 'react';
import React from 'react';

import { Text, View } from '../components/Themed';



export default function PushUp() {

  const webCamRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const canvasRef = useRef(null);

  let camera = null;

  // const onResults = (results: any) => {
  //   console.log(results);
  // }

  // useEffect(
  //   () => {
  //     const pose = new Pose({
  //       locateFile: (file: any) => {
  //         return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
  //       }
  //     });
  //     pose.setOptions({
  //       modelComplexity: 1,
  //       smoothLandmarks: true,
  //       enableSegmentation: true,
  //       smoothSegmentation: true,
  //       minDetectionConfidence: 0.5,
  //       minTrackingConfidence: 0.5
  //     });
  //     pose.onResults(onResults);

  //   }
  // )

  return (
    <View style={styles.container}>
      <RNCamera
          // ref={ref => {
          //   this.camera = ref;
          // }}
          style={{flex: 1}}
          type={RNCamera.Constants.Type.front}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});