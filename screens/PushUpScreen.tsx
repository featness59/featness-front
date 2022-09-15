import { StyleSheet, SafeAreaView, Alert, Dimensions } from 'react-native';
import { Pose } from '@mediapipe/pose';
import * as cam from '@mediapipe/camera_utils';
import {useRef, useEffect, useState} from 'react';
import React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Video } from 'expo-av';
import { Entypo } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';



export default function PushUp() {

  let video = null;
  const webCamRef = useRef(null);
  const [hasCameraPermission, setHasCameraPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState<any>(null);
  const [count, setCount] = useState(0);
  const [type, setType] = useState(CameraType.back);
  const canvasRef = useRef(null);

  
  useEffect(
    () => {
      const pose = new Pose({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
        }
      });
      pose.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: true,
        smoothSegmentation: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });

      (async () => {
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission();

      }) ();
    }, []
  );
  const startCamera = async () => {
    if (webCamRef.current!==undefined && webCamRef.current!==null){
      video = new cam.Camera(webCamRef.current.video,{
        onFrame: async()=>{
          await pose.send({image:webCamRef.current.video})
      }
      });
      

    }
  }

  const stopVideo = async () => {
    camera.stopRecording();
  }

    return (
      <View style={styles.container}>
        <View>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.camera}
          type={type}
          ratio={'16:9'} />
        </View>
        <View style={styles.buttons}>
          <Button
          onPress={() => {
            setType(
              type === CameraType.back
                ? CameraType.front
                : CameraType.back
            );
          }}>
            Flip Camera
          </Button>
          <Button  icon="camera" onPress={startCamera}>Record</Button>
          <Button onPress={stopVideo}>Stop</Button>
        </View>
      </View>
    );
  }
//   if (hasCameraPermission === false) {
//     return (
//       <View style={styles.container}>
//         <Text>No access to camera</Text>
//       </View>
//     );
//   }
// }


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
  camera: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    
  },
});