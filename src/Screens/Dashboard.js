import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logos/Logo'
import Header from '../components/Headers/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Buttons/Button'
import PageFooter from '../components/Footers/PageFooter'
import PageHeader from '../components/Headers/PageHeader'
import { View } from 'react-native'
import PictureGrid from '../components/Grids/PictureGrid'
const pictures = [
  { title: 'Picture 1', description: 'Description for picture 1' },
  { title: 'Picture 2', description: 'Description for picture 2' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },
  { title: 'Picture 3', description: 'Description for picture 3' },

  // Add more pictures here
];

export default function Dashboard({route, navigation }) {
  const { user } = route.params;
  return (
    <View style={{ flex: 1 }}>
      
     
      <View style={{ flex: 0.1 }}>
      <PageHeader></PageHeader>
      </View>
      <View style={{ flex: 0.80 }}>
       <Background>
      <Logo />
      <Header>Hello</Header>
     
      <Paragraph>
        welcome to the car app dashboard.
      </Paragraph>
      
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'WelcomeScreen' }],
          })
        }
      >
        Logout
      </Button>
      </Background>
       </View>
      
       <View style={{ flex: 0.1 }}>
        <PageFooter></PageFooter>
       </View>
      

    </View>
    
  )
}

