import { StyleSheet, View, SafeAreaView, Alert } from 'react-native';
import React from 'react';
import { Card, TextInput, Button,Text } from 'react-native-paper'
import { Formik } from 'formik';
import {loginForm} from './loginForm'
import { LinearGradient } from 'expo-linear-gradient';

interface ConnexionProps {
  navigation: any;
}
export let token = '';
export let userName = '';

export default function Connexion(props: ConnexionProps) {

  // const login = () => props.navigation.navigate('Acceuil');
  const login = async (values: any) => {
    let data = JSON.stringify(values)
    let url = 'https://featnessapi.herokuapp.com/login/login'
    try {
      let res = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: data
      });
      let response = await res.json();
      
    
      
      if (res.status === 200) {
        props.navigation.navigate('Root');
        token = response.access_token;
        userName = response.user;
      }
    }
    catch (error) {
      console.error(error);
      
    }
  };


  const register = () => props.navigation.navigate('Inscription');
  // const register = () => props.navigation.navigate('Root');


  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Card style={styles.card}>
          <Card.Title title="Connexion" titleStyle={styles.cardTitle} />
          <Card.Content>
            <Formik
                initialValues={{email: "", hashed_password: ""}}
                onSubmit={login}
                validationSchema={loginForm}>
                {({ handleSubmit, handleChange, errors, setFieldTouched, touched, values }) => (
                  <>
                    <TextInput 
                      label="Email" 
                      keyboardType="email-address" 
                      onChangeText={handleChange('email')}
                      onFocus={() => setFieldTouched('email')}/>
                    {
                      touched.email && errors.email ? 
                      <Text style={{color: 'red', fontSize: 11}}>
                        {errors.email} 
                      </Text> 
                      : null
                    }
                    <TextInput 
                      label="Password" 
                      secureTextEntry={true} 
                      onChangeText={handleChange('hashed_password')}
                      onFocus={() => setFieldTouched('hashed_password')}/>
                    {
                      touched.hashed_password && errors.hashed_password ? 
                      <Text style={{color: 'red', fontSize: 11}}>
                        {errors.hashed_password} 
                      </Text> 
                      : null
                    }
                    <Button 
                      uppercase={false} 
                      style={styles.cardButton}
                      disabled={values.email == '' || errors.email ? true : false}>
                      Forgot email/password
                    </Button>
                    <Button 
                      onPress={handleSubmit} 
                      mode="contained" 
                      style={styles.cardButton}>
                      Login
                    </Button>
                    <Button 
                      uppercase={true} 
                      style={styles.cardButton} 
                      onPress={register}>
                      Register
                    </Button>
                  </>
              )}
            </Formik>
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
  },
  cardTitle: {
    color: "rgb(101,37,131)"
  }

});
