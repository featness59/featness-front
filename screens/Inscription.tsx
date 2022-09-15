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
    let obj = JSON.parse(data);
    console.log(obj.email);
    let url = 'https://featnessapi.herokuapp.com/users/'
    if (obj.hashed_password === obj.conf_pass) {
      try {
        fetch(url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: data
        }).then((response) => {
          if (response.status === 201) {
            props.navigation.navigate('Connexion');
            console.log(data);
          }
        });
      }
      catch (err) {
        console.error(err);
      }
    }
    else {
      alert('Les mots de passe ne correspondent pas');
    }
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
                  first_name: "",
                  name: "",
                  email: "",
                  hashed_password: "",
                  conf_pass: "",
                }}
                onSubmit={inscrire}
                validationSchema={registerForm}>
                {({handleSubmit, handleChange, errors, setFieldTouched, touched, values}) => (
                  <>
                    <TextInput 
                      label="Prénom" 
                      placeholder="Prénom"
                      onChangeText={handleChange('first_name')}
                      onFocus={() => setFieldTouched('first_name')}/>
                      {
                        touched.first_name ?
                        <Text style={{color: 'red', fontSize: 11}}>
                          {errors.first_name}
                        </Text> : null
                      }
                    <TextInput 
                      label="Nom" 
                      placeholder='Nom'
                      onChangeText={handleChange('name')}
                      onFocus={() => setFieldTouched('name')}/>
                      {
                        touched.name ?
                        <Text style={{color: 'red', fontSize: 11}}>
                          {errors.name}
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
                      onChangeText={handleChange('hashed_password')}
                      onFocus={() => setFieldTouched('hashed_password')}/>
                    {
                      touched.hashed_password && errors.hashed_password ? 
                      <Text style={{color: 'red', fontSize: 11}}>
                        {errors.hashed_password} 
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
                      touched.conf_pass && errors.conf_pass ? 
                      <Text style={{color: 'red', fontSize: 11}}>
                        {errors.conf_pass} 
                      </Text> 
                      : null
                    }

                    <Button 
                      mode="contained" 
                      style={styles.cardButton} 
                      onPress={handleSubmit}
                      disabled={
                        values.first_name == '' || values.name == '' || values.email == '' || values.hashed_password == '' || values.conf_pass == '' ? true : false}>
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

