import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Intro from './Pages/Intro.js';

import { selectNavigation } from './redux/navigationSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import AuthScreen from './Pages/Auth.js';
import { store } from './redux/store.js';
import Home from './Pages/home.js';
import Settings from './Pages/Settings.js';
import SideNav from './components/sideNav.js';
import Shop from './Pages/shop.js';

import {NavigationContainer} from "@react-navigation/native"; 
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Advice from './Pages/advice.js';

//mediapip api: 
import * as poseDetection from "@tensorflow-models/pose-detection";
import "@tensorflow/tfjs-core"; 
import "@tensorflow/tfjs-backend-webgl"; 
import "@mediapipe/pose"; 

import profile1 from "./assets/profile1.png"; 
import AICam from './Pages/aiCam.js';

const model = poseDetection.SupportedModels.BlazePose; 
const detector_config = {
  runtime: "mediapipe",
  solutionpath: "https://cdn.jsdelivr.net/npm/@mediapipe/pose"
}

const getDetector = async () => await poseDetection.createDetector(model, detector_config);
const est_config = {enableSmoothing: true};

const getPoses = async(frame)=>{
  let detector = getDetector();

  let p = (await detector).estimatePoses(frame, est_config);
  return p; 
}
 

//console.log("Reading", getPoses(profile1)); 



const Stack = createNativeStackNavigator();
const colorScheme = {
  sixty: "rgba(29, 29, 29, 0.75)",
  thirty: "rgba(255, 255, 255,1)",
  ten: "rgba(252, 255,255, 1)"
}



function App() {
  return (
    <NavigationContainer>
      <View style = {{flex: 1, paddingTop: 0}}>
      <Stack.Navigator 
      
        screenOptions={{
          animation:"none",
          headerShown: false,
          contentStyle: {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colorScheme.ten
          },
          
        }}
        initialRouteName="I_ntro"
      >
        <Stack.Screen name="I_ntro" component={AICam}  />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen 
          name="H_ome" 
          component={Home}
          options={{
            contentStyle: {
              backgroundColor: colorScheme.sixty,
              alignItems: "center",
              justifyContent: "flex-start"
            }
          }}
        />


          <Stack.Screen 
          name="Advice" 
          component={Advice}
          options={{
            contentStyle: {
              backgroundColor: colorScheme.ten,
              alignItems: "center",
              justifyContent: "flex-start"
            }
          }}
        />
        <Stack.Screen name="S_ettings" component={Settings} />

        <Stack.Screen 
        name="S_hop" 
        component={Shop} 
        options ={{
          contentStyle:{
            backgroundColor: colorScheme.sixty
          }
        }}/>
      </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});