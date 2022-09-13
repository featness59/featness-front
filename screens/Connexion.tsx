import { StyleSheet, View, SafeAreaView, Alert } from 'react-native';
import React from 'react';
import { Card, TextInput, Button,Text } from 'react-native-paper'
import { Formik } from 'formik';
import {loginForm} from './loginForm'
import { LinearGradient } from 'expo-linear-gradient';

interface ConnexionProps {
  navigation: any;
}

export default function Connexion(props: ConnexionProps) {

  // const login = () => props.navigation.navigate('Acceuil');
  const login = (values: any) => {
    let data = JSON.stringify(values)
    fetch('http://localhost:8000/login/login', {
      method: 'POST',
      body: data}).then((response) => {
        console.log('response:', response);
        if (response.status === 200) {
          props.navigation.navigate('Root');
        }
      });
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
                initialValues={{email: "", password: ""}}
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
                      onChangeText={handleChange('password')}
                      onFocus={() => setFieldTouched('password')}/>
                    {
                      touched.password && errors.password ? 
                      <Text style={{color: 'red', fontSize: 11}}>
                        {errors.password} 
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
