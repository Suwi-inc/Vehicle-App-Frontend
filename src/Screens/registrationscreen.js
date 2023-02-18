import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity ,DatePickerIOS} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logos/Logo'
import Header from '../components/Headers/Header'
import Button from '../components/Buttons/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/Buttons/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import User from '../data/user.js'

export default function RegistrationScreen({ navigation }) {
    
  const [username, setUsername] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [confpassword, setPasswordConf] = useState('');
  const [date, setDate] = useState(new Date());

  

  const onSignUpPressed = () => {
    
    const nameError = nameValidator(username.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setUsername({ ...username, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    
    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value,
      dateOfBirth: date
    };
    
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard', params: { User: newUser } }],
    })
  }
  //date
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date)
    setDate(date)
    hideDatePicker();
  };



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


    <TouchableOpacity  onPress={showDatePicker}>
          <Text style={styles.linkDate}>Date of birth</Text>
        </TouchableOpacity>
    
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
   
    

      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24, }}
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
  linkDate: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 20,
  },
})


