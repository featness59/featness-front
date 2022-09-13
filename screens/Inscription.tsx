import { StyleSheet, View } from 'react-native';
import { Card, TextInput, Button, Text } from 'react-native-paper';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { theme } from '../components/App.style';
import { registerForm } from './register';
import { Formik } from 'formik';

interface InscriptionProps {
  navigation: any;
}


export default function Inscription(props: InscriptionProps) {

  const inscrire = (values: any) => {
    let data = JSON.stringify(values)
    fetch('http://localhost:8000/users/', {
      method: 'POST',
      body: data}).then((response) => {
        console.log('response:', response);
        if (response.status === 201) {
          props.navigation.navigate('Root');
        }
      }
    );
  };
  const connexion = () => props.navigation.navigate('Connexion');

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.view}>
        <Card style={styles.card}>
        <Card.Title title="Inscription" titleStyle={styles.cardTitle} />
        <Card.Content >
            <Formik
                initialValues={{
                  prénom: "",
                  nom: "",
                  email: "",
                  password: "",
                  conf_pass: "",
                }}
                onSubmit={inscrire}
                validationSchema={registerForm}>
                {({handleSubmit, handleChange, errors, setFieldTouched, touched, values}) => (
                  <>
                    <TextInput 
                      label="Prénom" 
                      placeholder="Prénom"
                      onChangeText={handleChange('prénom')}
                      onFocus={() => setFieldTouched('prénom')}/>
                      {
                        touched.prénom ?
                        <Text style={{color: 'red', fontSize: 11}}>
                          {errors.prénom}
                        </Text> : null
                      }
                    <TextInput 
                      label="Nom" 
                      placeholder='Nom'
                      onChangeText={handleChange('nom')}
                      onFocus={() => setFieldTouched('nom')}/>
                      {
                        touched.prénom ?
                        <Text style={{color: 'red', fontSize: 11}}>
                          {errors.nom}
                        </Text> : null
                      }
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
                      right={<TextInput.Icon 
                              name="eye-off-outline" 
                              color={styles.icon.color}/>}
                      onChangeText={handleChange('password')}
                      onFocus={() => setFieldTouched('password')}/>
                    {
                      touched.password && errors.password ? 
                      <Text style={{color: 'red', fontSize: 11}}>
                        {errors.password} 
                      </Text> 
                      : null
                    }

                    <TextInput 
                      label="Confirm Password" 
                      secureTextEntry={true}
                      right={<TextInput.Icon 
                              name="eye-off-outline" 
                              color={styles.icon.color}/>}
                      onChangeText={handleChange('conf_pass')}
                      onFocus={() => setFieldTouched('conf_pass')}/>
                    {
                      touched.password && errors.password ? 
                      <Text style={{color: 'red', fontSize: 11}}>
                        {errors.password} 
                      </Text> 
                      : null
                    }

                    <Button 
                      mode="contained" 
                      style={styles.cardButton} 
                      onPress={handleSubmit}
                      disabled={
                        values.prénom == '' || values.nom == '' || values.email == '' || values.password == '' || values.conf_pass == '' || errors.prénom || errors.nom || errors.email || errors.password || errors.conf_pass ? true : false}>
                        Inscrire
                    </Button>
                  </>
                )}
            </Formik>
            <Button 
            style={styles.loginButton}
            uppercase={false}
            onPress={connexion}>
              <Text style={styles.text}>Vous avez déjà un compte ?</Text>
            </Button>
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
  },
  cardTitle: {
    color: 'rgb(101,37,131)'
  },
  loginButton: {
    bottom: 20,
    marginLeft: 0,
    marginRight: 0,
    margin: 35,
    flex_direction: 'row',
  },
  text: {
    fontSize: 11,
    fontWeight: '500',
    textDecorationLine: 'underline',
    alignSelf: 'center'
  }
});

