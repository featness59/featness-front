import { Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LetsStart from '../components/buttons';;
import { Text, View, } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {RFValue} from "react-native-responsive-fontsize";
import {Hue} from "../constants/color";
import { pushup }  from "../assets/index";
import { LinearGradient } from 'expo-linear-gradient';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Acceuil'>) {
  return (
    <View style={[styles.container]}>
      <View style= {[styles.ellipse, styles.shadowProp]}>
        <LinearGradient colors={['#FF6CBC', '#1DE8F5']} style= {[styles.ellipse, styles.shadowProp]} locations={[0.05, 0.95]}/>
        <Image 
        source={pushup}
        style={styles.pushup} />
      </View>
      <View style={styles.header}>
        <Text style={[{fontWeight: 'bold', fontSize: RFValue(35)}, {textAlign: 'center', marginBottom: -45, top: 10}]}>Let's count your reps! </Text>
        <TouchableOpacity>
        <LetsStart
        title = "START"
        disabled={false}
        onPress={() => navigation.navigate('Utilisateur')}
      />
      </TouchableOpacity>
       {/* to be edited later */}

        <View style={[{flexDirection: 'row'}]}>
          <View style={[{bottom: -170}, {flex:1}]}>
            <Text style = {styles.notUnderlined}>Déjà inscrit ?</Text>
          </View>
          <View style={[{bottom: -170}, {flex:1}]}>
            <Pressable onPress={() => navigation.navigate('Connexion')}>
              <Text style = {styles.loginButton}>Se connecter</Text>
          </Pressable>
          </View>
        </View>
      </View>
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'black',
  },

  header: {
    width: RFValue(213),
    height: RFValue(103),
    top: 120,
    padding: RFValue(8),
    marginBottom: RFValue(20),
  },
 
  loginButton: {
    fontSize: RFValue(12),
    color: Hue.BLACK,
    alignSelf: 'flex-start',
    fontWeight: '500',
    marginLeft: RFValue(3),
    textDecorationLine: 'underline',
    bottom: 70,    
},
  notUnderlined: {
    fontSize: RFValue(12),
    alignSelf: 'flex-end',
    color: Hue.BLACK,
    fontWeight: '500',
    bottom: 70,
},
  pushup: {
    width: RFValue(347),
    height: RFValue(122),
    backgroundColor: 'transparent',
    bottom: -290,
    left: 80
    
},
  ellipse: {
    width: RFValue(488),
    height: RFValue(450),
    borderBottomLeftRadius: RFValue(230),
    borderBottomRightRadius: RFValue(230),
    borderTopLeftRadius: RFValue(0),
    borderTopRightRadius: RFValue(0),
    position: 'absolute',
    top: RFValue(-50),

    },
  shadowProp: {  
    shadowOffset: {width: -20, height: 50},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 300, 
  },
} 
);
