import styles from './styles';
import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import UsernameInput from '../../components/usernameinput'
import PasswordInput from '../../components/passwordinput'


export default function Login({navigation}) {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/snack-icon.png')} style={styles.logo} />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.description}>Masuk untuk melanjutkan yh</Text>

      <UsernameInput />
      <PasswordInput />
            
      <Text style={styles.lupaPw}>Lupa Password ?</Text>

      <Pressable 
      style={styles.btnLogin}
      onPress={() => navigation.navigate('Portfolio')}
      >
        
        <Text style={styles.btntext}>Login</Text>
        
        
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
          gap: 12,
        }}>
            
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text
            style={{
              width: 30,
              paddingBottom: 2,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>                  
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>

<View style={styles.btnSecondaryContainer}>
            <TouchableOpacity style={styles.btnSecondary}>
              <Image source={require('../../assets/facebook.png')} style={styles.btnSecondaryImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary}>
              <Image source={require('../../assets/google.png')} style={styles.btnSecondaryImage}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSecondary}>
              <Image source={require('../../assets/gh_white.png')} style={styles.btnSecondaryImage}/>
            </TouchableOpacity>
          </View>

     
      
      <View style={styles.registerBtnGroup}>
      <Text style={styles.belumpunya}>Belum punya akun?</Text>
      <Pressable
      onPress={() => navigation.navigate('Register')}>
      <Text style={[styles.reset, {color: '#0275d8'}]}>Register</Text>
      </Pressable>
      </View>

    </View>
  );
}



