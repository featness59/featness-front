import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Card, TextInput, Button } from 'react-native-paper'
import { RootStackScreenProps } from '../types';


export default function Connexion({ navigation }: RootStackScreenProps<'Connexion'>) {
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Card style={styles.card}>
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address"></TextInput>
            <TextInput label="Password" secureTextEntry={true}></TextInput>
            <Button uppercase={false} style={styles.cardButton}>Forgot email/password</Button>
            <Button mode="contained" style={styles.cardButton}>Login</Button>
            <Button uppercase={true} style={styles.cardButton} onPress={() => navigation.navigate('Inscription')}>Register</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgb(101,37,131)"
  },
  card : {
    borderRadius: 20
  },

  view: {
    width: '80%'
  },

  cardButton: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0
  }

});
