import { StyleSheet, View } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { theme } from '../components/App.style';

interface InscriptionProps {
  navigation: any;
}


export default function Inscription(props: InscriptionProps) {

  const inscrire = () => props.navigation.navigate('Acceuil');


  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Card style={styles.card}>
        <Card.Content >
              <TextInput label="Prénom" placeholder="Prénom"></TextInput>
              <TextInput label="Nom" placeholder='Nom'></TextInput>
              <TextInput label="Email" keyboardType="email-address"></TextInput>
              <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={styles.icon.color}/>}/>
              <TextInput label="Confirm Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={styles.icon.color}/>}/>
              <Button mode="contained" style={styles.cardButton} onPress={inscrire}>Inscrire</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(101,37,131)',
  },
  card: {
    borderRadius: 20
  },
  view: {
    width: '80%'
  },
  cardButton: {
    margin: 15,
    marginLeft: 0,
    marginRight: 0
  }, 
  icon: {
    color: theme.colors.primary
  }
});

