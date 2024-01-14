import styles from './styles';
import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Lakukan sesuatu ketika tombol Register ditekan
    navigation.navigate('Portfolio');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/snack-icon.png')} style={styles.logo} />
      <Text style={styles.title}>Selamat Datang,</Text>
      <Text style={styles.description}>Register untuk mendapatkan akun</Text>

      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />

      <Pressable style={styles.btnRegister} onPress={handleRegister}>
        <Text style={styles.btntext}>Register</Text>
      </Pressable>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10, gap: 12 }}>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        <View>
          <Text style={{ width: 30, paddingBottom: 2, textAlign: 'center', fontWeight: 'bold' }}>Atau</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
      </View>

      <View style={styles.btnSecondaryContainer}>
        <TouchableOpacity style={styles.btnSecondary}>
          <Image source={require('../../assets/facebook.png')} style={styles.btnSecondaryImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSecondary}>
          <Image source={require('../../assets/google.png')} style={styles.btnSecondaryImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSecondary}>
          <Image source={require('../../assets/gh_white.png')} style={styles.btnSecondaryImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.btnmedsos}>
        <Text style={[styles.reset, {}]}>Sudah punya akun?</Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.reset, { color: '#0275d8' }]}> Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
