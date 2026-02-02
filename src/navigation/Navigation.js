import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/DashboardScreen/Dashboard';
 import Home from '../screens/HomeScreen/Home';
 import DashboardTwo from '../screens/DashboardTwo/DashboardTwo';
 import ContentPage from '../screens/Content/ContentPage';
 import AboutScreen from '../screens/History/AboutScreen';
 import Sentences from '../screens/Sentences/Sentences';
 import Quiz from '../screens/Quiz/Quiz';
 import TestFirebase from '../screens/TestFirebase/TestFirebase';
 import FirebaseTestScreen from '../screens/FirebaseTest/FirebaseTestScreen';
 import ContentManager from '../screens/ContentManager/ContentManager';
 import KiswahiliDashboard from '../screens/KiswahiliDashboard/KiswahiliDashboard';
 import KiswahiliContent from '../screens/KiswahiliContent/KiswahiliContent';
 import KikuyuDashboard from '../screens/KikuyuDashboard/KikuyuDashboard';
 import KikuyuContent from '../screens/KikuyuContent/KikuyuContent';
 import MaasaiDashboard from '../screens/MaasaiDashboard/MaasaiDashboard';
 import MaasaiContent from '../screens/MaasaiContent/MaasaiContent';
 import LuoDashboard from '../screens/LuoDashboard/LuoDashboard';
 import LuoContent from '../screens/LuoContent/LuoContent';
 import KalenjinDashboard from '../screens/KalenjinDashboard/KalenjinDashboard';
 import KalenjinContent from '../screens/KalenjinContent/KalenjinContent';
 import KisiiDashboard from '../screens/KisiiDashboard/KisiiDashboard';
 import KisiiContent from '../screens/KisiiContent/KisiiContent';
 import KambaDashboard from '../screens/KambaDashboard/KambaDashboard';
 import KambaContent from '../screens/KambaContent/KambaContent';
 import LuhyaDashboard from '../screens/LuhyaDashboard/LuhyaDashboard';
 import LuhyaContent from '../screens/LuhyaContent/LuhyaContent';
 //Imports
const Stack = createNativeStackNavigator();
const Navigation = () => {
      
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Dashboard" component={Dashboard}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
        <Stack.Screen options={{headerShown:false}} name="DashboardTwo" component={DashboardTwo}/>
        <Stack.Screen 
          name="Content" 
          component={ContentPage}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          options={{
            headerTitle:"Keiyo History",
            headerStyle: { backgroundColor: '#374151' },
            headerTintColor: 'white',
            headerTitleStyle: { fontWeight: 'bold' }
          }} 
          name="About" 
          component={AboutScreen}
        />
        <Stack.Screen 
          name="Sentences" 
          component={Sentences}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Quiz" 
          component={Quiz}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen options={{headerTitle:"Firebase Test"}} name="TestFirebase" component={TestFirebase}/>
        <Stack.Screen options={{headerTitle:"Firebase Test Suite"}} name="FirebaseTestScreen" component={FirebaseTestScreen}/>
        <Stack.Screen options={{headerShown:false}} name="ContentManager" component={ContentManager}/>
        <Stack.Screen options={{headerShown:false}} name="KiswahiliDashboard" component={KiswahiliDashboard}/>
        <Stack.Screen options={{headerShown:false}} name="KiswahiliContent" component={KiswahiliContent}/>
        <Stack.Screen options={{headerShown:false}} name="KikuyuDashboard" component={KikuyuDashboard}/>
        <Stack.Screen options={{headerShown:false}} name="KikuyuContent" component={KikuyuContent}/>
        <Stack.Screen options={{headerShown:false}} name="MaasaiDashboard" component={MaasaiDashboard}/>
        <Stack.Screen options={{headerShown:false}} name="MaasaiContent" component={MaasaiContent}/>
        <Stack.Screen options={{headerShown:false}} name="LuoDashboard" component={LuoDashboard}/>
        <Stack.Screen options={{headerShown:false}} name="LuoContent" component={LuoContent}/>
        <Stack.Screen options={{headerShown:false}} name="KalenjinDashboard" component={KalenjinDashboard}/>
        <Stack.Screen options={{headerShown:false}} name="KalenjinContent" component={KalenjinContent}/>
        <Stack.Screen options={{headerShown:false}} name="KisiiDashboard" component={KisiiDashboard}/>
        <Stack.Screen options={{headerShown:false}} name="KisiiContent" component={KisiiContent}/>
        <Stack.Screen options={{headerShown:false}} name="KambaDashboard" component={KambaDashboard}/>
        <Stack.Screen options={{headerShown:false}} name="KambaContent" component={KambaContent}/>
        <Stack.Screen options={{headerShown:false}} name="LuhyaDashboard" component={LuhyaDashboard}/>
        <Stack.Screen options={{headerShown:false}} name="LuhyaContent" component={LuhyaContent}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})