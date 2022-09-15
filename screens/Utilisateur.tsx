import { StyleSheet, Image } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import  {PushUp, Crunches, Squats} from '../components/buttons/Exercise buttonsProps'
import {RootTabScreenProps} from "../types"
import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import {user} from "../assets/index";
import { token, userName } from './Connexion';


export default function Utilisateur({ navigation }: RootTabScreenProps<'Utilisateur'>) {
  return (
    <View style={styles.container}>
      <View style={[styles.ellipse, styles.shadowProp]}>
        <LinearGradient colors={['#FF6CBC', '#1DE8F5']} style={styles.ellipse} locations={[0.2, 0.99]}/>
        <View style={styles.circle}>
        <Image
        source={user}
        style={styles.user} />
        </View>
        <Text style={[styles.text]}> Salut, {userName} ! </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Exercices</Text>
        <View style={styles.button}>
          <PushUp 
            title = 'Pushups'
            disabled = {false}
            onPress = {() => navigation.navigate('Pushup')}/>
        </View>
        <View style={styles.button}>
          <Crunches
            title = 'Crunches'
            disabled = {false}
            onPress = {() => navigation.navigate('Crunch')}/>
        </View>
        <View style={styles.button}>
          <Squats
            title = 'Squats'
            disabled = {false}
            onPress = {() => navigation.navigate('Squat')}/>
        </View>
      </View>
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
    alignSelf: "flex-start",
    marginLeft: RFValue(-20)
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '50%',
    alignSelf: "center",
    bottom: -120,
  },
  button: {
    marginTop: RFValue(10),
    marginBottom: RFValue(10),

  },
  ellipse: {
    width: RFValue(488),
    height: RFValue(450),
    borderBottomLeftRadius: RFValue(230),
    borderBottomRightRadius: RFValue(230),
    borderTopLeftRadius: RFValue(0),
    borderTopRightRadius: RFValue(0),
    position: 'absolute',
    top: RFValue(-80),

  },
  shadowProp: {  
    shadowOffset: {width: -20, height: 50},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 300, 
  },
  header: {
    width: RFValue(213),
    height: RFValue(103),
    top: 50,
    padding: RFValue(8),
    marginBottom: RFValue(20),
  },
  text: {
    top: RFValue(150), 
    fontWeight: 'bold', 
    fontSize: RFValue(35), 
    color: 'black',
    alignSelf: 'center'
  },
  user: {
    height: RFValue(84),
    width: RFValue(84),
    alignSelf: 'center',
    top: RFValue(5),
  },
  circle: {
    height: RFValue(105),
    width: RFValue(105),
    alignContent: 'center',
    top: RFValue(130),
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: RFValue(50),
    borderWidth: RFValue(1),
  }
});
