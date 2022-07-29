import { StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RFValue } from 'react-native-responsive-fontsize';
import { Push, Sit, Crunch, Placeholder } from '../components/buttons/Exercise buttonsProps'
import { useState } from 'react';
import { render } from 'react-dom';


const listTab = [
  {
    status: 'Day'
  },
  {
    status: 'Month'
  },
  {
    status: 'Year'
  }
]

const data = [
  {
    name: 'Ronaldo',
    status: 'Month'
  },
  {
    name: 'Messi',
    status: 'Day'
  },
  {
    name: 'Neymar',
    status: 'Year'
  },
  {
    name: 'Kylian Mbappe',
    status: 'Month'
  },
  {
    name: 'Kaka',
    status: 'Day'
  },

]
export default function Statistique() {
  const [status, setStatus] = useState('Day')
  const setStatusFilter = status => {
    setStatus(status)
  }

  return (
    <View style={styles.container}>
      <View style={styles.exercises}>
        <Text style={[styles.text, {top: -150, left: 10, position: 'absolute'}]}>Exercices</Text>
        <View style={styles.rowOne}>
        <View style={[styles.button, {flex: 1, left: 0}]}>
            <Push
              title = 'Pushups'
              disabled = {false}
              // onPress = {() => navigation.navigate('Pushup')}
              />
          </View>
          <View style={[styles.button, {flex: 1, left: 0}]}>
            <Sit
              title = 'Situps'
              disabled = {false}
              // onPress = {() => navigation.navigate('Pushup')}
              />
          </View>
        </View>
        <View style={styles.rowTwo}>
        <View style={[styles.button, {flex: 1}]}>
            <Crunch
              title = 'Crunches'
              disabled = {false}
              // onPress = {() => navigation.navigate('Pushup')}
              />
          </View>
          <View style={[styles.button, {flex: 1, }]}>
            <Placeholder
              title = '+'
              // onPress = {() => navigation.navigate('Pushup')}
              />
          </View>
        </View>


          

      </View>
      <View style={styles.graph}>
          <Text style={[{bottom: RFValue(150), right: RFValue(70), fontWeight: 'bold'}]}>Trier par :</Text>
          <View style={[styles.dateTabs]}>
            {
              listTab.map(e => (
                <TouchableOpacity 
                style={[styles.buttonTabs, status === e.status && styles.btnTabActive]} 
                onPress={() => setStatusFilter(e.status)}>
                  <Text style= {styles.txtTab}>{e.status}</Text>
                </TouchableOpacity>
              )) 
            }
          </View>
          <FlatList
            data={data}
            keyExtractor={(e, i) => i.toString()}
          />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    top: RFValue(-270),
    marginLeft: RFValue(-20)
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  exercises: {
    flexDirection: 'column',
    right: 40,
  },
  rowOne: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'transparent',
    top: RFValue(-95),
  },
  rowTwo: {
    flexDirection: 'row',
    width: '80%',
    backgroundColor: 'transparent',
    top: RFValue(-95),
  },
  text: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    justifyContent: "center",
  },
  button: {
    top: 0,
    marginTop: RFValue(15),
    marginBottom: RFValue(15),
    backgroundColor: 'transparent',
    
  },
  dateTabs: {
    flexDirection: "row",
    marginBottom: RFValue(50),
    right: RFValue(60),
    top: RFValue(-110),
  },
  buttonTabs: {
    width: Dimensions.get('window').width / 5,
    flexDirection: "row",
    top: RFValue(-20),
    justifyContent: 'center',
    borderColor: '#EBEBEB',
    borderWidth: 0.5,
    borderRadius: 1,
    right: 15
  },

  txtTab: {
    fontSize: RFValue(16),
  },
  graph: {
    top: 80,
    right: -10,
  },
  btnTabActive: {
    backgroundColor: "#D9D9D9"
  },
});
