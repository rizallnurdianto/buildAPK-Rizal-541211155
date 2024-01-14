import styles from './styles';
import React from 'react';
import { 
  View, 
  ScrollView,
  Text, 
  StyleSheet, 
  Image,
  Pressable,
  Linking } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

import Projects from '../../components/projects';


export default function Home() {
        
  return(
  <ScrollView style={styles.container}>
    <Image
    source={require('../../assets/profile.png')} 
    style={styles.profile} />

    <Text style={styles.title}>Rizal Nurdianto</Text>
    <Text style={styles.paragraph}>
    Saya merupakan seseorang yang tertarik pada bidang IT khususnya untuk Software Programming seperti Website Development bagian Back-End Developer.
    </Text>

    <Pressable style={({pressed}) => [styles.btnLogin, {backgroundColor: pressed ? '#DDDDDD' : '#000000'}]} >
        <Text style={styles.btntext}>Contact Me</Text>
    </Pressable>
    <View style={{maxWidth:'100%', marginBottom: 10}}>
      <Text style={styles.title}>My Recent Project</Text>

      <Projects
      imageUri={require('../../assets/project1.png')}
      name={'Sehatku'}
      desc={'Modern Mobile'}     
      linking={'https://github.com/rizallnurdianto'}
      />
            
      <Text style={{borderColor: 'black'}}></Text>

      <Projects
      imageUri={require('../../assets/project2.png')}
      name={'Oemah Finder'}
      desc={'Mobile Developing'}
      linking={'https://github.com/rizallnurdianto'}
       />
       
    </View>
  </ScrollView>
  );
}

