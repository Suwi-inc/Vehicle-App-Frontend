import { StatusBar } from 'expo-status-bar';
import LoginScreen from './loginscreen.js';
import RegistrationScreen from './registrationscreen.js';
import { useNavigation } from '@react-navigation/native';
import Background from '../components/Background'
import Logo from '../components/Logos/Logo'
import Header from '../components/Headers/Header'
import Button from '../components/Buttons/Button'
import Paragraph from '../components/Paragraph'
import PageFooter from '../components/Footers/PageFooter'
import {
  StyleSheet,View
} from 'react-native';
export default function WelcomeScreen () {
  const navigation = useNavigation();
  return (
    
      <View style={{ flex: 1 }}>
        <Background>
          <Logo />
          <Button
            mode="outlined"
            onPress={() => navigation.navigate('LoginScreen')}
          >
            Get Started
          </Button>
        </Background>
      </View>
    
    );
   
  }
  const styles = StyleSheet.create({
    maincontain:{
      backgroundColor: '#9372db',
      alignItems: 'center',
      justifyContent: 'flex',
  
    },})

  /*
const styles = StyleSheet.create({
  maincontain:{
    flex: 1,
    backgroundColor: '#9372db',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    position: 'absolute',
        top: 250,
        bottom: 0,
        left: 64,
        right: 64,
    justifyContent: 'flex'
  },
  btncontain: {
        position: 'absolute',
        top: 500,
        bottom: 0,
        left: 64,
        right: 64,
        justifyContent: 'flex'
  },
    img: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    imgr: {
      width: '50%',
      height: '100%',
      resizeMode: 'cover',
    },
    btn :{
      background: '#9F7DA8',
      radius: 35,

    },
    roundButton1: {
      width: 300,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 35,
      backgroundColor: '#9F7DA8',
    },
  

}
);
    <View style={styles.maincontain} >
      
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', height: 200, backgroundColor: 'goldenrod' }}>
          <Image
                style={styles.img}
                source={require('../assets/logo.png')}
            />
        
        </View>

      </View>
        
      <View style={styles.btncontain}>

      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.roundButton1}>
        <Text>Get started</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() => navigation.navigate('RegistrationScreen')}
        style={styles.roundButton1}>
        <Text>Sign Up</Text>
        </TouchableOpacity>
      
      </View>
     
    </View>
  
*/
