import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import DatePicker from 'react-native-datepicker';

export default function RegistrationScreen({ navigation }) {
    

  const [username, setUsername] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confpassword, setPasswordConf] = useState('');
  const [date, setDate] = useState(new Date())

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setUsername({ ...username, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }



  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Sign Up</Header>
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
      />
      <TextInput
        label="E-mail Address"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="next"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Confirm password"
        returnKeyType="done"
        value={confpassword.value}
        onChangeText={(text) => setPasswordConf({ value: text, error: '' })}
        error={!!confpassword.error}
        errorText={confpassword.error}
        secureTextEntry
      />
      <DatePicker
      style={{ width: '100%', marginVertical: 12,
      paddingVertical: 4}}
      date={date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2000-01-01"
      maxDate="2023-01-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 0
        }
      }}
      onDateChange={(newDate) => setDate(newDate)}
    />

      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
   
);

};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})


/* <View style={styles.container}>
   <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        />
   <TextInput
    style={styles.input}
    placeholder="Password"
    secureTextEntry
    value={password}
    onChangeText={setPassword}
   />
   <TextInput
    style={styles.input}
    placeholder="Confirm password"
    secureTextEntry
    value={confpassword}
    onChangeText={setPasswordConf}
   />
   <TextInput
    style={styles.input}
    placeholder="E-mail Address"
    value={email}
    onChangeText={setEmail}
   />
   <DatePicker
      style={{ width: 200 }}
      date={date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate="2000-01-01"
      maxDate="2023-01-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
      }}
      onDateChange={(newDate) => setDate(newDate)}
    />
   
    <Button title="Sign Up" onPress={() => {alert("registering a new user")}  } />
  </View> 

const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center',
},
input: {
width: 200,
height: 44,
padding: 10,
borderWidth: 1,
borderColor: 'black',
marginVertical: 10,
},
});*/
