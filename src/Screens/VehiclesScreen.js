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
  { title: 'Picture 4', description: 'Description for picture 4' },
  { title: 'Picture 5', description: 'Description for picture 5' },
  { title: 'Picture 6', description: 'Description for picture 6' },
  { title: 'Picture 7', description: 'Description for picture 7' },
  { title: 'Picture 8', description: 'Description for picture 8' },
  { title: 'Picture 9', description: 'Description for picture 9' },
  { title: 'Picture 10', description: 'Description for picture 10' },
  { title: 'Picture 11', description: 'Description for picture 11' },
  { title: 'Picture 12', description: 'Description for picture 12' },
  { title: 'Picture 13', description: 'Description for picture 13' },
  
  // Add more pictures here
];

export default function VehiclesScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      
     
      <View style={{ flex: 0.1 }}>
      <PageHeader></PageHeader>
      </View>
      <View style={{ flex: 0.8 }}>
      <PictureGrid pictures={pictures} />
    </View>
      
       <View style={{ flex: 0.1 }}>
        <PageFooter></PageFooter>
       </View>
      

    </View>
    
  )
}
